var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var jwt = require('jsonwebtoken');
var db = require('../models/db');
var router = express.Router();

router
    .get('/', function (req, res) {
        /////lista todas las cajas activas//////
        db.cashFlowOffices.find({active:true}, function (err, cajas) {
        if (err) return res.status(400).send(err);

        })
    })

    .get('/current/:id',function(req,res){
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa'+req.params.id)
        db.users.findOne({_id:req.params.id},function(err,user){
            console.log("hola desde las be en currrent")
            // if(err)return res.status(400).send(err);
            console.log(user);
            db.cashFlowOffices.findOne({offices:user.offices},function(err,cajaSucursal){

                if(err)return res.status(400).send(err);
                return res.status(200).send(cajaSucursal);
            })
        })
    })

;



module.exports = router;
