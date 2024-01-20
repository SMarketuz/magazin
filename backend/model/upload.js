const { default: mongoose } = require("mongoose");

const uploadShcema = new mongoose.Schema({
    file: String,
    contentType: String,
})

const Upload = mongoose.model('Upload' , uploadShcema)
exports.Upload = Upload