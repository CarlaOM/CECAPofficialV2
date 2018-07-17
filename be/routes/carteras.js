// import { BADFAMILY } from 'dns';

var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var jwt = require('jsonwebtoken');
var db = require('../models/db');
var router = express.Router();

router
    .get('/', function (req, res) {
        db.carteras.find({}, function (err, carteras) {
            if (err) return res.status(400).send(err);

            return res.status(200).send(carteras);
        });
    })

    .get('/libres/', function (req, res) {
        db.carteras.find({ active: false }, function (err, carteras) {
            if (err) return res.status(400).send(err);

            return res.status(200).send(carteras);
        });
    })

    .post('/reasignarCartera', function (req, res) {
        db.carteras.findOne({ _id: req.body.cartera }, function (err, cart) {
            if (err) return res.status(400).send(err);

            if (req.body.cartera != req.body.carteraAntigua) {

                cart.user = req.body.ejecutivo;
                cart.active = true;
                cart.save();

                db.carteras.findOne({ _id: req.body.carteraAntigua }, function (err, carter) {
                    if (err) return res.status(400).send(err);
                    carter.user = undefined;
                    carter.active = false;
                    carter.save(function (err, ca) {
                        if (err) return res.status(400).send(err);
                        return res.status(200).send(cart);
                    });



                })
            } else {
                return res.status(200).send(cart);

            }

        })

    })
    .get('/persons/:_id', function (req, res) {
        db.carteras.findOne({ _id: req.params._id }, function (err, cartera) {
            if (err) return res.status().send(err);
            if (cartera == null) return res.status(404).send();
            getPersonas(cartera);
        });
        function getPersonas(cartera) {
            db.persons.find({ carteras: cartera }, function (err, persons) {
                if (err) return res.status(400).send(err);
                if (persons == null) return res.status(404).send();
                return res.status(200).send(persons);
            });
        }
    })
    .get('/otro/:id', function (req, res) {
        db.carteras.findOne({ user: req.params.id }, function (err, cartera) {
            if (err) return res.status().send(err);
            if (cartera == null) return res.status(404).send();
            return res.status(200).send(cartera);
        });
    })
    .get('/:id', function (req, res) {
        db.carteras.findOne({ _id: req.params.id }, function (err, cartera) {
            if (err) return res.status(400).send(err);
            if (cartera == null) return res.status(404).send();
            return res.status(200).send(cartera);
        });
    })

    .put('/:id', function (req, res) {
        db.carteras.findOne({ _id: req.params.id }, function (err, cartera) {
            if (err) return res.status(400).send(err);
            if (cartera == null) return res.status(404).send();
            for (i in req.body) {
                cartera[i] = req.body[i];
            }
            cartera.save(function (err, cartera) {
                if (err) return res.status(400).send(err);
                return res.status(200).send(cartera);
            });
        });
    })
    .post('/guardar', function (req, res) {
        var cartera = new db.carteras(req.body);
        cartera.active = false;
        cartera.save();
    })
    .post('/register', function (req, res) {
        var cartera = new db.carteras(req.body);
        if (cartera.name == '') return res.status(400)
        cartera.active = false;
        cartera.save(function (err, cartera) {
            if (err) return console.log(err);
            res.status(200).send(cartera);
        })
    });
module.exports = router;
