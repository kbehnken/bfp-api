const Sequelize = require('sequelize');
require('dotenv').config;


const { DB, DB_USER, DB_PASSWORD } = process.env;
global.sequelize = new Sequelize('bfp_api', 'bfp_api', 'bfp_api', {
  dialect: 'mysql'
});

sequelize.authenticate()
.then(() => console.log("Database connected"))
.catch(err => {
    console.log("Could not connect to database", err);
});

User = sequelize.import('./models/Users.js');
Customer = sequelize.import('./models/Customers.js');
Vendor = sequelize.import('./models/Vendors.js');
Address = sequelize.import('./models/Addresses.js');
Asset = sequelize.import('./models/Assets.js');
ServiceCall = sequelize.import('./models/ServiceCalls.js');
Service = sequelize.import('./models/Services.js');
TravelEvent = sequelize.import('./models/TravelEvents.js');

sequelize.sync({alter: true});
