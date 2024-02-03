const { default: mongoose } = require("mongoose");

const workSchema = new mongoose.Schema({
    name: String,
    startWork: Number,
    country: String,
});


const Work = mongoose.model('Work' , workSchema);
exports.Work = Work