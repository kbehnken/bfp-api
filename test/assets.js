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

describe('get all assets', () => {
    it('returns a list of all assets', done => {
        chai
        .request(endpoint)
        .get('/assets')
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            res.body[0].should.be.an('object');
            expect(res.body[0].assetId).to.be.a('number');
            expect(res.body[0].make).to.be.string;
            expect(res.body).to.be.an('array');
            expect(res).to.satisfyApiSpec;
            done();
        });
    });
});