const { default: mongoose } = require("mongoose");


const caruselSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 30
    },
    desc: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100
    },
    url: {
        type: String,
        required: true
    },
})

const Carusel = mongoose.model('Carusel' , caruselSchema)
exports.Carusel = Carusel

