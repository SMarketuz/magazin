const express = require('express');
const router = express.Router();
const {User} = require('../model/user')
const bcrypt = require('bcrypt')

router.post('/create' ,async (req , res) => {

    const validateUserName = await User.findOne({
        username: req.body.username
    })
    if(validateUserName)
        return res.status(400).send('Siz oldin ro\'yxatdan o\'tgansiz')
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(req.body.password , salt)

    const user = new User({
        name: req.body.name,
        username: req.body.username,
        password: hashPassword
    })

    await user.save()
    res.json({
        message: 'Foidalanuvchi yaratildi'
    })
})

router.get('/get-user' , async (req , res) => {
    const data = await User.find()
    .select('-password -__v')
 
    res.json({
        data: data
    })
})


module.exports = router 