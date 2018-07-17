var express = require('express');
var db = require('../models/db');
var router = express.Router();
var mongoose = require('mongoose');
////////////////////////////////
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

// var multer = require('multer');
// var xlstojson = require("xls-to-json-lc");
// var xlsxtojson = require("xlsx-to-json-lc");

// var storage = multer.diskStorage({ //multers disk storage settings
//     destination: function (req, file, cb) {
//         cb(null, './uploads/')
//     },
//     filename: function (req, file, cb) {
//         var datetimestamp = Date.now();
//         cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalFilename.split('.')[file.originalFilename.split('.').length -1])
//     }
// });
// var upload = multer({ //multer settings
//                 storage: storage,
//                 fileFilter : function(req, file, callback) { //file filter
//                     if (['xls', 'xlsx'].iOf(file.originalFilename.split('.')[file.originalFilename.split('.').length-1]) === -1) {
//                         return callback(new Error('Wrong extension type'));
//                     }
//                     callback(null, true);
//                 }
//             }).single('file');

///////////other//////////

var XLSX = require('xlsx')

///////////////////////////

router
  .get('/', function (req, res) {
    db.persons.find({}, function (err, persons) {
      if (err) return res.status(400).send(err);

      return res.status(200).send(persons);
    });
  })

  .get('/:id', function (req, res) {
    db.persons.findOne({ _id: req.params.id }, function (err, person) {
      if (err) return res.status(400).send(err);
      if (person == null) return res.status(404).send();

      return res.status(200).send(person);
    });
  })
  .get('/programs/:id', function (req, res) {
    db.persons.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(req.params.id) } },
      {
        $lookup:
        {
          from: "programs",
          localField: "profile.programs",    // field in the orders collection
          foreignField: "_id",  // field in the items collection
          as: "programDetails"
        }
      }
    ]).exec(function (err, person) {
      if (err) return res.status(404).send(err)
      return res.status(200).send(person[0]);
    });
  })
  //////////////////////////////////////////////////////////////////
  .get('/workshop/:id', function (req, res) {
    db.persons.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(req.params.id) } },
      {
        $lookup:
        {
          from: "events",
          localField: "workshops.events",    // field in the orders collection
          foreignField: "_id",  // field in the items collection
          as: "workshopDetails"
        }
      }
    ]).exec(function (err, person) {
      if (err) return res.status(404).send(err)
      return res.status(200).send(person[0]);
    });
  })
  /////////////////////////////////////////////////////////////////7
  .get('/inscriptionPerson/:id', function (req, res) {
    var arrayIds = req.params.id.split('-');
    this.personId = arrayIds[0];
    this.eventId = arrayIds[1];
    db.events.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(eventId) } },
      { $project: { inscriptions: 1 } },
      { $unwind: '$inscriptions' },
      { $match: { 'inscriptions.persons': { $eq: mongoose.Types.ObjectId(personId) } } },
    ], function (err, events) {
      if (err) return res.status(400).send(err);
      return res.status(200).send(events);
    });
  })
  .put('/profile/:id', function (req, res) {
    db.persons.update({ _id: req.params.id, 'profile._id': req.body.profileId },
      {
        $set: {
          'profile.$.requirements.photograpy': req.body.photo,
          'profile.$.requirements.photocopy_ci': req.body.ci,
          'profile.$.requirements.photocopy_titule': req.body.titulo,
        }
      }, function (err, persons) {
        if (err) return res.status(404).send();
        return res.status(200).send(persons);
      })
  })
  .post('/controlPago', function (req, res) {
    db.events.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(req.body.eventId) } },
      { $project: { inscriptions: 1 } },
      { $unwind: '$inscriptions' },
      { $match: { 'inscriptions.persons': { $eq: mongoose.Types.ObjectId(req.body.persona._id) } } },
    ], function (err, inscript) {
      if (err) return res.status(400).send(err);
      var eventInscripton = inscript[0];
      getLists(req.body, eventInscripton.inscriptions.total_price, eventInscripton.inscriptions.price_event);
    });
    function getLists(registro, total_cancelado, price_event) {
      var pagoActual = registro.inscription.canceled_price;
      db.lists.findOne({
        person: registro.persona._id, events: registro.eventId,
        modulars: registro.modularsId
      }, function (err, lista) {
        if (err) return res.status(400).send(err);
        addModularsAmount(registro, pagoActual, total_cancelado, price_event, lista);
      });
    }
    function addModularsAmount(registro, pagoActual, total_cancelado, price_event, lista) {
      if (JSON.stringify(null) == registro.moduleId) {
        if (pagoActual < 1) {
          return res.status(400).send(lista);////verificar
        } else {
          db.persons.findOne({ _id: registro.persona._id }, function (err, ps) {
            if (err) return res.status(400).send(err);
            if (ps == null) return res.status(404).send();
            db.events.findOne({ _id: registro.eventId }, { programs: 1 }, function (err, event) {
              if (err) return res.status(400).send(err);
              var profileId = null;
              for (let i = 0; i < ps.profile.length; i++) {
                if (JSON.stringify(ps.profile[i].programs) == JSON.stringify(event.programs)) {
                  profileId = ps.profile[i]._id;
                }
              }//refaCTORIZAR
              var amount = {  // observation
                detail: 'Control Pago Extra',
                receipt: registro.inscription.receipt,// nro factura
                date: new Date(),
                amount: pagoActual
              };
              var modular = {
                name: 'modular Extra',
                amount: amount,
                assist: null, //cambio
                persons: registro.persona._id,//a la persona que pertenece
                profile: profileId,
                events: registro.eventId,
                modules: null,
                print_certificate: null,
              };
              var modulares = new db.modulars(modular);
              modulares.save(function (err, modular) {
                if (err) return res.status(400).send(err);
                crearLists(registro, pagoActual, total_cancelado, price_event, lista);
              });
            });
          });
        }
      } else {
        crearLists(registro, pagoActual, total_cancelado, price_event, lista);
      }
    }
    function crearLists(registro, pagoActual, total_cancelado, price_event, lista) {
      if (lista == null) {
        var list = {
          bolivianos: registro.inscription.canceled_price,
          dolares: 0,
          receipt: registro.inscription.receipt, // varios recibos
          assist: false, //controlar por fecha de inscription 
          type: 2, //1=nuevo //2=nivelacion
          person: registro.persona._id,
          events: registro.eventId,
          modulars: registro.modularsId
        };
        var lists = new db.lists(list);
        lists.save(function (err, lists) {
          if (err) { return res.status(400).send(err); }
          updateModulars(registro, total_cancelado, price_event, pagoActual);
        });
      } else {//caso que exista obtener el modulo y el pago anterior y si debe enviar mensaje,sino
        if (lista.bolivianos == 0 || lista.bolivianos == undefined) {
          db.lists.update({
            person: registro.persona._id, events: registro.eventId,
            modulars: registro.modularsId
          },
            {
              $set: {
                'bolivianos': registro.inscription.canceled_price,
                'dolares': 0,
                'receipt': registro.inscription.receipt, // varios recibos
                //'assist': Boolean,
                'type': 2, //nuevo // nivelacion
              }
            }).exec(function (err, off) {
              if (err) return res.status(400).send(err);
              updateModulars(registro, total_cancelado, price_event, pagoActual);
            });
        } else {
          return res.status(400).send(lista);
        }
      }
    }
    function updateModulars(registro, total_cancelado, price_event, pagoActual) {
      if (JSON.stringify(null) == registro.moduleId) {
        editInscription(registro, total_cancelado, price_event, pagoActual);
      } else {
        var amounte = {  // observation
          detail: 'Control Pago',
          receipt: registro.inscription.receipt,// nro factura
          date: new Date(),
          amount: pagoActual
        };
        // db.modulars.update({ persons: registro.persona._id,events: registro.eventId,modules: registro.moduleId },
        db.modulars.update({ persons: registro.persona._id, modules: registro.moduleId },
          {
            $set: { 'amount': amounte }
          }).exec(function (err, off) {
            if (err) return res.status(400).send(err);
            editInscription(registro, total_cancelado, price_event, pagoActual);
          });
      }
    }
    //** PARA REALIZAR SUMAR EL PAGO EN LA INSCRIPCION */
    function editInscription(registro, total_cancelado, price_event, pagoActual) {
      db.events.update({ _id: registro.eventId, 'inscriptions.persons': registro.persona._id },
        {
          $set: {
            'inscriptions.$.total_price': total_cancelado + pagoActual,
            'inscriptions.$.bolivianos_price': total_cancelado + pagoActual,
            'inscriptions.$.dolares_price': 0,
            'inscriptions.$.canceled_price': total_cancelado + pagoActual
          }
        }).exec(function (err, inscri) {
          if (err) return res.status(400).send(err);
          editProfile(registro, pagoActual, total_cancelado, price_event);
        });
    }
    function editProfile(registro, pagoActual, total_cancelado, price_event) {
      db.events.findOne({ _id: registro.eventId }, { programs: 1 }, function (err, event) {
        if (err) return res.status(400).send(err);
        db.persons.update({ _id: registro.persona._id, 'profile.programs': event.programs },
          {
            $set: {
              'profile.$.payed': total_cancelado + pagoActual,
              'profile.$.debt': price_event - (total_cancelado + pagoActual)
            }
          }).exec(function (err, profile) {
            if (err) return res.status(400).send(err);
            return res.status(200).send(profile);
          });
      });
    }
  })
  ////////////////////////////////////////////////////
  .post('/descriptionProfile/:id', function (req, res) {
    db.persons.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(req.params.id) } },
      { $project: { profile: 1 } },
      { $unwind: '$profile' },
      { $match: { 'profile._id': mongoose.Types.ObjectId(req.body.profileId) } },
      {
        $lookup: {
          from: "modulars",
          let: { person_id: "$_id", person_profile: "$profile._id" },
          pipeline: [{
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$persons", "$$person_id"] },
                  { $eq: ["$profile", "$$person_profile"] }]
              }
            }
          }],
          as: "modulars"
        }
      }
    ]).exec(function (err, person) {
      if (err) return res.status(404).send(err);
      return res.status(200).send(person[0]);
    })
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

  .post('/', function (req, res, next) {
    db.persons.findOne({ ci: req.body.persona.ci }, function (err, ciExist) {
      if (err) return res.status(400).send(err);
      if (ciExist == null) { req.body.found = false; validCell(); }
      else { req.body.found = true; req.body.persona = ciExist; next(); }
    });
    function validCell() {
      db.persons.findOne({ cellphone: req.body.persona.cellphone }, function (err, celExist) {
        if (err) return res.status(400).send(err);
        if (celExist == null) { req.body.found = false; next(); }
        else { req.body.found = true; req.body.persona = celExist; next(); }
      });
    }
  })
  .post('/', function (req, res) {
    if (req.body.found) return res.status(404).send('Persona Existente');
    var person = new db.persons(req.body.persona);
    person.save(function (err, person) {
      if (err) { return res.status(400).send(err); }
      return res.status(200).send(person);
      // addInscription(person, req.body.inscription, req.body.eventId);
    });
  })
  ///////////////////////////////////////////////////////////////////////////////////////////////// 
  .get('/existCi/:id', function (req, res) {
    db.persons.findOne({ ci: req.params.id }, { first_name: 1, last_name: 1 }, function (err, user) {
      if (err) return console.log(err);
      if (user == null) return res.sendStatus(404);
      return res.status(200).send(user);
    });
  })
  //////////////////////////////////////////////////////////////

  /**esta consulta obtine el perfil y los modulars de la persona con su assistencia */
  .get('/existCiAmount/:id', function (req, res) {
    var arrayIds = req.params.id.split('-');
    var ci = arrayIds[0];
    var eventId = arrayIds[1];
    db.persons.findOne({ ci: ci }, { _id: 1, first_name: 1, last_name: 1 }, function (err, user) {
      if (err) return console.log(err);
      if (user == null) return res.sendStatus(404);
      db.events.findOne({ _id: eventId }, { programs: 1 }, function (err, event) {
        if (err) return console.log(err);
        if (event == null) return res.sendStatus(404);
        db.persons.aggregate([
          { $match: { _id: mongoose.Types.ObjectId(user._id) } },
          { $project: { profile: 1, first_name: 1, last_name: 1 } },
          { $unwind: '$profile' },
          { $match: { 'profile.programs': { $eq: event.programs } } },
          // { $group: { _id: { persons: '$inscriptions.persons' }, total: { $sum: 1 } } }
        ], function (err, pers) {
          if (err) { return res.status(400).send(err); }
          if (pers == null) return res.sendStatus(404);
          //console.log(pers);
          let modules = [];
          var modulesName = [];
          db.modules.find({ programs: event.programs }, function (err, moduls) {
            if (err) { return res.status(400).send(err); }
            if (moduls == null) return res.sendStatus(404);
            for (let i = 0; i < moduls.length; i++) {
              modules.push(moduls[i]._id);
            }
            db.modulars.find({ persons: user._id, modules: { $in: modules }, assist: false }, function (err, modularsPerf) {
              if (err) { return res.status(400).send(err); }
              if (modularsPerf == null) return res.sendStatus(404);//cuando la persona no tiene faltas en modulos
              var listModuls = [];
              for (var e = 0; e <= modularsPerf.length - 1; e++) {
                for (var j = 0; j <= moduls.length - 1; j++) {
                  var mod = moduls[j]._id;
                  if (JSON.stringify(modularsPerf[e].modules) == JSON.stringify(mod)) {
                    var modulars1 = {
                      name: moduls[j].name,
                      modules: moduls[j]._id,
                      assist: modularsPerf[e].assist
                    };
                    listModuls.push(modulars1);
                  } else {
                    console.log('falla  ' + moduls[j]._id);
                  }
                }
              }
              db.events.find({ _id: eventId }, { modulars: 1 }, function (err, modulars) {
                if (err) return res.status(400).send(err);
                if (modulars == null) return res.status(404).send();
                var modulares = modulars[0];
                /////////////////////////////////////////////////////////////////////////////7
                var listModuls2 = [];
                for (var e = 0; e <= modulares.modulars.length - 1; e++) {
                  for (var j = 0; j <= listModuls.length - 1; j++) {
                    var mod2 = listModuls[j].modules;
                    if (JSON.stringify(modulares.modulars[e].modules) == JSON.stringify(mod2)) {
                      var modulars2 = {
                        name: listModuls[j].name,
                        _id: modulares.modulars[e]._id,
                        modules: listModuls[j].modules,
                        assist: listModuls[j].assist
                      };
                      listModuls2.push(modulars2);
                    } else {
                      console.log('falla doss ' + listModuls[j].modules);
                    }
                  }
                }
                //////////////////////////////////////////////////////////////////////////7
                var result = {
                  first_name: pers[0].first_name,
                  last_name: pers[0].last_name,
                  profile: pers[0].profile,
                  modularsPer: listModuls2
                };
                return res.status(200).send(result);
              });
            });
          });
        });
      });
    });
  })
  .post('/upload', multipartMiddleware, function (req, res) {
  })
  .put('/:id', function (req, res) {
    db.persons.findOne({ _id: req.params.id }, function (err, person) {
      if (err) return res.status(400).send(err);
      if (person == null) return res.status(404).send();

      for (i in req.body) {
        person[i] = req.body[i];
      }
      person.save(function (err, person) {
        if (err) return res.status(400).send(err);

        return res.status(200).send(person);
      });
    });
  })
  .put('/ocupation/:id', function (req, res) {
    db.persons.update({ _id: req.params.id },
      {
        $set: {//Universitario
          'descOcupation.carrera': req.body.carrera,
          'descOcupation.universidad': req.body.universidad,
          'descOcupation.semestre': req.body.semestre,
          //Particular
          'descOcupation.areaTrabajo': req.body.areaTrabajo,
          //Profesional
          'descOcupation.profesion': req.body.profesion,
          'descOcupation.empresa': req.body.empresa,
          'descOcupation.cargo': req.body.cargo,
        }
      }).exec(function (err, off) {
        if (err) return res.status(400).send(err);
      })
  })
  //////////////////////////////////////////////////////////////////////////////////////
  .put('/finalWork/:id', function (req, res) {
    db.persons.update({ _id: req.params.id, 'profile._id': req.body.profileId },
      {
        $set: {
          'profile.$.final_work': req.body,
        }
      }).exec(function (err, off) {
        if (err) return res.status(400).send(err);
        return res.status(200).send(off)
      });
  })
  //////////////////////////////////////////////////////////////////////////////////////
  .put('/review/:id', function (req, res) {
    db.persons.update({ _id: req.params.id, 'profile._id': req.body.profileId },
      {
        $push: {
          'profile.$.final_work.revisions': req.body,
        }
      }).exec(function (err, off) {
        if (err) return res.status(400).send(err);
        return res.status(200).send(off)
      });
  })
  //////////////////////////////////////////////////////////////////////////////////////
  .delete('/:id', function (req, res) {
    db.persons.remove({ _id: req.params.id }, function (err, person) {
      if (err) return res.status(400).send(err);

      return res.status(200).send(person);
    });
  });

module.exports = router;