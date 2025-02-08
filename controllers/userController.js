const User = require('../models/user');

const postUser = async(req, res) => {
    try {
        const email = req.body.email;
        const userData = new User(req.body);
        const isExist = await User.findOne({email : email});

        if(isExist){
            return res.status(401).send({message : "User already saved in Database"});
        }

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