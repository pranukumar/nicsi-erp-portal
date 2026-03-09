import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const baseDir = path.join(root, "home");
const htmlFiles = fs
  .readdirSync(baseDir)
  .filter((entry) => entry.endsWith(".html"))
  .map((entry) => path.join(baseDir, entry));

const assetPattern = /\b(?:href|src)="\/(?!\/)([^"#? ]+)/g;
const disallowedPatterns = [
  { label: "api", pattern: /(?:^|["'(])\/api(?:\/|["')?])/g },
  { label: "legacy-home", pattern: /(?:^|["'(])\/home(?:\/|["')?])/g },
  { label: "legacy-nicsi", pattern: /(?:^|["'(])\/nicsi(?:\/|["')?])/g },
];

function resolveStaticPath(urlPath) {
  const cleanPath = urlPath.replace(/^\/+/, "");
  const candidates = [
    path.join(baseDir, cleanPath),
    path.join(baseDir, `${cleanPath}.html`),
    path.join(baseDir, cleanPath, "index.html"),
  ];

  return candidates.find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
}

function getDisallowedHits(content) {
  return disallowedPatterns.flatMap(({ label, pattern }) => {
    const matches = content.match(pattern) ?? [];
    return matches.map((match) => ({ label, match }));
  });
}

const referencedUrls = new Set();
const issues = [];

for (const filePath of htmlFiles) {
  const content = fs.readFileSync(filePath, "utf8");
  const relativeName = path.relative(baseDir, filePath);

  for (const hit of getDisallowedHits(content)) {
    issues.push(`${relativeName}: disallowed ${hit.label} reference ${hit.match}`);
  }

  for (const match of content.matchAll(assetPattern)) {
    referencedUrls.add(`/${match[1]}`);
  }
}

for (const urlPath of [...referencedUrls].sort()) {
  if (!resolveStaticPath(urlPath)) {
    issues.push(`missing internal target: ${urlPath}`);
  }
}

if (issues.length > 0) {
  console.error(`Static audit failed with ${issues.length} issue(s).`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      htmlFiles: htmlFiles.length,
      internalReferences: referencedUrls.size,
      issues: 0,
    },
    null,
    2,
  ),
);
