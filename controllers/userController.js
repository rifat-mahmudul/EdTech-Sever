const User = require('../models/user');

const postUser = async(req, res) => {
    try {
        const userData = new User(req.body);
        const result = await userData.save();
        res.status(200).send(result);
    } catch (error) {
        console.log(`error from post user ${error}`);
        res.status(500).send(`An error from post user ${error}`);
    }
}

module.exports = {
    postUser,
}