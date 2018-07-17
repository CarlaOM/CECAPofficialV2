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
    .post('/add', function (req, res) {
        var correlative = new db.correlatives(req.body);
        correlative.save(function (err, correlative) {
            if (err) { return res.status(400).send(err); }
            return res.status(200).send(correlative);
        });
    })
    .post('/fechas', function (req, res) {
        let fechaIni = new Date(req.body.fechaIni);
        let fechaFin = new Date(req.body.fechaFin);
        // db.events.find({ date_start: { $gt: d } }, { name: 1, description: 1, date_start: 1, modulars: 1, inscriptions: 1, total: 1, programs: 1 }, function (err, events) {
        db.correlatives.find({ year: { $gt: fechaIni, $lt: fechaFin } }, function (err, correlativo) {
            if (err) { return res.status(400).send(err); }
            return res.status(200).send(correlativo);
        })

    })


module.exports = router;