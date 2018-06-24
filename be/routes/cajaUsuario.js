var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var jwt = require('jsonwebtoken');
var db = require('../models/db');
var router = express.Router();

router
    .get('/', function (req, res) {
        /////lista todas las cajas activas//////
        db.cashFlowUsers.find({active:true}, function (err, cajas) {
        if (err) return res.status(400).send(err);



        return res.status(200).send(cajas);
        });
    })
    .get('/pending/:id', function (req, res) {

            ////// lista todas las cajas que estan en el etado pendientes////
            /////// para el gerente////
            // db.cashFlowUsers.find({state:0,active:true,state:1}, function (err, cajas) {
            db.cashFlowUsers.find({$or:[{active:true,state:0},{active:true,state:1}]}, function (err, cajas) {
    
            if (err) return res.status(400).send(err);
            return res.status(200).send(cajas);
            });
        // // let cashFLowUsers=[];
        // db.users.findOne({_id:req.params.id},function(err,user){
        //     if (err) return res.status(400).send(err);
        //     db.users.find({offices:user.offices},function(err,usersOfSucursal){
        //         if (err) return res.status(400).send(err);
        //         let listCashFLowUsers=[];
        //         // listCashFLowUsers= llenar(listCashFLowUsers,usersOfSucursal);
               
        //         // console.log(listCashFLowUsers);
        //         // console.log("despues antest de devolver lalista")
        //         return  res.status(200).send(llenar(listCashFLowUsers,usersOfSucursal,user));
        //     })

        // })
        // function llenar(listCashFLowUsers,usersOfSucursal,u){
        //     for(let u of usersOfSucursal){
        //         db.cashFlowUsers.findOne({user:u._id,$or:[{active:true,state:0},{active:true,state:1}]},function(err,cashFlowU){
        //             if (err) return res.status(400).send(err);
        //             // console.log('entra al acashflowwusersdf');
        //             // console.log(cashFlowU)
        //             if(cashFlowU!=null){
        //                 listCashFLowUsers.push(cashFlowU);
        //                 // console.log(listCashFLowUsers);
        //                 // console.log("entraasdrjisdfasjflasjfl;ajsf")
        //             }
                    
        //         })
        //     }
        //     console.log(listCashFLowUsers);
        //     return listCashFLowUsers;

        // }
        ////// lista todas las cajas que estan en el etado pendientes////
        /////// para el gerente////
        // db.cashFlowUsers.find({state:0,active:true,state:1}, function (err, cajas) {
        // db.cashFlowUsers.find({$or:[{active:true,state:0},{active:true,state:1}]}, function (err, cajas) {

        // if (err) return res.status(400).send(err);
        // return res.status(200).send(cajas);
        // });
    })
   .get('/:id', function (req, res) {
       /////////busca una caja con el id de la caja ////////
      db.cashFlowUsers.findOne({_id:req.params.id}, function (err, cajaUsuario) {
         if (err) return res.status(400).send(err);

         return res.status(200).send(cajaUsuario);
      });
   })
   .get('/byUser/:id', function (req, res) {
       ////////lista de cajas del usuario activas para que pueda cerrar ////
       ////////para el usuario////
    db.cashFlowUsers.findOne({active:true,state:-1,user:req.params.id}, function (err, cajaUsuario) {
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
        events:caja.events,/////////////////////////////////IDevent
        modulars:caja.modulars//
    };

    db.cashFlowUsers.findOne({active:true,state:-1, user:caja.user},function(err,caja){
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
        modulars:cajaEgreso.modulars//aumentado
    };
    db.cashFlowUsers.findOne({active:true,state:-1,user:cajaEgreso.user},function(err,caja){
        //console.log(caja)
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
        db.cashFlowUsers.findOne({active:true,state:-1,user:req.params.id},function(err,cajaForClose){

            if(err) return res.status(400).send(err);

            cajaForClose.active=true;
            cajaForClose.date_end=new Date();
            cajaForClose.state=0;
            ////////////////////////////////////
            /////enviar a admin/////
            ////////////////////////////////////

            // cajaForClose.amount_delivered=cajaForClose.amount;/////el monto entregado se lo cambia justo cuando se confirma la caja y se entrega el dinero

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
    .get('/closeFromManager/:id',function(req,res){
        db.cashFlowUsers.findOne({_id:req.params.id},function(err,cajaForClose){
            if(err) return res.status(400).send(err);
            cajaForClose.active=false;
            cajaForClose.save(function(err,caja){

                if(err) return res.status(404).send(err);
                res.status(200).send(caja);
            });


        })

    })
   
    .get('/confirm/:id', function (req, res) {
        //////confirmar caja usuario /cambiar de estdo de 0 a 1 ///
        ////desde gerente///////
       db.cashFlowUsers.findOne({_id:req.params.id}, function (err, cajaUsuario) {
          if (err) return res.status(400).send(err);
 
          cajaUsuario.state=1;
          cajaUsuario.save();
          var userId=cajaUsuario.user;////para cuando haya varias sucursales ,buscaar por office
            // db.users.findOne({_id:userId},function(err,user){
            //     db.offices.findOne({_id:user.offices},function(err,office){

            //         office.caja+=cajaUsuario.amount_delivered;
            //         office.save();
            //     })
            // })
           
          return res.status(200).send(cajaUsuario);
       });
    })

    .post('/setAmountDelivered', function (req, res) {
        //console.log(req.body);
        var caja=req.body;
   
       db.cashFlowUsers.findOne({_id:caja._id},function(err,cashFlowUser){
            cashFlowUser.amount_delivered=caja.amount_delivered;
            cashFlowUser.debt=cashFlowUser.amount-cashFlowUser.amount_delivered;
            cashFlowUser.save(function(err,cash){
                if(err)return res.status(400).send(err);
                db.users.findOne({_id:cashFlowUser.user},function(err,user){
                    if(err)return res.status(400).send(err);
                    
                    if((cashFlowUser.amount-cashFlowUser.amount_delivered)>0){
                        user.debt+=cashFlowUser.amount-cashFlowUser.amount_delivered;
                        user.save(function(err,us){
                            if(err)return res.status(400).send(err);
                        });

                    }
                    return res.status(200).send(cash);//////////////////////////se envia cash, esta bien/////
                    
                })
            });


       })
       
   
     
    })
    
   



;



module.exports = router;
