const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');

admin.initializeApp();

var transporter = nodemailer.createTransport({
    service : 'Gmail',
    auth: {
        user: 'info.letsgodigital@gmail.com',
        pass: 'letsgo2019'
    }
});

var mailOptions = {
    from: 'info.letsgodigital@gmail.com',
    to: 'info.letsgodigital@gmail.com',
    subject: 'New Message Let on Website'
};

exports.sendUserMessage = functions
    .firestore
    .document('messages/{messsagesID}')
    .onCreate((snapshot, context)=>{
        // mailOptions.text = "A new Booking has been made by <br>" + snapshot.data().name + " for the <br/>" + snapshot.data().service + " service, on " + snapshot.data().date + " during the " + snapshot.data().timeslot + ". /nHis/Her phone number is " + snapshot.data().phone;
        mailOptions.html = `A new Message has been left by a user named: <strong>${snapshot.data().UserName}</strong><br/>
                            Their Phone number is: <strong>${snapshot.data().UserPhone}</strong>, Their email is: <strong>${snapshot.data().UserEmail}.</strong><br/>
                            <br/>
                            Their message is as follows: <br>
                            ___________________________________________________________________<br>
                            <em><b>${snapshot.data().Message}</b></em><br>
                            _____________________<em><small>end__of__message</small></em>_____________________________`;

        return transporter.sendMail(mailOptions)
        .then(()=>{
            console.log("New User Message email sent to admin");
            return null;
        })
    })