var mongoose = require('mongoose');
const fs = require('fs')
//  настройка mongoose
var userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
       
});

const User = mongoose.model('MyUser', userSchema);


const getUsers = () => {
        return User.find()
}

const addUser = async (user) => {
    var newUser = new User(user);
    let users = await getUsers();
    return newUser.save()
}

exports.addUser = addUser;
exports.getUsers = getUsers; 
