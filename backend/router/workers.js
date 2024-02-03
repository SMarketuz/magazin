const express = require('express');
const router = express.Router()
const {Worker} = require('../model/worker')


router.post('/worker' , async(req ,res) => {

    const data = await Worker({
        name: req.body.name,
        age: req.body.age,
        work: req.body.work
    })

    await data.save()
    res.send('alll')
})

router.get('/worker' , async(req ,res) => {
    const getWorker = await Worker.find()
    .populate('work')
    res.send(getWorker)
})


module.exports = router