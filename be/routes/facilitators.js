var express = require('express');
var db = require('../models/db');
var router = express.Router();


router
    .get('/', function (req, res) {
        db.facilitators.find({}, function (err, facilitators) {
            if (err) return res.status(400).send(err);

            return res.status(200).send(facilitators);
        });
    })
    .get('/:id', function (req, res) {
        db.facilitators.findOne({ _id: req.params.id }, function (err, facilitador) {
            if (err) return res.status(400).send(err);
            if (facilitador == null) return res.status(404).send();

            return res.status(200).send(facilitador);
        });
    })
    .post('/register', function (req, res) {
        var cartera = new db.facilitators(req.body);
        if (cartera.name == '') return res.status(400)
        cartera.save(function (err, cartera) {

            if (err) return console.log(err);

            res.status(200).send(cartera);
        })

    })
    .put('/edit/:id', function (req, res) {
        db.facilitators.update({ _id: req.params.id },
            {
                $set: {
                    'name': req.body.name,
                    'job': req.body.job
                }
            }).exec(function (err, facilitador) {
                if (err) return res.status(400).send(err);

                return res.status(200).send(facilitador);
            })
    });

module.exports = router;
