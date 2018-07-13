var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var jwt = require('jsonwebtoken');
var db = require('../models/db');
var router = express.Router();

router
    .get('/', function (req, res) {
        db.mkt_listExtra.find({}, function (err, universidades) {
        if (err) return res.status(400).send(err);

        return res.status(200).send(universidades);
        });
     })
     .get('/getCarrera/:id',function(req,res){
         db.mkt_listExtra.findOne({},function(err,carreras){
             if(err) return res.status(400).send(err);
            //  console.log(carreras)
            for(let unacarrera of carreras.carrera){
                if(unacarrera._id==req.params.id){
                    console.log(unacarrera);
                    return res.status(200).send(unacarrera);
                }
            }
         })
     })
     .get('/getUniversidad/:id',function(req,res){
        db.mkt_listExtra.findOne({},function(err,carreras){
            if(err) return res.status(400).send(err);
           //  console.log(carreras)
           for(let unaUniversidad of carreras.university){
               if(unaUniversidad._id==req.params.id){
                   console.log(unaUniversidad);
                   return res.status(200).send(unaUniversidad);
               }
           }
        })
    })
    .post('/add/university', function (req, res) {
        console.log(req.body);
        // db.mkt_listExtra.find({}, function (err, lista) {
        //     if (err) return res.status(400).send();
        //     console.log(lista)
        //     update(lista[0]._id);
        // })
        // function update(id) {
        //     console.log(req.body.university, req.body.carrera)
        //     db.mkt_listExtra.update({ _id: id }, {
        //         $push: {
        //             'university': req.body.university,
        //             'carrera': req.body.carrera
        //         }
        //     }, function (err, lista) {
        //         if (err) return res.status(400).send(err);
        //         return res.status(200).send(lista);
        //     })
        // }
        let uni = {}
        // let car = {}
        uni.nombre = req.body.university;
        // car.nombre = req.body.carrera;
        console.log(uni.name)
        
        db.mkt_listExtra.findOne({}, function (err, lista) {
            if (err) { return res.status(400).send(err); }
            console.log(lista)
                lista.university.push(uni),
                // lista.carrera.push(car)

            lista.save(function (err, lista) {
                if (err) { return res.status(400).send(err); }
                return res.status(200).send(lista);
            });
        })

    })
    .post('/add/carrera', function (req, res) {
        console.log(req.body);
        // db.mkt_listExtra.find({}, function (err, lista) {
        //     if (err) return res.status(400).send();
        //     console.log(lista)
        //     update(lista[0]._id);
        // })
        // function update(id) {
        //     console.log(req.body.university, req.body.carrera)
        //     db.mkt_listExtra.update({ _id: id }, {
        //         $push: {
        //             'university': req.body.university,
        //             'carrera': req.body.carrera
        //         }
        //     }, function (err, lista) {
        //         if (err) return res.status(400).send(err);
        //         return res.status(200).send(lista);
        //     })
        // }
        let car = {}
        car.nombre = req.body.carrera;
        
        db.mkt_listExtra.findOne({}, function (err, lista) {
            if (err) { return res.status(400).send(err); }
            console.log(lista)
                lista.carrera.push(car)

            lista.save(function (err, lista) {
                if (err) { return res.status(400).send(err); }
                return res.status(200).send(lista);
            });
        })

    })


module.exports = router;