const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config(process.cwd(), '.env');

router.use('/test', function(req, res, next) {
    res.send('Hello world de test');
});

module.exports = router