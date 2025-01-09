const express = require('express');
const pessoas = require('./pessoasRoute.js');

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "API Cursos com express e sequelize" })
    });

    app.use(
        express.json(),
        pessoas,
    );
}

module.exports = routes;