const express = require('express');
const router = express.Router();
const {Accessory} = require('../model/accessory');
router.post('/create-data', async(req, res) => {

    try {
        if(!req.body.image) return res.status(400).send('malumot toliq emas')
        if(!req.body.name) return res.status(400).send('malumot toliq emas')
        if(!req.body.informationMin) return res.status(400).send('malumot toliq emas')
        if(!req.body.informationMax) return res.status(400).send('malumot toliq emas')
        if(!req.body.cost) return res.status(400).send('malumot toliq emas')
        if(!req.body.rate) return res.status(400).send('malumot toliq emas')
    
        const saveAccessory = new Accessory({
            image: req.body.image,
            name: req.body.name,
            informationMin: req.body.informationMin,
            informationMax: req.body.informationMax,
            cost: req.body.cost,
            rate: req.body.rate
        })
    
        await saveAccessory.save()
        res.json({
            message: "Ma'lumot qo'shildi",
            status: true,
            date: saveAccessory.date
        })

    }catch(err) {
        res.status(503).json({
            massage: "Serverda kutilmaga xato iltmos ma'lumotni tekshirib ko'ring!!" ,err,
            status: false
        })
    }
})

router.get('/get-data', async(req, res) => {
    const getData = await Accessory.find()
    res.send(getData)
})

router.get('/get-data-byId/:id', async(req, res) => {
    try {
        const getData = await Accessory.find({_id: req.params.id})

        res.json({
            data: getData
        })

    } catch(err) {
        res.status(503).json({
            massage: "Serverda kutilmaga xato iltmos ma'lumotni tekshirib ko'ring!!"
        })
    }
})

router.post('/delete-data' , async (req , res) => {
    const data = await Accessory.deleteOne({_id: req.body.id})

    res.json({
        message: "Ma'lumot o'chirildi",
        status: true
    })
})

router.post('/update-data/:id', async(req, res) => {
    try {
        const getData = await Accessory.updateOne({_id: req.params.id} , {
            $set: {
                badge: req.body.badge,
                image: req.body.image,
                name: req.body.name,
                informationMin: req.body.informationMin,
                informationMax: req.body.informationMax,
                cost: req.body.cost,
                rate: req.body.rate
            }
        })

        res.json({
            message: "Ma'lumot o'zgartirildi",
            status: true,
        })

    } catch(err) {
        res.status(503).json({
            massage: "Serverda kutilmaga xato iltmos ma'lumotni tekshirib ko'ring!!" ,err,
            status: false
        })
    }
})

module.exports = router