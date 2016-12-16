var LocalStrategy = require('passport-local');
var User = require('../models/user');
var bcrypt = require('bcryptjs');

module.exports = function(passport){

    //creating session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.getUserById(id, function(err, user) {
            done(err, user);
        });
    });

};
