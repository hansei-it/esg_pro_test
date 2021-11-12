const express = require('express');
const router = express.Router();
const dataRouter = require('./data');

router.get('/', (req, res, next) => {
      res.send('Root');
});

//router.use('/data', dataRouter);

module.exports = router;
