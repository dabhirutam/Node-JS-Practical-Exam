const blogModel = require("../models/blogModel");


const ViewAddBlog = (req, res) => {
    res.render('user/addBlog');
}

const AddBlog = async (req, res) => {
    try {
        const blog = {...req.body, img: req.file.path, author: req.user._id };

        await blogModel.create(blog);

        console.log("Blog created successfully.");
        res.redirect('/home');
    } catch (error) { console.log("Server Error", error) };
}

module.exports = {
    ViewAddBlog,
    AddBlog
}