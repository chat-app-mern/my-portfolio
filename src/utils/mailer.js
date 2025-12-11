import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.MAILER_PASSWORD,
    },
});

const mailer = async (to, subject, text, html) => {
    try {
        const mailOptions = {
            from: process.env.MAILER_EMAIL,
            to,
            subject,
            text,
            html,
        };
        const result = await transporter.sendMail(mailOptions);
        return result;
    } catch (error) {
        console.error(`Failed to send email to ${to}:`, error.message);
        throw error;
    }
};

export default mailer;
