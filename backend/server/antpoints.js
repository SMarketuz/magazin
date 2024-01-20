const express = require('express');
const User = require('../router/users');
const Auth = require('../router/auth')
const Upload = require('../router/upload')
const File = require('../router/upload')
const Carusel = require('../router/carousels')
module.exports = function(app) {
    app.use(express.json())
    app.use('/api/auth/user', User)
    app.use('/api/auth' , Auth)
    app.use('/api/file' , Upload)
    app.use('/api/file' ,File)
    app.use('/api/carusel/image' , Carusel)
}