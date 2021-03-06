var express = require('express');
var db = require('../models/db');
var router = express.Router();

 
router
   .get('/', function (req, res) {
    db.roles.find({}, function (err, roles) {
       if (err) return res.status(400).send(err);

       return res.status(200).send(roles);
    });
     }) 
   .get('/:id', function (req, res) {
      db.roles.findOne({ _id: req.params.id }, function (err, rol) {
         if (err) return res.status(400).send(err);
         if (rol == null) return res.status(404).send();
         return res.status(200).send(rol);
      });
   });

   module.exports = router; 