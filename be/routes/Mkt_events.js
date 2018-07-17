var express = require('express');
var db = require('../models/db');
var router = express.Router();
var mongoose = require('mongoose');

router
      .get('/', function (req, res) {
            var d = new Date();
            db.mkt_events.find({ date_start: { $gt: d } }, { name: 1, description: 1, date_start: 1, modulars: 1, inscriptions: 1, total: 1, programs: 1 }, function (err, events) {
                  if (err) return res.status(400).send(err);
                  return res.status(200).send(events);
            });
      })
      .post('/getPersonasInteresWithEvent', function (req, res) {
            let event = req.body;
            let lista = [];
            let nuevaLista = [];
            for (let p of event.interes) {
                  lista.push(p.persons);
            }
            db.mkt_persons.find({ _id: { $in: lista } }, function (err, persons) {
                  for (let personItem of persons) {
                        let newPerson = {};
                        newPerson._id = personItem._id;
                        newPerson.first_name = personItem.first_name;
                        newPerson.last_name = personItem.last_name;
                        newPerson.cellphone = personItem.cellphone;
                        newPerson.city = personItem.city;
                        newPerson.contact_medium = personItem.contact_medium;
                        for (let pid of event.interes) {
                              if (pid.persons == personItem._id) {
                                    newPerson.state = pid.state;
                                    if (newPerson.state == 0) newPerson.stateName = 'Interesado';
                                    if (newPerson.state == 1) newPerson.stateName = 'En Duda';
                                    if (newPerson.state == 2) newPerson.stateName = 'Confirmado';
                                    if (newPerson.state == 3) newPerson.stateName = 'Inscrito';
                                    if (newPerson.state == 5) newPerson.stateName = 'En Linea';
                                    if (newPerson.state == 5) newPerson.stateName = 'Proximo Evento';
                                    if (newPerson.state == 6) newPerson.stateName = 'Sin Interes';
                                    nuevaLista.push(newPerson);
                              }
                        }
                  }
                  return res.status(200).send(nuevaLista);
            })
      })
      .post('/getPersonFilterInteresWithEvent', function (req, res) {
            let event = req.body.event;
            let interesnumber = req.body.interes;
            let lista = [];
            let nuevaLista = [];
            for (let p of event.interes) {
                  lista.push(p.persons);
            }
            db.mkt_persons.find({ _id: { $in: lista } }, function (err, persons) {
                  for (let personItem of persons) {
                        let newPerson = {};
                        newPerson._id = personItem._id;
                        newPerson.first_name = personItem.first_name;
                        newPerson.last_name = personItem.last_name;
                        newPerson.cellphone = personItem.cellphone;
                        newPerson.city = personItem.city;
                        newPerson.contact_medium = personItem.contact_medium;
                        for (let pid of event.interes) {
                              if (pid.persons == personItem._id) {
                                    newPerson.state = pid.state;
                                    if (newPerson.state == 0) newPerson.stateName = 'Interesado';
                                    if (newPerson.state == 1) newPerson.stateName = 'En Duda';
                                    if (newPerson.state == 2) newPerson.stateName = 'Confirmado';
                                    if (newPerson.state == 3) newPerson.stateName = 'Inscrito';
                                    if (newPerson.state == 5) newPerson.stateName = 'En Linea';
                                    if (newPerson.state == 5) newPerson.stateName = 'Proximo Evento';
                                    if (newPerson.state == 6) newPerson.stateName = 'Sin Interes';
                                    if (newPerson.state == interesnumber) {
                                          nuevaLista.push(newPerson);
                                    }
                              }
                        }
                  }
                  return res.status(200).send(nuevaLista);
            })
      })
      .post('/getPersonFilterInteresWithEventByCartera', function (req, res) {
            let event = req.body.event;
            let interesnumber = req.body.interes;
            let lista = [];
            let nuevaLista = [];
            db.mkt_carteras.findOne({ user: req.body.identity._id }, function (err, cartera) {
                  for (let p of event.interes) {
                        lista.push(p.persons);
                  }
                  db.mkt_persons.find({ _id: { $in: lista }, carteras: cartera }, function (err, persons) {
                        for (let personItem of persons) {
                              let newPerson = {};
                              newPerson._id = personItem._id;
                              newPerson.first_name = personItem.first_name;
                              newPerson.last_name = personItem.last_name;
                              newPerson.cellphone = personItem.cellphone;
                              newPerson.city = personItem.city;
                              newPerson.contact_medium = personItem.contact_medium;
                              for (let pid of event.interes) {
                                    if (pid.persons == personItem._id) {
                                          newPerson.state = pid.state;
                                          if (newPerson.state == 0) newPerson.stateName = 'Interesado';
                                          if (newPerson.state == 1) newPerson.stateName = 'En Duda';
                                          if (newPerson.state == 2) newPerson.stateName = 'Confirmado';
                                          if (newPerson.state == 3) newPerson.stateName = 'Inscrito';
                                          if (newPerson.state == 5) newPerson.stateName = 'En Linea';
                                          if (newPerson.state == 5) newPerson.stateName = 'Proximo Evento';
                                          if (newPerson.state == 6) newPerson.stateName = 'Sin Interes';
                                          if (newPerson.state == interesnumber) {
                                                nuevaLista.push(newPerson);
                                          }
                                    }
                              }
                        }
                        return res.status(200).send(nuevaLista);
                  })
            })
      })

      .post('/getPersonasInteresWithEventByCartera', function (req, res) {
            let event = req.body.event;
            let lista = [];
            let nuevaLista = [];
            db.mkt_carteras.findOne({ user: req.body.identity._id }, function (err, cartera) {
                  for (let p of event.interes) {
                        lista.push(p.persons);
                  }
                  db.mkt_persons.find({ _id: { $in: lista }, carteras: cartera }, function (err, persons) {
                        for (let personItem of persons) {
                              let newPerson = {};
                              newPerson._id = personItem._id;
                              newPerson.first_name = personItem.first_name;
                              newPerson.last_name = personItem.last_name;
                              newPerson.cellphone = personItem.cellphone;
                              newPerson.contact_medium = personItem.contact_medium;
                              newPerson.ocupation = personItem.ocupation;
                              newPerson.descOcupation = personItem.descOcupation;
                              newPerson.contact_medium = personItem.contact_medium;
                              for (let pid of event.interes) {
                                    if (pid.persons == personItem._id) {
                                          newPerson.state = pid.state;
                                          if (newPerson.state == 0) newPerson.stateName = 'Interesado';
                                          if (newPerson.state == 1) newPerson.stateName = 'En Duda';
                                          if (newPerson.state == 2) newPerson.stateName = 'Confirmado';
                                          if (newPerson.state == 3) newPerson.stateName = 'Inscrito';
                                          if (newPerson.state == 5) newPerson.stateName = 'En Linea';
                                          if (newPerson.state == 5) newPerson.stateName = 'Proximo Evento';
                                          if (newPerson.state == 6) newPerson.stateName = 'Sin Interes';
                                          if (pid.tracing != undefined) {
                                                t = pid.tracing.length;
                                                if (t != 0) {
                                                      if (pid.tracing[t - 1].state == 0) newPerson.tracingName = 'Programar Llamada';
                                                      if (pid.tracing[t - 1].state == 1) newPerson.tracingName = 'No Contesto Llamada';
                                                      if (pid.tracing[t - 1].state == 2) newPerson.tracingName = 'Llamada contestada';
                                                } else newPerson.tracingName = 'Sin Seguimiento';
                                          }
                                          nuevaLista.push(newPerson);
                                    }
                              }
                        }
                        return res.status(200).send(nuevaLista);
                  })
            })
      })

      .get('/all/:id', function (req, res) {
            db.mkt_users.findOne({ _id: req.params.id }, function (err, user) {
                  if (err) return res.status(400).send(err);
                  db.mkt_events.find({ offices: user.offices }, function (err, events) {
                        if (err) return res.status(400).send(err);
                        return res.status(200).send(events);
                  })
            })
      })
      .get('/getAllEventsActive/:id', function (req, res) {
            db.mkt_users.findOne({ _id: req.params.id }, function (err, user) {
                  if (err) return res.status(400).send(err);
                  db.mkt_events.find({ offices: user.offices, active: true }, function (err, events) {
                        if (err) return res.status(400).send(err);
                        return res.status(200).send(events);
                  })
            })
      })
      .get('/lists', function (req, res) {
            db.mkt_lists.find({}, function (err, lists) {
                  return res.status(200).send(lists);
            })
      })

      .post('/addInteresToEvents', function (req, res) {
            let personId = req.body.personId;
            let programId = req.body.programId;
            db.mkt_events.find({ programs: programId }, function (err, events) {
                  if (err) return res.status(400).send(err);
                  for (let event of events) {
                        db.mkt_events.findOne({ _id: event._id }, function (err, ev) {
                              if (err) return res.status(400).send(err);
                              if (ev.interes.length == 0) {
                                    let inter = {}
                                    inter.persons = personId;
                                    inter.state = 0;
                                    ev.interes.push(inter);
                              } else {
                                    let existe = false;
                                    for (let iItem of ev.interes) {
                                          if (iItem.persons == personId) {
                                                existe = true;
                                          }
                                    }
                                    if (existe == false) {
                                          let inter = {}
                                          inter.persons = personId;
                                          inter.state = 0;
                                          ev.interes.push(inter);
                                    }
                              }
                              ev.save(function (err, ev) {
                                    if (err) return res.status(400).send(err);
                              });
                        })
                  }
                  return res.status(200).send(events);
            })
      })


      .get('/trimestral', function (req, res) {
            var d = new Date();
            var d1 = new Date(d.getFullYear(), d.getMonth() - 3, d.getDate()); //menos 3 meses
            db.mkt_events.aggregate([
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
                  db.mkt_programs.find({ _id: { $in: programs } }, { name: 1 }, function (err, programs) {
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
                  db.mkt_users.find({ _id: { $in: i } }, { name: 1 }, function (err, users) {
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
            db.mkt_events.aggregate([
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
                  db.mkt_users.find({ _id: { $in: ids } }, { name: 1 }, function (err, users) {
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
      ////////////////////reporte de un evento////////////
      .get('/getReportEvent/:id', function (req, res) {

            db.mkt_events.findOne({ _id: req.params.id }, function (err, event) {
                  if (err) return res.status(400).send(err);
                  ////////////
                  //  0 interesados
                  //  1 en duda
                  //  2 confirmados
                  //  3 isncritos
                  //  4 enlinea
                  //  5 proximo evento 
                  //  6 sin interes
                  //////// 
                  let reporte = {};
                  reporte.eventName = event.name;
                  reporte.programName = '';
                  reporte.interesados = 0;
                  reporte.enDuda = 0;
                  reporte.confirmados = 0;
                  reporte.inscritos = 0;
                  reporte.enLinea = 0;
                  reporte.proximoEvento = 0;
                  reporte.sinInteres = 0;

                  for (let person of event.interes) {

                        if (person.state == 0) reporte.interesados++;
                        if (person.state == 1) reporte.enDuda++;
                        if (person.state == 2) reporte.confirmados++;
                        if (person.state == 3) reporte.inscritos++;
                        if (person.state == 4) reporte.enLinea++;
                        if (person.state == 5) reporte.proximoEvento++;
                        if (person.state == 6) reporte.sinInteres++;
                  }
                  db.mkt_programs.findOne({ _id: event.programs }, function (err, program) {
                        if (err) return res.status(400).send(err);
                        reporte.programName = program.name;
                        return res.status(200).send(reporte);

                  })
            })
      })
      /////////////////////////////////////////
      ////////////////////////
      .get('/cerrarEvento/:id', function (req, res) {
            db.mkt_events.findOne({ _id: req.params.id }, function (err, event) {
                  if (err) return res.status(400).send(err);

                  event.date_end = new Date();
                  event.active = false;
                  event.save(function (err, event) {
                        if (err) return res.status(400).send(err);
                        return res.status(200).send(event);
                  })
            })
      })
      //////////////evetns of suicursal//////
      .get('/getEventsOfSucursal/:id', function (req, res) {

            db.mkt_users.findOne({ _id: req.params.id }, function (err, user) {
                  if (err) return res.status(400).send(err);
                  let userOffice = user.offices;
                  db.mkt_events.find({ offices: userOffice, active: true }, function (err, eventos) {
                        if (err) return res.status(400).send(err);
                        return res.status(200).send(eventos);
                  })
            })
      })

      //////////get personas por evento
      .get('/inscriptions/:id', function (req, res) {
            db.mkt_events.findOne({ _id: req.params.id }, function (err, event) {
                  if (err) return res.status(400).send(err);
                  if (event == null) return res.status(404).send();
                  var persons = event.inscriptions.map(i => i.persons);
                  getPerson(persons, event);
            });
            function getPerson(persons, event) {
                  db.mkt_persons.find({ _id: { $in: persons } }, function (err, persons) {
                        if (err) return res.status(400).send(err);
                        event.inscriptions.forEach(i => {
                              persons.forEach(person => {
                                    if (JSON.stringify(i.persons) == JSON.stringify(person._id)) {
                                          i.name = person.first_name + ' ' + person.last_name;
                                          i.phone = person.phone;
                                          i.cellphone = person.cellphone;
                                    }
                              });
                        });
                        return res.status(200).send(event);
                  });
            }
      })
      ///////////////////////////////////
      .get('/:id', function (req, res) {
            db.mkt_events.findOne({ _id: req.params.id }, function (err, event) {
                  if (err) return res.status(400).send(err);
                  if (event == null) return res.status(404).send();
                  getProgram(event);
            });
            function getProgram(event) {
                  db.mkt_programs.findOne({ _id: event.programs }, { name: 1 }, function (err, program) {
                        if (err) return res.status(400).send(err);
                        event.name = program.name;
                        var persons = event.inscriptions.map(i => i.person);
                        getPerson(persons, event);
                  });
            }
            function getPerson(persons, event) {
                  db.mkt_persons.find({ _id: { $in: persons } }, function (err, persons) {
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
            db.mkt_events.findOne({ _id: req.params.id }, { inscriptions: 1 }, function (err, event) {
                  if (err) return res.status(400).send(err);
                  if (event == null) return res.status(404).send();
                  if (event.inscriptions.length > 0) return res.status(404).send();
                  var persons = event.inscriptions.map((p) => p.person)
                  Persons(persons);
            })
            function Persons(p) {
                  db.mkt_persons.find({ _id: { $in: p } }, function (err, persons) {
                        if (err) return res.status(400).send(err);
                        return res.status(200).send(persons);
                  })
            }

      })
      ///inscripcion de personas antes y en el evento
      .post('/inscriptPerson/:id', function (req, res) {
            ///GUARDAR EN LISTS PRIMERO
            db.mkt_persons.findOne({ ci: req.body.persona.ci }, function (err, person) {
                  if (person == null) {
                        db.mkt_events.findOne({ _id: rer.body.eventId }, { date_start: 1 }, function (err, date) {
                              if (err) { return res.status(400).send(err); }
                              var asistencia = false;
                              if (date == new Date()) { asistencia = true; }
                              //Generando lista
                              var list = {
                                    bolivianos: req.body.inscription.canceled_price,
                                    dolares: req.body.inscription.canceled_price / (6.96),
                                    receipt: req.body.inscription.receipt, // varios recibos
                                    assist: asistencia, //controlar por fecha de inscription ****************
                                    type: 1, //nuevo // nivelacion
                                    person: person._id,
                                    events: req.body.eventId,
                                    //modulars: ObjectId
                              };
                              var lists = new db.mkt_lists(list);
                              lists.save(function (err, lists) {
                                    if (err) { return res.status(400).send(err); }
                                    addInscription(person, req.body.inscription, req.body.eventId);
                                    //**controlar fecha y modulars*/
                              });
                              function addInscription(person, inscri, idEvent) {
                                    db.mkt_events.findOne({ _id: idEvent }, function (err, events) {
                                          db.mkt_modules.find({ programs: events.programs }).count().exec(function (err, moduls) {
                                                var modulPrice = inscri.price_event / moduls;///////DIVISION
                                                var inscription = {
                                                      // segun al numero de asistencias sacar el precio total q tiene q pagar
                                                      total_price: 0,//sumatorio por asistencia de cada modulo
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
                                                db.mkt_events.update({ _id: idEvent },
                                                      {
                                                            $push: {
                                                                  inscriptions: inscription
                                                            }
                                                      }, {
                                                            multi: true
                                                      }, function (err, events) {
                                                            if (err) return res.status(400).send(err);
                                                            return res.status(200).send(person);
                                                      });
                                          });//fin module
                                    });//fin Event
                              }
                        });//F Qevents
                  } else { }
            })
      })

      .post('/getEventsFilterByDates', function (req, res) {
            let fecha_ini = req.body.fecha_ini;
            let fecha_fin = req.body.fecha_fin;
            let userId = req.body.identity._id;
            db.mkt_users.findOne({ _id: userId }, function (err, user) {
                  let sucursal = user.offices;
                  db.mkt_events.find({ offices: sucursal, date_start: { $gt: fecha_ini }, date_start: { $lt: fecha_fin } }, function (err, listEvents) {
                        if (err) return res.status(400).send(err);
                        return res.status(200).send(listEvents);
                  })
            })
      })






      //post person event 
      .post('/:id', function (req, res) {
            db.mkt_events.findOne({ _id: req.params.id }, function (err, event) {
                  if (err) return res.status(400).send(err);
                  if (event == null) return res.status(404).send();
                  getProgram(event);
            });
            function getProgram(event) {
                  db.mkt_programs.findOne({ _id: event.program }, { name: 1 }, function (err, program) {
                        if (err) return res.status(400).send(err);
                        event.name = program.name;
                        var persons = event.inscriptions.map(i => i.person);
                        getPerson(persons, event);
                  })
            }
            function getPerson(persons, event) {
                  db.mkt_persons.find({ _id: { $in: persons } }, function (err, persons) {
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
            db.mkt_events.aggregate([
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
                  db.mkt_persons.find({ _id: { $in: p } }, function (err, persons) {
                        if (err) return res.status(400).send(err);
                        return res.status(200).send(persons);
                  });
            }
      })

      .post('/', function (req, res) {
            var event = new db.mkt_events(req.body);
            var d = new Date();
            if ((event.date_start == undefined || event.date_start < d) || event.description == '' || event.total == '' || event.programs == '') return res.status(400).send();
            addInterested();
            function addInterested() {
                  db.mkt_persons.aggregate([
                        { $project: { interes: 1 } },
                        { $unwind: '$interes' },
                        { $match: { 'interes.programId': mongoose.Types.ObjectId(event.programs), $or: [{ 'interes.state': 0 }, { 'interes.state': 2 }, { 'interes.state': 5 }] } },
                  ], function (err, persons) {
                        if (err) return res.status(400).send(err);
                        var interes = [];
                        persons.forEach(p => {
                              interes.push({ persons: p._id, state: p.interes.state })
                        });
                        event.interes = interes;
                        event.save(function (err, event) {
                              if (err) return res.status(400).send(err);
                              return res.status(201).send(event);
                        });
                  });
            }
      })
      .put('/:id', function (req, res) {
            db.mkt_events.update({ _id: req.body.name, 'inscriptions.person': req.body.person },
                  {
                        $set: { 'inscriptions.$.state': req.body.state, 'inscriptions.$.description': req.body.description }
                  }).exec(function (err, off) {
                        if (err) return res.status(400).send(err);
                        db.mkt_events.find({ _id: req.body.name }, function (err, event) {
                              if (err) return res.status(401).send(err);
                              return res.status(201).send(event);
                        });
                  });
      })

      .delete('/:id', function (req, res) {
            db.mkt_events.remove({ _id: req.params.id }, function (err, event) {
                  if (err) return res.status(400).send(err);
                  return res.status(200).send(event);
            });
      });
module.exports = router;