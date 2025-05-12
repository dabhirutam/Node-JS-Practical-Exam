const express = require('express');
const authController = require('../../controllers/authController');
const Auth = require('../../middlewares/auth');

const authRoute = express.Router();

authRoute.get('/signup', authController.ViewSignUp);
authRoute.post('/signup', authController.SignUp);

authRoute.get('/signin', Auth('signin'), authController.ViewSignIn);
authRoute.post('/signin', authController.SignIn);

authRoute.get('/logOut', authController.LogOut);

module.exports = authRoute;