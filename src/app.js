const express = require('express');

const app = express();
const routes = require('./Routes');

routes(app);

module.exports = app;
