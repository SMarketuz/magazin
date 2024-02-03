const express = require('express');
const router = express.Router()
const {Work} = require('../model/work')


router.post('/all' , async(req ,res) => {

    const data = await Work({
        name: req.body.name,
        startWork: req.body.startWork,
        country: req.body.country
    })

    await data.save()
    res.send('alll')
})


module.exports = router