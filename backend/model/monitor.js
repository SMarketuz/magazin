const { default: mongoose } = require("mongoose");

const monitorSchema = new mongoose.Schema({
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


const Monitor = mongoose.model('Monitor' , monitorSchema);
exports.Monitor = Monitor