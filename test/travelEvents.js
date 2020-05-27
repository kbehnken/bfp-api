const app = require('../index.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const endpoint = 'http://localhost:4000/api/v1';
const { expect } = chai;
const chaiResponseValidator = require('chai-openapi-response-validator');
const yaml = require('js-yaml');
const fs = require('fs');

chai.use(chaiHttp);
apiSpec = yaml.safeLoad(fs.readFileSync('./api/openapi.yaml'));
chai.use(chaiResponseValidator(apiSpec));

describe('get all travel events', () => {
    it('returns a list of all travel events', done => {
        chai
        .request(endpoint)
        .get('/travelEvents')
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            res.body.should.be.an('array');
            res.body[0].should.have.property('eventTime');
            done();
        });
    });
});