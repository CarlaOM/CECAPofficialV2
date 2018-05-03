var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var jwt = require('jsonwebtoken');
var db = require('../models/db');
var router = express.Router();

 
router
.get('/', function (req, res) {
    db.facilitators.find({}, function (err, facilitators) {
       if (err) return res.status(400).send(err);

       return res.status(200).send(facilitators);
    });
 })
.post('/register', function (req, res) {
    var cartera=new db.facilitators(req.body);
   //  console.log(cartera);
    if(cartera.name=='')return res.status(400)
    cartera.save(function(err,cartera){

        if(err) return console.log(err);

        res.status(200).send(cartera);
    })
  
 });
 
 module.exports = router;
