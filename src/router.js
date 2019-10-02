module.exports = (ctx, next) => {
  const entry = ctx.state.entry

  if (entry) {
    return entry.router.routes()(ctx, next)
  }
}