const express = require('express');
const router = express.Router();
const { postUser, getUserByEmail, getAllUser } = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');
const verifyAdmin = require('../middleware/verifyAdmin');

router
    .route('/')
    .post(postUser)
    .get(verifyToken, verifyAdmin, getAllUser)

router
    .route('/:email')
    .get(getUserByEmail)

module.exports = router;