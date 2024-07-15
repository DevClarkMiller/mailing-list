const express = require('express');
const cors = require('cors')
const { putEmail } = require('./controllers');

module.exports = (app) =>{
    app.use(express.json());
    app.use(cors());

    app.get('/get/userCount');
    app.put('/put/email', putEmail);
}