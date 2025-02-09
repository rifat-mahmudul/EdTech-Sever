const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const verifyAdmin = require('../middleware/verifyAdmin');
const { postCourse, getCourses } = require('../controllers/addCourseController');

router
    .route('/')
    .post(verifyToken, verifyAdmin, postCourse)
    .get(getCourses)

module.exports = router;