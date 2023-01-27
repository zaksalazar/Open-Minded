const Category = require('./category');
const Question = require('./question');
const User = require('./user');
Question.belongsTo(Category);

Category.hasMany(Question);


module.exports = {Question, User, Category};