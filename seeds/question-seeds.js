const { Question } = require('../models');

const questionData = [
  {
    topic: 'Should America have free healthcare?',
    category_id: 1,
  },
  {
    topic: 'Was the 2020 election stollen?',
    category_id: 1,
  },
  {
    topic: 'Do you believe in God?',
    category_id: 2,
  },
  {
    topic: 'Pro vax or no vax?',
    category_id: 2,
  },
  {
    topic: 'Stones or Beatles?',
    category_id: 3,
  }
];
console.log(Question);
const seedQuestions = () => Question.bulkCreate(questionData);

module.exports = seedQuestions;
