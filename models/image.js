const mongoose = require('mongoose');
const Schema = mongoose.schema;

const imageSchema = new Schema({
    image: {
        type: Image,
        required: true
    }
});

module.exports = mongoose.model('Image', imageSchema);