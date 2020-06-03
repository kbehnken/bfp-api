'use strict';

require('dotenv').config();
const Sequelize = require('sequelize');
let {DataTypes} = require('sequelize');

const path = require('path');
const http = require('http');

const oas3Tools = require('oas3-tools');
const serverPort = 4000;

const { DB, DB_USER, DB_PASSWORD } = process.env;
global.sequelize = new Sequelize(DB, DB_USER, DB_PASSWORD, {
//   logging: console.log,
  dialect: 'mysql'
});

sequelize.authenticate()
.then(() => console.log("Database connected"))
.catch(err => {
    console.log("Could not connect to database", err);
});
require('./models/models.js');

// swaggerRouter configuration
var options = {
    controllers: path.join(__dirname, './controllers')
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
expressAppConfig.addValidator();
var app = expressAppConfig.getApp();

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

