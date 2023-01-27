const router = require('express').Router();
// const {Question, User} = require('../models');

router.get ('/',(req,res) => {
  res.render('sign-in');
});


// This route renders the login page, which has been completed for you
router.get('/', (req, res) => {
  //if users has an existing valid session, they will be redirected to the homepage
  if (req.session.loggedIn) {
    res.redirect('/questions/rand');
    return;
  }
  //render the login view otherwise, refer to login.handlebars this is the "body"
  res.render('sign-in');
});

// This route renders the signup page, which has been completed for you
router.get('/signup', (req, res) => {
  //if users has an existing valid session, they will be redirected to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  //render the login view otherwise, refer to signup.handlebars
  res.render('signup');
});

router.get('/categories', (req, res) => {
  res.render('categories');
});


module.exports = router;