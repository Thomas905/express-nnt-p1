const express = require('express');
const router = express.Router();

router.use('/test', function(req, res, next) {
    res.send('Hello world de test');
});

module.exports = router