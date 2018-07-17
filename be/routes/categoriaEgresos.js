var express = require('express');
var db = require('../models/db');
var router = express.Router();

router
  .get('/', function (req, res) {
    db.categoriaEgresos.find({}, function (err, categoriaEgresos) {
      if (err) return res.status(400).send(err);

      return res.status(200).send(categoriaEgresos[0]);
    });
  })
module.exports = router;