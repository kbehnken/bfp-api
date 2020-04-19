'use strict';

require('dotenv').config();
const Sequelize = require('sequelize');
let {DataTypes} = require('sequelize');

const path = require('path');
const http = require('http');
const massive = require('massive');

const oas3Tools = require('oas3-tools');
const serverPort = 4000;

const { DB, DB_USER, DB_PASSWORD } = process.env;
global.sequelize = new Sequelize(DB, DB_USER, DB_PASSWORD, {
  dialect: 'mysql'
});

sequelize.authenticate()
.then(() => console.log("Database connected"))
.catch(err => {
    console.log("Could not connect to database", err);
});

global.User = sequelize.import('./models/Users.js');
global.Customer = sequelize.import('./models/Customers.js');
global.Vendor = sequelize.import('./models/Vendors.js');
global.Address = sequelize.import('./models/Addresses.js');
global.Asset = sequelize.import('./models/Assets.js');
global.ServiceCall = sequelize.import('./models/ServiceCalls.js');
global.Service = sequelize.import('./models/Services.js');
global.TravelEvent = sequelize.import('./models/TravelEvents.js');

Customer.hasMany(Address);
Address.belongsTo(Customer);
Address.belongsTo(Vendor);
Asset.belongsToMany(Address, {through: 'assets_to_addresses'});
ServiceCall.belongsTo(Address, {onDelete: 'RESTRICT'});
ServiceCall.belongsTo(User, {onDelete: 'RESTRICT'});
TravelEvent.belongsTo(Address, {onDelete: 'RESTRICT'});
TravelEvent.belongsTo(User, {onDelete: 'RESTRICT'});

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

