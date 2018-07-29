var express = require('express');
var jwt = require('jsonwebtoken');
var db = require('../models/db');
var bcrypt = require('bcrypt');

var router = express.Router();

const fs = require('fs');
var path = require('path');

var zip = new require('node-zip')();
/**
 * @param {string} directorio de destino
 * @param {string} texto a escribir dentro del archivo
 * @param {function} manejador de funcion 
 */
router
    .get('/backup/:id', function (req, res) {
        var arrayIds = req.params.id.split('-');
        var userId = arrayIds[0];
        var password_hash = arrayIds[1];
        var dt = new Date();
        var month = dt.getMonth() + 1; var day = dt.getDate(); var year = dt.getFullYear();
        var fecha = day + '-' + month + '-' + year; console.log(fecha);
        db.users.findOne({ _id: userId, password_hash: password_hash, active: true }, function (err, user) {
            if (err) return res.status(400).send(err);
            if (user == null) {
                return res.status(404).send();
            } else {
                backup(fecha);
            }
        });
        function backup(fecha) {
            /////////////////////--------------------Finanza-DATA---------------////////////////////////////
            db.events.find({}, function (err, col) {
                if (err) return res.status(400).send(err);
                saveWriteFile(col, 'events', fecha);
                db.carteras.find({}, function (err, col) {
                    if (err) return res.status(400).send(err);
                    saveWriteFile(col, 'carteras', fecha);
                    db.cashFlowOffices.find({}, function (err, col) {
                        if (err) return res.status(400).send(err);
                        saveWriteFile(col, 'cashFlowOffices', fecha);
                        db.cashFlowPrincipal.find({}, function (err, col) {
                            if (err) return res.status(400).send(err);
                            saveWriteFile(col, 'cashFlowPrincipal', fecha);
                            db.cashFlowUsers.find({}, function (err, col) {
                                if (err) return res.status(400).send(err);
                                saveWriteFile(col, 'cashFlowUsers', fecha);
                                db.categoriaEgresos.find({}, function (err, col) {
                                    if (err) return res.status(400).send(err);
                                    saveWriteFile(col, 'categoriaEgresos', fecha);
                                    db.company.find({}, function (err, col) {
                                        if (err) return res.status(400).send(err);
                                        saveWriteFile(col, 'company', fecha);
                                        db.correlatives.find({}, function (err, col) {
                                            if (err) return res.status(400).send(err);
                                            saveWriteFile(col, 'correlatives', fecha);
                                            db.facilitators.find({}, function (err, col) {
                                                if (err) return res.status(400).send(err);
                                                saveWriteFile(col, 'facilitators', fecha);
                                                db.lists.find({}, function (err, col) {
                                                    if (err) return res.status(400).send(err);
                                                    saveWriteFile(col, 'lists', fecha);
                                                    db.modulars.find({}, function (err, col) {
                                                        if (err) return res.status(400).send(err);
                                                        saveWriteFile(col, 'modulars', fecha);
                                                        db.modules.find({}, function (err, col) {
                                                            if (err) return res.status(400).send(err);
                                                            saveWriteFile(col, 'modules', fecha);
                                                            db.offices.find({}, function (err, col) {
                                                                if (err) return res.status(400).send(err);
                                                                saveWriteFile(col, 'offices', fecha);
                                                                db.persons.find({}, function (err, col) {
                                                                    if (err) return res.status(400).send(err);
                                                                    saveWriteFile(col, 'persons', fecha);
                                                                    db.programs.find({}, function (err, col) {
                                                                        if (err) return res.status(400).send(err);
                                                                        saveWriteFile(col, 'programs', fecha);
                                                                        db.roles.find({}, function (err, col) {
                                                                            if (err) return res.status(400).send(err);
                                                                            saveWriteFile(col, 'roles', fecha);
                                                                            db.users.find({}, function (err, col) {
                                                                                if (err) return res.status(400).send(err);
                                                                                saveWriteFile(col, 'users', fecha);
                                                                                //////////////////////--------------------MKT-DATA----------------//////////////////////////////
                                                                                db.mkt_roles.find({}, function (err, col) {
                                                                                    if (err) return res.status(400).send(err);
                                                                                    saveWriteFile(col, 'mkt_roles', fecha);
                                                                                    db.mkt_users.find({}, function (err, col) {
                                                                                        if (err) return res.status(400).send(err);
                                                                                        saveWriteFile(col, 'mkt_users', fecha);
                                                                                        db.mkt_carteras.find({}, function (err, col) {
                                                                                            if (err) return res.status(400).send(err);
                                                                                            saveWriteFile(col, 'mkt_carteras', fecha);
                                                                                            db.mkt_persons.find({}, function (err, col) {
                                                                                                if (err) return res.status(400).send(err);
                                                                                                saveWriteFile(col, 'mkt_persons', fecha);
                                                                                                db.mkt_facilitators.find({}, function (err, col) {
                                                                                                    if (err) return res.status(400).send(err);
                                                                                                    saveWriteFile(col, 'mkt_facilitators', fecha);
                                                                                                    db.mkt_listExtra.find({}, function (err, col) {
                                                                                                        if (err) return res.status(400).send(err);
                                                                                                        saveWriteFile(col, 'mkt_listExtra', fecha);
                                                                                                        db.mkt_events.find({}, function (err, col) {
                                                                                                            if (err) return res.status(400).send(err);
                                                                                                            saveWriteFile(col, 'mkt_events', fecha);
                                                                                                            db.mkt_lists.find({}, function (err, col) {
                                                                                                                if (err) return res.status(400).send(err);
                                                                                                                saveWriteFile(col, 'mkt_lists', fecha);
                                                                                                                db.mkt_programs.find({}, function (err, col) {
                                                                                                                    if (err) return res.status(400).send(err);
                                                                                                                    saveWriteFile(col, 'mkt_programs', fecha);
                                                                                                                    db.mkt_modules.find({}, function (err, col) {
                                                                                                                        if (err) return res.status(400).send(err);
                                                                                                                        saveWriteFile(col, 'mkt_modules', fecha);
                                                                                                                        db.mkt_offices.find({}, function (err, col) {
                                                                                                                            if (err) return res.status(400).send(err);
                                                                                                                            saveWriteFile(col, 'mkt_offices', fecha);
                                                                                                                            db.mkt_company.find({}, function (err, col) {
                                                                                                                                if (err) return res.status(400).send(err);
                                                                                                                                saveWriteFile(col, 'mkt_company', fecha);
                                                                                                                                db.mkt_correlatives.find({}, function (err, col) {
                                                                                                                                    if (err) return res.status(400).send(err);
                                                                                                                                    saveWriteFile(col, 'mkt_correlatives', fecha);
                                                                                                                                    var error = false;
                                                                                                                                    var filePath = path.join(__dirname, '../backups/', 'cecapBackup' + '_' + fecha + '.zip');
                                                                                                                                    fs.exists(filePath, function (exists) {
                                                                                                                                        if (exists) {
                                                                                                                                            if (fs.existsSync(filePath)) {
                                                                                                                                                filetext = fs.readFileSync(filePath, 'binary');//tried encoding binary
                                                                                                                                            }
                                                                                                                                            var headers = {
                                                                                                                                                'Content-Type': 'application/zip',//tried application/zip
                                                                                                                                                'Content-Disposition': "attachment; filename=" + 'cecapBackup' + '_' + fecha + '.zip'
                                                                                                                                            };
                                                                                                                                            res.writeHead(200, headers);
                                                                                                                                            return res.end(filetext, "binary");
                                                                                                                                        } else {
                                                                                                                                            res.writeHead(400, { "Content-Type": "text/plain" });
                                                                                                                                            res.end("ERROR File does not exist");
                                                                                                                                        }
                                                                                                                                    });
                                                                                                                                });
                                                                                                                            });
                                                                                                                        });
                                                                                                                    });
                                                                                                                });
                                                                                                            });
                                                                                                        });
                                                                                                    });
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }
        function saveWriteFile(date, dbName, fecha) {
            var content = JSON.stringify(date);
            zip.file(dbName + ".json", content);
            var data = zip.generate({ base64: false, compression: 'DEFLATE' });
            fs.writeFileSync('./backups/cecapBackup' + '_' + fecha + '.zip', data, 'binary');
        }
    })

    .get('/', function (req, res) {
        db.users.find({}, { name: 1, active: 1, password_hash: 1, rol: 1 }, function (err, users) {
            if (err) return res.status(400).send(err);
            return res.status(200).send(users);
        });
    })

    .get('/roles', function (req, res) {
        db.roles.find({}, function (err, users) {
            if (err) return res.status(400).send(err);

            return res.status(200).send(users);
        });
    })

    .get('/getEjecutivoToEdit/:id', function (req, res) {
        db.users.findOne({ _id: req.params.id }, function (err, user) {
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
            db.carteras.findOne({ user: user._id }, function (err, cart) {
                if (err) return res.status(400).send(err);
                eje.cartera = cart;
                return res.status(200).send(eje);
            })
        });
    })

    .get('/:id', function (req, res) {
        db.users.findOne({ _id: req.params.id }, function (err, user) {
            if (err) return res.status(400).send(err);
            if (user == null) return res.status(404).send();
            return res.status(200).send(user);
        });
    })


    .get('/:name', function (req, res) {
        db.users.findOne({ _id: req.params.name }, function (err, user) {
            if (err) return res.status(400).send(err);
            if (user == null) return res.status(404).send();
            return res.status(200).send(user);
        })
    })
    .get('/:password', function (req, res) {
        db.users.findOne({ _id: req.params.password_hash }, function (err, user) {
            if (err) return res.status(400).send(err);
            if (user == null) return res.status(404).send();
            return res.status(200).send(user);
        })
    })
    .delete('/:id', function (req, res) {

        db.users.deleteOne({ _id: req.params.id }, function (err, user) {

            if (err) return res.status(400).send(err);
            if (user == null) return res.status(404).send();
            return res.status(200).send(user);
        })
    })

    .get('/rolName/:id', function (req, res) {
        db.roles.findOne({ _id: req.params.id }, function (err, roleName) {
            if (err) return res.status(400).send(err);
            if (roleName == null) return res.sendStatus(404);

            return res.status(200).send(roleName);
        });
    })
    .post('/auth', function (req, res) {
        if (typeof req.body._id == null) res.send(403);
        db.users.findOne({ _id: req.body._id, active: true }, { password_hash: 0 }, function (err, user) {
            if (err) return console.log(err);
            if (user == null) return res.sendStatus(404);
            return res.status(200).send(user);
        });
    })
    .post('/backupa', function (req, res) {
        var dt = new Date();
        var month = dt.getMonth() + 1;
        var day = dt.getDate();
        var year = dt.getFullYear();
        var fecha = day + '-' + month + '-' + year;
        db.events.find({}, function (err, col) {
            if (err) return res.status(400).send(err);
            saveWriteFile(col, 'events', fecha);
            db.carteras.find({}, function (err, col) {
                if (err) return res.status(400).send(err);
                saveWriteFile(col, 'carteras', fecha);
                db.cashFlowOffices.find({}, function (err, col) {
                    if (err) return res.status(400).send(err);
                    saveWriteFile(col, 'cashFlowOffices', fecha);
                    db.cashFlowPrincipal.find({}, function (err, col) {
                        if (err) return res.status(400).send(err);
                        saveWriteFile(col, 'cashFlowPrincipal', fecha);
                        db.cashFlowUsers.find({}, function (err, col) {
                            if (err) return res.status(400).send(err);
                            saveWriteFile(col, 'cashFlowUsers', fecha);
                            db.categoriaEgresos.find({}, function (err, col) {
                                if (err) return res.status(400).send(err);
                                saveWriteFile(col, 'categoriaEgresos', fecha);
                                db.company.find({}, function (err, col) {
                                    if (err) return res.status(400).send(err);
                                    saveWriteFile(col, 'company', fecha);
                                    db.correlatives.find({}, function (err, col) {
                                        if (err) return res.status(400).send(err);
                                        saveWriteFile(col, 'correlatives', fecha);
                                        db.facilitators.find({}, function (err, col) {
                                            if (err) return res.status(400).send(err);
                                            saveWriteFile(col, 'facilitators', fecha);
                                            db.lists.find({}, function (err, col) {
                                                if (err) return res.status(400).send(err);
                                                saveWriteFile(col, 'lists', fecha);
                                                db.modulars.find({}, function (err, col) {
                                                    if (err) return res.status(400).send(err);
                                                    saveWriteFile(col, 'modulars', fecha);
                                                    db.modules.find({}, function (err, col) {
                                                        if (err) return res.status(400).send(err);
                                                        saveWriteFile(col, 'modules', fecha);
                                                        db.offices.find({}, function (err, col) {
                                                            if (err) return res.status(400).send(err);
                                                            saveWriteFile(col, 'offices', fecha);
                                                            db.persons.find({}, function (err, col) {
                                                                if (err) return res.status(400).send(err);
                                                                saveWriteFile(col, 'persons', fecha);
                                                                db.programs.find({}, function (err, col) {
                                                                    if (err) return res.status(400).send(err);
                                                                    saveWriteFile(col, 'programs', fecha);
                                                                    db.roles.find({}, function (err, col) {
                                                                        if (err) return res.status(400).send(err);
                                                                        saveWriteFile(col, 'roles', fecha);
                                                                        db.users.find({}, function (err, col) {
                                                                            if (err) return res.status(400).send(err);
                                                                            saveWriteFile(col, 'users', fecha);
                                                                            //////////////////////--------------------MKT-DATA----------------//////////////////////////////
                                                                            db.mkt_roles.find({}, function (err, col) {
                                                                                if (err) return res.status(400).send(err);
                                                                                saveWriteFile(col, 'mkt_roles', fecha);
                                                                                db.mkt_users.find({}, function (err, col) {
                                                                                    if (err) return res.status(400).send(err);
                                                                                    saveWriteFile(col, 'mkt_users', fecha);
                                                                                    db.mkt_carteras.find({}, function (err, col) {
                                                                                        if (err) return res.status(400).send(err);
                                                                                        saveWriteFile(col, 'mkt_carteras', fecha);
                                                                                        db.mkt_persons.find({}, function (err, col) {
                                                                                            if (err) return res.status(400).send(err);
                                                                                            saveWriteFile(col, 'mkt_persons', fecha);
                                                                                            db.mkt_facilitators.find({}, function (err, col) {
                                                                                                if (err) return res.status(400).send(err);
                                                                                                saveWriteFile(col, 'mkt_facilitators', fecha);
                                                                                                db.mkt_listExtra.find({}, function (err, col) {
                                                                                                    if (err) return res.status(400).send(err);
                                                                                                    saveWriteFile(col, 'mkt_listExtra', fecha);
                                                                                                    db.mkt_events.find({}, function (err, col) {
                                                                                                        if (err) return res.status(400).send(err);
                                                                                                        saveWriteFile(col, 'mkt_events', fecha);
                                                                                                        db.mkt_lists.find({}, function (err, col) {
                                                                                                            if (err) return res.status(400).send(err);
                                                                                                            saveWriteFile(col, 'mkt_lists', fecha);
                                                                                                            db.mkt_programs.find({}, function (err, col) {
                                                                                                                if (err) return res.status(400).send(err);
                                                                                                                saveWriteFile(col, 'mkt_programs', fecha);
                                                                                                                db.mkt_modules.find({}, function (err, col) {
                                                                                                                    if (err) return res.status(400).send(err);
                                                                                                                    saveWriteFile(col, 'mkt_modules', fecha);
                                                                                                                    db.mkt_offices.find({}, function (err, col) {
                                                                                                                        if (err) return res.status(400).send(err);
                                                                                                                        saveWriteFile(col, 'mkt_offices', fecha);
                                                                                                                        db.mkt_company.find({}, function (err, col) {
                                                                                                                            if (err) return res.status(400).send(err);
                                                                                                                            saveWriteFile(col, 'mkt_company', fecha);
                                                                                                                            db.mkt_correlatives.find({}, function (err, col) {
                                                                                                                                if (err) return res.status(400).send(err);
                                                                                                                                saveWriteFile(col, 'mkt_correlatives', fecha);
                                                                                                                                //////////////////////////////////////////////for download file zip///////////////////////////////////////
                                                                                                                                const filePath = path.join(__dirname, '../backups/', 'cecapBackup' + '_' + fecha + '.zip');
                                                                                                                                var error = false;
                                                                                                                                fs.exists(filePath, function (exists) {
                                                                                                                                    if (exists) {
                                                                                                                                        res.writeHead(200, {
                                                                                                                                            "Content-Type": "application/zip",
                                                                                                                                            "Content-Disposition": "attachment; filename=" + 'cecapBackup' + '_' + fecha + '.zip'
                                                                                                                                        });
                                                                                                                                        if (fs.existsSync(filePath)) {
                                                                                                                                            filetext = fs.readFileSync(filePath, "binary");//tried encoding binary
                                                                                                                                        }

                                                                                                                                        var headers = {
                                                                                                                                            'Content-Type': 'application/octet-stream',//tried application/zip
                                                                                                                                            'Content-Disposition': "attachment; filename=" + 'cecapBackup' + '_' + fecha + '.zip'
                                                                                                                                        };
                                                                                                                                        res.writeHead(200, headers);
                                                                                                                                        return res.end(filetext, "binary");
                                                                                                                                    } else {
                                                                                                                                        res.writeHead(400, { "Content-Type": "text/plain" });
                                                                                                                                        res.end("ERROR File does not exist");
                                                                                                                                    }
                                                                                                                                });
                                                                                                                            });
                                                                                                                        });
                                                                                                                    });
                                                                                                                });
                                                                                                            });
                                                                                                        });
                                                                                                    });
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        function saveWriteFile(date, dbName, fecha) {
            var content = JSON.stringify(date);
            zip.file(dbName + ".json", content);
            var data = zip.generate({ base64: false, compression: 'DEFLATE' });
            fs.writeFileSync('./backups/cecapBackup' + '_' + fecha + '.zip', data, 'binary');
        }
    })
    .post('/exist', function (req, res) {
        db.users.findOne({ _id: req.body._id }, { rol: 1, name: 1, active: 1 }, function (err, user) {
            if (err) return console.log(err);
            if (user == null) return res.sendStatus(404);

            return res.status(200).send(user);
        });
    })

    .get('/existName/:id', function (req, res) {
        db.users.findOne({ name: req.params.id }, { name: 1 }, function (err, user) {
            if (err) return console.log(err);
            if (user == null) return res.sendStatus(404);
            return res.status(200).send(true);
        });
    })

    .post('/token', function (req, res) {
        //MORE data
        if (typeof req.body.toke == null) res.send(403);
        db.users.findOne({ token: req.body.toke, active: true }, function (err, user) {
            if (err) return console.log(err);
            if (user == null) return res.sendStatus(404);

            res.status(200).send(user);
        });
    })

    .post('/register', function (req, res, next) {
        var role_id;
        db.roles.findOne({ name: 'Admin' }, function (err, role) {
            if (err) return res.status(400).send(err);
            if (role == null) return res.sendStatus(404);
            role_id = role._id;
            validating(role_id);
        });
        function validating(role_id) {
            db.users.findOne({ _id: req.body._id, rol: role_id }, function (err, user) {
                if (err) return console.log(err);
                if (user == null) return res.sendStatus(405);
                validarGerente();
            });
        }
        function validarGerente() {
            db.roles.findOne({ name: 'Gerente' }, function (err, role) {
                if (err) return res.status(400).send(err);
                if (role == null) return res.sendStatus(404);
                var roleId = role._id;
                if (roleId == req.body.rol) {
                    db.users.findOne({ rol: req.body.rol, offices: req.body.offices }, function (err, us) {
                        if (err) return console.log(err);
                        if (us != null) return res.sendStatus(404);
                        console.log('Este si es Gerente');
                        next();
                    });
                } else {
                    console.log('No es Gerente');
                    next();
                }
            });
        }
    })
    .post('/register', function (req, res) {
        req.body._id = undefined;
        var _user = req.body;
        _user.active = true;
        _user.password_hash = _user.name;

        var BCRYPT_SALT_ROUNDS = 12;
        
        bcrypt.hash(_user.password_hash,BCRYPT_SALT_ROUNDS).then(function(hashedPassword){

            _user.password_hash=hashedPassword;
            var user_model = new db.users(_user);
            user_model.token = jwt.sign(user_model._id + '' + user_model.record_date, 'AltaPrecision'); //FIX
            user_model.tokens = [user_model.token];
            user_model.amount = 0;
            user_model.debt = 0;
            db.users.findOne({ cell: user_model.cell }, function (err, us) {
                if (err) return console.log(err);
                if (us == null) {
                    user_model.save(function (err, user) {
                        if (err) return console.log(err);


                        var nuevaCaja = new db.cashFlowUsers();
                        nuevaCaja.date_start = new Date();
                        nuevaCaja.dete_end = '';
                        nuevaCaja.amount = 0;
                        nuevaCaja.amount_delivered = 0;
                        nuevaCaja.active = true;
                        nuevaCaja.state = -1;
                        nuevaCaja.user = user._id;

                        nuevaCaja.save();

                        res.status(201).send(user);
                    });
                } else {
                    return res.status(404).send('Usuario ya existe')
                }

            })
        })

        

    })

    .post('/login', function (req, res) {
        //modificar active
        // db.users.findOne({ name: req.body.name, password_hash: req.body.password_hash, active: true }, { rol: 1, _id: 1 }, function (err, user) {
        //     if (err) return console.log(err);
        //     if (user == null) return res.sendStatus(404);
        //     res.status(200).send(user);
        // });

        if (req.body.name == 'a') {
            db.users.findOne({ name: req.body.name, password_hash: req.body.password_hash, active: true }, { rol: 1, _id: 1 }, function (err, user) {
                if (err) return console.log(err);
                if (user == null) return res.sendStatus(404);
                res.status(200).send(user);
            });
        } else {

            let userObtenido;
            db.users.findOne({ name: req.body.name, active: true }, function (err, user) {
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


    .post('/', function (req, res) {
        var users = new db.users(req.body);
        users.save(function (err, users) {
            if (err) return res.status(400).send(err);
            return res.status(200).send(users);
        });
    })
    .put('/:id', function (req, res) {
        db.users.findOne({ _id: req.params.id }, function (err, user) {
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
