const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {      
      res.render('map', { title: '구글 맵 그리기' });
});

module.exports = router;