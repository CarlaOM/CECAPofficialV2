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
    .get('/accountModulars/:id', function(req, res){
        var arrayIds = req.params.id.split('-');
        var modularsId= arrayIds[0];
        var moduleId= arrayIds[1];
        var eventId = arrayIds[2];
        db.events.findOne({_id: eventId},function(err, events){
            if (err) return res.status(400).send(err);
            //return res.status(200).send(events);
            ingresoModulo(eventId, moduleId, modularsId);
        });
        function ingresoModulo(eventId, moduleId, modularsId){
            db.lists.find({events:eventId, modulars: modularsId},function (err, listas) {
                if (err) return res.status(400).send(err);
                //console.log(listas)
                var cantIngresoMod=0;
                var cantAssist=0
                var canStudent=0;
                var canProf=0;
                var canParticular=0;
                var listPerId=[];
                for (let i = 0; i <= listas.length-1; i++) {
                    cantIngresoMod = cantIngresoMod + listas[i].bolivianos;
                    if(listas[i].assist == true){
                        cantAssist++;
                        listPerId.push(listas[i].person);
                    }
                }
                db.persons.find({_id: {$in: listPerId}},function(err, persons){
                    if (err) return res.status(400).send(err);
                    for (let j = 0; j < persons.length ; j++) {
                        if(persons[j].ocupation == 'estudiante'){canStudent++;}
                        if(persons[j].ocupation == 'profecional'){canProf++;}
                        if(persons[j].ocupation == 'particular'){canParticular++;}
                    }
                    console.log('Total ingreso Modulo: '+ cantIngresoMod);
                    console.log('Total Assist Modulo: '+ cantAssist);
                    console.log('Total estudi Modulo: '+ canStudent);
                    console.log('Total profe Modulo: '+ canProf);
                    console.log('Total partic Modulo: '+ canParticular);
                    var accountModulars = {
                        ingreso:cantIngresoMod,
                        assist:cantAssist,
                        student:canStudent,
                        professional:canProf,
                        particular:canParticular
                    };
                    return res.status(200).send(accountModulars);
                });
            });
        }
    })
    .post('/asistencia',function(req,res){
        //console.log(req.body);
        let personId=req.body.personId;
        let eventId=req.body.eventId;
        let moduleId=req.body.moduleId;
            db.modulars.findOne({persons:personId,events:eventId,modules:moduleId},function(err,modular){
                if(err)return res.status(400).send(err);
                //console.log(modular)
                modular.assist=true;
                modular.save();

                db.events.aggregate([
                    { $match: { _id: mongoose.Types.ObjectId(eventId)} },
                    { $project: { modulars: 1 } },
                    { $unwind: '$modulars' },
                    { $match: { 'modulars.modules': { $eq: mongoose.Types.ObjectId(moduleId) } } },
                    //{ $group: { _id: { modules: '$modulars.modules' }, total: { $sum: 1 } } }
                ], function (err, modularEvent) {
                    if (err) return res.status(400).send(err);
                    console.log(modularEvent);
                    console.log('aqui el module ID de events');
                    var objectModular = modularEvent[0];
                    var modularsId =  objectModular.modulars._id;
                    console.log('este es el Id del Modulars:  '+ modularsId);
                    findLists(personId, eventId, modularsId);
                });
            });
            function findLists(personId, eventId, modularsId){
                db.lists.findOne({person:personId,events:eventId,modulars: modularsId },function(err,list){
                    if(err)return res.status(400).send(err);
                    if(list!=null){
                        list.assist=true;
                        list.save(function(err,lis){

                            if(err)return res.status(400).send(err);
                            return res.status(200).send(lis);
                        });
                    }else{
                        var list = {
                            bolivianos: 0,
                            dolares: 0,
                            receipt: '', //varios recibos
                            assist: true,
                            type: 1, //1=nuevo //2=nivelacion
                            person: personId,
                            events: eventId,
                            modulars: modularsId
                        };
                        var lists = new db.lists(list);
                        lists.save(function (err, lis) {
                                if (err) { return res.status(400).send(err); }
                                console.log('Lista nueva creada de Asistencia');
                                return res.status(200).send(lis);
                        });
                    }          
                });
            }
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