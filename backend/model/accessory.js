const { default: mongoose } = require("mongoose");

const accessorySchema = new mongoose.Schema({
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


const Accessory = mongoose.model('Accessory' , accessorySchema);
exports.Accessory = Accessory