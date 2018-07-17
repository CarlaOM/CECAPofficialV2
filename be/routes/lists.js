var express = require('express');
var db = require('../models/db');
var router = express.Router();

router
    .get('/', function (req, res) {
        db.lists.find({}, function (err, lists) {
            if (err) return res.status(400).send(err);

            return res.status(200).send(lists);
        });
    })
    .get('/:id', function (req, res) {
        db.lists.findOne({ _id: req.params.id }, function (err, list) {
            if (err) return res.status(400).send(err);
            if (list == null) return res.status(404).send();
            return res.status(200).send(list);
        });
    })
    .get('/person/:id', function (req, res) {
        db.lists.findOne({ person: req.params.id }, function (err, list) {
            if (err) return res.status(400).send(err);
            if (list == null) return res.status(404).send(list);
            return res.status(200).send();
            console.log('encontrado')
        });
    })
    .post('/', function (req, res) {
        req.body.assist = true;
        req.body.type = 1;//nuevo=1 yaExi=2
        var lists = new db.lists(req.body);
        lists.save(function (err, lists) {
            if (err) { return res.status(400).send(err); }
            return res.status(200).send(lists);
        });
    });

module.exports = router;