// import {Request, Response} from "express";
// import * as express from 'express';
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// import * as jwt from 'jsonwebtoken';
// import * as fs from "fs";

var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
const cookieParser = require('cookie-parser');
var jwt = require('jsonwebtoken');
var fs =require('fs');
var db = require('../models/db');
var router = express.Router();
// const RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');


// const app = express();

// app.use(bodyParser.json());

// app.route('/api/login')
//     .post(loginRoute);

// const RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');

// export function loginRoute(req, res) {

//     const email = req.body.email,
//           password = req.body.password;

//     if (validateEmailAndPassword()) {
//        const userId = findUserIdForEmail(email);

//         const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
//                 algorithm: 'RS256',
//                 expiresIn: 120,
//                 subject: userId
//             }

//           // send the JWT back to the user
          
//           // TODO - multiple options available                              
//     }
//     else {
//         // send status 401 Unauthorized
//         res.sendStatus(401); 
//     }
// }


router

 .post('/loginAuth', function (req, res) {
    //  let username=req.body.username;
    //  let userpassword=req.body.userpassword;
     db.users.findOne({ name: req.body.name, password_hash: req.body.password_hash, active: true }, { rol: 1, _id: 1 }, function (err, user) {
        console.log(user)
        if (err) return console.log(err);
        console.log(user);
        if (user == null) return res.sendStatus(404);
        const userId=user._id;
            let payload={subject:user._id}

            let jwtBearerToken = jwt.sign(payload,"secretKey")
        let jwtjson={
            
        }

        jwtjson.idToken=jwtBearerToken;
        jwtjson.expiresIn=70000000000000;
        jwtjson.identity=user;



        let nuevoJWTJson={};

        let nuevoJWTBeareToken=jwt.sign({exp:Math.floor(Date.now() / 1000) + (60), data:user._id},'secret');
        nuevoJWTJson.idToken=nuevoJWTBeareToken;
        nuevoJWTJson.identity=user;
        
        console.log(jwtjson)
         return res.status(200).send(jwtjson);
     });
   
  
 })

 
 module.exports = router;
