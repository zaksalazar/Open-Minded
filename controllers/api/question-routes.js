const { request } = require('express');
const sequelize = require('../../config');
const Question = require('../../models/question');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll({
      order: sequelize.random()
    });
    request.statusCode(200).json(questions);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;