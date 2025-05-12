const express = require('express');
const db = require('./config/dbConfig');
const dotenv = require('dotenv');
dotenv.config();
db();

const app = express();
const port = process.env.PORT;

app.listen(port, err => !err && console.log(`Server is running on https://localhost${port}`));