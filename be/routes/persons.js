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
  .get('/inscriptionPerson/:id', function(req, res){
    var arrayIds = req.params.id.split('-');
      this.personId = arrayIds[0];
      this.eventId = arrayIds[1];
      console.log(this.eventId);
      console.log(this.personId);
      db.events.aggregate([
        { $match: { _id: mongoose.Types.ObjectId(eventId) } },
        { $project: { inscriptions: 1 } },
        { $unwind: '$inscriptions' },
        { $match: { 'inscriptions.persons': { $eq: mongoose.Types.ObjectId(personId) } } },
        //{ $group: { _id: { persons: '$inscriptions.persons' }, total: { $sum: 1 } } }
      ], function (err, events) {
        if (err) return res.status(400).send(err);
       // console.log(events);
       // console.log('aqui el inscription de persona');
        return res.status(200).send(events);
      });
  })
  .put('/profile/:id',function(req, res){
    console.log(req.body);
    db.persons.update({ _id: req.params.id , 'profile._id': req.body.profileId},
      {
        $set: {
          'profile.$.requirements.photograpy': req.body.photo,
          'profile.$.requirements.photocopy_ci': req.body.ci,
          'profile.$.requirements.photocopy_titule': req.body.titulo,        
        }
      },function(err, persons){
        if(err) return res.status(404).send();
        console.log(persons);
        return res.status(200).send(persons);
      })
  })
  .post('/controlPago',function(req, res){
    db.events.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(req.body.eventId) } },
      { $project: { inscriptions: 1 } },
      { $unwind: '$inscriptions' },
      { $match: { 'inscriptions.persons': { $eq: mongoose.Types.ObjectId(req.body.persona._id) } } },
      //{ $group: { _id: { persons: '$inscriptions.persons' }, total: { $sum: 1 } } }
    ], function (err, inscript) {
      if (err) return res.status(400).send(err);
      console.log('aqui el inscription de persona');
      var eventInscripton = inscript[0];
      //return res.status(200).send(events);
      getLists(req.body, eventInscripton.inscriptions.total_price, eventInscripton.inscriptions.price_event);
    });
    function getLists(registro, total_cancelado, price_event){
      var pagoActual = registro.inscription.canceled_price;
      db.lists.findOne({ person: registro.persona._id,events: registro.eventId,
                         modulars:registro.modularsId},function(err, lista){
          if (err) return res.status(400).send(err);
          addModularsAmount(registro, pagoActual, total_cancelado, price_event, lista);
      });
    }  
    function addModularsAmount(registro, pagoActual, total_cancelado, price_event, lista){
      console.log('modulo ID: '+registro.moduleId+' Event ID: '+registro.eventId+' Persona ID: '+registro.persona._id);
      console.log(JSON.stringify(null), registro.moduleId);
      if(JSON.stringify(null) == registro.moduleId){
          if(pagoActual < 1 ){
              console.log('No Puede pagar (0.00 Bs) en el pago Extra');
              return res.status(400).send(lista);////verificar
          }else{
            db.persons.findOne({ _id: registro.persona._id }, function (err, ps) {
              if (err) return res.status(400).send(err);
              if (ps == null) return res.status(404).send();
              db.events.findOne({_id: registro.eventId},{ programs: 1},function(err, event){
                  if (err) return res.status(400).send(err);
                  var profileId = null;
                  for (let i = 0; i < ps.profile.length; i++) {
                    console.log('bucando el profileID'+ i);
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
                      console.log('CONTROL CREADO :) CORRECTAMENTE')
                      //return res.status(200).send(modular);
                      crearLists(registro, pagoActual, total_cancelado, price_event, lista);
                  });
              });
            });
          } 
      }else{
        console.log('########## control pago Amount #########');
        crearLists(registro, pagoActual, total_cancelado, price_event, lista);
      }
    }
    function crearLists(registro, pagoActual, total_cancelado, price_event, lista){
      if(lista == null ){ 
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
                console.log('Lista nueva creada del nuevo Pago en el modulo');
                // return res.status(200).send(lists);
               // editInscription(registro, total_cancelado, price_event , pagoActual);
               updateModulars(registro, total_cancelado, price_event , pagoActual);
          });
      }else{//caso que exista obtener el modulo y el pago anterior y si debe enviar mensaje,sino
          console.log('Lista el monto bolibianos = '+lista.bolivianos)    
          if( lista.bolivianos == 0 || lista.bolivianos == undefined ){
              db.lists.update({ person: registro.persona._id, events: registro.eventId, 
                                modulars: registro.modularsId},
                { $set: {  
                      'bolivianos': registro.inscription.canceled_price,
                      'dolares': 0,
                      'receipt': registro.inscription.receipt, // varios recibos
                      //'assist': Boolean,
                      'type': 2, //nuevo // nivelacion
                  }
              }).exec(function (err, off) {
                      if (err) return res.status(400).send(err);
                      //return res.status(200).send(off);
                      console.log('Lista actualizada de pago = 0.00 : ');
                      updateModulars(registro, total_cancelado, price_event , pagoActual);
              });
          }else{
              console.log('El modulo ya se cancelo, o sino debe realizar un Correlativo');
              return res.status(400).send(lista);
          }
      }
    }
    function updateModulars(registro, total_cancelado, price_event , pagoActual){
      if(JSON.stringify(null) == registro.moduleId){
        editInscription(registro, total_cancelado, price_event , pagoActual);
      }else{
          var amounte = {  // observation
            detail: 'Control Pago',
            receipt: registro.inscription.receipt,// nro factura
            date: new Date(),
            amount: pagoActual
          };
          // db.modulars.update({ persons: registro.persona._id,events: registro.eventId,modules: registro.moduleId },
          db.modulars.update({ persons: registro.persona._id,modules: registro.moduleId },
            { 
                    $set: {'amount': amounte}
                  }).exec(function (err, off){
                  if (err) return res.status(400).send(err);
                  console.log(off);
                  console.log('CONTROL en modulars Actualizado')
                  //return res.status(200).send(off);
                  editInscription(registro, total_cancelado, price_event , pagoActual);
          });
      }
    }
    //** PARA REALIZAR SUMAR EL PAGO EN LA INSCRIPCION */
    function editInscription(registro, total_cancelado, price_event, pagoActual){
      db.events.update({ _id: registro.eventId, 'inscriptions.persons': registro.persona._id },
      {
        $set: { 
          'inscriptions.$.total_price': total_cancelado + pagoActual,
          'inscriptions.$.bolivianos_price': total_cancelado  + pagoActual,
          'inscriptions.$.dolares_price': 0,
          'inscriptions.$.canceled_price':  total_cancelado + pagoActual
        }
       }).exec(function (err, inscri) {
          if (err) return res.status(400).send(err);
          console.log('Inscripcion Actualizado: ');
          //return res.status(200).send(event);
          editProfile( registro, pagoActual, total_cancelado, price_event);
        });
    }
    function editProfile(registro, pagoActual, total_cancelado, price_event){
       db.events.findOne({_id: registro.eventId},{ programs: 1},function(err, event){
        if (err) return res.status(400).send(err);
        db.persons.update({ _id: registro.persona._id, 'profile.programs': event.programs},
          {
            $set: { 
              'profile.$.payed': total_cancelado + pagoActual,
              'profile.$.debt': price_event - (total_cancelado  + pagoActual)
            }
          }).exec(function (err, profile) {
              if (err) return res.status(400).send(err);
              console.log('Profile Actualizado: ');
              return res.status(200).send(profile);
            });
        });
    }    
  })
  ////////////////////////////////////////////////////
  .post('/descriptionProfile/:id', function (req, res) {
    // console.log(req.params.id, req.body.profileId)
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
      // console.log(person[0])
      return res.status(200).send(person[0]);
    })
  })
  ///////////////////////////////////
  // .get('/:id', function (req, res) {
  //   db.events.findOne({ _id: req.params.id }, function (err, event) {
  //     if (err) return res.status(400).send(err);
  //     if (event == null) return res.status(404).send();
  //     // return res.status(200).send(event);
  //     getProgram(event);
  //   });
  //   function getProgram(event) {
  //     db.programs.findOne({ _id: event.programs }, { name: 1 }, function (err, program) {
  //       if (err) return res.status(400).send(err);
  //       console.log(program)
  //       event.name = program.name;
  //       // return res.status(200).send(event);
  //       var persons = event.inscriptions.map(i => i.person);
  //       getPerson(persons, event);
  //     });
  //   }
  //   function getPerson(persons, event) {
  //     db.persons.find({ _id: { $in: persons } }, function (err, persons) {
  //       if (err) return res.status(400).send(err);
  //       // console.log(persons)
  //       event.inscriptions.forEach(i => {
  //         persons.forEach(person => {
  //           if (JSON.stringify(i.person) == JSON.stringify(person._id)) {
  //             i.persons = person.first_name + ' ' + person.last_name;
  //           }
  //         });
  //       });
  //       // console.log(event);
  //       return res.status(200).send(event);
  //     });
  //   }

  // })
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
        var eventId= arrayIds[1];
    db.persons.findOne({ ci: ci }, { _id:1, first_name: 1, last_name: 1 }, function (err, user) {
      if (err) return console.log(err);
      if (user == null) return res.sendStatus(404);
        db.events.findOne({_id: eventId},{programs:1},function(err,event){
          if (err) return console.log(err);
          if (event == null) return res.sendStatus(404);
          db.persons.aggregate([
            { $match: { _id: mongoose.Types.ObjectId(user._id) } },
            { $project: { profile: 1 ,first_name:1, last_name:1} },
            { $unwind: '$profile' },
            { $match: { 'profile.programs': { $eq: event.programs } } },
                // { $group: { _id: { persons: '$inscriptions.persons' }, total: { $sum: 1 } } }
          ], function (err, pers) {
                if (err) { return res.status(400).send(err); }
                if (pers == null) return res.sendStatus(404);
                //console.log(pers);
                let modules = [];
                var modulesName=[];
                db.modules.find({ programs: event.programs }, function (err, moduls) {
                    if (err) { return res.status(400).send(err); }
                    if (moduls == null) return res.sendStatus(404);
                    for (let i = 0; i < moduls.length; i++) {
                        modules.push(moduls[i]._id);
                    }
                    db.modulars.find({persons: user._id, modules: { $in: modules },assist:false},function(err, modularsPerf){
                      if (err) { return res.status(400).send(err); }
                      if (modularsPerf == null) return res.sendStatus(404);//cuando la persona no tiene faltas en modulos
                      console.log('el modulars del perfil');
                      var listModuls= [];
                      for(var e=0; e<= modularsPerf.length-1; e++){
                        for(var j=0; j <= moduls.length-1; j++){
                            var mod = moduls[j]._id;
                            if(JSON.stringify(modularsPerf[e].modules)==JSON.stringify(mod)) {
                              var modulars1 = {
                                name: moduls[j].name,
                                //_id: modularsPerf[e]._id,
                                modules: moduls[j]._id,
                                assist:modularsPerf[e].assist
                              };
                              listModuls.push(modulars1);  
                            }else{
                              console.log('falla  '+ moduls[j]._id);
                              //return res.status(404).send();
                            }
                        }
                      }
                      db.events.find({_id: eventId}, {modulars: 1},function(err, modulars){
                        if (err) return res.status(400).send(err);
                        if (modulars == null) return res.status(404).send();
                        var modulares = modulars[0];
                        /////////////////////////////////////////////////////////////////////////////7
                        var listModuls2= [];
                        for(var e=0; e<= modulares.modulars.length-1; e++){
                          for(var j=0; j <= listModuls.length - 1; j++){
                            var mod2 = listModuls[j].modules;
                              if(JSON.stringify(modulares.modulars[e].modules)==JSON.stringify(mod2)) {
                                          var modulars2 = {
                                              name: listModuls[j].name,
                                              _id: modulares.modulars[e]._id,
                                              modules: listModuls[j].modules,
                                              assist:listModuls[j].assist
                                          };
                                          listModuls2.push(modulars2);
                              }else{
                                    console.log('falla doss '+ listModuls[j].modules);
                              }
                          }
                        }
                        //////////////////////////////////////////////////////////////////////////7
                        var result = {
                          first_name:pers[0].first_name ,
                          last_name: pers[0].last_name,
                          profile:pers[0].profile,
                          modularsPer: listModuls2
                        };
                        console.log(result);
                        return res.status(200).send(result);
                      });
                    });
                });
          });
        });
    });
  })
  ////////////////////////////////////////////////////////////////////////////
  // .post('/profile/:id', function (req, res) {
  //   db.persons.findOne({ _id: req.params.id }, function (err, person) {
  //     if (err) return res.status(400).send(err);
  //     if (person == null) return res.status(404).send();
  //     console.log(person)
  //     console.log(req.body)
  //     var idProfile = req.body;
  //     var profile = person.profile.map((i) => i.person);
  //     getProfilePerson(profile);
  //   });
  //   function getProfilePerson(profile) {
  //     db.persons.findOne({ _id: profile }, { profile: 1 }, function (err, profile) {
  //       if (err) return res.status(400).send(err);
  //       console.log(profile)
  //       return res.status(200).send(profile);
  //     })
  //   }
  // })
  //////////////////////////////////////////////////////////////////////////
  .post('/upload', multipartMiddleware, function (req, res) {

    console.log(req.body, req.files);
    console.log(req.files.fileKey.path);
    //   var workbook = XLSX.readFile(req.files.fileKey.path);
    //   var sheet_name_list = workbook.SheetNames;
    //   var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    //   console.log(xlData); 

    //   for(let contact of xlData){
    //       let newPerson=new db.persons(req.body);

    //       if(contact.Mobile!=undefined){
    //           newPerson.first_name=contact.Firstname;
    //           if(contact.Lastname!=null){
    //               newPerson.last_name=contact.Lastname;
    //           }else{
    //               newPerson.last_name='';
    //           }
    //           newPerson.ci=0;
    //           newPerson.phone=0;
    //           let numero='s'+contact.Mobile;
    //           if(numero.length==9){
    //               newPerson.cellphone=numero.substring(1,9);
    //           }else{
    //               newPerson.cellphone=numero.substring(6,numero.length);
    //           }
    //           newPerson.whatsapp_group='Importados del celular';
    //           newPerson.city='';
    //           newPerson.email='';
    //           newPerson.ocupation='Particular';
    //           newPerson.descOcupation={carrera:'',
    //                                   universidad:'',
    //                                   semestre:'',
    //                                   areaTrabajo:'Otro',
    //                                   profesion:'',
    //                                   empresa:'',
    //                                   cargo:''};

    //           newPerson.save(function(err,person){
    //               if (err) return res.status(400).send(err);
    //               return res.status(200).send();
    //           })
    //       }
    //   }
  })
  // .post('/', function (req, res) {
  //    var person = new db.persons(req.body.persona);
  //    console.log(req.body);
  //    db.persons.findOne({ ci: req.body.persona.ci, cellphone: req.body.persona.cellphone }, function (err, existeCellphone) {
  //       if (existeCellphone == null) {
  //          console.log('llegue aqui');
  //          //if(person.first_name == '' || person.last_name == '' || person.ci == '' || person.carteras == '') 
  //          //return res.status(400).send(); 
  //          // save person
  //          person.save(function (err, person) {
  //             console.log('persona guardada');
  //             if (err) { return res.status(400).send(err); }
  //             addInscription(person, req.body.inscription, req.body.eventId);
  //          });
  //          function addInscription(person, inscri, idEvent) {
  //             db.events.findOne({ _id: idEvent }, function (err, events) {
  //                console.log(events);
  //                db.modules.find({ programs: events.programs }).count().exec(function (err, moduls) {
  //                   console.log(moduls);
  //                   console.log('llegue al la cantidad de modulos');
  //                   var modulPrice = inscri.price_event / moduls;///////DIVISION
  //                   console.log(modulPrice);
  //                   var inscription = {
  //                      // segun al numero de asistencias sacar el precio total q tiene q pagar
  //                      total_price: 0,//sumatorio por asistencia de cada modulo
  //                      module_price: modulPrice,
  //                      bolivianos_price: inscri.canceled_price,
  //                      dolares_price: 0,
  //                      canceled_price: inscri.canceled_price,
  //                      price_event: inscri.price_event,
  //                      receipt: inscri.receipt,
  //                      name: person.name,
  //                      ci: person.ci,
  //                      cellphone: person.cellphone,
  //                      persons: person._id,
  //                      users: inscri.users
  //                   };
  //                   var d = new Date();
  //                   //////////////////////
  //                   // db.events.update({ _id: idEvent, 'inscriptions.person': req.body.person },
  //                   //       {
  //                   //             $set: { 'inscriptions.$.state': req.body.state, 'inscriptions.$.description': req.body.description }
  //                   //       }).exec(function (err, off) {
  //                   //             if (err) return res.status(400).send(err);
  //                   //             //db.events.find({ _id: req.body.name, _id: { $in: req.body.person } }, function (err, event) {
  //                   //             db.events.find({ _id: req.body.name }, function (err, event) {
  //                   //                   if (err) return res.status(401).send(err);
  //                   //             return res.status(201).send(event);
  //                   //             });
  //                   //             //	if (off.nModified == 0) return res.status(406).send();
  //                   //       });
  //                   db.events.update({ _id: idEvent },
  //                      {
  //                         $push: {
  //                            inscriptions: inscription
  //                         }
  //                      }, {
  //                         multi: true
  //                      }, function (err, events) {
  //                         if (err) return res.status(400).send(err);
  //                         console.log(events);
  //                         // if (events == null) return res.status(404).send();
  //                         return res.status(200).send(person);
  //                      });
  //                });//fin module
  //             });//fin Event
  //          }
  //       } else {
  //          if (err) return res.status(400).send(err);
  //          console.log('La Persona ya existe');
  //       }
  //    });
  //    //       }else{
  //    //             if (err) return res.status(400).send(err);
  //    //             console.log('El numero de CI de la Persona ya existe')
  //    //       }
  //    //    });      
  // })

  .put('/:id', function (req, res) {
    console.log("exito");
    console.log(req.params.id);
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
    console.log(req.body);
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
    // db.events.update({ _id: req.body.name, 'inscriptions.person': req.body.person },
    //    {
    //       $set: { 'inscriptions.$.state': req.body.state, 'inscriptions.$.description': req.body.description }
    //    }).exec(function (err, off) {
    //       if (err) return res.status(400).send(err);
    //       db.events.find({ _id: req.body.name, _id: { $in: req.body.person } }, function (err, event) {
    //          if (err) return res.status(401).send(err);
    //          return res.status(201).send(event);
    //       });
    //       //	if (off.nModified == 0) return res.status(406).send();
    //    });
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
        console.log(off)                
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
        console.log(off)                
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