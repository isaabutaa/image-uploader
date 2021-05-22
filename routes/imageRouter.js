const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const imageRouter = express.Router();
const Image = require('../models/image.js');

imageRouter.post('/', upload.single('image'), (req, res, next) => {
    console.log(req.file)
    const newImage = new Image(req.file);
    newImage.save((err, savedImage) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedImage)
    });
});

module.exports = imageRouter;