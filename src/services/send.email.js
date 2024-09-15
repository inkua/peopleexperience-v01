
// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";
export default function (to, subject, text) {
        // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        },
    });
    
    // Define a route for sending emails
    // Set up email options
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: `Web People Experience: ${subject}`,
        text: text,
    };
    
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        console.log(error);
        }
        console.log("Email sent: " + info.response);
    });
}
