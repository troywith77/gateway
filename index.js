const Koa = require('koa')
const request = require('request')

const app = new Koa()

app.use(async (ctx) => {
  ctx.body = request('https://xuangubao.cn')
})

app.listen(3000, () => {
  console.log('Gateway running on port 3000')
})
