'use strict';
require('dotenv').config();

const path = require('path');
const http = require('http');
const massive = require('massive');

const oas3Tools = require('oas3-tools');
const serverPort = 4000;

const { CONNECTION_STRING } = process.env;
massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('db connected');
});

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

