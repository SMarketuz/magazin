const express = require('express');
const app = express();
const antpoint = require('./server/antpoints')
const cors = require('cors')
const mongoose = require('mongoose');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers","*")
    res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers")
    next()
})
app.use(cors({
    origin: '*',
    credentials: true,
    methods: ["GET" , "POST" , "PUT" , "DELETE"]
}))
require('./server/antpoints')(app)
require('./server/db')()


const port = process.env.PORT || 5000
app.listen(port ,() => {
    console.log(`${port} chi port ishga tushdi`);
})
