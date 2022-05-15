var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	let a = req.query.a;
	let b = req.query.b;
	res.render('add', { title: "Add", a: a, b: b });
	next();
});

router.post('/', function (req, res, next) {
	let a = req.body.a;
	let b = req.body.b;
	res.render('posted', { title: "Posted", a: a, b: b });
	next();
});

module.exports = router;
