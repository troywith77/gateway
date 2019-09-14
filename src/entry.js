const entries = require('./entries')

module.exports = (ctx, next) => {
  const entry = entries.find(e => e.host.includes(ctx.host))

  if (entry) {
    ctx.state.entry = entry
    return next()
  }
}