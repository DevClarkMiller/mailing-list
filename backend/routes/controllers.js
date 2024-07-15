const nodemailer = require('nodemailer');
let sqlDB = require("./database");
let db;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: process.env.TRANSPONDER_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

const sendMail = async (trans, mailOpts) =>{
    try{
        await trans.sendMail(mailOpts);
        console.log('Confirmation email successfully sent!');
    }catch(error){
        console.log(error);
    }
}

const createMailOptions = (details) =>{
    const mailOptions = {
        from: {
            name: details.name
        },
        to: details.sendTo,
        subject: 'Thank you for confirming',
        text: details.text
    }
    return mailOptions;
}

const mailConfirmation = async (email) =>{
    const mailOpts = createMailOptions({
        name: 'Clark Miller',
        sendTo: email,
        text: "Thank you for subscribing to mailing.list.clarkmiller.ca | To opt-out, please contact me: clarkmillermail.ca"
    });
    sendMail(transporter, mailOpts);
}

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
        mailConfirmation(email);
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

const getNumUsers = async (req, res) =>{

}

module.exports = {putEmail, getNumUsers};