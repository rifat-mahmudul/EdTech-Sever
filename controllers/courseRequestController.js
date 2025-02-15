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

const getCourseByName = async(req, res) => {
    try {
        const courseName = req.params.courseName;
        const query = {courseName : courseName};
        const result = await courseRequest.findOne(query);
        res.status(200).send(result)
    } catch (error) {
        console.log(`An error from get course request data by email ${error}`);
        res.status(500).send(`An error from get course request data by email ${error}`);
    }
}

const getAllRequest = async(req, res) => {
    try {
        const result = await courseRequest.find();
        res.status(200).send(result);
    } catch (error) {
        console.log(`An error from get all request data ${error}`);
        res.status(200).send(`An error from get all request data ${error}`)
    }
}

const deleteRequest = async(req, res) => {
    try {
        const id = req.params.id;
        const query = {_id : id};
        const result = await courseRequest.deleteOne(query);
        res.status(200).send(result);
    } catch (error) {
        console.log(`An error from delete request data ${error}`);
        res.status(200).send(`An error from delete request data ${error}`)
    }
}

module.exports = {
    postCourseRequest,
    getCourseByName,
    getAllRequest,
    deleteRequest
}