const express = require('express');
const authRoute = require('./subRoutes/authRuotes');
const userRoute = require('./subRoutes/userRoutes');
const routes = express.Router();

routes.use('/', authRoute, userRoute);

module.exports = routes;