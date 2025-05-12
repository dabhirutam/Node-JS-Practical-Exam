const express = require('express');
const userController = require('../../controllers/userController');
const blogController = require('../../controllers/blogController');
const Auth = require('../../middlewares/auth');
const blogImgs = require('../../middlewares/blogImgs');

const userRoute = express.Router();

userRoute.use(Auth('user'));

userRoute.get('/home', userController.Home);

userRoute.get('/addBlog', blogController.ViewAddBlog);
userRoute.post('/addBlog', blogImgs.single('img') , blogController.AddBlog);

module.exports = userRoute;