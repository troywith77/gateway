module.exports = (ctx, next) => {
  const entry = ctx.state.entry

  if (entry) {
    return entry.routes(ctx, next)
  }
}