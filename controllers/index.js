const router = require('express').Router();
// const homeroutes = require('./homeRoutes');
const questionRoutes = require('./questionRoutes');
router.use('/questions', questionRoutes);


module.exports = router;