const app = require('../index.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const endpoint = 'http://localhost:4000/api/v1';
const { expect } = chai;
const should = chai.should();

chai.use(chaiHttp);

describe('get all addresses', () => {
    it('returns a list of all addresses', done => {
        chai
        .request(endpoint)
        .get('/addresses')
        .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200);
            res.body.should.be.an('array');
            res.body[0].should.have.property('streetAddress')
            done();
        });
    });
});