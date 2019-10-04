const router = require('koa-router')()
const spa = require('../middleware/spa')

router.get('/', ctx => ctx.body = 'Hello Gateway')
router.get('/xgb', ctx => spa('https://xuangubao.cn')(ctx))
router.get('/activity/:key', ctx => ctx.body = `activity-${ctx.params.key}`)

module.exports = {
  host: [
    'example.xuangubao.cn',
    'example.xuangubao.cn:3000',
  ],
  router,
}
