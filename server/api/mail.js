const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'Gmail', // You can use any email service provider here (e.g., Gmail, Outlook, etc.)
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS  // Your email password or app-specific password
    }
});

const mail = async (to, name, text) => {
    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender address
        to: process.env.EMAIL_USER, // List of recipients
        subject: `Email from ${name} <${to}`, // Subject line
        text: text, // Plain text body
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return { success: true, info };
    } catch (error) {
        return { success: false, error };
    }
};

module.exports = mail;
