const { default: mongoose } = require("mongoose");

const uploadShcema = new mongoose.Schema({
    file: {
        data: Buffer,
        contentType: String,
    }
})

const Upload = mongoose.model('Upload' , uploadShcema)
exports.Upload = Upload