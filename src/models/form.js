const {
  Model,
} = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');
const { downcase, removeChars } = require('../utils');

module.exports = (sequelize, DataTypes) => {
  class Form extends Model {
    static associate(models) {
      Form.belongsTo(models.Tenant, { foreignKey: 'tenantId' });
      Form.belongsTo(models.Account, { foreignKey: 'accountId' });
      Form.belongsTo(models.FormType, { foreignKey: 'formTypeId' });
    }
  }
  Form.init({
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    identifier: {
      type: DataTypes.STRING,
    },
    fields: {
      type: DataTypes.JSON,
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
      allowNull: false,
      type: DataTypes.DATE,
    },
    deletedAt: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  },
    {
      sequelize,
      modelName: 'Form',
      tableName: 'forms',
      paranoid: true,
      hooks: {
        beforeCreate: async (form) => {
          form.identifier = removeChars(downcase(form.name));
          if (form.formTypeId) {
            const FormType = await sequelize.models.FormType.findOne({
              where: {
                id: form.formTypeId,
              },
            });
            const forms = await FormType.countForms();
            if (FormType.multiple === false && forms >= 1) {
              throw new Error('Cannot Make Multiple Forms');
            }
          }
        },
        beforeUpdate: async (form) => {
          const toChange = await form.previous()
          if (toChange.formTypeId) {
            const FormType = await sequelize.models.FormType.findOne({
              where: {
                id: toChange.formTypeId,
              },
            });
            const forms = await FormType.countForms();
            if (FormType.multiple === false && forms >= 1) {
              throw new Error('Cannot Change the FormType');
            }
          }
        },
      },
    });
  sequelizePaginate.paginate(Form);
  return Form;
};
