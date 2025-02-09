const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const verifyAdmin = require('../middleware/verifyAdmin');
const { postCourse, getCourses, getSingleCourse } = require('../controllers/addCourseController');

router
    .route('/')
    .post(verifyToken, verifyAdmin, postCourse)
    .get(getCourses)

router
    .route('/:id')
    .get(getSingleCourse)

module.exports = router;