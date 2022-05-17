const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    userid: {
        type: String,
        required: true, //꼭 있어야 함
        unique: true //전체 collection에서 유일해야 함(id 중복X)
    },
    job: {
        type: String,
        required: true
    }
});

const userData = mongoose.model('users, user');
module.exports = userData;