const { Question } = require('../models');

const questionData = [
  {
    topic: 'Should America have free healthcare?'
  },
  {
    topic: 'Was the 2020 election stollen?'
  },
  {
    topic: 'Do you believe in God?'
  },
  {
    topic: 'Pro vax or no vax?'
  },
  {
    topic: 'Stones or Beatles?'
  }
];
console.log(Question);
const seedQuestions = () => Question.bulkCreate(questionData);

module.exports = seedQuestions;
