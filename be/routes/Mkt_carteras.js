var express = require('express');
var mongoose = require('mongoose');
var db = require('../models/db');
var router = express.Router();

router
    .get('/', function (req, res) {
        db.mkt_carteras.find({}, function (err, carteras) {
            if (err) return res.status(400).send(err);
            return res.status(200).send(carteras);
        });
    })
    .get('/libres/', function (req, res) {
        db.mkt_carteras.find({ active: false }, function (err, carteras) {
            if (err) return res.status(400).send(err);
            return res.status(200).send(carteras);
        });
    })
    .post('/reasignarCartera', function (req, res) {
        db.mkt_carteras.findOne({ _id: req.body.cartera }, function (err, cart) {
            if (err) return res.status(400).send(err);
            if (req.body.cartera != req.body.carteraAntigua) {
                db.mkt_carteras.update({ _id: cart._id }, {
                    $set: {
                        user: req.body.ejecutivo,
                        active: true
                    }
                }, function (err, car) {
                    if (err) return res.status(400).send(err);
                    db.mkt_carteras.update({ _id: req.body.carteraAntigua }, {
                        user: undefined,
                        active: false
                    }, function (err, c) {
                        if (err) return res.status(400).send(err);
                        return res.status(400).send(car);
                    })
                })
            } else return res.status(200).send(cart);
        })
    })
    .get('/persons/:id', function (req, res) {
        db.mkt_carteras.aggregate([
            { $match: { _id: mongoose.Types.ObjectId(req.params.id) } },
            {
                $lookup:
                {
                    from: "mkt_persons",
                    localField: "_id",
                    foreignField: "carteras",
                    as: "persons"
                }
            }
        ]).exec(function (err, carteras) {
            if (err) return res.status(404).send(err);
            if (carteras == null) return res.status(404).send();
            return res.status(200).send(carteras[0].persons);
        });
    })
    .get('/otro/:id', function (req, res) {
        db.mkt_carteras.findOne({ user: req.params.id }, function (err, cartera) {
            if (err) return res.status().send(err);
            if (cartera == null) return res.status(404).send();
            return res.status(200).send(cartera);
        });
    })
    .get('/:id', function (req, res) {
        db.mkt_carteras.findOne({ _id: req.params.id }, function (err, cartera) {
            if (err) return res.status(400).send(err);
            if (cartera == null) return res.status(404).send();
            return res.status(200).send(cartera);
        });
    })
    .put('/:id', function (req, res) {
        db.mkt_carteras.update({ _id: req.params.id }, {
            $set: { name: req.body.name }
        }, function (err, cartera) {
            if (err) return res.status(400).send(err);
            return res.status(200).send(cartera);
        })
    })
    .put('/ejec/:id', function (req, res) {
        console.log('estamos aca')
        db.mkt_carteras.update({ _id: req.params.id }, {
            $set: {
                active: req.body.active,
                user: req.body.user
            }
        }, function (err, cartera) {
            if (err) return res.status(400).send(err);
            return res.status(200).send(cartera);
        })
    })
    .post('/register', function (req, res) {
        var cartera = new db.mkt_carteras(req.body);
        if (cartera.name == '') return res.status(400)
        cartera.active = false;
        cartera.save(function (err, cartera) {
            if (err) return console.log(err);
            res.status(200).send(cartera);
        })
    });
module.exports = router;
