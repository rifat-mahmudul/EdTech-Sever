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


module.exports = {
    postCourse,
}