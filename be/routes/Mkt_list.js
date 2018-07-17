var express = require('express');
var db = require('../models/db');
var router = express.Router();

router
    .get('/', function (req, res) {
        db.mkt_listExtra.find({}, function (err, universidades) {
            if (err) return res.status(400).send(err);

            return res.status(200).send(universidades);
        });
    })
    .get('/getCarrera/:id', function (req, res) {
        db.mkt_listExtra.findOne({}, function (err, carreras) {
            if (err) return res.status(400).send(err);
            for (let unacarrera of carreras.carrera) {
                if (unacarrera._id == req.params.id) {
                    return res.status(200).send(unacarrera);
                }
            }
        })
    })
    .get('/getUniversidad/:id', function (req, res) {
        db.mkt_listExtra.findOne({}, function (err, carreras) {
            if (err) return res.status(400).send(err);
            //  console.log(carreras)
            for (let unaUniversidad of carreras.university) {
                if (unaUniversidad._id == req.params.id) {
                    console.log(unaUniversidad);
                    return res.status(200).send(unaUniversidad);
                }
            }
        })
    })
    .post('/add/university', function (req, res) {
        let uni = {}
        uni.nombre = req.body.university;
        db.mkt_listExtra.findOne({}, { _id: 1 }, function (err, lista) {
            if (err) { return res.status(400).send(err); }
            if (lista == null) {
                lista = new db.mkt_listExtra()
                lista.university.push(uni);
                lista.save(function (err, li) {
                    if (err) return res.status(400).send(err);
                    return res.status(200).send(li);
                })
            } else {
                db.mkt_listExtra.update({ _id: lista._id }, {
                    $push: { university: uni }
                }, function (err, list) {
                    if (err) return res.status(400).send(err);
                    return res.status(200).send(list);
                })
            }
        })

    })
    .post('/add/carrera', function (req, res) {
        let car = {}
        car.nombre = req.body.carrera;

        db.mkt_listExtra.findOne({}, function (err, lista) {
            if (err) { return res.status(400).send(err); }
            if (lista == null) {
                lista = new db.mkt_listExtra()
                lista.carrera.push(car);
                lista.save(function (err, li) {
                    if (err) return res.status(400).send(err);
                    return res.status(200).send(li);
                })
            } else {
                db.mkt_listExtra.update({ _id: lista._id }, {
                    $push: { carrera: car }
                }, function (err, list) {
                    if (err) return res.status(400).send(err);
                    return res.status(200).send(list);
                })
            }
        })

    })


module.exports = router;