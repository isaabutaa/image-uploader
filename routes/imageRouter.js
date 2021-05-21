const express = require('express');
const imageRouter = express.Router();
const Image = require('../models/image.js');

imageRouter.post('/', (req, res, next) => {
    const newImage = new Image(req.body);
    newImage.save((err, savedImage) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedImage)
    });
});

module.exports = imageRouter;