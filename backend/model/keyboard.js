const { default: mongoose } = require("mongoose");

const keyboardSchema = new mongoose.Schema({
    image: String,
    name: String,
    informationMin: String,
    informationMax: String,
    cost: String,
    rate: String,
    date: {
        type: Date,
        default: Date.now
    }
});


const Keyboard = mongoose.model('Keyboard' , keyboardSchema);
exports.Keyboard = Keyboard