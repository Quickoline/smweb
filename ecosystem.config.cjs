/** PM2: from repo root — `npm ci && npm run build && pm2 start ecosystem.config.cjs` */
module.exports = {
  apps: [
    {
      name: "smweb",
      cwd: __dirname,
      script: "npm",
      args: "run start",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
