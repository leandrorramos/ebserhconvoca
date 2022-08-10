module.exports = {
    apps: [
      {
        name: 'Ebconv',
        script: './.output/server/index.mjs',
        cwd:"/var/www/ebserhconvoca/",
        instances: 'max',
        env_development: {
          NODE_ENV: "development",
          NODE_PORT: 3001,
        },
        env_production: {
          NODE_ENV: "production",
          NODE_PORT: 3001,
        }        
      }
    ]
  }