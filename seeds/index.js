const seedQuestions = require('./question-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedQuestions();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  process.exit(0);

};

seedAll();