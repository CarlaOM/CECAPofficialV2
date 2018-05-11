var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var jwt = require('jsonwebtoken');
var db = require('../models/db');
var router = express.Router();

router
    .get('/', function (req, res) {
        db.cashFlowUsers.find({active:true}, function (err, cajas) {
        if (err) return res.status(400).send(err);



        return res.status(200).send(cajas);
        });
    })
    .get('/pending', function (req, res) {
        db.cashFlowUsers.find({state:0}, function (err, cajas) {
        if (err) return res.status(400).send(err);
        return res.status(200).send(cajas);
        });
    })
   .get('/:id', function (req, res) {
      db.cashFlowUsers.findOne({_id:req.params.id}, function (err, cajaUsuario) {
         if (err) return res.status(400).send(err);

         return res.status(200).send(cajaUsuario);
      });
   })
   .get('/byUser/:id', function (req, res) {
    db.cashFlowUsers.findOne({active:true,user:req.params.id}, function (err, cajaUsuario) {
       if (err) return res.status(400).send(err);

       return res.status(200).send(cajaUsuario);
    });
    })
 


 .post('/ingreso', function (req, res) {
     //console.log(req.body);
     var caja=req.body;

    let detail={  
        receipt:caja.receipt,
        description:caja.description,
        amount:caja.detail_amount,
        input:true,   
        date_detail:new Date(), 
        title:caja.title,
        events:caja.events
    };

    db.cashFlowUsers.findOne({active:true, user:caja.user},function(err,caja){
        if(err) return res.status(400).send(err);
        caja.details.push(detail),function(err,detail){
            if(err) return res.status(400).send(err);
        };
        caja.amount+=detail.amount;
        caja.save(function(err,caja){
            if(err)return res.status(404).send(err);
           // addPlusDetailCashOffice();
            res.status(200).send(caja);
        });

        function addPlusDetailCashOffice(){

            db.users.findOne({_id:caja.user},function(err,user){

                db.offices.findOne({_id:user.offices},function(err,office){

                    db.cashFlowOffices.findOne({active:true,offices:office},function(err,cashOffice){

                        if(detail.input==true){
                            cashOffice.input+=detail.amount;
                            cashOffice.amount+=detail.amount;
                        }else{
                            cashOffice.output+=detail.amount;
                            cashOffice.amount-=detail.amount;
                        }
                        
                        let detailPlusCashOffice={
                            cashFlowUsers:caja._id,
                            dateCloseCash:'',
                        }
                        cashOffice.details.push(detailPlusCashOffice);
                        cashOffice.save();
                    })
                })
            })
        }

        
    })
    console.log("chash desde backend")

  
 })
 

 .post('/egreso',function(req,res){

    console.log('holaaasdfasfasfasfadf');
    var cajaEgreso=req.body;

    console.log(cajaEgreso);

    let detailEgreso={

        receipt:cajaEgreso.receipt,
        description:cajaEgreso.description,
        amount:cajaEgreso.detail_amount,
        input:false,
        date_detail:new Date(),
        title:cajaEgreso.title,
        events:cajaEgreso.events,
    };
    db.cashFlowUsers.findOne({active:true,user:cajaEgreso.user},function(err,caja){

        if(err) return res.status(400).send(err);
        caja.details.push(detailEgreso),function(err,detail){
            if(err) return res.status(400).send(err);
        };
        caja.amount-=detailEgreso.amount;
        caja.save(function(err,caja){
            if(err)return res.status(404).send(err);
           // addSubstractDetailCashOffice();
            res.status(200).send(caja);
        });

        function addSubstractDetailCashOffice(){

            db.users.findOne({_id:cajaEgreso.user},function(err,user){

                db.offices.findOne({_id:user.offices},function(err,office){

                    db.cashFlowOffices.findOne({active:true,offices:office},function(err,cashOffices){
                        if(detailEgreso.input==true){
                            cashOffices.input+=detailEgreso.amount;
                            cashOffices.amount+=detailEgreso.amount;
                        }else{
                            cashOffices.output+=detailEgreso.amount;
                            cashOffices.amount-=detailEgreso.amount;
                        }

                        let detailSubstractCashOffice={
                            cashFlowOffices:caja._id,
                            dateCloseCash:'',
                        }
                        cashOffices.details.push(detailSubstractCashOffice);
                        cashOffices.save();
                    })
                })
            })
        }

    })

})

    .get('/close/:id',function(req,res){

        // var cajaClose=req.body;
        db.cashFlowUsers.findOne({active:true,user:req.params.id},function(err,cajaForClose){

            if(err) return res.status(400).send(err);

            cajaForClose.active=false;
            cajaForClose.date_end=new Date();
            cajaForClose.state=0;
            ////////////////////////////////////
            /////enviar a admin/////
            ////////////////////////////////////

            cajaForClose.amount_delivered=cajaForClose.amount;

            cajaForClose.save(function(err,caja){

                if(err)return res.status(405).send(err);

                var nuevaCaja=new db.cashFlowUsers();
                nuevaCaja.date_start=new Date();
                nuevaCaja.dete_end='';
                nuevaCaja.amount=0;
                nuevaCaja.amount_delivered=0;
                nuevaCaja.active=true;
                nuevaCaja.state=-1;
                nuevaCaja.user=cajaForClose.user;

                nuevaCaja.save(function(err,caja){

                    if(err) return res.status(404).send(err);
                    res.status(200).send(caja);
                });

        
            });

        });




    })




;



module.exports = router;
