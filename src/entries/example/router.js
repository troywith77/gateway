const router = require('koa-router')()
const spa = require('../../middleware/spa')

const BASE = 'https://static-alpha.jianyuweb.com'

router.get('/', ctx => ctx.body = 'Hello Gateway')
router.get('/*', ctx => spa(BASE)(ctx))

module.exports = router
