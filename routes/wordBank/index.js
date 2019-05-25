const router = require('express').Router();
const wordRoutes = require('./wordApi');

//path - api/words
router.use('/words', wordRoutes);

module.exports = router;
