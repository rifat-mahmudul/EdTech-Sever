const express = require('express');
const router = express.Router();
const verifyAdmin = require('../middleware/verifyAdmin');
const verifyToken = require('../middleware/verifyToken');
const { postCourseRequest } = require('../controllers/courseRequestController');

router
    .route('/')
    .post(verifyToken, postCourseRequest)

module.exports = router;