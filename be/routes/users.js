var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var jwt = require('jsonwebtoken');
var db = require('../models/db');
var router = express.Router();

const fs = require('fs');
// var mongojs = require('mongojs');
// var db = mongojs('test', []); 

/**
 * @param {string} directorio de destino
 * @param {string} texto a escribir dentro del archivo
 * @param {function} manejador de funcion 
 */
router
   // .get('/', function (req, res, next) {
   // 	f.validation(res, req.body.token, next);
   //   })
   .get('/backup', function (req, res){
        //var collectionNames = db.getCollectionNames()[0];
        var collections=db.getCollectionNames();
        console.log(collections);
        // console.log(collectionNames);
        // db.collectionNames[0].find({},function(err, col){
        //   if (err) return res.status(400).send(err);
        //   saveWriteFile(col, collectionNames[0]);
        
        //   return res.status(200).send(events);
        // });
        db.events.find({},function(err, col){
          if (err) return res.status(400).send(err);
          saveWriteFile(col, 'events');
        
          return res.status(200).send(events);
        });
        function saveWriteFile(date, dbName){
         // var content = JSON.parse(JSON.stringify(events));
            var content = JSON.stringify(date);
            var ruta = "./backups/"+dbName+".json";
            fs.writeFile(ruta, content, function (err) {
                if (err) {
                    console.log(err);
                    //return res.status(400).send(err);
                }
                console.log("El archivo $dbName fue Guardado!");
                //return res.status(200).send(events);
            });
        }
    })
   .get('/', function (req, res) {
      db.users.find({}, { name: 1, active: 1, password_hash: 1, rol: 1 }, function (err, users) {
         if (err) return res.status(400).send(err);
         return res.status(200).send(users);
         //console.log(res.status(200).send(users))
      });
   })

   .get('/roles', function (req, res) {
      db.roles.find({}, function (err, users) {
         if (err) return res.status(400).send(err);

         return res.status(200).send(users);
      });
   })
   
   .get('/getEjecutivoToEdit/:id', function (req, res) {
      db.users.findOne({ _id: req.params.id }, function (err, user) {
         if (err) return res.status(400).send(err);
         if (user == null) return res.status(404).send();
            let eje={};
            eje._id=user._id;
            eje.name=user.name;
            eje.lastname=user.lastname;
            eje.password_hash=user.password_hash;
            eje.active=user.active;
            eje.cell=user.cell;
            eje.correo=user.correo;
            eje.rol=user.rol;
            eje.offices=user.offices;
            db.carteras.findOne({user:user._id},function(err,cart){
                if (err) return res.status(400).send(err);
                eje.cartera=cart;
                console.log(cart);
                return res.status(200).send(eje);
                
            })
           

      });
   })

   .get('/:id', function (req, res) {
    db.users.findOne({ _id: req.params.id }, function (err, user) {
       if (err) return res.status(400).send(err);
       if (user == null) return res.status(404).send();
       return res.status(200).send(user);
    });
 })

   
   .get('/:name', function(req, res){
      db.users.findOne({_id: req.params.name}, function(err, user){
          if(err) return res.status(400).send(err);
          if(user == null) return res.status(404).send();
          return res.status(200).send(user);
      })
   })
   .get('/:password', function(req, res){
    db.users.findOne({_id: req.params.password_hash}, function(err, user){
        if(err) return res.status(400).send(err);
        if(user == null) return res.status(404).send();
        return res.status(200).send(user);
    })
    })
   .delete('/:id', function (req, res) {

      db.users.deleteOne({ _id: req.params.id }, function (err, user) {

         if (err) return res.status(400).send(err);
         if (user == null) return res.status(404).send();
         return res.status(200).send(user);
      })
   })

   .get('/rolName/:id', function (req, res) {

      db.roles.findOne({ _id: req.params.id }, function (err, roleName) {
         if (err) return res.status(400).send(err);
         if (roleName == null) return res.sendStatus(404);

         return res.status(200).send(roleName);
      });
   })
   .post('/auth', function (req, res) {
      if (typeof req.body._id == null) res.send(403);
      db.users.findOne({ _id: req.body._id, active: true }, { password_hash: 0 }, function (err, user) {
         if (err) return console.log(err);
         if (user == null) return res.sendStatus(404);
         return res.status(200).send(user);
      });
   })
   .post('/exist', function (req, res) {
      db.users.findOne({ _id: req.body._id }, { rol: 1, name: 1, active: 1 }, function (err, user) {
         if (err) return console.log(err);
         if (user == null) return res.sendStatus(404);

         return res.status(200).send(user);
      });
   })

   .get('/existName/:id', function (req, res) {
      db.users.findOne({ name: req.params.id }, { name: 1 }, function (err, user) {
         if (err) return console.log(err);
         if (user == null) return res.sendStatus(404);
         return res.status(200).send(true);
      });
   })

   .post('/token', function (req, res) {
      //MORE data
      if (typeof req.body.toke == null) res.send(403);
      db.users.findOne({ token: req.body.toke, active: true }, function (err, user) {
         if (err) return console.log(err);
         if (user == null) return res.sendStatus(404);

         res.status(200).send(user);
      });
   })

   .post('/register', function (req, res, next) { 
      var role_id;
      db.roles.findOne({ name: 'Admin' }, function (err, role) {
         if (err) return res.status(400).send(err);
         if (role == null) return res.sendStatus(404);
         role_id = role._id;
         //    console.log(req.body);
         validating(role_id);
      });
      function validating(role_id) {
         db.users.findOne({ _id: req.body._id, rol: role_id }, function (err, user) {
            if (err) return console.log(err);
            if (user == null) return res.sendStatus(405);
            // console.log(user);
            validarGerente();
         });
      }
      function validarGerente(){
        db.roles.findOne({ name: 'Gerente' }, function (err, role) {
            if (err) return res.status(400).send(err);
            if (role == null) return res.sendStatus(404);
            var roleId = role._id;
            console.log(JSON.stringify(roleId), req.body.rol);
            if(roleId == req.body.rol){
                db.users.findOne({rol: req.body.rol, offices: req.body.offices}, function(err, us){
                    if (err) return console.log(err);
                    if (us != null) return res.sendStatus(404);
                    console.log('Este si es Gerente');
                    next();
                });
            }else{
                console.log('No es Gerente');
                next();
            }
         });
      }
   })
   .post('/register', function (req, res) {
      req.body._id = undefined;
      var _user = req.body;
      _user.active = true;
      _user.password_hash = _user.name;

      var user_model = new db.users(_user);
      user_model.token = jwt.sign(user_model._id + '' + user_model.record_date, 'AltaPrecision'); //FIX
      user_model.tokens = [user_model.token];
      user_model.amount=0;
      user_model.debt=0;
      db.users.findOne({cell:user_model.cell},function(err,us){
        if (err) return console.log(err);
        if(us==null){
            user_model.save(function (err, user) {
                if (err) return console.log(err);
       
       
                var nuevaCaja = new db.cashFlowUsers();
                nuevaCaja.date_start = new Date();
                nuevaCaja.dete_end = '';
                nuevaCaja.amount = 0;
                nuevaCaja.amount_delivered = 0;
                nuevaCaja.active = true;
                nuevaCaja.state = -1;
                nuevaCaja.user = user._id;
       
                nuevaCaja.save();
       
                res.status(201).send(user);
             });
        }else{
            return res.status(404).send('Usuario ya existe')
        }      

      })
     
   })

   .post('/login', function (req, res) {
      //modificar active
      db.users.findOne({ name: req.body.name, password_hash: req.body.password_hash, active: true }, { rol: 1, _id: 1 }, function (err, user) {
         console.log(user)
         if (err) return console.log(err);
         console.log(user);
         if (user == null) return res.sendStatus(404);

         res.status(200).send(user);
      });
   })
   //    .post('/logins', function (req, res) {
   //       // console.log('test')
   //       console.log(req.body);
   //       //modificar active
   //       db.users.findOne({ name: req.body.name, password_hash: req.body.password_hash}, 
   //             { rol: 1, _id: 1 },//nos devuelve el rol y id de este user
   //            function (err, user) {
   //          if (err) return console.log(err);
   //          if (user == null) return res.sendStatus(404);
   //          res.status(200).send(user);
   //          db.users.update({ _id: req.body._id },
   //             {$set:{ active: true }}
   //          );
   //       });
   //    })

   // .post('/logout', function (req, res) {
   // 	db.users.findOne({phone: req.body.phone, password_hash: req.body.password_hash}, function (err, user_model) {
   // 		if (err) return console.log(err);
   // 		if (user_model == null) return res.sendStatus(404);

   // 		user_model.token = jwt.sign(_user, 'password_hash_key_token'); //FIX
   // 		user_model.tokens = user_model.tokens.push(_user.token);

   // 		user_model.save(function (err, user) {
   // 	    if (err) return console.log(err);

   // 			res.status(200).send(user);
   // 		});
   // 	});
   // })


   .post('/', function (req, res) {
      var users = new db.users(req.body);
      console.log(users);
      // if (person.first_name == '' || person.last_name == '' || person.ci == '' || person.user == '') return res.status(400).send();
      // save person
      users.save(function (err, users) {
         if (err) return res.status(400).send(err);
         return res.status(200).send(users);
      });
      // add vigent events


   })
   .put('/:id', function (req, res) {

      // console.log(req.body.user);
      // db.users.update(
      //    { _id: req.params.id },
      //    {
      //       $set: {
      //          name: req.body.user.name,
      //       //    salary: req.body.user.salary,
      //          active: req.body.user.active,
      //          password_hash: req.body.user.name,
      //          lastname:req.body.user.lastname,
      //          cell:req.body.user.cell,
      //          correo:req.body.user.correo,
      //          rol:req.body.user.rol,
      //          offices:req.body.user.offices

      //       }
      //    }, function (err, user) {
      //       if (err) return res.status(400).send(err);
      //       return res.status(200).send();
      //    });

      db.users.findOne({ _id: req.params.id }, function (err, user) {
         if (err) return res.status(400).send(err);
         if (user == null) return res.status(404).send();

         for (i in req.body) {
            user[i] = req.body[i];
            console.log(user[i]);
         }
         user.save(function (err, user) {
            if (err) return res.status(400).send(err);

            return res.status(200).send(user);
         });
      });
   });

module.exports = router;
