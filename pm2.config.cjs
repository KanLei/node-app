module.exports = {
  apps: [{
    name: 'app',
    script: './build/index.js',
    instances: 1,
    merge_logs: true,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    error_file: './logs/error.log',
    combine_logs: true,
    time: true,
  }]
};

// pm2 start pm2.config.cjs --env production
