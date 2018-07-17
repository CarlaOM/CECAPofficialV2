var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var jwt = require('jsonwebtoken');
var db = require('../models/db');
var router = express.Router();

router
    .get('/', function (req, res) {
        db.cashFlowOffices.find({}, function (err, cajas) {
            if (err) return res.status(400).send(err);
        })
    })
    .get('/allActive', function (req, res) {
        db.cashFlowOffices.find({}, function (err, cajas) {
            if (err) return res.status(400).send(err);
            return res.status(200).send(cajas);
        })
    })


    .get('/current/:id', function (req, res) {
        db.users.findOne({ _id: req.params.id }, function (err, user) {
            db.cashFlowOffices.findOne({ offices: user.offices, active: true, state: -1 }, function (err, cajaSucursal) {
                if (err) return res.status(400).send(err);
                return res.status(200).send(cajaSucursal);
            })
        })
    })

    .post('/addDetail', function (req, res) {

        let cashOffice = req.body;
        let detailSucursal = {
            cashFlowUsers: cashOffice.cashFlowUser,
            dateCloseCash: cashOffice.dateCloseCash,
        };

        var cashOfficeUser = cashOffice.userOfCash;

        db.users.findOne({ _id: cashOfficeUser }, function (err, user) {
            var returnedUser = user;
            db.cashFlowOffices.findOne({ _id: cashOffice.idCashFlowOffice }, function (err, cashFlowOffice) {
                db.cashFlowUsers.findOne({ _id: cashOffice.cashFlowUser }, function (err, cashUser) {
                    cashFlowOffice.amount += cashUser.amount_delivered;
                    cashFlowOffice.details.push(detailSucursal), function (err, detail) {
                        if (err) return res.status(401).send(err)
                    }

                    cashFlowOffice.save(function (err, cajaSuc) {
                        if (err) return res.status(400).send(err);
                        res.status(200).send(cajaSuc);
                    })
                })
            })
        })
    })
    .post('/close/', function (req, res) {
        db.cashFlowOffices.findOne({ _id: req.body._id }, function (err, cashOffice) {
            if (err) return res.status(400).send(err);
            cashOffice.amount_delivered = req.body.amount_delivered;
            cashOffice.state = 0;
            cashOffice.save(function (err, cash) {
                if (err) return res.status(400).send(err);
                db.offices.findOne({ _id: cashOffice.offices }, function (err, office) {
                    if (err) return res.status(400).send(err);
                    office.caja = cashOffice.amount - cashOffice.amount_delivered;
                    office.save();
                    return res.status(200).send(office);
                })
            });

        })
    })
    .post('/new', function (req, res) {
        let officeObj = req.body;
        let cashOffice = new db.cashFlowOffices(req.body);
        cashOffice.users = officeObj.user;
        cashOffice.date_start = new Date();
        db.offices.findOne({ _id: officeObj.offices._id }, function (err, office) {
            if (err) return res.status(400).send(err);
            db.users.findOne({ _id: cashOffice.users }, function (err, user) {
                if (err) return res.status(400).send(err);
                cashOffice.offices = user.offices;
                cashOffice.state = -1;
                cashOffice.active = true;
                cashOffice.amount = officeObj.offices.caja;
                cashOffice.amount_delivered = 0;
                cashOffice.save(function (err, newCashOffice) {
                    if (err) return res.status(400).send(err);
                    return res.status(200).send(newCashOffice);
                })
            });
        })
    })
    .post('/confirm', function (req, res) {
        let cajaSucursalId = req.body.idCajaSucursal;
        db.cashFlowOffices.findOne({ _id: cajaSucursalId }, function (err, cajaSucursal) {
            if (err) return res.status(400).send(err);
            cajaSucursal.state = 1;
            cajaSucursal.active = false;
            cajaSucursal.save(function (err, cajaConfirmada) {
                if (err) return res.status(400).send(err);
                let nuevaCajaSucursal = new db.cashFlowOffices(req.body);
                nuevaCajaSucursal.date_start = new Date();
                nuevaCajaSucursal.date_end = '';
                nuevaCajaSucursal.amount = 0;
                nuevaCajaSucursal.amount_delivered = 0;
                nuevaCajaSucursal.offices = req.body.idSucursal;
                nuevaCajaSucursal.users = req.body.userId;
                nuevaCajaSucursal.active = true;
                nuevaCajaSucursal.state = -1;
                nuevaCajaSucursal.save(function (err, nuevaCajaS) {
                    if (err) return res.status(400).send(err);
                    return res.status(200).send(nuevaCajaS);
                })
            })
        })
    });



module.exports = router;
