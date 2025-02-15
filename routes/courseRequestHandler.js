const express = require('express');
const router = express.Router();
const verifyAdmin = require('../middleware/verifyAdmin');
const verifyToken = require('../middleware/verifyToken');
const { postCourseRequest, getCourseByName, getAllRequest, deleteRequest } = require('../controllers/courseRequestController');

router
    .route('/')
    .post(verifyToken, postCourseRequest)
    .get(verifyToken, verifyAdmin, getAllRequest)

router
    .route('/:courseName')
    .get(verifyToken, getCourseByName)

router
    .route('/:id')
    .delete(verifyToken, verifyAdmin, deleteRequest)

module.exports = router;