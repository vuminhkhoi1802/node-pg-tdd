process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../src');
const knex = require('../src/db/config');

describe('Routes: posts', () => {
    beforeEach(() => {
        return knex.migrate.rollback()
            .then(() => knex.migrate.latest())
            .then(() => knex.seed.run())
    });

    afterEach(() => {
        return knex.migrate.rollback();
    });

    describe('GET /posts', () => {
        test('Should return array of posts', async () => {
            const res = await chai.request(server).get('/posts');
            expect(res.status).toEqual(200);
            expect(res.body.data).toBeDefined();
        });
    });

});