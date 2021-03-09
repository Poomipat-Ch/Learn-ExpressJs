const express = require('express');

const aloha = require('./aloha');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'API - 👋🌎🌎🌎'
    });
});

router.use('/aloha', aloha);

module.exports = router;
