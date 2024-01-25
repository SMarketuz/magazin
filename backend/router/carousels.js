const express = require('express');
const router = express.Router();
const {Carusel} = require('../model/carousel');

router.post('/post' , async (req , res) => {
    const carusel = await Carusel({
        title: req.body.title,
        desc: req.body.desc,
        url: req.body.url
    })

    await carusel.save()

    res.json({
        message: "Ma'lumot saqlandi",
        status: true
    })
})

router.get('/get' , async (req , res) => {
    const image = await Carusel.find()

    res.json({data: image})
})


router.delete('/delete/:id', async (req, res) => {
    const data = await Carusel.deleteOne({_id: req.params.id})
    res.json({
        message: "Ma'lumot O'chirildi",
        status: true
    })
});




module.exports = router