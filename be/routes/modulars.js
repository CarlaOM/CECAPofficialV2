var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var jwt = require('jsonwebtoken');
var db = require('../models/db');
var router = express.Router();

router
    .get('/', function (req, res) {
        db.modulars.find({}, function (err, modulars) {
        if (err) return res.status(400).send(err);
        return res.status(200).send(modulars);
        });
    })
   .post('/asistencia',function(req,res){
    console.log(req.body);
    let personId=req.body.personId;
    let eventId=req.body.eventId;
    let moduleId=req.body.moduleId;
        // db.modulars.find({modules:moduleId},function(err,allModulars){

        //     for(let oneModular of allModulars){
                
        //     }
        // })
        db.modulars.findOne({persons:personId,events:eventId,modules:moduleId},function(err,modular){

            if(err)return res.status(400).send(err);
            console.log(modular)
            modular.assist=true;

            modular.save();
            db.lists.findOne({person:personId,events:eventId},function(err,list){
                if(err)return res.status(400).send(err);
                if(list!=null){
                    list.assist=true;
                    list.save(function(err,lis){

                        if(err)return res.status(400).send(err);
                        return res.status(200).send(lis);
                    });

                }else{
                    console.log('lista vacia');
                    return res.status(200).send('lista vacia');
                }          
            })
        })
   })
   .post('/getAsistencia',function(req,res){
    let personId=req.body.personId;
    let eventId=req.body.eventId;
    let moduleId=req.body.moduleId;
        db.modulars.findOne({persons:personId,events:eventId,modules:moduleId},function(err,modular){
            if(err)return res.status(400).send(err);
            return res.status(200).send(modular);
        })
   })
   .post('/printCertificate',function(req,res){
        console.log('HOLA CARLA');
        console.log(req.body);
        let personId=req.body.personId;        
        let profileId=req.body.profileId;
        let moduleId=req.body.moduleId;
            // db.modulars.findOne({persons:personId, profile:profileId, modules:moduleId},function(err,modular){
    
            //     if(err)return res.status(400).send(err);
            //     console.log('impreso ahougyuviugvuybh')
            //     console.log(modular)
            //     modular.print_certificate=true;
    
            //     modular.save();
            // })
            // var print = true;
            db.modulars.update(
                { persons:personId, profile:profileId, modules: moduleId },
                {
                      $set: {
                            'print_certificate': true
                      }
                }
          ).exec(function (err, off) {
                if (err) return res.status(400).send(err);
                console.log(off)
                return res.status(200).send();
          });
    })
;
module.exports = router;