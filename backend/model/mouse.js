const { default: mongoose } = require("mongoose");

const mouseSchema = new mongoose.Schema({
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


const Mouse = mongoose.model('Mouse' , mouseSchema);
exports.Mouse = Mouse