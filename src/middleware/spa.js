const request = require('../lib/request')

module.exports = url => ctx => {
  ctx.body = ctx.req.pipe(request(url))
}
