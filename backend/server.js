const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const ejs = require('ejs');
const dotenv = require('dotenv');
const passport = require('passport');

dotenv.config();
const indexRouter = require('./routes');
const test1Router = require('./routes/test1');
const test2Router = require('./routes/test2');
const dataRouter = require('./routes/data');
const authRouter = require('./routes/auth');
const mapRouter = require('./routes/map');
const { sequelize } = require('./models');
const passportConfig = require('./passport');

passportConfig(); // 패스포트 설정
const app = express();
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
sequelize.sync({ force: false })
  .then(() => {
    console.log('========데이터베이스 연결 성공했습니다.=======');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'publicdir')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));
app.use(passport.initialize(),(req,res,next)=>{
  console.log("++++++ passport.initialize()");
  next();
}); // req 객체에 possprot 설정 미들웨어
app.use(passport.session(),(req,res,next)=>{
  console.log("++++++ passport.session()");
  next();
});    // req.session 객체에 passport 정보 저장 미들웨어

app.use('/', indexRouter);
app.use('/test1', test1Router);
app.use('/test2', test2Router);
app.use('/data', dataRouter);
app.use('/auth', authRouter);
app.use('/map', mapRouter);

app.use((req, res, next) => {
  const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.send(err);
  //res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});
