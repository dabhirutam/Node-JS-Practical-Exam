const jwt = require('jsonwebtoken');
const authModel = require('../models/authModel');

const Auth = (route) => async (req, res, next) => {
    const token = req.cookies.examToken;

    if (token) {
        const decode = jwt.verify(token, 'ExamToken');

        if(decode){
            req.user = await authModel.findById(decode._id);
            route === 'signin' ? res.redirect('/home') : next();
        }else {
            route === 'signin' ? next() : res.redirect('/signin');
        }
    } else {
        route === 'signin' ? next() : res.redirect('/signin');
    }
}

module.exports = Auth;