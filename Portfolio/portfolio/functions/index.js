const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});

admin.initializeApp();


var transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "85c20c4f082067",
    pass: "cc11f0bdf27231"
  }
});

exports.emailSender = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const dest = request.query.dest;

    const mailOptions = {
      from: "GMail <rodonnel@gmail.com>",
      to: dest,
      subject: "From Personal Website",
      html: "<p>Test</p>",
    };

    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return response.send(erro.toString());
      }
      return response.send("Sent");
    });
  });
});
