const db = require('../db');
const mongoose = require('mongoose');

const user = new mongoose.Schema({
    email: {
        type: 'string',
        require: true,
        min: 6,
        max: 255
    },
    username: {
        type: 'string',
        require: true,
        min: 6,
        max: 255
    },
    password: {
        type: 'string',
        require: true,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = db.model('User', user);