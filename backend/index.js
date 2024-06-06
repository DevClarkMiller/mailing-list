const path = require('path');  
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const app = express();
require('./routes/routes')(app);

const VERSION = '0.0.1 - ALPHA';

app.listen(process.env.PORT, () =>{
    console.log(`App is now listening on port ${process.env.PORT}`);
    console.log(`Version: ${VERSION}`);
});