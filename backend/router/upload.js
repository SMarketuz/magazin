const express = require('express');
const router = express.Router();
const multer = require('multer');
const {Upload} = require('../model/upload')


const Storage = multer.diskStorage({
    destination: 'uploads',
    filename: function(req , file , cb) {
        cb(null ,file.originalname)
    }
})

const upload = multer({storage:Storage}).single('file')
router.post('/upload',async (req , res) => {
    upload(req , res , (err) => {
        if(err) {
            console.log('File saqlanmadi');
        } else {
            const im = new Upload({
                file: {
                    data: req.file.filename,
                    contentType: 'image/jpg'|| 'image/png'
                }
            })

            im.save()
            .then(() => {
                res.json({
                    message: "File saqlandi"
                })
            })
            .catch(() => {
                res.json({
                    message: "File saqlanmadi"
                })
            })
        }
    })
})


module.exports = router