var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var jwt = require('jsonwebtoken');
var db = require('../models/db');
var router = express.Router();

router
   .get('/:id', function (req, res) {
      db.cashFlowUsers.findOne({active:true,user:req.params.id}, function (err, cajaUsuario) {
         if (err) return res.status(400).send(err);

         return res.status(200).send(cajaUsuario);
      });
   })

 


 .post('/ingreso', function (req, res) {
     //console.log(req.body);
     var caja=req.body;
     //console.log(caja.receipt);
     //console.log(caja.description);
     //console.log(caja.detail_amount);
    // var cashFlowUsers=new db.cashFlowUsers(req.body);////no

    let detail={  
        receipt:caja.receipt,
        description:caja.description,
        amount:caja.detail_amount,
        input:true,   
        date_detail:new Date(), 
        title:caja.title,
    };

    db.cashFlowUsers.findOne({active:true, user:caja.user},function(err,caja){
        if(err) return res.status(400).send(err);


        


        caja.details.push(detail),function(err,detail){

            if(err) return res.status(400).send(err);
    
        };


        caja.amount+=detail.amount;
        caja.save(function(err,caja){

            if(err)return res.status(404).send(err);
    
            res.status(200).send(caja);
        });
    })

    //console.log(cashFlowUsers);

   
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
        title:cajaEgreso.title
    };
    db.cashFlowUsers.findOne({active:true,user:cajaEgreso.user},function(err,caja){


        if(err) return res.status(400).send(err);
        caja.details.push(detailEgreso),function(err,detail){

            if(err) return res.status(400).send(err);
    
        };
        caja.amount-=detailEgreso.amount;
        caja.save(function(err,caja){

            if(err)return res.status(404).send(err);
    
            res.status(200).send(caja);
        });

    })

})

    .get('/close/:id',function(req,res){

        // var cajaClose=req.body;
        db.cashFlowUsers.findOne({active:true,user:req.params.id},function(err,cajaForClose){

            if(err) return res.status(400).send(err);

            cajaForClose.active=false;
            cajaForClose.date_end=new Date();
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
