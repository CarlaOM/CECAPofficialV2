var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var jwt = require('jsonwebtoken');
var db = require('../models/db');
var router = express.Router();

router
   .post('/asistencia',function(req,res){
    console.log(req.body);
    let personId=req.body.personId;
    let eventId=req.body.eventId;
    let moduleId=req.body.moduleId;
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
module.exports = router;