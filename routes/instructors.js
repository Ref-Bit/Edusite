var express = require('express');
var router = express.Router();

// Include Class Model
var Class = require('../models/class');

// Include User Model
var User = require('../models/user');

// Include Instructor Model
var Instructor = require('../models/instructor');

router.get('/classes', function (req, res, next) {
    Instructor.getInstructorByUsername(req.user.username, function (err, instructor) {
        if (err) throw err;
        res.render('instructors/classes', {instructor: instructor});
    });
});

router.post('/classes/register', function (req, res) {
    let info = [];
    info['instructor_name'] = req.user.username;
    info['class_id'] = req.body.class_id;
    info['class_title'] = req.body.class_title;

    Instructor.register(info, function (err, instructor) {
        if (err) throw err;
        console.log(instructor);
    });
    req.flash('success_msg', 'You are now registered for this class');
    res.redirect('/instructors/classes');
});

//Get New Lesson Page
router.get('/classes/:id/lessons/new', function (req, res, next) {
        res.render('instructors/newLesson', {class_id: req.params.id});
});

//Create New Lesson Page
router.post('/classes/:id/lessons/new', function (req, res, next) {
    //Get Values
    var info = [];
    info['class_id'] = req.params.id;
    info['lesson_number'] = req.body.lesson_number;
    info['lesson_title'] = req.body.lesson_title;
    info['lesson_body'] = req.body.lesson_body;

    Class.addLesson(info, function (err, lesson) {
        console.log('Lesson Added...')
    });
    req.flash('success_msg', 'Lesson Added');
    res.redirect('/instructors/classes');
});

module.exports = router;