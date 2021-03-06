var express = require('express');
var jwt = require('jsonwebtoken');
var db = require('../models/db');
var bcrypt = require('bcrypt');

var router = express.Router();


router
    .get('/', function (req, res) {
        db.mkt_users.find({}, { name: 1, active: 1, password_hash: 1, rol: 1 }, function (err, users) {
            if (err) return res.status(400).send(err);
            return res.status(200).send(users);
        });
    })
    .post('/getAllEjecutivosOfSucursal', function (req, res) {
        let identity = req.body;
        let listToSend = [];
        db.mkt_users.findOne({ _id: identity._id }, function (err, user) {
            if (err) return res.status(200).send(err)
            db.mkt_users.find({ offices: user.offices }, function (err, users) {
                db.mkt_carteras.find({ user: { $in: users } }, function (err, carteraslist) {
                    if (err) return res.status(200).send(err)
                    for (let u of users) {
                        for (let c of carteraslist) {
                            if (u._id.equals(c.user)) {
                                let item = {};
                                item.userId = u._id;
                                item.carteraUser = c.user;
                                item.carteraId = c._id;
                                item.userName = u.name;
                                item.carteraName = c.name;
                                item.checked = false;
                                listToSend.push(item);
                            }
                        }
                    }
                    return res.status(200).send(listToSend);
                })
            })
        })
    })


    .post('/reporteTrimestralEjecutivos', function (req, res) {
        let fechaFin = new Date();
        let fechaInicio = new Date(fechaFin.getFullYear(), fechaFin.getMonth() - 3, fechaFin.getDay());
        let listaPersonasToReport = [];
        db.mkt_persons.find({ carteras: req.body.carteraId }, { _id: 1 }, function (err, personsOfCartera) {
            if (err) return res.status(400).send(err);
            let personasDeEjecutivo = personsOfCartera;
            db.mkt_events.find({}, function (err, listaEventos) {
                if (err) return res.status(400).send(err);
                for (let event of listaEventos) {
                    for (let itemInteres of event.interes) {
                        for (let p of personsOfCartera) {
                            if (new String(p._id).valueOf() == new String(itemInteres.persons).valueOf()) {
                                if ((itemInteres.date_state < fechaFin) && (itemInteres.date_state > fechaInicio)) {
                                    listaPersonasToReport.push(p);
                                }
                            }
                        }
                    }
                }
                return res.status(200).send(listaPersonasToReport);
            })
        })
    })

    .post('/reporteTrimestralInscritosEjecutivos', function (req, res) {
        let fechaFin = new Date();
        fechaFin.setHours = 23;
        fechaFin.setMinutes = 59;
        let fechaInicio = new Date(fechaFin.getFullYear(), fechaFin.getMonth() - 3, fechaFin.getDay());
        let listaPersonasToReport = [];
        db.mkt_persons.find({ carteras: req.body.carteraId }, { _id: 1 }, function (err, personsOfCartera) {
            if (err) return res.status(400).send(err);
            let personasDeEjecutivo = personsOfCartera;
            db.mkt_events.find({}, function (err, listaEventos) {
                if (err) return res.status(400).send(err);
                for (let event of listaEventos) {
                    for (let itemInteres of event.interes) {
                        for (let p of personsOfCartera) {
                            if (new String(p._id).valueOf() == new String(itemInteres.persons).valueOf()) {
                                if ((itemInteres.date_state < fechaFin) && (itemInteres.date_state > fechaInicio) && (itemInteres.state == 3)) {
                                    listaPersonasToReport.push(p);
                                }
                            }
                        }
                    }
                }
                return res.status(200).send(listaPersonasToReport);
            })
        })
    })

    .get('/getEjecutivoToEdit/:id', function (req, res) {
        db.mkt_users.findOne({ _id: req.params.id }, function (err, user) {
            if (err) return res.status(400).send(err);
            if (user == null) return res.status(404).send();
            let eje = {};
            eje._id = user._id;
            eje.name = user.name;
            eje.lastname = user.lastname;
            eje.password_hash = user.password_hash;
            eje.active = user.active;
            eje.cell = user.cell;
            eje.correo = user.correo;
            eje.rol = user.rol;
            eje.offices = user.offices;
            db.mkt_carteras.findOne({ user: user._id }, function (err, cart) {
                if (err) return res.status(400).send(err);
                eje.cartera = cart;
                return res.status(200).send(eje);
            })
        });
    })

    .get('/roles', function (req, res) {
        db.mkt_roles.find({}, function (err, users) {
            if (err) return res.status(400).send(err);
            return res.status(200).send(users);
        });
    })
    .get('/:id', function (req, res) {
        db.mkt_users.findOne({ _id: req.params.id }, function (err, user) {
            if (err) return res.status(400).send(err);
            if (user == null) return res.status(404).send();
            return res.status(200).send(user);
        });
    })

    .delete('/:id', function (req, res) {
        db.mkt_users.deleteOne({ _id: req.params.id }, function (err, user) {
            if (err) return res.status(400).send(err);
            if (user == null) return res.status(404).send();
            return res.status(200).send(user);
        })
    })

    .get('/rolName/:id', function (req, res) {
        db.mkt_roles.findOne({ _id: req.params.id }, function (err, roleName) {
            if (err) return res.status(400).send(err);
            if (roleName == null) return res.sendStatus(404);
            return res.status(200).send(roleName);
        });
    })
    .post('/auth', function (req, res) {
        if (typeof req.body._id == null) res.send(403);
        db.mkt_users.findOne({ _id: req.body._id, active: true }, { password_hash: 0 }, function (err, user) {
            if (err) return console.log(err);
            if (user == null) return res.sendStatus(404);
            return res.status(200).send(user);
        });
    })
    .post('/exist', function (req, res) {
        db.mkt_users.findOne({ _id: req.body._id }, { rol: 1, name: 1, active: 1 }, function (err, user) {
            if (err) return console.log(err);
            if (user == null) return res.sendStatus(404);

            return res.status(200).send(user);
        });
    })

    .get('/existName/:id', function (req, res) {
        db.mkt_users.findOne({ name: req.params.id }, { name: 1 }, function (err, user) {
            if (err) return console.log(err);
            if (user == null) return res.sendStatus(404);
            return res.status(200).send(true);
        });
    })

    .post('/token', function (req, res) {
        //MORE data
        if (typeof req.body.toke == null) res.send(403);
        db.mkt_users.findOne({ token: req.body.toke, active: true }, function (err, user) {
            if (err) return console.log(err);
            if (user == null) return res.sendStatus(404);

            res.status(200).send(user);
        });
    })

    .post('/register', function (req, res, next) {
        // console.log('que paso aqui')

        var role_id;
        db.mkt_roles.findOne({ name: 'Admin' }, function (err, role) {
            if (err) return res.status(400).send(err);
            if (role == null) return res.sendStatus(404);
            role_id = role._id;
            validating();
        })
        console.log(req.body);
        function validating() {
            db.mkt_users.findOne({ _id: req.body._id, rol: role_id }, function (err, user) {
                if (err) return console.log(err);
                console.log(user);
                if (user == null) return res.sendStatus(405);
                next();
            });
        }
    })
    .post('/register', function (req, res) {
        console.log('que paso aqui')
        req.body._id = undefined;
        var _user = req.body;
        _user.active = true;
        _user.password_hash = _user.name;

        // var user_model = new db.mkt_users(_user);
        // user_model.token = jwt.sign(user_model._id + '' + user_model.record_date, 'AltaPrecision'); //FIX
        // user_model.tokens = [user_model.token];
        // user_model.save(function (err, user) {
        //     if (err) return console.log(err);
        //     res.status(201).send(user);
        // });


        var BCRYPT_SALT_ROUNDS = 12;

        bcrypt.hash(_user.password_hash, BCRYPT_SALT_ROUNDS).then(function (hashedPassword) {
            // console.log(hashedPassword); 
            _user.password_hash = hashedPassword;
            var user_model = new db.mkt_users(_user);
            user_model.token = jwt.sign(user_model._id + '' + user_model.record_date, 'AltaPrecision'); //FIX
            user_model.tokens = [user_model.token];
            user_model.save(function (err, user) {
                if (err) return console.log(err);
                res.status(201).send(user);
            });
        })
    })

    .post('/login', function (req, res) {
        //modificar active
        // db.mkt_users.findOne({ name: req.body.name, password_hash: req.body.password_hash, active: true }, { rol: 1, _id: 1 }, function (err, user) {
        //     if (err) return console.log(err);
        //     if (user == null) return res.sendStatus(404);
        //     res.status(200).send(user);
        // });


        if (req.body.name == 'a') {
            db.mkt_users.findOne({ name: req.body.name, password_hash: req.body.password_hash, active: true }, { rol: 1, _id: 1 }, function (err, user) {
                if (err) return console.log(err);
                if (user == null) return res.sendStatus(404);
                res.status(200).send(user);
            });
        } else {

            let userObtenido;
            db.mkt_users.findOne({ name: req.body.name, active: true }, function (err, user) {
                if (err) return console.log(err);
                if (user == null) return res.sendStatus(404);
                userObtenido = user;
                return user;

            }).then(function (user) {
                return bcrypt.compare(req.body.password_hash, user.password_hash);
            }).then(function (samePassword) {
                if (!samePassword) {
                    res.status(403).send();
                } else {
                    res.send(userObtenido);

                }
            })
        }

    })
    .post('/change/:id', function (req, res) {
        db.mkt_users.update({ _id: req.params.id }, {
            $set: { password_hash: req.body.password_hash }
        }, function (err, user) {
            if (err) return res.status(400).send(err);
            return res.status(200).send(user);
        })
    })

    .post('/', function (req, res) {
        var users = new db.mkt_users(req.body);
        users.save(function (err, users) {
            if (err) return res.status(400).send(err);
            return res.status(200).send(users);
        });
    })
    .put('/:id', function (req, res) {
        db.mkt_users.findOne({ _id: req.params.id }, function (err, user) {
            if (err) return res.status(400).send(err);
            if (user == null) return res.status(404).send();
            for (i in req.body) {
                user[i] = req.body[i];
            }
            user.save(function (err, user) {
                if (err) return res.status(400).send(err);
                return res.status(200).send(user);
            });
        });
    });

module.exports = router;
