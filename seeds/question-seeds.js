const { Category } = require('../models');

const questionData = [
  {
    question: 'Was the 2020 election stollen?'
  },
  {
    question: 'Should America have free healthcare?'
  }
];

const seedQuestions = () => Category.bulkCreate(questionData);

module.exports = seedQuestions;
