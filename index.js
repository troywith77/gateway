const Koa = require('koa')
const request = require('request')
const entry = require('./src/entry')
const router = require('./src/router')

const app = new Koa()

app.use(entry)
app.use(router)

app.listen(3000, () => {
  console.log('Gateway running on port 3000')
})
