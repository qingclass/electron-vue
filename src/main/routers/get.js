const crypto = require("crypto");

var express = require('express');
var router = express.Router();

router.get('/test', (req, res, next) => {
    const cookie = req.get("Cookie") ? req.get("Cookie") : "";
    const data = {
        csrf_token: ""
    };
    res.send('123');
});