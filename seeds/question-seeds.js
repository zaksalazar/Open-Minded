const { Question } = require('../models');

const questionData = [
  {
    question: 'Should America have free healthcare?'
  },
  {
    question: 'Was the 2020 election stollen?'
  }
];

const seedQuestions = () => Question.bulkCreate(questionData);

module.exports = seedQuestions;
