const Koa = require('koa')
const request = require('request')
const entry = require('./src/entry')
const router = require('./src/router')

const app = new Koa()
const PORT = 3000

app.use(entry)
app.use(router)

app.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`)
})
