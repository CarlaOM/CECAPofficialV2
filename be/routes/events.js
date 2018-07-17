var express = require('express');
var db = require('../models/db');
var router = express.Router();
var mongoose = require('mongoose');

router
      .get('/', function (req, res) {
            var d = new Date();
            db.events.find({ date_start: { $gt: d }, active: true }, { name: 1, description: 1, date_start: 1, modulars: 1, inscriptions: 1, total: 1, programs: 1 }, function (err, events) {
                  if (err) return res.status(400).send(err);
                  return res.status(200).send(events);
            });
      })
      .get('/getEventsActiveOfSucursal/:id', function (req, res) {
            var d = new Date();
            db.users.findOne({ _id: req.params.id }, function (err, user) {
                  db.events.find({ offices: user.offices, active: true, date_start: { $gt: d } }, { name: 1, description: 1, date_start: 1, modulars: 1, inscriptions: 1, total: 1, programs: 1 }, function (err, event) {
                        if (err) return res.status(400).send(err);
                        return res.status(200).send(event);
                  })
            })
      })
      .get('/lists', function (req, res) {
            db.lists.find({}, function (err, lists) {
                  return res.status(200).send(lists);
            })
      })

      .get('/trimestral', function (req, res) {
            var d = new Date();
            var d1 = new Date(d.getFullYear(), d.getMonth() - 3, d.getDate()); //menos 3 meses
            db.events.aggregate([
                  { $match: { date_start: { $gt: d1, $lt: d } } },
                  { $project: { program: 1, inscriptions: 1 } },
                  { $unwind: '$inscriptions' },
                  { $match: { 'inscriptions.state': { $eq: 1 } } },
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
                  });
            }
            function getUsers(events) {
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
                  { $group: { _id: '$inscriptions.user', total: { $sum: 1 } } }
            ], function (err, events) {
                  if (err) return res.status(400).send(err);
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
                  var persons = event.inscriptions.map(i => i.persons);
                  getPerson(persons, event);
            });
            function getPerson(persons, event) {
                  db.persons.find({ _id: { $in: persons } }, function (err, persons) {
                        if (err) return res.status(400).send(err);
                        event.inscriptions.forEach(i => {
                              persons.forEach(person => {
                                    if (JSON.stringify(i.persons) == JSON.stringify(person._id)) {
                                          i.name = person.first_name + ' ' + person.last_name;
                                          i.phone = person.phone;
                                          i.cellphone = person.cellphone;
                                    }
                              })
                        });
                        return res.status(200).send(event);
                  })
            }
      })

      .get('/getEventTallerInscriptions/:id', function (req, res) {
            db.events.findOne({ _id: req.params.id }, function (err, event) {
                  if (err) return res.status(400).send(err);
                  if (event == null) return res.status(404).send();
                  db.persons.find({}, function (err, personas) {
                        let listaPersonas = [];
                        for (let p of personas) {
                              for (let taller of p.workshops) {
                                    if (taller.events == req.params.id) {
                                          let person = {}
                                          person.first_name = p.first_name;
                                          person.last_name = p.last_name;
                                          person.ci = p.ci;
                                          person.cellphone = p.cellphone;
                                          person.canceled_price = taller.amount;
                                          person.assist = taller.assist;
                                          person._id = p._id;
                                          listaPersonas.push(person);
                                    }
                              }
                        }
                        return res.status(200).send(listaPersonas);
                  })
            });
      })
      ////////////////////////
      .get('/cerrarEvento/:id', function (req, res) {
            db.events.findOne({ _id: req.params.id }, function (err, event) {
                  if (err) return res.status(400).send(err);
                  event.date_end = new Date();
                  event.active = false;
                  event.save(function (err, event) {
                        if (err) return res.status(400).send(err);
                        return res.status(200).send(event);
                  })
            })
      })
      ///////////////////////////////////
      .get('/:id', function (req, res) {
            db.events.findOne({ _id: req.params.id }, function (err, event) {
                  if (err) return res.status(400).send(err);
                  if (event == null) return res.status(404).send();
                  getProgram(event);
            });
            function getProgram(event) {
                  db.programs.findOne({ _id: event.programs }, { name: 1 }, function (err, program) {
                        if (err) return res.status(400).send(err);
                        event.name = program.name;
                        var persons = event.inscriptions.map(i => i.person);
                        getPerson(persons, event);
                  });
            }
            function getPerson(persons, event) {
                  db.persons.find({ _id: { $in: persons } }, function (err, persons) {
                        if (err) return res.status(400).send(err);
                        event.inscriptions.forEach(i => {
                              persons.forEach(person => {
                                    if (JSON.stringify(i.person) == JSON.stringify(person._id)) {
                                          i.persons = person.first_name + ' ' + person.last_name;
                                    }
                              });
                        });
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
            })
            function Persons(p) {
                  db.persons.find({ _id: { $in: p } }, function (err, persons) {
                        if (err) return res.status(400).send(err);

                        return res.status(200).send(persons);
                  })
            }

      })
      //*****************Obtener los modulars de Events **********************
      .get('/getModulars/:id', function (req, res) {
            db.events.find({ _id: req.params.id }, { modulars: 1 }, function (err, modulars) {
                  if (err) return res.status(400).send(err);
                  if (modulars == null) return res.status(404).send();
                  var modulares = modulars[0];
                  getEventModules(modulares, req.params.id);
            });
            function getEventModules(modulares, eventId) {
                  db.events.findOne({ _id: eventId }, function (err, events) {
                        if (err) { return res.status(400).send(err); }
                        if (events) {
                              db.modules.find({ programs: events.programs }, function (err, moduls) {
                                    if (err) { return res.status(400).send(err); }
                                    newGenerateModulars(modulares, moduls, eventId);
                              });//F module
                        } else return res.status(404).send();
                  });//F EVENTS
            }
            function newGenerateModulars(modulares, moduls, eventId) {
                  var listModuls = [];
                  for (var e = 0; e <= modulares.modulars.length - 1; e++) {
                        for (var j = 0; j <= moduls.length - 1; j++) {
                              if (JSON.stringify(null) == JSON.stringify(modulares.modulars[e].modules)) {
                                    var modulars = {
                                          name: 'Pago Extra',
                                          _id: modulares.modulars[e]._id,
                                          modules: null
                                    };
                                    listModuls.push(modulars);
                                    j = moduls.length;
                              } else {
                                    var mod = moduls[j]._id;
                                    if (JSON.stringify(modulares.modulars[e].modules) == JSON.stringify(mod)) {
                                          var modulars1 = {
                                                name: moduls[j].name,
                                                _id: modulares.modulars[e]._id,
                                                modules: moduls[j]._id
                                          };
                                          listModuls.push(modulars1);
                                    } else {
                                          console.log('falla  ' + moduls[j]._id);
                                    }
                              }
                        }
                  }
                  return res.status(200).send(listModuls);
            }
      })

      ////////////////////////////////////////////////////////////////////////////////////

      .post('/listPersonNivelacionForCalls', function (req, res) {

            let programId;
            let eventId = req.body.eventId;

            let listaPersonas = [];
            db.events.findOne({ _id: eventId }, function (err, evento) {
                  if (err) { return res.status(400).send(err); }
                  programId = evento.programs;

                  db.persons.aggregate([
                        { $match: { 'profile.programs': { $eq: programId } } },
                        {
                              $project: {
                                    "_id": 1,
                                    "first_name": 1,
                                    "last_name": 1,
                                    "cellphone": 1,
                                    "ci": 1,
                                    "programs": 1,
                                    "profile.programs": 1
                              }
                        },
                        { $unwind: '$profile' },

                        {
                              $lookup: {
                                    from: "events",
                                    localField: "profile.programs",
                                    foreignField: "programs",
                                    as: "lista_eventos"
                              }
                        },
                        { $unwind: '$lista_eventos' },


                        {
                              $lookup: {
                                    from: 'modulars',
                                    let: { eventIdLookup: '$lista_eventos._id', personIdLookup: '_id' },
                                    pipeline: [
                                          {
                                                $match:
                                                {
                                                      $expr:
                                                      {
                                                            $and:
                                                                  [
                                                                        { $eq: ["$events", "$$eventIdLookup"] },
                                                                        // {$ew :["$persons","$$personIdLookup"]}
                                                                  ]

                                                      }

                                                }
                                          },
                                          {
                                                $project: {
                                                      "assist": 1,
                                                      "events": 1,
                                                      "modules": 1,
                                                      "persons": 1,
                                                }
                                          }
                                    ],
                                    as: "listaConModulos"

                              }
                        },
                        {
                              $project: {
                                    "_id": 1,
                                    "first_name": 1,
                                    "last_name": 1,
                                    "cellphone": 1,
                                    "ci": 1,
                                    "programs": 1,
                                    "profile.programs": 1,
                                    "listaConModulos": 1,
                                    "lista_eventos.modulars": 1,
                                    "lista_eventos.name": 1,
                                    "lista_eventos._id": 1,
                                    "lista_eventos.inscriptions": 1
                              }
                        },
                  ], function (err, personas) {
                        if (err) { return res.status(400).send(err); }
                        listaPersonasNivelacion = [];
                        for (let p of personas) {
                              if (p.listaConModulos.length > 0) {
                                    for (let unModulo of p.listaConModulos) {
                                          if (unModulo.assist == false) {

                                                let nuevaPersona = {};
                                                nuevaPersona.first_name = p.first_name;
                                                nuevaPersona._id = p._id;
                                                nuevaPersona.modulesNivelacion = 1;
                                                listaPersonasNivelacion.push(nuevaPersona);
                                          }
                                    }
                              } else {
                                    for (let i = 1; i < p.lista_eventos.modulars.length; i++) {
                                          let nuevaPersona = {};
                                          nuevaPersona.first_name = p.first_name;
                                          nuevaPersona._id = p._id;
                                          nuevaPersona.modulesNivelacion = 1;
                                          listaPersonasNivelacion.push(nuevaPersona);
                                    }
                              }
                        }
                        return res.status(200).send(listaPersonasNivelacion);
                  })
            })
      })

      //////////////////////////////////////////////////////////////////////////////////77
      .post('/nivelacion/:id', function (req, res) {
            db.events.findOne({ _id: req.body.eventId }, function (err, even) {
                  if (err) { return res.status(400).send(err); }
                  db.persons.aggregate([
                        { $match: { ci: req.body.persona.ci } },
                        { $project: { profile: 1, first_name: 1, last_name: 1, ci: 1, cellphone: 1, persons: 1 } },
                        { $unwind: '$profile' },
                        { $match: { 'profile.programs': { $eq: even.programs } } },
                  ], function (err, pers) {
                        if (err) { return res.status(400).send(err); }
                        if (pers != null) {
                              nivelInscription(pers);
                        } else {
                              return res.status(400).send(err);
                        }
                  });
            });
            function nivelInscription(pers) {
                  var inscri = req.body.inscription;
                  db.events.aggregate([
                        { $match: { _id: mongoose.Types.ObjectId(req.body.eventId) } },
                        { $project: { inscriptions: 1 } },
                        { $unwind: '$inscriptions' },
                        { $match: { 'inscriptions.persons': { $eq: pers[0]._id } } },
                        { $group: { _id: { persons: '$inscriptions.persons' }, total: { $sum: 1 } } }
                  ], function (err, events) {
                        if (err) return res.status(400).send(err);
                        if (events.length == 0) {
                              var inscription = {
                                    total_price: pers[0].profile.payed + inscri.canceled_price,//sumatorio por asistencia de cada modulo
                                    module_price: 0,////////////////////////////////
                                    bolivianos_price: pers[0].profile.payed + inscri.canceled_price,
                                    dolares_price: 0,
                                    canceled_price: pers[0].profile.payed + inscri.canceled_price,
                                    price_event: inscri.price_event,
                                    receipt: inscri.receipt,
                                    name: pers[0].first_name + ' ' + pers[0].last_name,
                                    ci: pers[0].ci,
                                    cellphone: pers[0].cellphone,
                                    persons: pers[0]._id,
                                    users: inscri.users,
                                    nivelacion: true
                              };
                              db.events.update({ _id: req.body.eventId },
                                    { $push: { inscriptions: inscription } },
                                    { multi: true },
                                    function (err, events) {
                                          if (err) return res.status(400).send(err);
                                    });
                              nivelList(inscri, pers);
                        } else {
                              return res.status(400).send(err);
                        }
                  });
            }
            //crear nueva Lista Para nivelacion de persona 
            function nivelList(inscri, pers) {
                  var list = {
                        bolivianos: inscri.canceled_price,
                        dolares: 0,
                        receipt: inscri.receipt, // varios recibos
                        assist: false, //controlar por fecha de inscription 
                        type: 3, //1=nuevo //2=controlPago //3=nivelacion
                        person: pers[0]._id,
                        events: req.body.eventId,
                        modulars: req.body.modularsId
                  };
                  var lists = new db.lists(list);
                  lists.save(function (err, lists) {
                        if (err) { return res.status(400).send(err); }
                        nivelUpdateModulars(inscri, pers);
                  });
            }
            function nivelUpdateModulars(inscri, pers) {
                  db.modulars.findOne({ persons: pers[0]._id, profile: pers[0].profile._id, modules: req.body.moduleId }, function (err, modularsPer) {
                        if (err) { return res.status(400).send(err); }
                        if (modularsPer != null) {
                              if (modularsPer.amount.amount > 0 || modularsPer.amount.amount != undefined) {
                                    var nivelacion = {  // observation
                                          detail: 'Inscripcion Nivelacion',
                                          receipt: inscri.receipt, // nro factura
                                          date: new Date(),
                                          amount: inscri.canceled_price,
                                          events: req.body.eventId
                                    };
                                    // db.modulars.update({ person: pers[0]._id,events: registro.eventId, modulars: registro.modularsId},
                                    db.modulars.update({ persons: pers[0]._id, profile: pers[0].profile._id, modules: req.body.moduleId },
                                          {
                                                $set: { 'nivelacion': nivelacion }
                                          }).exec(function (err, off) {
                                                if (err) return res.status(400).send(err);
                                                nivelPerfil(inscri, pers);
                                          });
                              } else {
                                    var amounte = {  // observation
                                          detail: 'Inscripcion Nivelacion',
                                          receipt: inscri.receipt, // nro factura
                                          date: new Date(),
                                          amount: inscri.canceled_price,
                                          events: req.body.eventId
                                    };
                                    // db.modulars.update({ person: pers[0]._id,events: registro.eventId, modulars: registro.modularsId},
                                    db.modulars.update({ persons: pers[0]._id, profile: pers[0].profile._id, modules: req.body.moduleId },
                                          {
                                                $set: { 'amount': amounte }
                                          }).exec(function (err, off) {
                                                if (err) return res.status(400).send(err);
                                                nivelPerfil(inscri, pers);
                                          });
                              }
                        } else {
                              return res.status(404).send(err);
                        }
                  });
            }
            function nivelPerfil(inscri, pers) {//funciona solo una primera vez
                  db.persons.update({ _id: pers[0]._id, 'profile.programs': pers[0].profile.programs },
                        {
                              $set: {
                                    'profile.$.payed': pers[0].profile.payed + inscri.canceled_price,
                                    'profile.$.debt': pers[0].profile.total_price - (pers[0].profile.payed + inscri.canceled_price)
                              }
                        }).exec(function (err, profile) {
                              if (err) return res.status(400).send(err);
                              return res.status(200).send(profile);
                        });
            }
      })
      .post('/reporteEvento', function (req, res) {

            // let fechaIni = new Date(2018, 3, 24, 10, 33, 30, 0);
            let fechaIni = new Date(req.body.fechaIni);
            let fechaFin = new Date(req.body.fechaFin);
            // db.events.find({ date_start: { $gt: d } }, { name: 1, description: 1, date_start: 1, modulars: 1, inscriptions: 1, total: 1, programs: 1 }, function (err, events) {
            db.events.find({ date_start: { $gt: fechaIni, $lt: fechaFin } }, function (err, eventos) {
                  if (err) { return res.status(400).send(err); }
                  return res.status(200).send(eventos);
            })
      })


      .post('/getEvetnModuleTallerInscriptions', function (req, res) {
            let event = req.body.event;
            let moduleId = req.body.module;
            let listaPersonas = [];
            db.persons.find({}, function (err, personas) {
                  if (err) { return res.status(400).send(err); }
                  for (let p of personas) {
                        for (let taller of p.workshops) {
                              if ((taller.events == event) && (taller.modules == moduleId)) {
                                    let person = {}
                                    person.first_name = p.first_name;
                                    person.last_name = p.last_name;
                                    person.ci = p.ci;
                                    person.cellphone = p.cellphone;
                                    person.canceled_price = taller.amount;
                                    person.assist = taller.assist;
                                    person._id = p._id;
                                    listaPersonas.push(person);
                              }
                        }
                  }
                  return res.status(200).send(listaPersonas);
            })
      })

      .post('/addNewTaller', function (req, res) {
            let personCi = req.body.persona.ci;
            let events = req.body.events;
            let modulars = req.body.modulars;
            let modules = req.body.modules;
            let receipt = req.body.receipt;
            let amount = req.body.amount;

            db.persons.findOne({ ci: personCi }, function (err, person) {
                  if (err) { return res.status(400).send(err); }
                  let taller = {};
                  taller.events = events
                  taller.modulars = modulars;
                  taller.modules = modules;
                  taller.amount = amount;
                  taller.receipt = receipt;
                  taller.assist = true;
                  taller.cetificate = false;
                  person.workshops.push(taller);
                  person.save(function (err, pers) {
                        if (err) { return res.status(400).send(err); }
                        var list = {
                              bolivianos: req.body.amount,
                              dolares: req.body.amount / (6.96),
                              receipt: req.body.receipt, // varios recibos
                              assist: true, //controlar por fecha de inscription ****************
                              type: 1, //nuevo // nivelacion
                              person: person._id,
                              events: req.body.events,
                              modulars: req.body.modulars
                        };
                        var lists = new db.lists(list);
                        lists.save(function (err, lists) {
                              if (err) { return res.status(400).send(err); }
                              return res.status(200).send(pers)
                        });
                  })
            })
      })

      ///inscripcion de personas antes y en el evento
      .post('/inscriptPerson/:id', function (req, res) {
            ///GUARDAR EN LISTS PRIMERO
            db.persons.findOne({ ci: req.body.persona.ci }, function (err, person) {
                  if (person != null) {
                        db.events.findOne({ _id: req.body.eventId }, { date_start: 1, programs: 1 }, function (err, date) {
                              if (err) { return res.status(400).send(err); }
                              var asistencia = false;
                              //controlando fecha del dia del evento para asistencia
                              if (date.date_start == new Date()) { asistencia = true; }
                              //Generando lista
                              db.events.aggregate([
                                    { $match: { _id: mongoose.Types.ObjectId(req.body.eventId) } },
                                    { $project: { inscriptions: 1 } },
                                    { $unwind: '$inscriptions' },
                                    { $match: { 'inscriptions.persons': { $eq: person._id } } },
                                    { $group: { _id: { persons: '$inscriptions.persons' }, total: { $sum: 1 } } }
                              ], function (err, events) {
                                    if (err) return res.status(400).send(err);
                                    if (events.length == 0) {
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
                                                if (err) { return res.status(400).send(err); }
                                                addInscription(person, req.body.inscription, req.body.eventId, date.programs, req.body.moduleId, asistencia);//**controlar fecha y modulars*/
                                          });
                                    } else {
                                          return res.status(400).send(err);
                                    }
                              });
                              function addInscription(person, inscri, idEvent, programId, moduleId, asistencia) {
                                    db.events.aggregate([{ $match: { _id: mongoose.Types.ObjectId(idEvent) } },
                                    { $lookup: { from: "modules", localField: "programs", foreignField: "programs", as: "moduls" } },
                                    { $group: { _id: "$moduls._id", "numOfmoduls": { $sum: 1 } } }
                                    ]).exec(function (err, moduls) {
                                          var modulPrice = inscri.price_event / moduls[0]._id.length;///////DIVISION
                                          var inscription = {
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
                                                agregar();
                                          });
                                    function agregar() {
                                          db.persons.findOne({ _id: person._id }, function (err, ps) {
                                                if (err) return res.status(400).send(err);
                                                if (ps == null) return res.status(404).send();
                                                var profileId = null;
                                                for (let i = 0; i < ps.profile.length; i++) {
                                                      if (JSON.stringify(ps.profile[i].programs) == JSON.stringify(programId)) {
                                                            profileId = ps.profile[i]._id;
                                                      }
                                                }
                                                multiplicarModular(person, idEvent, programId, moduleId, profileId, inscri, asistencia);
                                          });
                                    }
                              }
                              function multiplicarModular(person, idEvent, programId, moduleId, profileId, inscri, asistencia) {//** no recupera el PROFILE de person */
                                    db.modules.find({ programs: programId }, { _id: 1 }, function (err, moduls) {
                                          var i = 0, m = 0;
                                          recursivo(i);///Function recursive
                                          function recursivo(i) {
                                                if (i == moduls.length) {
                                                      return;// addModular(person, inscri,idEvent,moduleId,asistencia ) ;

                                                } else {
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
                                                      var modulares = new db.modulars(modular);
                                                      modulares.save(function (err, modular) {
                                                            try {
                                                                  m++;
                                                                  if (m == moduls.length) {
                                                                        addModularsAmount(person, inscri, idEvent, moduleId, asistencia);
                                                                  }
                                                            } catch (err) {
                                                                  console.error(err);
                                                            }
                                                      });
                                                      return recursivo(i + 1);
                                                }
                                          }
                                          if (err) return res.status(400).send(err);
                                    });//Fin modules
                              }
                              function addModularsAmount(person, inscri, idEvent, moduleId, asistencia) {
                                    var amount = {  // observation
                                          detail: null,
                                          receipt: inscri.receipt,// nro factura
                                          date: new Date(),
                                          amount: inscri.canceled_price,
                                    };
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
                                          return res.status(200).send();
                                    });
                              }
                        });//F Qevents
                  } else {
                        if (err) return res.status(400).send(err);
                  }
            });
      })
      //post person event 
      .post('/:id', function (req, res) {
            db.events.findOne({ _id: req.params.id }, function (err, event) {
                  if (err) return res.status(400).send(err);
                  if (event == null) return res.status(404).send();
                  getProgram(event);
            });
            function getProgram(event) {
                  db.programs.findOne({ _id: event.program }, { name: 1 }, function (err, program) {
                        if (err) return res.status(400).send(err);
                        event.name = program.name;
                        var persons = event.inscriptions.map(i => i.person);
                        getPerson(persons, event);
                  })
            }
            function getPerson(persons, event) {
                  db.persons.find({ _id: { $in: persons } }, function (err, persons) {
                        if (err) return res.status(400).send(err);
                        event.inscriptions.forEach(i => {
                              persons.forEach(person => {
                                    if (JSON.stringify(i.person) == JSON.stringify(person._id)) {
                                          i.name = person.first_name + ' ' + person.last_name;

                                    }
                              });
                        });
                        return res.status(200).send(event);
                  });
            }

      })
      .post('/filter/:id', function (req, res) {
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
                  return res.status(200).send(events);
            })

      })
      //guardar Evento
      .post('/', function (req, res) {
            var event = new db.events(req.body);
            var d = new Date();
            if ((event.date_start == undefined || event.date_start < d) || event.description == '' || event.total == '' || event.programs == '') return res.status(400).send();
            event.save(function (err, event) {
                  if (err) return res.status(400).send(err);
                  addModulars(event);
            });
            function addModulars(event) {
                  db.events.findOne({ _id: event._id }, function (err, event) {
                        db.modules.find({ programs: event.programs }, { _id: 1 }, function (err, moduls) {
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

      //update inscription person that interesed to a event
      .put('/:id', function (req, res) {
            db.events.update({ _id: req.body.name, 'inscriptions.person': req.body.person },
                  {
                        $set: { 'inscriptions.$.state': req.body.state, 'inscriptions.$.description': req.body.description }
                  }).exec(function (err, off) {
                        if (err) return res.status(400).send(err);
                        db.events.find({ _id: req.body.name }, function (err, event) {
                              if (err) return res.status(401).send(err);
                              return res.status(201).send(event);
                        });
                  });
      })



      .delete('/:id', function (req, res) {
            db.events.remove({ _id: req.params.id }, function (err, event) {
                  if (err) return res.status(400).send(err);

                  return res.status(200).send(event);
            });
      });
module.exports = router;