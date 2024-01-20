const express = require('express');
const app = express();
const antpoint = require('./server/antpoints')
const cors = require('cors')
const mongoose = require('mongoose');

require('./server/antpoints')(app)
require('./server/db')()
app.use(cors({
    origin: '*',
    credentials: true,
    methods: ["GET" , "POST" , "PUT" , "DELETE"]
}))

const port = process.env.PORT || 5000
app.listen(port ,() => {
    console.log(`${port} chi port ishga tushdi`);
})
