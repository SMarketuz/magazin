const express = require('express');
const router = express.Router();
const TopProduct = require('../model/topProduct');


router.post('create', async(req, res) => {
    const topProduct = await TopProduct.findOne({
        name: req.body.name
    })
    if(topProduct)
       return res.status(400).send('bunday product mavjud')


    if(!req.body.image) return res.status(400).send('malumot toliq emas')
    if(!req.body.badge) return res.status(400).send('malumot toliq emas')
    if(!req.body.name) return res.status(400).send('malumot toliq emas')
    if(!req.body.information) return res.status(400).send('malumot toliq emas')
    if(!req.body.originalCost) return res.status(400).send('malumot toliq emas')
    if(!req.body.currentCost) return res.status(400).send('malumot toliq emas')
    if(!req.body.rate) return res.status(400).send('malumot toliq emas')


    const saveTopProduct = new topProduct({
        badge: req.body.badge,
        image: req.body.image,
        name: req.body.name,
        information: req.body.information,
        originalCost: req.body.originalCost,
        currentCost: req.body.currentCost,
        rate: req.body.rate
    })

    await saveTopProduct.save()
    res.json({
        message: 'topProduct  qoshildi',
        status: true
    })
})


router.get('get', async(req, res) => {
    const getData = await TopProduct.find()
    res.send(getData)
})

module.exports = router