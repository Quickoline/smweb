/** PM2: from repo root — `npm ci && npm run build && pm2 start ecosystem.config.cjs` */
const path = require("path");

module.exports = {
  apps: [
    {
      name: "smweb",
      cwd: __dirname,
      // Direct `next start` is more reliable than `npm run start` under PM2 (env/cwd).
      script: path.join(__dirname, "node_modules/next/dist/bin/next"),
      args: "start -p 3001",
      interpreter: "node",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: "3001",
      },
    },
  ],
};
