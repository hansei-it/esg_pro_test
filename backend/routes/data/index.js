const express = require('express');
const router = express.Router();
const a1Router = require('./a1');
const a2Router = require('./a2');

router.get('/', (req, res, next) => {      
      res.render('viewa', { title: 'esj test' });
      //res.send('data');
});
router.post('/', (req, res, next) => {
      res.send({a:'data_a',b:"data_b"});
});

router.use('/a1', a1Router);
router.use('/a2', a2Router);

module.exports = router;