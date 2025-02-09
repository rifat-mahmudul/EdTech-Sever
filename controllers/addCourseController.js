const Courses = require('../models/addCourse');

const postCourse = async(req, res) => {
    try {
        const courseData = new Courses(req.body);
        const result = await courseData.save();
        res.status(200).send(result);
    } catch (error) {
        console.log(`An error from add course ${error}`);
        res.status(500).send('An error from add course ${error}')
    }
}

const getCourses = async(req, res) => {
    try {
        const result = await Courses.find();
        res.status(200).send(result);
    } catch (error) {
        console.log(`An error from get course ${error}`);
        res.status(500).send(`An error from get course ${error}`)
    }
}

const getSingleCourse = async(req, res) => {
    try {
        const id = req.params.id;
        const result = await Courses.findById(id);
        res.status(200).send(result);
    } catch (error) {
        console.log(`An error from get single course ${error}`);
        res.status(500).send(`An error from single course ${error}`)
    }
}


module.exports = {
    postCourse,
    getCourses,
    getSingleCourse
}