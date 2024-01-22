const express = require('express');
const router = express.Router();
const {User} = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('config')

router.post('/login' , async (req , res) => {
    const user = await User.findOne({
        username: req.body.username
    });
    if(!user)
        return res.status(400).send('Username yoki parol xato!');

    const hash = await bcrypt.compare(req.body.password , user.password)
    if(!hash)
        return res.status(400).send('Username yoki parol xato!');

    const token = jwt.sign({user: user} ,'modevco')

    res.json({
        token: token,
        status: true,
        message: "Foidalanuvchi profilga kirdi"
    })
});


module.exports = router