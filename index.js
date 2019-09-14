const Koa = require('koa')
const request = require('request')
const entry = require('./src/entry')

const app = new Koa()

app.use(entry)

app.use((ctx) => {
  if (ctx.state.entry) {
    ctx.body = ctx.state.entry
  }
})

app.listen(3000, () => {
  console.log('Gateway running on port 3000')
})
