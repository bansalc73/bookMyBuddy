process.env.NODE_ENV = 'test';

import chai from 'chai';
const expect = chai.expect;
chai.should();
import chaiHttp from 'chai-http';
import app from '../index.js';
chai.use(chaiHttp);
before((done) => {
    done();
});

after((done) => {
    done();
});

describe('Service API Tests', () => {

    it('Get Services', (done) => {
        chai.request(app)
        .get('/auth/ourServices')
        .end((err, res) => {
            res.should.have.status(200);
            if (err) console.log('Unable to login user: ', err);
            done();
        });
    });

});

  