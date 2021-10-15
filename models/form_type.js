const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FormType extends Model {
    static associate(models) {
      FormType.belongsTo(models.account);
    }
  }
  FormType.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    multiple: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'FormType',
    tableName: 'form_types',
    paranoid: true,
  });

  return FormType;
};
