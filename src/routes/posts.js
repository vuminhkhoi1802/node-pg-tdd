const Router = require('koa-router');
module.exports = new Router()
    .get('/posts', async ctx => {
        ctx.status = 200;
        ctx.body = {
            data: 'ok'
        };
    });