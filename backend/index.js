const express = require('express');
const app = express();
const User = require('./router/users');
const Auth = require('./router/auth')

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/MOdevcoMovies')
.then(() => {
    console.log('Mongo ishladi');
}).catch((err) => {
    console.log('Mongoda hatolik bor', err);
})

app.use(express.json())
app.use('/api/auth/user', User)
app.use('/api/auth' , Auth)



const port = process.env.PORT || 5000
app.listen(port ,() => {
    console.log(`${port} chi port ishga tushdi`);
})
