// Import the necessary modules
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Create an instance of the Express app
const app = express();

// Add middleware to parse incoming JSON data and enable CORS
app.use(bodyParser.json());
app.use(cors());

// Define your sendEmail route
app.post('/sendEmail', (req, res) => {
    // Retrieve email data from the request body
    const { name, email, phone, subject, message } = req.body;

    // Replace the following with your SMTP configuration
    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com', // Replace with your SMTP host address
        port: 465, // Replace with your SMTP port
        secure: true, // Set to true if your SMTP port requires SSL/TLS
        auth: {
            user: 'hello@rittik.tech', // Replace with your email address
            pass: 'S@dhukhan99', // Replace with your email password or app password
        },
    });

    // Email message configuration
    const mailOptions = {
        from: email, // Sender's email address
        to: 'hello@example.com', // Replace with your recipient email
        subject: `New Contact Form Submission: ${subject}`,
        text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Something went wrong. Please try again later.' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ message: 'Message sent successfully!' });
        }
    });
});

// Start your Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
