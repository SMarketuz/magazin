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
                file: req.file.filename,
                contentType: 'image/*'
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

router.get('/get' , async (req , res) => {
    const file = await Upload.find()
    res.send(file)
})


module.exports = router