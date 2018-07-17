var express = require('express');
var db = require('../models/db');
var router = express.Router();

////////////////////////////////
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();


///////////other//////////

var XLSX = require('xlsx')

///////////////////////////


router
    .get('/', function (req, res) {
        db.mkt_persons.find({}, function (err, persons) {
            if (err) return res.status(400).send(err);

            return res.status(200).send(persons);
        });
    })

    .get('/:id', function (req, res) {
        db.mkt_persons.findOne({ _id: req.params.id }, function (err, person) {
            if (err) return res.status(400).send(err);
            if (person == null) return res.status(404).send();

            return res.status(200).send(person);
        });
    })
    .get('/personsOfCartera/:cartera', function (req, res) {
        var cartera = req.params.cartera;
        db.mkt_persons.find({ carteras: cartera }, function (err, listaPersonas) {
            if (err) return res.status(400).send(err);

            return res.status(200).send(listaPersonas);


        })

    })

    .post('/personsOfProgramByUserId', function (req, res) {
        let userId = req.body.userId;
        let programId = req.body.programId;
        let interesState = req.body.state;
        let personasIntersadasPorPrograma = [];
        db.mkt_carteras.findOne({ user: userId }, function (err, cartera) {
            if (err) return res.status(400).send(err);
            db.mkt_persons.find({ carteras: cartera }, function (err, personas) {
                if (err) return res.status(400).send(err);
                for (let p of personas) {
                    let interes = p.interes;
                    for (let int of interes) {
                        if (int.programId == programId && int.state == interesState) {
                            personasIntersadasPorPrograma.push(p);
                        }
                    }
                }
                return res.status(200).send(personasIntersadasPorPrograma);

            })

        })

    })
    .post('/getInteres', function (req, res) {
        let personId = req.body.personId;
        let eventId = req.body.eventId;
        db.mkt_events.findOne({ _id: eventId }, function (err, event) {
            for (let i of event.interes) {
                if (i.persons == personId) {
                    return res.status(200).send(i);
                }
            }
        })
    })
    .post('/setInteres', function (req, res) {
        let details = req.body.details;
        let state = req.body.state;
        let personId = req.body.personId;
        let eventId = req.body.eventId;
        let programId;
        db.mkt_events.update({ _id: eventId, 'interes.persons': personId }, {
            $set: {
                'interes.$.state': state,
                'interes.$.details': details,
            },
            $push: {
                'interes.$.tracing': req.body.tracing
            }
        }).exec(function (err, event) {
            db.mkt_events.findOne({ _id: eventId }, { programs: 1 }, function (err, event) {
                db.mkt_persons.update({
                    _id: personId,
                    'interes.programId': event.programs,
                    date_state: new Date(),
                }, {
                        $set: {
                            'interes.$.state': state,
                            'interes.$.date_state': new Date(),
                        },
                        $push: {
                            'interes.$.tracing': req.body.tracing
                        }
                    }, function (err, person) {
                        if (err) return res.status(400).send(err);
                        return res.status(200).send();
                    })
            });
        })
    })

    .post('/upload', multipartMiddleware, function (req, res) {
        var body = JSON.parse(req.body.body);
        let respuestaVacia = {};
        try {
            var workbook = XLSX.readFile(req.files.fileKey.path);
            var sheet_name_list = workbook.SheetNames;
            var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
            for (let contact of xlData) {
                let newPerson = new db.mkt_persons(req.body);
                newPerson.carteras = body.cartera._id;
                newPerson.whatsapp_group = 'Importados del Celular';
                newPerson.city = '';
                newPerson.first_name = '';
                newPerson.last_name = '';
                newPerson.email = '';
                newPerson.ocupation = 'Particular';
                newPerson.descOcupation = {
                    carrera: '',
                    universidad: '',
                    semestre: '',
                    areaTrabajo: 'Otro',
                    profesion: '',
                    empresa: '',
                    cargao: ''
                };
                newPerson.interes = body.interes;
                if (contact['Móvil'] != undefined) {

                    if (contact['Móvil'].split(' ')[1] != null) {
                        newPerson.cellphone = contact['Móvil'].split(' ')[1];
                    } else {
                        newPerson.cellphone = contact['Móvil'];
                    }
                    if (contact.Nombre != undefined) {
                        newPerson.first_name = contact.Nombre;
                    } else { newPerson.last_name = ''; }
                    if (contact.Apellidos != undefined) {
                        newPerson.last_name = contact.Apellido;
                    } else { newPerson.last_name = ''; }
                    savePerson();
                } else if (contact.Mobile != undefined) {
                    if (contact.Mobile.split(' ')[1] != null) {
                        newPerson.cellphone = contact.Mobile.split(' ')[1];
                    } else {
                        newPerson.cellphone = contact.Mobile;
                    }
                    if (contact.first_name != undefined) {
                        newPerson.first_name = contact.Firstname;
                    } else { newPerson.first_name = ''; }
                    if (contact.last_name != undefined) {
                        newPerson.last_name = contact.Lastname;
                    } else { newPerson.last_name = ''; }
                    savePerson();
                } else if (contact.mobile != undefined) {
                    if (contact.mobile.split(' ')[1] != null) {
                        newPerson.cellphone = contact.mobile.split(' ')[1];
                    } else {
                        newPerson.cellphone = contact.mobile;
                    }
                    if (contact.first_name != undefined) {
                        newPerson.first_name = contact.Firstname;
                    } else { newPerson.first_name = ''; }
                    if (contact.last_name != undefined) {
                        newPerson.last_name = contact.Lastname;
                    } else { newPerson.last_name = ''; }
                    savePerson();
                }
                function savePerson() {
                    db.mkt_persons.findOne({ cellphone: newPerson.cellphone }, function (err, person) {
                        if (person == null) {
                            newPerson.save(function (err, p) {
                                if (err) console.log(err);
                            });
                        }
                        else console.log('el celular existe')
                    })
                }
            }
        } catch (error) {
            return res.status(400).send(respuestaVacia);
        } finally {
            return res.status(200).send();
        }
    })
    .post('/addFromWhatsapp', function (req, res) {/////////////////////////////NO SE ESETA USANDO///////////////////
        var person = new db.mkt_persons(req.body);
        db.mkt_persons.findOne({ cellphone: person.cellphone }, function (err, existe) {
            if (err) {
                return res.status(400).send(err);

            } else {
                if (existe == null) {
                    person.save(function (err, persona) {
                        if (err) {
                            return res.status(400).send(err);
                        } else {
                            let interesPersona = persona.interes;
                            for (let pi of interesPersona) {
                                db.mkt_events.find({ programs: pi.programId }, function (err, eventos) {
                                    if (err) return res.status(400).send(err);
                                    for (let e of eventos) {
                                        let int = {
                                            persons: persona,
                                            state: 0,
                                            ////////////
                                            //  0 interesados
                                            //  1 en duda
                                            //  2 confirmados
                                            //  3 isncritos
                                            //  4 enlinea
                                            //  5 proximo evento 
                                            //  6 sin interes
                                            //////// 
                                        };
                                        e.interes.push(int);
                                        e.save();
                                    }
                                })
                            }
                            return res.status(200).send(persona);
                        }
                    })

                } else {
                    if (err) return res.status(400).send(err);
                }
            }
        })

    })

    .post('/BatchWhatsappNumbers', function (req, res) {
        let listaNumeros = req.body.listaNumeros;
        let whatsapp_group = req.body.whatsapp_group;
        let cellphone = req.body.cellphone;
        let city = req.body.city;
        let interes = req.body.interes;
        let carteras = req.body.carteras;
        let universida = req.body.universidad;
        let carrer = req.body.carrera;
        var i = 0;
        for (let num of listaNumeros) {

            db.mkt_persons.findOne({ cellphone: num }, function (err, person) {
                if (person == null) {
                    let newPerson = new db.mkt_persons(req.body);
                    newPerson.descOcupation = {};
                    newPerson.first_name = whatsapp_group + ' ' + i;
                    newPerson.last_name = '';
                    newPerson.ci = '';
                    newPerson.contact_medium = 1;
                    newPerson.carteras = carteras;
                    newPerson.phone = 0;
                    newPerson.cellphone = num;
                    newPerson.email = '';
                    newPerson.interes = interes;
                    newPerson.ocupation = 'estudiante';
                    newPerson.descOcupation = {
                        carrera: carrer,
                        universidad: universida,
                        semestre: '',
                        areaTrabajo: 'Otro',
                        profesion: '',
                        empresa: '',
                        cargao: ''
                    };
                    newPerson.save(function (err, np) {
                        if (err) console.log(err);
                        for (let program of interes) {
                            db.mkt_events.find({ programs: program.programId }, function (err, eventos) {
                                for (let e of eventos) {
                                    let inte = {};
                                    inte.persons = np;
                                    inte.state = 0;
                                    inte.date_state = new Date();
                                    e.interes.push(inte);
                                    e.save();
                                }
                            })
                        }

                    });
                }
                i++;
            })
        }
        return res.status(200).send(req.body);
    })


    .post('/filterUniversidadMedio', function (req, res) {
        let listaUniversidades = req.body.listaUniChecked;
        let listaMedios = req.body.listaMedChecked;
        let identity = req.body.identity;
        let listaCarteras = [];
        let personasFiltradas = [];
        let personasFiltroSelectivo = [];
        db.mkt_users.findOne({ _id: identity._id }, function (err, user) {
            if (err) return res.status(200).send(err)
            db.mkt_users.find({ offices: user.offices }, { _id: 1 }, function (err, users) {
                db.mkt_carteras.find({ user: { $in: users } }, { _id: 1 }, function (err, carteraslist) {
                    if (err) return res.status(200).send(err)
                    listaCarteras = carteraslist;
                    db.mkt_persons.find({ carteras: { $in: carteraslist } }, function (err, personas) {
                        for (let p of personas) {
                            for (let ItemUnivers of listaUniversidades) {
                                if (p.descOcupation.universidad == ItemUnivers._id) {
                                    personasFiltradas.push(p);
                                }
                            }
                            for (let ItemMedio of listaMedios) {
                                if (p.contact_medium == ItemMedio.id) {
                                    if (personasFiltradas.includes(p)) {
                                        personasFiltroSelectivo.push(p);
                                    }
                                    else {
                                        personasFiltradas.push(p)
                                    }
                                }
                            }
                        }
                        if ((listaMedios.length > 0) && (listaUniversidades.length > 0)) {
                            return res.status(200).send(personasFiltroSelectivo)
                        } else {
                            return res.status(200).send(personasFiltradas);
                        }
                    })
                })
            })
        })
    })

    .post('/getPersonsShareCarteraEvent', function (req, res) {
        let listaEjecutivos = req.body.lista_ejecutivos;
        let listaEventos = req.body.lista_eventos;
        let listaPersonasDeEventos = [];
        let listaCarteras = [];
        for (let i of listaEventos) {
            for (let ip of i.listaInteres) {
                if (!listaPersonasDeEventos.includes(ip.persons)) {
                    listaPersonasDeEventos.push(ip.persons);
                }
            }
        }
        for (let ejecutivo of listaEjecutivos) {
            listaCarteras.push(ejecutivo.carteraId)
        }
        if ((listaEjecutivos.length > 0) && (listaEventos.length > 0)) {
            db.mkt_persons.find({ _id: { $in: listaPersonasDeEventos }, carteras: { $in: listaCarteras } }, function (err, personas) {
                if (err) return res.status(400).send(err);
                return res.status(200).send(personas);
            })
        } else {
            if ((listaEjecutivos.length > 0) && (listaEventos.length == 0)) {
                db.mkt_persons.find({ carteras: { $in: listaCarteras } }, function (err, personas) {
                    if (err) return res.status(400).send(err);
                    return res.status(200).send(personas);
                })
            } else {
                if ((listaEjecutivos.length == 0) && (listaEventos.length > 0)) {

                    db.mkt_persons.find({ _id: { $in: listaPersonasDeEventos } }, function (err, personas) {
                        if (err) return res.status(400).send(err);
                        return res.status(200).send(personas);
                    })
                }
            }
        }
    })

    .post('/addNewPerson', function (req, res) {
        let interes = req.body.persona.interes;
        db.mkt_persons.findOne({ cellphone: req.body.persona.cellphone }, function (err, celExist) {
            if (err) return res.status(400).send(err);
            if (celExist == null) {
                var person = new db.mkt_persons(req.body.persona);
                // console.log(person);
                person.save(function (err, pers) {
                    // console.log(err)
                    if (err) return res.status(400).send(err)
                    for (let program of interes) {
                        db.mkt_events.find({ programs: program.programId }, function (err, eventos) {
                            for (let e of eventos) {
                                let inte = {};
                                inte.persons = pers;
                                inte.state = 0;
                                inte.date_state = new Date();
                                e.interes.push(inte);
                                e.save();
                            }
                        })
                    }
                    return res.status(200).send(pers);
                })
            } else {
                return res.status(404).send('la persona ya existe');
            }
        })
    })

    .post('/', function (req, res, next) {
        db.mkt_persons.findOne({ ci: req.body.persona.ci }, function (err, ciExist) {
            if (err) return res.status(400).send(err);
            if (ciExist == null) { req.body.found = false; validCell(); }
            else { req.body.found = true; req.body.persona = ciExist; next(); }
        })
        function validCell() {
            db.mkt_persons.findOne({ cellphone: req.body.persona.cellphone }, function (err, celExist) {
                if (err) return res.status(400).send(err);
                if (celExist == null) { req.body.found = false; next(); }
                else { req.body.found = true; req.body.persona = celExist; next(); }
            })
        }
    })
    .post('/', function (req, res) {
        if (req.body.found) return res.status(404).send('Persona Existente');
        var person = new db.mkt_persons(req.body.persona);
        person.save(function (err, person) {
            if (err) { return res.status(400).send(err); }
            return res.status(200).send(person);
        });
    })

    .get('/existCi/:id', function (req, res) {
        db.mkt_persons.findOne({ ci: req.params.id }, { first_name: 1, last_name: 1 }, function (err, user) {
            if (err) return console.log(err);
            if (user == null) return res.sendStatus(404);
            return res.status(200).send(user);
        });
    })
    .put('/:id', function (req, res) {
        db.mkt_persons.findOne({ _id: req.params.id }, function (err, person) {
            if (err) return res.status(400).send(err);
            if (person == null) return res.status(404).send();
            for (i in req.body) {
                person[i] = req.body[i];
            }
            person.save(function (err, person) {
                if (err) return res.status(400).send(err);
                return res.status(200).send(person);
            });
        });
    })
    .put('/ocupation/:id', function (req, res) {
        db.mkt_persons.update({ _id: req.params.id },
            {
                $set: {//Universitario
                    'descOcupation.carrera': req.body.carrera,
                    'descOcupation.universidad': req.body.universidad,
                    'descOcupation.semestre': req.body.semestre,
                    //Particular
                    'descOcupation.areaTrabajo': req.body.areaTrabajo,
                    //Profesional
                    'descOcupation.profesion': req.body.profesion,
                    'descOcupation.empresa': req.body.empresa,
                    'descOcupation.cargo': req.body.cargo,
                }
            }).exec(function (err, off) {
                if (err) return res.status(400).send(err);
            })
    })

    .delete('/:id', function (req, res) {
        db.mkt_persons.remove({ _id: req.params.id }, function (err, person) {
            if (err) return res.status(400).send(err);

            return res.status(200).send(person);
        });
    });

module.exports = router;