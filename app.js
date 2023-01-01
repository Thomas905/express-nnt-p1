const express = require('express');
const cors = require('cors')
const app = express();
const router = require('./router/router');
const db = require('./database/db');

app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', router);

db.connectToDb();


module.exports = app;