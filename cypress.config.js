const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // eslint-disable-next-line
      console.log(on, config)
      // implement node event listeners here
    },
  },
})
