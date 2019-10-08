const request = require('../lib/request')
const constants = require('../utils/constants')

module.exports = (base, { assets = constants.assets } = {}) => ctx => {
  const url = `${base}${ctx.url}${assets.test(ctx.url) ? '' : '/index.html'}`
  ctx.body = ctx.req.pipe(request(url))
}
