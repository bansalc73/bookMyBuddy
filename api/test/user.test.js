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


describe('User API Tests', () => {

    it('Signin user', (done) => {
        const task = {
            email: "user@gmail.com",
            password: "Test123@1"
        }
        // console.log(task);
        chai.request(app)
        .post('/auth/login')
        .send(task)
        .end((err, res) => {
            res.should.have.status(200);
            if (err) console.log('Unable to login user: ', err);
            done();
        });
    });

});

  