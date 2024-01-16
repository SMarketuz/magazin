const mongoose = require('mongoose')



const authShema = new mongoose.Schema({
    name: {
        required: true,
        type:String,
    },
    username: {
        required: true,
        type:String,
    },
    password: {
        required: true,
        type:Number,
        min: 8
    }
})

const Auth = mongoose.model('Auth', authShema)

module.exports = Auth