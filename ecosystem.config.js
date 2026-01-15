module.exports = {
  apps: [
    {
      name: 'directpay',
      script: 'serve',
      args: '-s dist -l 3000 --no-clipboard',
      env: {
        PM2_SERVE_PATH: './dist',
        PM2_SERVE_PORT: 3000,
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: '/index.html'
      },
      watch: false,
      instances: 1,
      autorestart: true,
      max_memory_restart: '500M'
    }
  ]
};
