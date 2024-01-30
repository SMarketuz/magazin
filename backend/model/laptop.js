const { default: mongoose } = require("mongoose");

const laptopSchema = new mongoose.Schema({
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


const Laptop = mongoose.model('Laptop' , laptopSchema);
exports.Laptop = Laptop