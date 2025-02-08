const express = require('express');
const { postJwt } = require('../controllers/jwtController');
const router = express.Router();

router.post('/', postJwt);

module.exports = router;