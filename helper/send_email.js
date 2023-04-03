var nodemailer = require('nodemailer');

exports.sendmail = (to, cc, subject, text, html, attachment, filename) => {

  
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'kush950ch@gmail.com',
            pass: 'jqltjjhbswkyymof'
        }
    })

    var mail = {
        from: 'kush950ch@gmail.com',
        to: "magicads360@gmail.com",
//         to: "satyajitvarpe07@gmail.com",

        subject: subject,
        html: text
    };

    transporter.sendMail(mail, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log(info);
        }
    });
}

exports.sendmail1 = (to, cc, subject, text, html, attachment, filename) => {

  
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'kush950ch@gmail.com',
            pass: 'jqltjjhbswkyymof'
        }
    })

    var mail = {
        from: 'kush950ch@gmail.com',
        to: to,
        subject: subject,
        html: text, 
      attachments: [
                {
                    filename: document,
                    path: "https://magic-bpdn.onrender.com/documents.pdf,
                },
            ],
    };

    transporter.sendMail(mail, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log(info);
        }
    });
}

