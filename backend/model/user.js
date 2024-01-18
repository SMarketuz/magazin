const { default: mongoose } = require("mongoose");




const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String
});


const User = mongoose.model('User' , userSchema);
exports.User = User