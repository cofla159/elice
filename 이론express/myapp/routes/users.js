var express = require('express');
const userSchema = require('../models/newuser');
const bcrypt = require('bcrypt');
const {body, validationResult} = require('express-validator');
const { token } =require('morgan'); 
const session = require('express-session');
const parseurl = require('parseurl');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('blog/auth');
});

router.get('/cookie', (req, res) => {
  res.cookie('haema', 'princess');
  res.send('set cookies');
})

router.use(
  session({
    secret: "12345",
    resave: false,
    saveUninitialized: true
  })
); //users.js->router 구간에서만 사용

router.use(function (req, res, next) {
  if (!req.session.views) {
    req.session.views = {}
  }

  // get the url pathname
  var pathname = parseurl(req).pathname

  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

  next()
})
router.get('/foo', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
})

router.post('/signup', body('email').isEmail().withMessage('아이디는 email 형태를 따라야 합니다.'), 
body('password').isLength({min:5}).withMessage('비밀번호는 최소 5자'), 
async (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({
      errors: errors.array()
    })
  }
  const findresult = await userSchema.findOne({email: email})

  if(!findresult){
    //중복가입, 오류
    res.status(401).json({msg: '이미 가입된 계정입니다'});
  }else {
    //가입 완료
    const salt = bcrypt.genSaltSync(10);
    const bcryptpw = bcrypt.hashSync(password, salt);

    userSchema.create({
      email: email,
      password: bcryptpw
    }).then(result => {
      res.status(200).json(result);
    });
  };
});

router.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const userdata = await userSchema.findOne({email: email}).exec();

  if(!userdata){
    return res.status(401).json({msg: '가입되지 않은 계정입니다'})
  }else {
    const pwMatch = bcrypt.compareSync(password, userdata.password);
    if(pwMatch){
      res.status(200).json({msg: 'OK'});
    }else {
      res.status(401).json({msg: '비밀번호가 일치하지 않습니다'});
    }
  }
});

router.get('/login', (req, res) => {
  res.render('blog/login');
});

module.exports = router;