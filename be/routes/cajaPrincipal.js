var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var jwt = require('jsonwebtoken');
var db = require('../models/db');
var router = express.Router();

router
   
   .post('/addDetail',function(req,res){
        let cashOffice=req.body;
        let detail={};
        db.cashFlowOffices.findOne({_id:cashOffice._id},function(err,cashFOffice){
            db.offices.findOne({_id:cashFOffice.offices},function(err,off){
                detail.officeName=off.name;
                detail.cashFlowOffices=cashOffice._id;
                detail.dateCloseCash=new Date();
                detail.amount=cashOffice.amount_delivered;
                detail.description='';
                detail.input=true;
                detail.title='Cierre de Caja';
                db.cashFlowPrincipal.findOne({offices:req.body.offices},function(err,cashPrincipal){
                    if(err)res.status(400).send(err);
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
        db.users.findOne({_id:req.body._id},function(err,user){
            if(err)res.status(400).send(err);
            db.cashFlowPrincipal.findOne({offices:user.offices},function(err,principal){
                if(err)res.status(400).send(err);
                return res.status(200).send(principal);
            })
        })
   });
module.exports = router;