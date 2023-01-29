//GET request to randomly select a question//

const router = require('express').Router();
const { Sequelize } = require('sequelize');
const Question = require('../models/question');

//GET route to pull random question from questions table// '/questions/rand?ID'
router.get('/rand?id', async (req, res) => {
  // const category_id = req.params.id;
  try {
    const questionData = await Question.findOne({
      order: Sequelize.literal('rand()'),
      limit: 1,
      where: {category_id: req.query.id}
    });
    const question = questionData[0].get({ plain: true });
    res.render('homepage', { question });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to recieve a random question
router.get('/rand', async (req, res) => {
  // const category_id = req.params.id;
  try {
    const questionData = await Question.findAll({
      order: Sequelize.literal('rand()'),
      limit: 1,
    });
    const question = questionData[0].get({ plain: true });
    res.render('homepage', { question });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
