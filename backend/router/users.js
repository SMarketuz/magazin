const express = require('express')
const router = express.Router()
const Auth = require('../model/user')




router.post('/new', async (req, res) => {
    const user = await Auth.findOne({username: req.body.username})
    if(user) return res.status(400).send('bunday user mavjud')
    if(!req.body.name) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.username) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.password) 
        return res.status(400).send("Malumot to'liq emas")


    let createUser = await new Auth({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    await createUser.save()
    res.send(createUser)
})

router.get('/get', async (req, res) => {
    const getData = await Auth.find()
    res.send(getData)
})



module.exports = router