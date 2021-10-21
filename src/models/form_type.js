const {
  Model,
} = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');

module.exports = (sequelize, DataTypes) => {
  class FormType extends Model {
    static associate(models) {
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
    tableName: 'form_types',
    paranoid: true,
  });
  sequelizePaginate.paginate(FormType);
  return FormType;
};
