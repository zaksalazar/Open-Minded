const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Politics',
  },
  {
    category_name: 'Culture',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Current Events',
  },
  {
    category_name: 'Demo',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;