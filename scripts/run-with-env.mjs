import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";

const [, , envFileName, ...commandArgs] = process.argv;

if (!envFileName || commandArgs.length === 0) {
  console.error("Usage: node scripts/run-with-env.mjs <env-file> <command> [...args]");
  process.exit(1);
}

const root = process.cwd();
const envFilePath = path.resolve(root, envFileName);

function parseEnvFile(filePath) {
  if (!existsSync(filePath)) {
    throw new Error(`Environment file not found: ${filePath}`);
  }

  const fileContent = readFileSync(filePath, "utf8");
  const values = {};

  for (const rawLine of fileContent.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) {
      continue;
    }

    const separatorIndex = line.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith("\"") && value.endsWith("\"")) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    values[key] = value;
  }

  return values;
}

function resolveCommand(command) {
  if (command === "next") {
    const binaryName = process.platform === "win32" ? "next.cmd" : "next";
    const localBinary = path.join(root, "node_modules", ".bin", binaryName);
    if (existsSync(localBinary)) {
      return localBinary;
    }

    const sharedModulesRoot = process.env.NICSI_NODE_MODULES_ROOT;
    if (sharedModulesRoot) {
      const sharedBinary = path.join(sharedModulesRoot, "node_modules", ".bin", binaryName);
      if (existsSync(sharedBinary)) {
        return sharedBinary;
      }
    }

    return localBinary;
  }

  return command;
}

let envValues = {};

try {
  envValues = parseEnvFile(envFilePath);
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}

const [command, ...args] = commandArgs;
const child = spawn(resolveCommand(command), args, {
  cwd: root,
  stdio: "inherit",
  shell: process.platform === "win32",
  env: {
    ...process.env,
    ...envValues,
  },
});

child.on("exit", (code) => {
  process.exit(code ?? 1);
});

child.on("error", (error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
