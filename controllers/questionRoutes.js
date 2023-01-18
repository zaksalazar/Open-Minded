//GET request to randomly select a question//

const router = require('express').Router();
const { Sequelize } = require('sequelize');
const Question = require('../models/question');

//GET route to pull random question from questions table// '/questions/rand'
router.get('/rand',
  async (req, res) => {
    try {
      const questionData = await Question.findAll({
        order: Sequelize.literal('rand()'),
        limit: 1
      });
      // single random encounter
      console.log(questionData);
      res.status(200).json(questionData);
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

module.exports = router;
