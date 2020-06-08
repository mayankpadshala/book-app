const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookModel = new Schema({
    title: {type: String, required:true},
    author: {type: String, required:true},
    genre: {type: String, required:true},
    read: {type: Boolean, default: false}
});

module.exports = mongoose.model('Book', bookModel);