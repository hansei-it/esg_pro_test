const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
      res.render('viewa',{title:'ejs data a1'});
      //res.send('/data/a1');
});
router.post('/', (req, res, next) => {
      res.send({a:'data_a1_a',b:"data_a1_b"});
});
module.exports = router;