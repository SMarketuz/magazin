const express = require('express');
const router = express.Router();
const {TopProduct} = require('../model/topProduct');
router.post('/create-data', async(req, res) => {

    try {
        if(!req.body.image) return res.status(400).send('malumot toliq emas')
        if(!req.body.badge) return res.status(400).send('malumot toliq emas')
        if(!req.body.name) return res.status(400).send('malumot toliq emas')
        if(!req.body.informationMin) return res.status(400).send('malumot toliq emas')
        if(!req.body.informationMax) return res.status(400).send('malumot toliq emas')
        if(!req.body.originalCost) return res.status(400).send('malumot toliq emas')
        if(!req.body.currentCost) return res.status(400).send('malumot toliq emas')
    
        const saveTopProduct = new TopProduct({
            badge: req.body.badge,
            image: req.body.image,
            name: req.body.name,
            informationMin: req.body.information,
            informationMax: req.body.information,
            originalCost: req.body.originalCost,
            currentCost: req.body.currentCost,
            rate: req.body.rate
        })
    
        await saveTopProduct.save()
        res.json({
            message: "Ma'lumot qo'shildi",
            status: true,
            date: saveTopProduct.date
        })

    }catch(err) {
        res.status(503).json({
            massage: "Serverda kutilmaga xato iltmos ma'lumotni tekshirib ko'ring!!" ,err,
            status: false
        })
    }
})

router.get('/get-data', async(req, res) => {
    const getData = await TopProduct.find()
    res.send(getData)
})

router.get('/get-data-byId/:id', async(req, res) => {
    try {
        const getData = await TopProduct.find({_id: req.params.id})

        res.json({
            data: getData
        })

    } catch(err) {
        res.status(503).json({
            massage: "Serverda kutilmaga xato iltmos ma'lumotni tekshirib ko'ring!!"
        })
    }
})

router.put('/update-data/:id', async(req, res) => {
    try {
        const getData = await TopProduct.updateOne({_id: req.params.id} , {
            $set: {
                badge: req.body.badge,
                image: req.body.image,
                name: req.body.name,
                informationMin: req.body.informationMin,
                informationMax: req.body.informationMax,
                originalCost: req.body.originalCost,
                currentCost: req.body.currentCost,
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