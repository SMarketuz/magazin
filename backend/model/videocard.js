const { default: mongoose } = require("mongoose");

const videoCardSchema = new mongoose.Schema({
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


const VideoCard = mongoose.model('VideoCard' , videoCardSchema);
exports.VideoCard = VideoCard