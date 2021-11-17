const {
  Model,
} = require('sequelize');

const sequelizePaginate = require('sequelize-paginate');
const IDGenerator = require('../utils/IdGenerator');

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {
      Account.belongsTo(models.Tenant, { foreignKey: 'tenantId' });
      Account.hasMany(models.FormType, { foreignKey: 'accountId' });
      Account.hasMany(models.Form, { foreignKey: 'accountId' });
    }
  }

  Account.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    apikey: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    public: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    deletedAt: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Account',
    tableName: 'accounts',
    paranoid: true,
    // class methods
    classMethods: {
      active: async () => { },
    },
    hooks: {
      // eslint-disable-next-line no-unused-vars
      beforeValidate(account) {
        // eslint-disable-next-line no-param-reassign
        account.apikey = IDGenerator(32);
        return account;
      },
      afterCreate: async (account) => {
        await account.createFormType({ name: 'Multiple', multiple: true, tenantId: account.tenantId });
        await account.createFormType({ name: 'Not-Multiple', multiple: false, tenantId: account.tenantId });
        return account;
      },
    },
  });
  sequelizePaginate.paginate(Account);
  return Account;
};
