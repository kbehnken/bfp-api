const Sequelize = require('sequelize');
const sjs = require('sequelize-json-schema');
require('dotenv').config;

model = process.argv[2]
console.log(model);
const { DB, DB_USER, DB_PASSWORD } = process.env;
global.sequelize = new Sequelize('bfp_api', 'bfp_api', 'bfp_api', {
  dialect: 'mysql'
});
require('./models/models.js');
console.log(sjs.getModelSchema(global[model]));
