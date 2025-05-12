const express = require('express');
const db = require('./config/dbConfig');
const dotenv = require('dotenv');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
const cookie = require('cookie-parser');
const session = require('express-session');
dotenv.config();
db();

const app = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookie());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));

app.use('/', routes);

app.listen(port, err => !err && console.log(`Server is running on https://localhost:${port}`));