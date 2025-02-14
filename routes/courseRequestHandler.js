const express = require('express');
const router = express.Router();
const verifyAdmin = require('../middleware/verifyAdmin');
const verifyToken = require('../middleware/verifyToken');
const { postCourseRequest, getCourseByName } = require('../controllers/courseRequestController');

router
    .route('/')
    .post(verifyToken, postCourseRequest)

router
    .route('/:courseName')
    .get(verifyToken, getCourseByName)

module.exports = router;