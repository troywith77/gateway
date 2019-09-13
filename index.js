const Koa = require('koa')
const request = require('request')

const app = new Koa()

app.use(async (ctx) => {
  if (ctx.request.hostname === 'example.xuangubao.cn') {
    ctx.body = request('https://xuangubao.cn')
    return
  }
  ctx.body = 'Something wrong happened'
})

app.listen(3000, () => {
  console.log('Gateway running on port 3000')
})
