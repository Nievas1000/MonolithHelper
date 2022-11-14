const { defineConfig } = require('cypress')
const awsmobile = require('./src/aws-exports')

module.exports = defineConfig({
  env:{
    awsConfig: awsmobile.default
  },

  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
      
          return null
        },
      })
    },
  },

  defaultCommandTimeout: 10000,

  video: false
})