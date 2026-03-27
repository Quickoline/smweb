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
        // 3001 avoids clashes with other tools defaulting to 3000 (EADDRINUSE on :::3000).
        PORT: 3001,
      },
    },
  ],
};
