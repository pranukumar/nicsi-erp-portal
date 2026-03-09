import { spawn } from "node:child_process";

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: "inherit",
      shell: false,
      ...options,
    });

    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${command} ${args.join(" ")} failed with exit code ${code ?? "unknown"}.`));
    });

    child.on("error", reject);
  });
}

async function main() {
  await run(process.execPath, ["scripts/build-static-audit.mjs"], {
    env: {
      ...process.env,
    },
  });

  await run(process.execPath, ["scripts/serve-home-static.mjs"], {
    env: {
      ...process.env,
    },
  });
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
