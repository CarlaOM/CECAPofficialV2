var express = require('express');
var db = require('../models/db');
var router = express.Router();

router
   .get('/', function (req, res) {
      db.mkt_programs.find({}, function (err, programs) {
         if (err) return res.status(400).send(err);

         return res.status(200).send(programs);
      });
   })

   .get('/:id', function (req, res) {
      db.mkt_programs.findOne({ _id: req.params.id }, function (err, program) {
         if (err) return res.status(400).send(err);
         if (program == null) return res.status(404).send();
         return res.status(200).send(program);
      });
   })
   .post('/add', function(req, res){
        var program = new db.mkt_programs(req.body);
        program.save(function (err, program) {
            if (err){return res.status(400).send(err);} 
            return res.status(200).send(program);
        });
   })
   .post('/', function (req, res) {
      var program = new db.mkt_programs(req.body);
      db.mkt_programs.findOne({name: req.body.name}, function(err, exiteNom){
            if(exiteNom == null){
                if (program.name == '' || program.details == '' || program.modules == []) return res.status(400).send();
                program.save(function (err, program) {
                    if (err) return res.status(400).send(err);
                    return res.status(201).send(program);
                 });
            }else{
                if (err) return res.status(400).send(err);
            }
      });
   }) 
    .put('/:id', function (req, res) { 
      db.mkt_programs.findOne({ _id: req.params.id }, function (err, program) {
         if (err) return res.status(400).send(err);
         if (program == null) return res.status(404).send();
         for (i in req.body) {
            program[i] = req.body[i];
         }
         program.save(function (err, program) {
            if (err) return res.status(400).send(err);
            return res.status(200).send(program);
         });
      });
   })
   .put('/edit/:id', function(req, res){
     db.mkt_programs.update({_id: req.params.id},
        {
            $set: {'name': req.body.name,
                   'details': req.body.details}
        }).exec(function(err, off){
            if (err) return res.status(400).send(err);
      })
   })
   .delete('/:id', function (req, res) {
      db.mkt_programs.remove({ _id: req.params.id }, function (err, program) {
         if (err) return res.status(400).send(err);
         return res.status(200).send(program);
      });
   });

module.exports = router;