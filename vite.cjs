const { spawn } = require("child_process");

const vite = spawn(/^win/.test(process.platform) ? "npx.cmd" : "npx", ["vite"], {
  stdio: "inherit",
  shell: true,
});

vite.on("close", (code) => {
  process.exit(code);
});