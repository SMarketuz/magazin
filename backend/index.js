mongoose.connect('mongodb://127.0.0.1:27017/MOdevcoMovies')
.then(() => {
    console.log('Mongo ishladi');
}).catch((err) => {
    console.log('Mongoda hatolik bor', err);
})

const express = require('express')
const app = express()
const User = require('./router/users')



app.use('/user', User)




const port = process.env.PORT || 5000
app.listen(port ,() => {
    console.log(`${port} chi port ishga tushdi`);
})
