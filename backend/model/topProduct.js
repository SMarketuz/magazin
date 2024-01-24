const { default: mongoose } = require("mongoose");

const topProductSchema = new mongoose.Schema({
    badge: String,
    image: String,
    name: String,
    information: String,
    originalCost: String,
    currentCost: String,
    rate: String
});


const TopProduct = mongoose.model('TopProduct' , topProductSchema);
exports.TopProduct = TopProduct