const seedQuestions = require('./question-seeds');
const seedCategories = require('./category-seeds');

const sequelize = require('../config');

const seedAll = async () => {
  await sequelize.sync({force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  await seedQuestions();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  process.exit(0);

};

seedAll();