const userModel = require('./../models/user.model');

exports.index = async (req, res) => {
    const users = await userModel.get();

    res.json({
        is_success: true,
        users: users
    });
}

exports.find = async (req, res) => {
    res.json({
        is_success: true
    });
}

exports.store = async (req, res) => {
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };
    
    userModel.create(user)
    
    res.json({
        is_success: true,
    });
}

exports.update = async (req, res) => {

}

exports.delete = async (req, res) => {

}

