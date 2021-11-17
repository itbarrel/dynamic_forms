const {
  Model,
} = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');
const IDGenerator = require('../utils/IdGenerator');

module.exports = (sequelize, DataTypes) => {
  class Tenant extends Model {
    static associate(models) {
      Tenant.hasMany(models.Account, { foreignKey: 'tenantId' });
      Tenant.hasMany(models.FormType, { foreignKey: 'tenantId' });
      Tenant.hasMany(models.Form, { foreignKey: 'tenantId' });
    }
  }
  Tenant.init({
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
    modelName: 'Tenant',
    tableName: 'tenants',
    paranoid: true,
    // class methods
    classMethods: {
      active: async () => { },
    },
    hooks: {
      // eslint-disable-next-line no-unused-vars
      beforeValidate(tenant) {
        tenant.apikey = IDGenerator(32);
        return tenant;
      },
    },
  });
  sequelizePaginate.paginate(Tenant);
  return Tenant;
};
