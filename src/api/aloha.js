const express = require('express');
const User = require('../schema/users');

const router = express.Router();

router.get('/', (req, res) => {
    const users = User.find({}, (err, data) => {
        res.json(data);
    })
});

router.post('/', (req, res) => {
    const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    user.save((err) => {
        res.status(400).send("Error ", err);
    });
    res.send("user saved");
})

module.exports = router;