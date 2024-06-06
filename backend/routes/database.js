const sqlite3 = require('sqlite3').verbose();
const path = require('path');  
const settings = { path: path.join(__dirname, '..', '.env')};
require('dotenv').config(settings);

class sqlDB{
    constructor(){
        this.DB = null;
    }

    createDB(){
        this.DB = new sqlite3.Database(process.env.DB_PATH, sqlite3.OPEN_READWRITE, (err) =>{
            if(err) {
                return console.error(err);
            }else{
                console.log('Database opened up successfully!');
            }
        });

        return this.DB;
    }
}

module.exports = sqlDB;