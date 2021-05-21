const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const multer = require('multer');
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:207017/image-uploader', 
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    () => console.log("Connected to local image-uploader database!")
);

app.use('/new-image', require('./routes/imageRouter.js'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));