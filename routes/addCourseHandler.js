const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const verifyAdmin = require('../middleware/verifyAdmin');
const { postCourse } = require('../controllers/addCourseController');

router
    .route('/')
    .post(verifyToken, verifyAdmin, postCourse)

module.exports = router;