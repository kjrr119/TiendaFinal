// apollo.config.js
module.exports = {
    client: {
      service: {
        name: 'API Gateway',
        // URL to the GraphQL API
        url: 'https://inventory-appweb.herokuapp.com/',
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
      ],
    },
  }