const { Question } = require('../models');

const questionData = [
  {
    topic: 'Should America have free healthcare?',
    category_id: 1
  },
  {
    topic: 'Do you believe in God?',
    category_id: 2
  },
  {
    topic: 'Stones or Beatles?',
    category_id: 3
  },
  {
    topic: 'Who is the greatest front man of all time?',
    category_id: 3
  },
  {
    topic: 'Who is the greatest guitar player of all time?',
    category_id: 3
  },

  {
    topic: 'What can be done to prevent mass shootings?',
    category_id: 4
  },
  {
    topic: 'What is on Chads hat in his Github profile Pic?',
    category_id: 5
  },
];
console.log(Question);
const seedQuestions = () => Question.bulkCreate(questionData);

module.exports = seedQuestions;
