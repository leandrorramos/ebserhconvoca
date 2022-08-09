module.exports = {
    apps: [
      {
        name: 'NuxtEbserhConv',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }