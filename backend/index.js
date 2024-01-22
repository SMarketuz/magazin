const express = require('express');
const app = express();
const cors = require('cors')

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
