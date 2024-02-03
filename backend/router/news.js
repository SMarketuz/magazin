const express = require('express')
const router = express.Router()
const {New} = require('../model/new')


router.post('/create-data', async(req, res) => {
    try {
        if(!req.body.image) return res.status(400).send('malumot toliq emas')
        if(!req.body.title) return res.status(400).send('malumot toliq emas')
        if(!req.body.information) return res.status(400).send('malumot toliq emas')


        const saveNews = new New({
            image: req.body.image,
            title: req.body.title,
            information: req.body.information,
        })
    
        await saveNews.save()
        res.json({
            message: "Ma'lumot qo'shildi",
            status: true,
            date: saveNews.date
        })
    } catch (error) {
        res.status(503).json({
            massage: "Serverda kutilmaga xato iltmos ma'lumotni tekshirib ko'ring!!" ,error,
            status: false
        })
    }
})

router.get('/get-data', async(req, res) => {
    const getData = await New.find()
    res.send(getData)
})

router.get('/get-data-byId/:id', async(req, res) => {
    try {
        const getData = await New.find({_id: req.params.id})

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
    const data = await New.deleteOne({_id: req.body.id})

    res.json({
        message: "Ma'lumot o'chirildi",
        status: true
    })
})

router.post('/update-data/:id', async(req, res) => {
    try {
        const getData = await New.updateOne({_id: req.params.id} , {
            $set: {
                image: req.body.image,
                title: req.body.title,
                information: req.body.information,
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

