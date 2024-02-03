const { default: mongoose } = require("mongoose");

const workerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    work: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Work'
    }
});


const Worker = mongoose.model('Worker' , workerSchema);
exports.Worker = Worker 