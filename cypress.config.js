const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl:  'https://studeo.unicesumar.edu.br/#!/access',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
