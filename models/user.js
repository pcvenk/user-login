var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({

    username: String,
    email: String,
    password: String,
    name: String,
    joinDate: Date,
    updatedAt: {
        type: Date,
        default: Date.now()
    }

});

var User = module.exports = mongoose.model('User', userSchema);

// Get User by ID

module.exports.getUserById = function(id, callback){

    User.findById(id, callback);

};

// Get User by username

module.exports.getUserByUsername = function(username, callback){

    User.findOne({username: username}, callback);

};

// Compare password

module.exports.comparePassword = function(comparePassword, hash, callback){

    bcrypt.compare(comparePassword, hash, function(err, isMatch){
       if(err){
           return callback(err);
       } else{
           callback(null, isMatch);
       }
    });

};

// Add User

module.exports.addUser = function(user, callback){

    User.create(user, callback);

};