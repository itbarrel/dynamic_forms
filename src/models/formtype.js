const {
  Model,
} = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');

module.exports = (sequelize, DataTypes) => {
  class FormType extends Model {
    static associate(models) {
      FormType.belongsTo(models.Tenant, { foreignKey: 'tenantId' });
      FormType.belongsTo(models.Account, { foreignKey: 'accountId' });
      FormType.hasMany(models.Form, { foreignKey: 'formTypeId' });
    }
  }
  FormType.init({
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      index: true,
    },
    description: DataTypes.TEXT,
    multiple: DataTypes.BOOLEAN,
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
    modelName: 'FormType',
    tableName: 'formTypes',
    paranoid: true,
    hooks: {
      beforeUpdate: async (formType) => {
        const toChange = await formType.previous()
        if (toChange.multiple === true) {
          const forms = await formType.countForms();
          if (forms > 1) {
            throw new Error('Cannot Change the multiple of FormType');
          }
        }
      },
    },
  });
  sequelizePaginate.paginate(FormType);
  return FormType;
};
