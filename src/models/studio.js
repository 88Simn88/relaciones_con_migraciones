'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      studio.hasMany(models.movie)
    }
  }
  studio.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'studio',
  });
  return studio;
};