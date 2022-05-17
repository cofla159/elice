const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const book = new Schema({
    bookname: String,
    author: String,
    price: Number,
    publish: Date,
});

const bookData = mongoose.model('book', book);
module.exports = bookData;