const app = require('../index.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const endpoint = 'http://localhost:4000/api/v1';
const { expect } = chai;

chai.use(chaiHttp);

describe('get all services', () => {
    it('returns a list of all services', done => {
        chai
        .request(endpoint)
        .get('/services')
        .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200);
            res.body.should.be.an('array');
            res.body[0].should.have.property('name')
            done();
        });
    });
});