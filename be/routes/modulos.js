var express = require('express');
var db = require('../models/db');
var router = express.Router();
var mongoose = require('mongoose');

router
   .get('/', function (req, res) {
      db.modulos.find({}, function (err, modulos) {
         if (err) return res.status(400).send(err);

         return res.status(200).send(modulos);
      });
   })

   .get('/:id', function (req, res) {
      db.modulos.findOne({ _id: req.params.id }, function (err, modulo) {
         if (err) return res.status(400).send(err);
         if (modulo == null) return res.status(404).send();

         return res.status(200).send(modulo);
      });
   })

   .post('/', function (req, res) {
      var modulo = new db.modulos(req.body);
      db.modulos.findOne({name: req.body.name}, function(err, existName){
            if(existName == null){
                if (modulo.number == '' || modulo.name == '' || modulo.content == []) return res.status(400).send();
                modulo.save(function (err, modulo) {
                    if (err) return res.status(400).send(err);
                    return res.status(201).send(modulo);
                 });
            }else{
                if (err) return res.status(400).send(err);
                console.log('El nombre del Modulo ya existe');
            }
      });
   }) 
   .put('/:id', function (req, res) {
      db.modulos.findOne({ _id: req.params.id }, function (err, modulo) {
         if (err) return res.status(400).send(err);
         if (modulo == null) return res.status(404).send();

         for (i in req.body) {
            modulo[i] = req.body[i];
         }
         modulo.save(function (err, modulo) {
            if (err) return res.status(400).send(err);

            return res.status(200).send(modulo);
         });
      });
   })
   .delete('/:id', function (req, res) {
      db.modulos.remove({ _id: req.params.id }, function (err, modulo) {
         if (err) return res.status(400).send(err);

         return res.status(200).send(modulo);
      });
   });

module.exports = router;