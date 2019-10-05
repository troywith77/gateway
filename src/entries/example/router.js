const router = require('koa-router')()
const spa = require('../../middleware/spa')

const BASE = 'https://activity.xuangubao.cn'

router.get('/', ctx => ctx.body = 'Hello Gateway')
router.get('/:key', ctx => spa(BASE)(ctx))
router.get('/*', ctx => spa(BASE)(ctx))

module.exports = router
