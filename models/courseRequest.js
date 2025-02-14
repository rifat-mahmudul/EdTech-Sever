const mongoose = require('mongoose');

const courseRequestSchema = new mongoose.Schema({
    courseName : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    coursePrice : {
        type : Number,
    },
    student : {
        type : Object,
        required: true
    },
    status : {
        type : String,
        enum : ['Pending', 'Accepted']
    },
    privateGroup : {
        type : String,
    },
    classes : {
        type : Array,
        className : {
            type : String,
            required : true
        },
        classLink : {
            type : String,
            required : true
        }
    }
})

const courseRequest = mongoose.model('CourseRequest', courseRequestSchema);
module.exports = courseRequest;