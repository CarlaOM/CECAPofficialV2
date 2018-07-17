var express = require('express');
var db = require('../models/db');
var router = express.Router();

 
router 
   .get('/', function (req, res) {
        db.mkt_company.find({}, function (err, companys) {
          if (err) return res.status(400).send(err);
          return res.status(200).send(companys);
        });
     }) 
   .get('/:id', function (req, res) {
      db.mkt_company.findOne({ _id: req.params.id }, function (err, company) {
         if (err) return res.status(400).send(err);
         if (company == null) return res.status(404).send();
         return res.status(200).send(company);
      });
   });

   module.exports = router; 