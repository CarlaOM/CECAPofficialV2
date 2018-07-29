var express = require('express');
const session = require('express-session');

var jwt = require('jsonwebtoken');
var db = require('../models/db');
var bcrypt = require('bcrypt');

var router = express.Router();

router
    .get('/isLogin', function (rea, res) {
        if (req.session.user) {
            return res.status(200).send({ loggedIn: true });
        } else {
            return res.status(200).send({ loggedIn: false });
        }
    })
    .post('/relogin', function (req, res) {

        db.users.findOne({ _id: req.body.id }, { password_hash: 0 }, function (err, user) {
            if (err) return res.status(400).send(err);
            return res.status(200).send(user);
        })
    })

    .post('/loginAuth', function (req, res) {
        let userpassword = req.body.userpassword;
        if(req.body.name=='a'){

            db.users.findOne({ name: req.body.name, password_hash: req.body.password_hash, active: true }, { rol: 1, _id: 1 }, function (err, user) {
                if (err) return console.log(err);
                if (user == null) return res.sendStatus(404);
                delete user.password_hash;
                req.session.user = user;
    
                const userId = user._id;
                let payload = { subject: user._id }
    
                let jwtBearerToken = jwt.sign(payload, "secretKey")
                let jwtjson = {
    
                }
    
                jwtjson.idToken = jwtBearerToken;
                jwtjson.expiresIn = 70000000000000;
                jwtjson.identity = user;
    
    
    
                let nuevoJWTJson = {};
    
                let nuevoJWTBeareToken = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60), data: user._id }, 'secret');
                nuevoJWTJson.idToken = nuevoJWTBeareToken;
                nuevoJWTJson.identity = user;
                return res.status(200).send(jwtjson);
            });
        }else{
            let userObtenido;
            db.users.findOne({name:req.body.name,active:true},function(err,user){
                if (err) return console.log(err);
                if (user == null) return res.sendStatus(404);
                userObtenido=user;
                return user;

            }).then(function(user){
                return bcrypt.compare(req.body.password_hash,user.password_hash);
            }).then(function(samePassword){
                if(!samePassword){
                    res.status(403).send();
                }else{
                    delete userObtenido.password_hash;
                    req.session.user=userObtenido;


                    const userId = userObtenido._id;
                    let payload = { subject: userObtenido._id }
        
                    let jwtBearerToken = jwt.sign(payload, "secretKey")
                    let jwtjson = {
        
                    }
        
                    jwtjson.idToken = jwtBearerToken;
                    jwtjson.expiresIn = 70000000000000;
                    jwtjson.identity = userObtenido;
        
        
        
                    let nuevoJWTJson = {};
        
                    let nuevoJWTBeareToken = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60), data: userObtenido._id }, 'secret');
                    nuevoJWTJson.idToken = nuevoJWTBeareToken;
                    nuevoJWTJson.identity = userObtenido;
                    return res.status(200).send(jwtjson);
                        
                    }
            })
        }
        
    })
    .post('/logOut', function (req, res) {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).send('No puede cerrar sesion')
            } else {
                return res.status(200).send({});
            }
        })
    });

module.exports = router;
