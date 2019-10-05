const request = require('../lib/request')

module.exports = url => ctx => {
  console.log(`${url}${ctx.url}`)
  ctx.body = ctx.req.pipe(request(`${url}${ctx.url}`))
}
