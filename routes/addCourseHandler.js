const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const verifyAdmin = require('../middleware/verifyAdmin');
const { postCourse, getCourses, getSingleCourse, deleteCourse } = require('../controllers/addCourseController');

router
    .route('/')
    .post(verifyToken, verifyAdmin, postCourse)
    .get(getCourses)

router
    .route('/:id')
    .get(getSingleCourse)
    .delete(verifyToken, verifyAdmin, deleteCourse)

module.exports = router;