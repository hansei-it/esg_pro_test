const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
      res.render('viewb', {title:'ejs data a2', data:'Hello a2'});
      //res.send('/data/a2');
});
router.post('/', (req, res, next) => {
      res.send({a:'data_a2_a',b:"data_a2_b"});
});
module.exports = router;