var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login', {title: 'Please Log In'});
});

router.get('/register', function (req, res, next) {
    res.render('register', {title: 'Sign Up'});
});

router.get('/dashboard', function (req, res, next) {
    res.render('dashboard', {title: 'Dashboard'});
});

router.post('/register', function(req, res){

    var name = req.body.name;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var password2 = req.body.password;

    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('email', 'Email must be a valid email address').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords need to match').equals(req.body.password);

    var errors = req.validationErrors;

    if(errors){
        res.render('register', {
            errors: errors
        });
    }else{
        passport.authenticate('local-register'), {

            successRedirect: '/dashboard',
            failureRedirect: '/',
            failureFlash: true,
            successFlash: 'Welcome,'+req.user

        })(req, res, next);
    }

});

module.exports = router;
