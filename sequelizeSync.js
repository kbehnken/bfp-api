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

//const User = require('./models/user.js').User;
Customer = sequelize.import('./models/customers.js');
sequelize.sync({alter: true});
