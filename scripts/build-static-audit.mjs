import { existsSync, mkdirSync, renameSync, rmSync } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";

const root = process.cwd();
const backupRoot = path.join(root, `.static-audit-disabled-${process.pid}`);
const finalBuildOutput = path.join(root, "home");

const routePathsToDisable = [
  "app/api",
  "app/admin",
  "app/department",
  "app/vendor",
  "app/login",
  "app/rss.xml",
  "app/sitemap.xml",
];

function ensureDir(dirPath) {
  mkdirSync(dirPath, { recursive: true });
}

function prepareBuildOutput() {
  rmSync(finalBuildOutput, { recursive: true, force: true });
}

function disableOfflineUnsafeRoutes() {
  rmSync(backupRoot, { recursive: true, force: true });
  ensureDir(backupRoot);

  routePathsToDisable.forEach((relativePath) => {
    const sourcePath = path.join(root, relativePath);
    if (!existsSync(sourcePath)) {
      return;
    }

    const backupPath = path.join(backupRoot, relativePath);
    ensureDir(path.dirname(backupPath));
    renameSync(sourcePath, backupPath);
  });
}

function restoreOfflineUnsafeRoutes() {
  routePathsToDisable.forEach((relativePath) => {
    const backupPath = path.join(backupRoot, relativePath);
    if (!existsSync(backupPath)) {
      return;
    }

    const restorePath = path.join(root, relativePath);
    ensureDir(path.dirname(restorePath));
    renameSync(backupPath, restorePath);
  });

  rmSync(backupRoot, { recursive: true, force: true });
}

function runBuild() {
  return new Promise((resolve, reject) => {
    const command = process.execPath;
    const args = ["scripts/run-with-env.mjs", ".env.production", "next", "build", "--webpack"];

    const child = spawn(command, args, {
      cwd: root,
      stdio: "inherit",
      env: {
        ...process.env,
        NICSI_STATIC_AUDIT: "1",
        NICSI_STATIC_AUDIT_BASE_PATH: "",
        NEXT_PUBLIC_STATIC_AUDIT: "1",
        NEXT_PUBLIC_STATIC_AUDIT_BASE_PATH: "",
      },
    });

    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`Static audit build failed with exit code ${code ?? "unknown"}.`));
    });
    child.on("error", reject);
  });
}

async function run() {
  try {
    prepareBuildOutput();
    disableOfflineUnsafeRoutes();
    await runBuild();
  } finally {
    restoreOfflineUnsafeRoutes();
  }
}

run().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
