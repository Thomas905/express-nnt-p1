const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log('Connection to MongoDB failed');
    });
};

module.exports = {
    connectToDb
};