// Define models
global.User = sequelize.import('./Users.js');
global.Account = sequelize.import('./Accounts.js');
global.Address = sequelize.import('./Addresses.js');
global.Asset = sequelize.import('./Assets.js');
global.ServiceCall = sequelize.import('./ServiceCalls.js');
global.Service = sequelize.import('./Services.js');
global.TravelEvent = sequelize.import('./TravelEvents.js');

// Define associations
Account.hasMany(Address, {
    foreignKey: {
        name: 'accountId',
        field: 'account_id'
    }
});
Address.belongsTo(Account, {
    foreignKey: {
        name: 'accountId',
        field: 'account_id'
    }
});
Asset.belongsToMany(Address, {
    through: 'assets_to_addresses'
});
Address.belongsToMany(Asset, {
    through: 'assets_to_addresses'
});
Address.hasMany(ServiceCall, {
    foreignKey: {
        name: 'addressId',
        field: 'address_id'
    }
});
ServiceCall.belongsTo(Address, {
    foreignKey: {
        name: 'addressId',
        field: 'address_id'
    },
    onDelete: 'RESTRICT'
});
ServiceCall.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        field: 'user_id'
    },
    onDelete: 'RESTRICT'
});
ServiceCall.belongsToMany(Service, {
    through: 'services_to_service_calls'
});
Service.belongsToMany(ServiceCall, {
    through: 'services_to_service_calls'
});
TravelEvent.belongsTo(Address, {
    foreignKey: {
        name: 'addressId',
        field: 'address_id'
    }, 
    onDelete: 'RESTRICT'
});
TravelEvent.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        field: 'user_id'
    },
onDelete: 'RESTRICT'});
