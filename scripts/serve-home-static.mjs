import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const port = Number(process.env.PORT ?? "3000");
const host = process.env.HOST ?? "127.0.0.1";
const baseDir = path.join(process.cwd(), "home");

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".webp": "image/webp",
};

function resolveFile(urlPath) {
  if (urlPath === "/" || urlPath === "") {
    return path.join(baseDir, "index.html");
  }

  const cleanPath = urlPath.replace(/^\/+/, "");
  const candidates = [
    path.join(baseDir, cleanPath),
    path.join(baseDir, `${cleanPath}.html`),
    path.join(baseDir, cleanPath, "index.html"),
  ];

  return candidates.find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile())
    ?? path.join(baseDir, "index.html");
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url ?? "/").split("?")[0] ?? "/");

  if (urlPath === "/home") {
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
    return;
  }

  if (urlPath.startsWith("/home/")) {
    const redirectPath = urlPath.slice("/home".length) || "/";
    res.statusCode = 302;
    res.setHeader("Location", redirectPath);
    res.end();
    return;
  }

  const filePath = resolveFile(urlPath);
  if (!filePath || !fs.existsSync(filePath)) {
    res.statusCode = 404;
    res.end("Not found");
    return;
  }

  res.statusCode = 200;
  res.setHeader(
    "Content-Type",
    mimeTypes[path.extname(filePath).toLowerCase()] ?? "application/octet-stream",
  );

  fs.createReadStream(filePath).pipe(res);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE" || error.code === "EACCES") {
    console.error(
      `Port ${port} is already in use. Stop the existing process or run with a different port, for example PORT=8080 npm run serve:static`,
    );
    process.exit(1);
  }

  console.error(error);
  process.exit(1);
});

server.listen(port, host, () => {
  console.log(`Static site server listening on http://${host}:${port}/`);
});
