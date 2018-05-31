var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var jwt = require('jsonwebtoken');
var db = require('../models/db');
var router = express.Router();

router
   
   .post('/addDetail',function(req,res){
        console.log(req.body);
        let cashOffice=req.body;
        let detail={};
        db.cashFlowOffices.findOne({_id:cashOffice._id},function(err,cashFOffice){

            db.offices.findOne({_id:cashFOffice.offices},function(err,off){
                detail.officeName=off.name;
                console.log(off);
                detail.cashFlowOffices=cashOffice._id;
                detail.dateCloseCash=new Date();
                detail.amount=cashOffice.amount_delivered;
                detail.description='';
                detail.input=true;
                detail.title='Cierre de Caja';
                // console.log('asdfasdfasdfasdfasfasdf')
                // console.log(detail);
                // console.log('1111111111111111111111')
                // console.log(cashOffice.offices);
                // console.log('2222222222222222222222222')
                // console.log('officesid'+req.body.offices)
                db.cashFlowPrincipal.findOne({offices:req.body.offices},function(err,cashPrincipal){
                 
                    if(err)res.status(400).send(err);
                    // console.log('eseta es la caja principal');
                    // console.log(cashPrincipal);
                    cashPrincipal.amount+=detail.amount;
                    cashPrincipal.details.push(detail);
                    cashPrincipal.save(function(err,cashP){
                        if(err)res.status(400).send(err);
                        return res.status(200).send(cashP);
                    })
                })
            })
        })    
        

   })
   .post('/getPrincipal',function(req,res){
       console.log(req.body);
        db.users.findOne({_id:req.body._id},function(err,user){
            if(err)res.status(400).send(err);
            console.log(user);
            console.log('este es el usuario')
            db.cashFlowPrincipal.findOne({offices:user.offices},function(err,principal){
                if(err)res.status(400).send(err);
                return res.status(200).send(principal);
            })
        })

   })
   ;
module.exports = router;