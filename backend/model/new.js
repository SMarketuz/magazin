const { default: mongoose } = require("mongoose");

const newsSchema = new mongoose.Schema({
    image: String,
    title: String,
    information: String,
    date: {
        type: Date,
        default: Date.now
    }
});


const New = mongoose.model('New' , newsSchema);
exports.New = New