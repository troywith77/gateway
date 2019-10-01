
module.exports = {
  host: [
    'example.xuangubao.cn',
    'example.xuangubao.cn:3000',
  ],
  routes: (ctx, next) => {
    ctx.body = 'Hello Gateway'
  },
}
