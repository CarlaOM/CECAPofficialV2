var express = require('express');
var db = require('../models/db');
var router = express.Router();
var mongoose = require('mongoose');

router
.get('/', function (req, res) {
    db.correlatives.find({}, function (err, correlative) {
       if (err) return res.status(400).send(err);

       return res.status(200).send(correlative);
    });
 })

module.exports = router;