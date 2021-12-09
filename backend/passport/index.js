const passport = require('passport');
const local = require('./localStrategy');
const User = require('../models/user');

module.exports = () => {
  console.log("Init:", 1); // passport 초기화
  passport.count = 0;
  passport.serializeUser((user, done) => {  
    console.log("Login:", 6, ' serializeUser');
    done(null, user.id); //session에 등록할 정보
  });

  passport.deserializeUser((id, done) => {//로그인 시 요청마다 호출
    console.log("request:", 1, ' deserializeUser');
    User.findOne({ where: { id } })
      .then(user => done(null, user))//req에 저장하고 싶은 내용 저장:req.user 저장 
      .catch(err => done(err));
  });

  local();
};
