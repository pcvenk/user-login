var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login', {title: 'Please Log In'});
});

router.get('/register', function (req, res, next) {
    res.render('register', {title: 'Sign Up'});
});

module.exports = router;
