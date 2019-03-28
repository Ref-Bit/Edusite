var express = require('express');
var router = express.Router();

// Include Class Model
var Class = require('../models/class');

// Include User Model
var User = require('../models/user');

// Include Student Model
var Student = require('../models/student');

router.get('/classes', function (req, res, next) {
    Student.getStudentByUsername(req.user.username, function (err, student) {
       if (err) throw err;
       res.render('students/classes', {student: student});
    });
});

module.exports = router;