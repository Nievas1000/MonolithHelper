const { defineConfig } = require('cypress')
const awsmobile = require('./src/aws-exports')

module.exports = defineConfig({
  env:{
    cognito_username: 'lautynievas09@gmail.com',
    cognito_password: '12345678',
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