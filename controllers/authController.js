const authModel = require("../models/authModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const ViewSignUp = (req, res) => res.render('auth/signUp');

const ViewSignIn = (req, res) => res.render('auth/signIn');

const SignUp = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await authModel.findOne({ email });

        if (user) return console.log("User allready exist.");

        const auth = await new authModel({
            username,
            email,
            password: await bcrypt.hash(password, 10),
            role: 'user'
        });

        await auth.save();

        console.log("User Created successfully.");

        res.redirect('/signin');
    } catch (error) { console.log("Server Error", error) };
}

const SignIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const auth = await authModel.findOne({ email });

        if (auth) {
            const verify = await bcrypt.compare(password, auth.password);

            if (!verify) return console.log("Email or password don't match");

            const token = jwt.sign({ _id: auth._id }, 'ExamToken');
            res.cookie('examToken', token, { maxAge: 1000 * 60 * 60, expire: true, httpOnly: true });

            console.log("User login successfully");

            res.redirect('/home');
        } else {
            return console.log("User don't exist.");
        }
    } catch (error) { console.log("Server Error", error) };
}

const LogOut = (req, res) => {
    res.clearCookie('examToken');
    res.redirect('/signin');
}

module.exports = {
    ViewSignUp,
    ViewSignIn,
    SignUp,
    SignIn,
    LogOut
}