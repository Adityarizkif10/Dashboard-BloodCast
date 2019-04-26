var express = require('express');
var router = express.Router();
var firebase = require('firebase');

/* GET home page. */
router.get('/login', function(req, res, next) {
    res.render('auth/login');
});

router.post('/do-login', function(req, res, next){

});

router.get('/register', function(req, res, next){
    res.render('auth/register');
});

router.post('/do-register', function(req, res, next){

});


module.exports = router;
