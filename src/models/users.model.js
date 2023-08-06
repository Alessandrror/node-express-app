const mongoose = require('mongoose');

// Configuration for the user Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

// Creating the model User using the configurated Schema
const user = mongoose.model('User', userSchema);

module.exports = user;