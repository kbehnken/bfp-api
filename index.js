'use strict';

const CONNECTION_STRING="postgres://fzqswhpbjgkttw:4d53d8109e37bb0502fcab8870ca48ecd4181398692a76694bda65b4326f0ed1@ec2-174-129-33-75.compute-1.amazonaws.com:5432/dvf792sv236dr?ssl=true"
const SESSION_SECRET="wertwertgfhlkjoiuertsdfgsdgfopuiqwertzxcv"

var path = require('path');
var http = require('http');
var massive = require('massive');

var oas3Tools = require('oas3-tools');
var serverPort = 4000;

massive(CONNECTION_STRING).then(db => {
  global.db = db;
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

