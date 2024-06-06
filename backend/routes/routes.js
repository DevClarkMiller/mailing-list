const express = require('express');
const cors = require('cors')
const { putEmail } = require('./controllers');

module.exports = (app) =>{
    app.use(express.json());
    app.use(cors());

    app.put('/put/email', putEmail);
}