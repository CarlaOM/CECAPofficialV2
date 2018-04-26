var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var jwt = require('jsonwebtoken');
var db = require('../models/db');
var router = express.Router();

 
router
   // .get('/', function (req, res, next) {
   // 	f.validation(res, req.body.token, next);
   //   })
   .get('/', function (req, res) {
      console.log(res)
      db.sucursal.find({}, function (err, sucursal) {
         if (err) return res.status(400).send(err);
         return res.status(200).send(sucursal);
         //console.log(res.status(200).send(users))
      });
   })
   .get('/:id', function (req, res) {
      console.log(res)
      db.sucursal.findOne({ _id: req.params.id }, function (err, sucursal) {
         if (err) return res.status(400).send(err);
         if (sucursal == null) return res.status(404).send();
         return res.status(200).send(sucursal);
      });
   });

   module.exports = router; 