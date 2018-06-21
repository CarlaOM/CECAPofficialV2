var express = require('express');
var db = require('../models/db');
var router = express.Router();
var mongoose = require('mongoose');

router
      .get('/', function (req, res) {
            var d = new Date();
            db.events.find({ date_start: { $gt: d } }, { name: 1, description: 1, date_start: 1, modulars: 1, inscriptions: 1, total: 1, programs: 1 }, function (err, events) {
                  if (err) return res.status(400).send(err);
                  // let programs = [];
                  //let modulos = [];
                  //    var j = 0;
                  //    let insert = true;
                  //    var today = new Date;
                  //    for (let i = 0; i < events.length; i++) {
                  //       j = 0;
                  //       insert = true;

                  //       do {
                  //          if (programs.length == 0) { insert = false; programs.push(events[i].program); }
                  //          else if (JSON.stringify(programs[j]) == JSON.stringify(events[i].program)) insert = false;
                  //          if (today > events[i].date_start) { insert = false; }
                  //          j++;
                  //       } while (j < programs.length);
                  //       if (insert) programs.push(events[i].program);
                  //    }
                  //    getPrograms(programs, events);
                  return res.status(200).send(events);
            });
            // function getPrograms(programs, events) {
            //    db.programs.find({ _id: { $in: programs } }, { name: 1 }, function (err, programs) {
            //       if (err) return res.status(400).send(err);
            //       console.log(programs)
            //       events.forEach(event => {
            //          programs.forEach(program => {
            //             if (JSON.stringify(event.program) == JSON.stringify(program._id)) {
            //                event.name = program.name;
            //             }
            //          });
            //       });
            //       return res.status(200).send(events);
            //    });
            // }
            // db.events.find({},function(err,events){
            //    return res.status(200).send(events);
            // });
      })
      .get('/lists', function (req, res) {
            db.lists.find({}, function (err, lists) {
                  return res.status(200).send(lists);
            })
      })

      .get('/trimestral', function (req, res) {
            var d = new Date();
            var d1 = new Date(d.getFullYear(), d.getMonth() - 3, d.getDate()); //menos 3 meses
            console.log(d1);
            db.events.aggregate([
                  { $match: { date_start: { $gt: d1, $lt: d } } },
                  { $project: { program: 1, inscriptions: 1 } },
                  { $unwind: '$inscriptions' },
                  { $match: { 'inscriptions.state': { $eq: 1 } } },
                  // { $group: { _id: { event: '$_id', user: '$inscriptions.user' }, total: { $sum: 1 }, program: { $last: "$program" } } },
                  { $group: { _id: { event: '$_id', user: '$inscriptions.user', program: '$program' }, total: { $sum: 1 } } },
                  { $project: { _id: { program: '$_id.program', event: '$_id.event' }, user: { _id: '$_id.user', total: '$total' } } },
                  { $group: { _id: { program: '$_id.program', event: '$_id.event' }, users: { $push: { _id: '$user._id', total: '$user.total' } } } }
            ], function (err, events) {
                  if (err) return res.status(400).send(err);
                  let programs = [];
                  var j = 0;
                  let insert = true;
                  for (let i = 0; i < events.length; i++) {
                        j = 0;
                        insert = true;
                        do {
                              if (programs.length == 0) { insert = false; programs.push(events[i]._id.program); }
                              else if (JSON.stringify(programs[j]) == JSON.stringify(events[i]._id.program)) insert = false;
                              j++;
                        } while (j < programs.length);
                        if (insert) programs.push(events[i]._id.program);
                  }
                  getPrograms(programs, events);
            });
            function getPrograms(programs, events) {
                  // console.log(programs, events);
                  db.programs.find({ _id: { $in: programs } }, { name: 1 }, function (err, programs) {
                        if (err) return res.status(400).send(err);
                        events.forEach(event => {
                              programs.forEach(program => {
                                    if (JSON.stringify(event.program) == JSON.stringify(program._id)) {
                                          event.programName = program.name;
                                    }
                              })
                        });
                        getUsers(events);
                        // return res.status(200).send(events);
                  });
            }
            function getUsers(events) {
                  console.log(events);
                  var ids = events.map(e => e.users.map(u => u._id));
                  var i = []
                  ids.forEach(id => {
                        id.forEach(ia => i.push(ia))
                  })
                  db.users.find({ _id: { $in: i } }, { name: 1 }, function (err, users) {
                        if (err) return res.status(400).send(err);
                        events.forEach(event => {
                              event.users.forEach(eu => {
                                    users.forEach(users => {
                                          if (JSON.stringify(eu._id) == JSON.stringify(users._id)) {
                                                eu.name = users.name;
                                          }
                                    })
                              })
                        });
                        return res.status(200).send(events);
                  })
            }
      })
      .get('/mejorEjecutivo/:id', function (req, res) {
            db.events.aggregate([
                  { $match: { _id: mongoose.Types.ObjectId(req.params.id) } },
                  { $unwind: '$inscriptions' },
                  { $match: { 'inscriptions.state': { $eq: 1 } } },
                  // { $project: { 'total': { '$size': '$inscriptions'}} }
                  { $group: { _id: '$inscriptions.user', total: { $sum: 1 } } }
            ], function (err, events) {
                  if (err) return res.status(400).send(err);
                  // Persons(persons);
                  getUsers(events);
            });
            function getUsers(events) {
                  let ids = events.map(e => e._id);
                  db.users.find({ _id: { $in: ids } }, { name: 1 }, function (err, users) {
                        if (err) return res.status(400).send(err);
                        events.forEach(event => {
                              users.forEach(users => {
                                    if (JSON.stringify(event._id) == JSON.stringify(users._id)) {
                                          event.name = users.name;
                                    }
                              })
                        });
                        return res.status(200).send(events);
                  })
            }
      })
      //////////get personas por evento
      .get('/inscriptions/:id', function (req, res) {
            db.events.findOne({ _id: req.params.id }, function (err, event) {
                  if (err) return res.status(400).send(err);
                  if (event == null) return res.status(404).send();
                  // return res.status(200).send(event);
                  // getProgram(event);
                  var persons = event.inscriptions.map(i => i.persons);
                  getPerson(persons, event);
            });
            // function getProgram(event){
            //    db.programs.findOne({ _id: event.programs }, { name: 1 }, function (err, program) {
            //       if (err) return res.status(400).send(err);
            //       event.name = program.name;
            //       // return res.status(200).send(event);
            //       var persons = event.inscriptions.map(i => i.person);
            //       getPerson(persons, event);
            //    });
            // }
            function getPerson(persons, event) {
                  db.persons.find({ _id: { $in: persons } }, function (err, persons) {
                        if (err) return res.status(400).send(err);
                        // console.log(persons)
                        event.inscriptions.forEach(i => {
                              persons.forEach(person => {
                                    if (JSON.stringify(i.persons) == JSON.stringify(person._id)) {
                                          i.name = person.first_name + ' ' + person.last_name;
                                          i.phone = person.phone;
                                          i.cellphone = person.cellphone;
                                    }
                              })
                        });
                        //console.log(event);
                        return res.status(200).send(event);
                  })
            }
      })

      .get('/getEventTallerInscriptions/:id', function (req, res) {
            db.events.findOne({ _id: req.params.id }, function (err, event) {
                  if (err) return res.status(400).send(err);
                  if (event == null) return res.status(404).send();
                  // return res.status(200).send(event);
                  // getProgram(event);
                  // return res.status(200).send(event);
                  db.persons.find({},function(err,personas){
                        let listaPersonas=[];
                        for(let p of personas){
                              console.log(p.first_name);
                             for(let taller of p.workshops){
                                   console.log(taller.events)
                                   console.log(event._id);
                                   if(taller.events==req.params.id){
                                     
                                         let person={}                                         
                                         person.first_name=p.first_name;
                                         person.last_name=p.last_name;
                                         person.ci=p.ci;
                                         person.cellphone=p.cellphone;
                                         person.canceled_price=taller.amount;
                                         person.assist=taller.assist;
                                         person._id=p._id;

                                         listaPersonas.push(person);
                                         console.log(p.first_name);
                                   }
                             }
                        }

                        return res.status(200).send(listaPersonas);
                  })
                  
            });
          
           
      })
      ///////////////////////////////////
      .get('/:id', function (req, res) {
            db.events.findOne({ _id: req.params.id }, function (err, event) {
                  if (err) return res.status(400).send(err);
                  if (event == null) return res.status(404).send();
                  // return res.status(200).send(event);
                  getProgram(event);
            });
            function getProgram(event) {
                  db.programs.findOne({ _id: event.programs }, { name: 1 }, function (err, program) {
                        if (err) return res.status(400).send(err);
                        console.log(program)
                        event.name = program.name;
                        // return res.status(200).send(event);
                        var persons = event.inscriptions.map(i => i.person);
                        getPerson(persons, event);
                  });
            }
            function getPerson(persons, event) {
                  db.persons.find({ _id: { $in: persons } }, function (err, persons) {
                        if (err) return res.status(400).send(err);
                        // console.log(persons)
                        event.inscriptions.forEach(i => {
                              persons.forEach(person => {
                                    if (JSON.stringify(i.person) == JSON.stringify(person._id)) {
                                          i.persons = person.first_name + ' ' + person.last_name;
                                    }
                              });
                        });
                        // console.log(event);
                        return res.status(200).send(event);
                  });
            }

      })
      .get('/listPersons/:id', function (req, res) {
            db.events.findOne({ _id: req.params.id }, { inscriptions: 1 }, function (err, event) {
                  if (err) return res.status(400).send(err);
                  if (event == null) return res.status(404).send();
                  if (event.inscriptions.length > 0) return res.status(404).send();
                  var persons = event.inscriptions.map((p) => p.person)
                  Persons(persons);
                  // return res.status(200).send(event);
            })
            function Persons(p) {
                  db.persons.find({ _id: { $in: p } }, function (err, persons) {
                        if (err) return res.status(400).send(err);

                        return res.status(200).send(persons);
                  })
            }

      })
      //*****************Obtener los modulars de Events **********************
      .get('/getModulars/:id', function(req, res){
            console.log(req.params.id);
         db.events.find({_id: req.params.id }, {modulars: 1},function(err, modulars){
            if (err) return res.status(400).send(err);
            if (modulars == null) return res.status(404).send();
            //console.log(modulars[0]);
            var modulares = modulars[0];
            //return res.status(200).send(modulars);
            getEventModules(modulares, req.params.id);
         });
         function getEventModules(modulares, eventId){
            db.events.findOne({ _id: eventId }, function (err, events) {
                  //console.log(events);
                  if (err) { return res.status(400).send(err); }
                  if (events) {
                    db.modules.find({ programs: events.programs }, function (err, moduls) {
                      if (err) { return res.status(400).send(err); }
                      //console.log(moduls);
                        //return res.status(200).send(moduls);
                        newGenerateModulars(modulares, moduls, eventId);
                    });//F module
                  } else return res.status(404).send();
                });//F EVENTS
          }
          function newGenerateModulars(modulares, moduls, eventId){
            var listModuls= [];
            // for(var e=0; e<= modulares.modulars.length-1; e++){
            //       for(var j=0; j <= moduls.length - 1; j++){
            //       console.log(modulares.modulars[e]._id,modulares.modulars[e].modules, moduls[j]._id);
                 
            //       var modulars1 = {
            //             name: moduls[j].name,
            //             _id: modulares.modulars[e]._id,
            //             modules: moduls[j]._id
            //             };
            //             listModuls.push(modulars1);                                          
            //       }
            // }
            for(var e=0; e<= modulares.modulars.length-1; e++){
                  for(var j=0; j <= moduls.length - 1; j++){
                        console.log(j,e);
                       // console.log(JSON.stringify(null) , typeof modulares.modulars[e].modules);
                        if(JSON.stringify(null) == JSON.stringify(modulares.modulars[e].modules)){
                              //console.log(e + ' '+ JSON.stringify(modulares.modulars[e].modules))
                              var modulars = {
                                    name: 'Pago Extra',
                                    _id: modulares.modulars[e]._id,
                                    modules: null
                              };
                              listModuls.push(modulars);
                              j = moduls.length;
                        }else{
                              var mod = moduls[j]._id;
                              if(JSON.stringify(modulares.modulars[e].modules)==JSON.stringify(mod)) {
                                          var modulars1 = {
                                                name: moduls[j].name,
                                                _id: modulares.modulars[e]._id,
                                                modules: moduls[j]._id
                                          };
                                          listModuls.push(modulars1);
                                          console.log('ingreso  '+ moduls[j]._id);
                              }else{
                                    console.log('falla  '+ moduls[j]._id);
                              }
                        }
                  }
            }
            console.log(listModuls);
            return res.status(200).send(listModuls);
         }
      })
      //////////////////////////////////////////////////////////////////////////////////77
      .post('/correlativo/:id', function (req, res){
            db.events.findOne({_id: req.body.eventId}, function(err, even){
                  if (err) { return res.status(400).send(err); }
                  db.persons.findOne({ ci: req.body.persona.ci }, function (err, person) {
                    if (err) { return res.status(400).send(err); }
                    console.log(even.date_start)
                    db.persons.aggregate([
                      { $match: { _id: mongoose.Types.ObjectId(person._id) } },
                      { $project: { profile: 1 } },
                      { $unwind: '$profile' },
                      { $match: { 'profile.programs': { $eq: even.programs } } },
                            // { $group: { _id: { persons: '$inscriptions.persons' }, total: { $sum: 1 } } }
                      ], function (err, pers) {
                            if (err) { return res.status(400).send(err); }
                            console.log(pers);
                            if(pers == null){
                              //inscribir persona en un nuevo evento
                              controlPerson();
                            }else{
                              nivelacion();
                            }
                      });
                   });
                 });
      })
      .post('/reporteEvento', function(req,res){

            // let fechaIni = new Date(2018, 3, 24, 10, 33, 30, 0);
            console.log(req.body.fechaIni)
            console.log(req.body.fechaFin)
                  let fechaIni = new Date(req.body.fechaIni);
                  let fechaFin = new Date(req.body.fechaFin);
                  console.log(fechaIni)
                  // db.events.find({ date_start: { $gt: d } }, { name: 1, description: 1, date_start: 1, modulars: 1, inscriptions: 1, total: 1, programs: 1 }, function (err, events) {
                  db.events.find({date_start: {$gt: fechaIni},date_start:{$lt:fechaFin}},function(err,eventos){
                        if (err) { return res.status(400).send(err); }
                        return res.status(200).send(eventos);
                  })
            
            })
            

      .post('/getEvetnModuleTallerInscriptions',function(req,res){
            
            let event=req.body.event;
            let moduleId=req.body.module;
            let listaPersonas=[];

            db.persons.find({},function(err,personas){
                  if (err) { return res.status(400).send(err); }
                  for(let p of personas){
                        for(let taller of p.workshops){
                              if((taller.events==event)&&(taller.modules==moduleId)){
                                    let person={}                                         
                                    person.first_name=p.first_name;
                                    person.last_name=p.last_name;
                                    person.ci=p.ci;
                                    person.cellphone=p.cellphone;
                                    person.canceled_price=taller.amount;
                                    person.assist=taller.assist;
                                    person._id=p._id;

                                    listaPersonas.push(person);


                              }
                        }
                  }
                  return res.status(200).send(listaPersonas);
            })

      })

      .post('/addNewTaller',function(req,res){
            console.log(req.body);

            let personCi=req.body.persona.ci;
            let events=req.body.events;
            let modulars=req.body.modulars;
            let modules=req.body.modules;
            let receipt=req.body.receipt;
            let amount=req.body.amount;

            db.persons.findOne({ci:personCi},function(err,person){
                  if (err) { return res.status(400).send(err); }


                  // events:ObjectId,
                  // modulars:ObjectId,
                  // modules:ObjectId,
                  // amount:Number,
                  // receipt:String,
                  // assist:Boolean,
                  // certificate:Boolean,
                  let taller={};
                  taller.events=events
                  taller.modulars=modulars;
                  taller.modules=modules;
                  taller.amount=amount;
                  taller.receipt=receipt;
                  taller.assist=true;
                  taller.cetificate=false;

                  person.workshops.push(taller);
                  person.save(function(err,pers){
                        if (err) { return res.status(400).send(err); }
                        return res.status(200).send(pers)                        

                  })
            })
      })

      ///inscripcion de personas antes y en el evento
      .post('/inscriptPerson/:id', function (req, res) {
            ///GUARDAR EN LISTS PRIMERO
            let cashFlowUser=req.body.cashFlowUser;
            let cashFlowUser_description="Inscripcion de Persona";

            db.persons.findOne({ ci: req.body.persona.ci }, function (err, person) {
                  if (person != null) {
                        console.log('consulta de persona');
                        //console.log(res)
                        db.events.findOne({ _id: req.body.eventId }, { date_start: 1, programs: 1 }, function (err, date) {
                              if (err) { return res.status(400).send(err); }
                              var asistencia = false;
                              //controlando fecha del dia del evento para asistencia
                              if (date.date_start == new Date()) { asistencia = true; }
                              //Generando lista
                              console.log(req.body.eventId)
                              console.log(person._id)
                              db.events.aggregate([
                                    { $match: { _id: mongoose.Types.ObjectId(req.body.eventId) } },
                                    { $project: { inscriptions: 1 } },
                                    { $unwind: '$inscriptions' },
                                    { $match: { 'inscriptions.persons': { $eq: person._id } } },
                                    { $group: { _id: { persons: '$inscriptions.persons' }, total: { $sum: 1 } } }
                              ], function (err, events) {
                                    if (err) return res.status(400).send(err);
                                    console.log('EL INSCRIPTION DE LA PERSONA ES ESTA ::::  ');
                                    console.log(events);
                                    if (events.length == 0) {
                                          //return res.status(404).send();
                                          console.log('Inscrito correctameste');
                                          var list = {
                                                bolivianos: req.body.inscription.canceled_price,
                                                dolares: req.body.inscription.canceled_price / (6.96),
                                                receipt: req.body.inscription.receipt, // varios recibos
                                                assist: asistencia, //controlar por fecha de inscription ****************
                                                type: 1, //nuevo // nivelacion
                                                person: person._id,
                                                events: req.body.eventId,
                                                modulars: req.body.modularsId
                                          };
                                          var lists = new db.lists(list);
                                          lists.save(function (err, lists) {
                                                console.log('lista guardada');
                                                if (err) { return res.status(400).send(err); }
                                                addInscription(person, req.body.inscription, req.body.eventId, date.programs, req.body.moduleId, asistencia);//**controlar fecha y modulars*/
                                                
                                                //addIngreso(cashFlowUser,req.body.inscription.receipt,cashFlowUser_description,req.body.inscription.canceled_price)
                                                
                                                
                                                //addProfile(person, date.programs, req.body.eventId, req.body.moduleId, req.body.inscription, asistencia);
                                                //   inscriptionEvent(person, programId, idEvent, moduleId, inscri, asistencia );
                                          });
                                    } else {
                                          return res.status(400).send(err);
                                          console.log('La persona ya se inscribio');
                                    }
                                    //return res.status(200).send(person);
                              });
                              function addInscription(person, inscri, idEvent, programId, moduleId, asistencia) {
                                    db.events.aggregate([{ $match: { _id: mongoose.Types.ObjectId(idEvent) } },
                                    { $lookup: { from: "modules", localField: "programs", foreignField: "programs", as: "moduls" } },
                                    { $group: { _id: "$moduls._id", "numOfmoduls": { $sum: 1 } } }
                                    ]).exec(function (err, moduls) {
                                          // if (err) return res.status(404).send(err)
                                          console.log(typeof moduls, moduls);
                                          var modulPrice = inscri.price_event / moduls[0]._id.length;///////DIVISION
                                          console.log(modulPrice);
                                          var inscription = {
                                                // segun al numero de asistencias sacar el precio total q tiene q pagar
                                                total_price: inscri.canceled_price,//sumatorio por asistencia de cada modulo
                                                module_price: modulPrice,
                                                bolivianos_price: inscri.canceled_price,
                                                dolares_price: inscri.canceled_price / (6.96),
                                                canceled_price: inscri.canceled_price,
                                                price_event: inscri.price_event,
                                                receipt: inscri.receipt,
                                                name: person.name,
                                                ci: person.ci,
                                                cellphone: person.cellphone,
                                                persons: person._id,
                                                users: inscri.users
                                          };
                                          var d = new Date();
                                          ///////////
                                          db.events.update({ _id: idEvent },
                                                { $push: { inscriptions: inscription } },
                                                { multi: true },
                                                function (err, events) {
                                                      if (err) return res.status(400).send(err);
                                                });

                                          


                                          addProfile(person, programId, idEvent, moduleId, inscri, asistencia);
                                    });
                              }
                              function addProfile(person, programId, idEvent, moduleId, inscri, asistencia) {
                                    var perfil = {
                                          programs: programId,
                                          //modulars: null,
                                          final_work: null,
                                          requirements: null,
                                          total_price: inscri.price_event,
                                          payed: inscri.canceled_price, //cancelado
                                          debt: inscri.price_event - inscri.canceled_price,  // deuda
                                          print_diploma: false
                                    };
                                    var d = new Date();
                                    db.persons.update({ _id: person._id },
                                          { $push: { profile: perfil } },
                                          { multi: true },
                                          function (err, person) {
                                                if (err) return res.status(400).send(err);
                                                console.log(person);
                                                console.log('este es el id del PERFIL @@@@@');
                                                //return res.status(200).send(person);
                                                agregar();
                                          });
                                    function agregar() {
                                          db.persons.findOne({ _id: person._id }, function (err, ps) {
                                                if (err) return res.status(400).send(err);
                                                if (ps == null) return res.status(404).send();
                                                console.log(ps);
                                                var profileId = null;
                                                for (let i = 0; i < ps.profile.length; i++) {
                                                      if (JSON.stringify(ps.profile[i].programs) == JSON.stringify(programId)) {
                                                            profileId = ps.profile[i]._id;
                                                      }
                                                }
                                                multiplicarModular(person, idEvent, programId, moduleId, profileId, inscri, asistencia);
                                                // addModular(person, inscri,idEvent,moduleId,asistencia );
                                          });
                                    }
                                    //aniadir el modular del Profile
                                    //multiplicarModular(person,programId);    
                                    //addModular(person, inscri,idEvent,moduleId,asistencia );
                              }
                              function multiplicarModular(person, idEvent, programId, moduleId, profileId, inscri, asistencia) {//** no recupera el PROFILE de person */
                                    // console.log(profiles);
                                    console.log('aqui la persona con sus datos EEEEEE');

                                    db.modules.find({ programs: programId }, { _id: 1 }, function (err, moduls) {
                                          //console.log(moduls);
                                          var i = 0, m = 0;
                                          recursivo(i);///Function recursive
                                          function recursivo(i) {
                                                if (i == moduls.length) {
                                                      return;// addModular(person, inscri,idEvent,moduleId,asistencia ) ;

                                                } else {
                                                      console.log(moduls[i]._id);
                                                      var modular = {
                                                            name: null,
                                                            amount: null,
                                                            assist: false, //cambio
                                                            persons: person._id,//a la persona que pertenece
                                                            profile: profileId,
                                                            events: idEvent,
                                                            modules: moduls[i]._id,
                                                            print_certificate: false,
                                                      };
                                                      console.log('guardado modulars   ' + i);
                                                      console.log('el ID de PERFIL  ' + profileId);
                                                      var modulares = new db.modulars(modular);
                                                      //console.log(modulares);
                                                      modulares.save(function (err, modular) {
                                                            try {
                                                                  //return res.status(200).send(modular);
                                                                  console.log(i)
                                                                  m++;
                                                                  if (m == moduls.length) {
                                                                        addModularsAmount(person, inscri, idEvent, moduleId, asistencia);
                                                                  }
                                                            } catch (err) {
                                                                  console.error(err);
                                                                  //console.log(err);
                                                            }
                                                      });
                                                      return recursivo(i + 1);
                                                }
                                          }
                                          if (err) return res.status(400).send(err);
                                          //addModular(person, inscri,idEvent,moduleId,asistencia );
                                    });//Fin modules
                              }
                              function addModularsAmount(person, inscri, idEvent, moduleId, asistencia) {
                                    console.log('este es el ID de MODULO::  ' + moduleId);
                                    console.log(idEvent);
                                    console.log(person._id);
                                    var amount = {  // observation
                                          detail: null,
                                          receipt: inscri.receipt,// nro factura
                                          date: new Date(),
                                          amount: inscri.canceled_price,
                                    };

                                    // db.modulars.findOne({ persons: person._id,events: idEvent,  modules: moduleId}, function (err, modulars) {
                                    //       if (err) return res.status(400).send(err);
                                    //       if (modulars == null) return res.status(404).send();
                                    //       console.log(modulars);
                                    // });
                                    db.modulars.update(
                                          { persons: person._id, events: idEvent, modules: moduleId },
                                          {
                                                $set: {
                                                      'amount': amount,
                                                      'assist': asistencia
                                                }
                                          }
                                    ).exec(function (err, off) {
                                          if (err) return res.status(400).send(err);
                                          console.log(off)
                                          //if (off.nModified == 0) return res.status(404).send();
                                          return res.status(200).send();
                                    });
                              }
                        });//F Qevents
                  } else {
                        if (err) return res.status(400).send(err);
                        console.log('No existe la persona');
                  }
            });
      })
      //post person event 
      .post('/:id', function (req, res) {
            db.events.findOne({ _id: req.params.id }, function (err, event) {
                  if (err) return res.status(400).send(err);
                  if (event == null) return res.status(404).send();
                  // return res.status(200).send(event);
                  getProgram(event);
            });
            function getProgram(event) {
                  db.programs.findOne({ _id: event.program }, { name: 1 }, function (err, program) {
                        if (err) return res.status(400).send(err);
                        event.name = program.name;
                        // return res.status(200).send(event);
                        var persons = event.inscriptions.map(i => i.person);
                        getPerson(persons, event);
                  })
            }
            function getPerson(persons, event) {
                  db.persons.find({ _id: { $in: persons } }, function (err, persons) {
                        if (err) return res.status(400).send(err);
                        // console.log(persons)
                        event.inscriptions.forEach(i => {
                              persons.forEach(person => {
                                    if (JSON.stringify(i.person) == JSON.stringify(person._id)) {
                                          i.name = person.first_name + ' ' + person.last_name;

                                    }
                              });
                        });
                        // console.log(event);
                        return res.status(200).send(event);
                  });
            }

      })
      .post('/filter/:id', function (req, res) {
            // db.events.findOne({ _id: req.params.id }, { inscriptions: 1 }, function (err, event) {
            //    if (err) return res.status(400).send(err);
            //    if (event == null) return res.status(404).send();
            //    if (event.inscriptions.length > 0) return res.status(404).send();
            //    var persons = event.inscriptions.map((p)=>p.person)
            //    Persons(persons);
            //    // return res.status(200).send(event);
            // });
            db.events.aggregate([
                  { $match: { _id: mongoose.Types.ObjectId(req.params.id) } },
                  { $unwind: '$inscriptions' },
                  { $match: { 'inscriptions.state': { $eq: req.body.filter } } },
                  { $group: { _id: '$_id', persons: { $push: '$inscriptions.person' } } }
            ], function (err, events) {
                  if (err) return res.status(400).send(err);
                  var persons = events.map((p) => p.persons);
                  Persons(persons);
            })
            function Persons(p) {
                  db.persons.find({ _id: { $in: p } }, function (err, persons) {
                        if (err) return res.status(400).send(err);

                        return res.status(200).send(persons);
                  });
            }
      })
      .post('/requirements/:id', function (req, res) {
            // console.log(req.params.id);
            // db.events.aggregate([
            //       { $match: { _id: mongoose.Types.ObjectId(req.params.id) } },
            //       { $unwind: '$inscriptions' },
            //       // { $match: { 'inscriptions.state': { $eq: req.body.filter } } },
            //       { $group: { _id: '$_id', persons: { $push: '$inscriptions.persons' } } },
            //       { $lookup: { from: "persons", localField: "persons", foreignField: "_id", as: "inscribed" } },
            // ], function (err, events) {
            //       if (err) return res.status(400).send(err);
            //       // var persons = events.map((p) => p.persons);
            //       // Persons(persons);
            //       return res.status(200).send(events);
            // })
            console.log(req.body.programId)
            console.log(req.params.id)
            // db.events.findOne({_id: req.params.id},function (err,ev) {
            //       console.log(ev.programs, req.body.programId);
                  
            // })
            db.events.aggregate([
                  { $match: { _id: mongoose.Types.ObjectId(req.params.id) } },
                  { $unwind: '$inscriptions' },
                  { $group: { _id: '$_id', persons: { $push: '$inscriptions.persons' }, programId: { $first: '$programs' } } },
                  { $lookup: { from: "persons", localField: "persons", foreignField: "_id", as: "inscribed" } },
                  { $unwind: '$inscribed' },
                  { $project: { _id: 1, 'inscribed._id': 1, 'inscribed.profile._id': 1, 'inscribed.profile.programs': 1, 'inscribed.profile.requirements': 1, programId: 1 } },
                  { $unwind: '$inscribed.profile' },
                  { $match: { 'inscribed.profile.programs': mongoose.Types.ObjectId(req.body.programId) } },
            ], function (err, events) {
                  if (err) return res.status(400).send(err);
                  console.log(events)
                  // console.log(events[0].inscribed.profile);
                  // console.log(events[1].inscribed.profile);
                  // console.log(events[2].inscribed.profile);
                  return res.status(200).send(events);
            })

      })
      //guardar Evento
      .post('/', function (req, res) {
            var event = new db.events(req.body);
            var d = new Date();
            console.log(event);
            if ((event.date_start == undefined || event.date_start < d) || event.description == '' || event.total == '' || event.programs == '') return res.status(400).send();
            event.save(function (err, event) {
                  if (err) return res.status(400).send(err);
                  //return res.status(201).send(event);
                  addModulars(event);
            });
            function addModulars(event) {
                  db.events.findOne({ _id: event._id }, function (err, event) {
                        console.log(event);
                        db.modules.find({ programs: event.programs }, { _id: 1 }, function (err, moduls) {
                              console.log(moduls);
                              for (let i = 0; i < moduls.length; i++) {
                                    modular = {
                                          date_start: '',
                                          date_end: '',
                                          facilitators: null,
                                          modules: moduls[i],
                                          lists: null,
                                          _id: new mongoose.Types.ObjectId
                                    };
                                    db.events.update({ _id: event._id },
                                          {
                                                $push: {
                                                      modulars: modular
                                                }
                                          }, {
                                                multi: true
                                          }, function (err, events) {
                                                if (err) return res.status(400).send(err);
                                                // console.log(events);
                                                //return res.status(200).send(events);
                                          });
                              }
                              modular = {
                                    date_start: '',
                                    date_end: '',
                                    facilitators: null,
                                    modules: null,
                                    lists: null,
                                    _id: new mongoose.Types.ObjectId
                              };
                              db.events.update({ _id: event._id },
                                    {
                                          $push: {
                                                modulars: modular
                                          }
                                    }, {
                                          multi: true
                                    }, function (err, event) {
                                          if (err) return res.status(400).send(err);
                                          console.log(event);
                                          return res.status(200).send(event);
                                    });
                        });//fin module
                  });//fin Event

            }//fin Function
      })

      .post('/edit', function (req, res) {
            // console.log('test')
            console.log('ESTE ES EL BODY DE QUERY');
            //modificar active
            //db.users.findOne({ name: req.body.name, password_hash: req.body.password_hash, active: true }, { rol: 1, _id: 1 }, function (err, user) {
            if (err) return console.log(err);
            //if (err) return res.status(400).send(err);

            //if (user == null) return res.sendStatus(404);

            // res.status(200).send(user);
            //});
      })
      //update inscription person that interesed to a event
      .put('/:id', function (req, res) {
            console.log(req.body);
            console.log('esto es una prueba' + req.body.name);
            db.events.update({ _id: req.body.name, 'inscriptions.person': req.body.person },
                  {
                        $set: { 'inscriptions.$.state': req.body.state, 'inscriptions.$.description': req.body.description }
                  }).exec(function (err, off) {
                        if (err) return res.status(400).send(err);
                        //db.events.find({ _id: req.body.name, _id: { $in: req.body.person } }, function (err, event) {
                        db.events.find({ _id: req.body.name }, function (err, event) {
                              if (err) return res.status(401).send(err);
                              return res.status(201).send(event);
                        });
                        //	if (off.nModified == 0) return res.status(406).send();
                  });
      })

   

      .delete('/:id', function (req, res) {
            db.events.remove({ _id: req.params.id }, function (err, event) {
                  if (err) return res.status(400).send(err);

                  return res.status(200).send(event);
            });
      });
//  .put('/:id', function (req, res) {
//   console.log(req.body);
//   db.events.findOne({ _id: req.params.id }, function (err, event) {
//        if (err) return res.status(400).send(err);
//        if (event == null) return res.status(404).send();

//        for (i in req.body) {
//           event[i] = req.body[i];
//        }
//        event.save(function (err, event) {
//           if (err) return res.status(400).send(err);

//           return res.status(200).send(event);
//        });
//     });

module.exports = router;