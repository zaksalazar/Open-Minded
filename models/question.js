const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Question extends Model {}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    topic: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    // Prevent sequelize from renaming the table
    freezeTableName: true,
    underscored: true,
    modelName: 'question'
  }
);

module.exports = Question;
