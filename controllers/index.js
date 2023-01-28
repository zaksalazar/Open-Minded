const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const questionRoutes = require('./questionRoutes');

router.use('/questions', questionRoutes);
router.use('/', homeRoutes);
router.use('/category', homeRoutes);


module.exports = router;