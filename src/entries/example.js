const router = require('koa-router')()
const spa = require('../middleware/spa')

router.get('/', ctx => ctx.body = 'Hello Gateway')
router.get('/hello', ctx => ctx.body = 'Hello World')
router.get('/xgb', ctx => spa('https://xuangubao.cn')(ctx))

module.exports = {
  host: [
    'example.xuangubao.cn',
    'example.xuangubao.cn:3000',
  ],
  router,
}
