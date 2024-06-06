let sqlDB = require("./database");
let db;
const putEmailSql = (email) =>{
    return new Promise((resolve, reject) =>{
        const sql = 'INSERT INTO Emails(email, date_added) VALUES(?, ?);';
        const currentDate = new Date().toISOString();

        //Inserts the values into the database
        db.run(sql, [email, currentDate], function(err) {
            if (err) {
              reject(err);
            }else{
                resolve('Email successfully submitted to the mailing list!');
            }
        });
    });
}

const putEmail = async (req, res) =>{
    db = new sqlDB().createDB();    //Creates the database connections;
    console.log('Put email request');
    const email = req.body.email;
    console.log(email);

    try{
        const resMessage = await putEmailSql(email);
        console.log(resMessage);
        res.status(201).send(resMessage);
    }catch(err){
        if(err.code === 'SQLITE_CONSTRAINT'){
            console.log(`The email ${email} has already been added!`);
            //Sends message saying email is already in system if it's a column constraint error
            res.status(501).send(`The email ${email} has already been added!`); 
        }else{
            res.status(500).send(err);
        }
    }finally{
        //Closes database connection  
        db.close((err) => {
            if (err) {
                console.log(err);
            }
            console.log('Closed the database connection.');
        });
    }
}

module.exports = {putEmail};