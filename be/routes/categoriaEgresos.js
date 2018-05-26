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

	// .get('/:id', function (req, res) {
	// 	db.categoriaEgresos.findOne({_id: req.params.id}, function (err, categoriaEgreso) {
	// 		if (err) return res.status(400).send(err);
  //     		if (categoriaEgreso == null) return res.status(404).send();

	// 		return res.status(200).send(categoriaEgreso);
  // 		});
	// })

	// .post('/', function (req, res) {
	// 	var categoriaEgreso = new db.categoriaEgresos(req.body);
    
	// 	categoriaEgreso.save(function (err, categoriaEgreso) {
	// 		if (err) return res.status(400).send(err);

	// 		return res.status(201).send(categoriaEgreso);
	// 	});
	// })

	// .put('/:id', function (req, res) {
	// 	db.categoriaEgresos.findOne({_id: req.params.id}, function (err, categoriaEgreso) {
	// 		if (err) return res.status(400).send(err);
  //     if (categoriaEgreso == null) return res.status(404).send();

	// 		for (i in req.body) {
	// 			categoriaEgreso[i] = req.body[i];
	// 		}
	// 		categoriaEgreso.save(function (err, categoriaEgreso) {
	// 			if (err) return res.status(400).send(err);

	// 			return res.status(200).send(categoriaEgreso);
	// 		});
	// 	});
	// })

	// .delete('/:id', function (req, res) {
	// 	db.categoriaEgresos.remove({_id: req.params.id}, function (err, categoriaEgreso) {
	// 		if (err) return res.status(400).send(err);

	// 		return res.status(200).send(categoriaEgreso);
	// 	});
	// });

module.exports = router;