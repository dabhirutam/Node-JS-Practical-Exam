const blogModel = require("../models/blogModel");

const Home = async (req, res) => {
    const blogs = await blogModel.find();

    res.render('user/home', { blogs });
}

module.exports = {
    Home
}