// eslint-disable-next-line @typescript-eslint/no-require-imports
const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(
    '/coman',
    proxy({
      target: 'https://aiutest.punan.xyz',
      changeOrigin: true
    })
  )
}
