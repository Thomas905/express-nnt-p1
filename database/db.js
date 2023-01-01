import app from "../app.js";
import mongoose from 'mongoose';

const connectToDb = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log('Connection to MongoDB failed');
    });
};


export default {connectToDb};