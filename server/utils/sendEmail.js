const nodemailer = require("nodemailer");

const sendEmail =  async(send_to, send_from, subject, html) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    })

    const options = {
        from: send_from,
        to: send_to,
        subject: subject,
        html: html
    }

    // Send email
    transporter.sendMail(options, function(err, info) {
        if(err) {
            console.log(err);
        } else {
            console.log(info);
        }
    })
}

module.exports = sendEmail;