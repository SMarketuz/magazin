const { default: mongoose } = require("mongoose");

const topProductSchema = new mongoose.Schema({
    badge: String,
    image: String,
    name: String,
    informationMin: String,
    informationMax: String,
    originalCost: String,
    currentCost: String,
    rate: String,
    date: {
        type: Date,
        default: Date.now
    }
});


const TopProduct = mongoose.model('TopProduct' , topProductSchema);
exports.TopProduct = TopProduct