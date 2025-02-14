const mongoose = require('mongoose');
const courseRequest = require('../models/courseRequest');

const postCourseRequest = async(req, res) => {
    try {
        const courseData = new courseRequest(req.body);
        const result = await courseData.save();
        res.status(200).send(result);
    } catch (error) {
        console.log(`An error from add course request ${error}`);
        res.status(500).send(`An error from add course request ${error}`);
    }
}

module.exports = {
    postCourseRequest
}