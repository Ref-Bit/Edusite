var express = require('express');
var router = express.Router();

var Class = require('../models/class');

//Classes Page
router.get('/', function(req, res, next) {
	Class.getClasses(function(err, classes){
		if(err) throw err;
		res.render('courses/index', { classes: classes });
	},6);
});

// Class Details
router.get('/:id/details', function(req, res, next) {
	Class.getClassById([req.params.id],function(err, classname){
		if(err) throw err;
		res.render('courses/details', { classs: classname });
	});
});

// Get Lessons
router.get('/:id/lessons', function(req, res, next) {
	Class.getClassById([req.params.id],function(err, classname){
		if(err) throw err;
		res.render('courses/lessons', { classs: classname });
	});
});

// Get Single Lesson Page
router.get('/:id/lessons/:lesson_id', function(req, res, next) {
	Class.getClassById([req.params.id],function(err, classname){
		if(err) throw err;
		var lesson;
		for (i=0;i<classname.lessons.length;i++){
			if (classname.lessons[i].lesson_number == req.params.lesson_id){
				lesson = classname.lessons[i];
			}
		}
		res.render('courses/lesson', { classs: classname, lesson: lesson});
	});
});



module.exports = router;
