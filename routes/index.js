var express = require('express');
var router = express.Router();

var Class = require('../models/class');

/* GET home page. */
router.get('/', function(req, res, next) {
	Class.getClasses(function(err, classes){
		res.render('index', { classes: classes });
	},8);
});

/* GET About Page */
router.get('/about', function (req, res, next) {
	res.render('about', {title: 'Edusite - About Us'});
});

/* GET Contact Page */
router.get('/contact', function (req, res, next) {
	res.render('contact', {title: 'Edusite - Contact Us'});
});


module.exports = router;
