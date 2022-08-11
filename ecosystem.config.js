module.exports = {
    apps: [
      {
        name: 'Ebconv',
        port: 3002,
        script: './.output/server/index.mjs',
        cwd:"/var/www/ebserhconvoca/",
        instances: 'max',
        env_development: {
          NODE_ENV: "development",
        },
        env_production: {
          NODE_ENV: "production",
        },
        exec_mode: 'cluster'
      }
    ]
  }