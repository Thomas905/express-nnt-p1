const express = require('express');
const cors = require('cors')
const app = express();
const router = require('./router/router');

app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', router);

module.exports = app;