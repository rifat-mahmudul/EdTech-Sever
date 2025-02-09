const express = require('express');
const router = express.Router();
const { postUser, getUserByEmail } = require('../controllers/userController');

router
    .route('/')
    .post(postUser)

router
    .route('/:email')
    .get(getUserByEmail)

module.exports = router;