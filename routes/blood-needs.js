var express = require('express');
var router = express.Router();
var firebase = require('firebase');

/* GET home page. */
router.get('/register', function(req, res, next) {
    res.render('blood-needs/register');
});


module.exports = router;
