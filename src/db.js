const mongoose = require('mongoose');
const { URL_DB_CONNECTION } = require('./config.js');

const connectDB = async () => {
    try {
        await mongoose.connect(URL_DB_CONNECTION);
        console.log('>>> DB is connected');
    } catch (err) {
        console.log(err);
    };
};

module.exports = connectDB;