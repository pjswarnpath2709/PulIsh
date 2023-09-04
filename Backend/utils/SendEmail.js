import { createTransport } from "nodemailer";

const sendEmail = async ({ to, subject, text }) => {
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    secure: false,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: to,
    subject: subject,
    text: text,
  };
  return await transporter.sendMail(mailOptions);
};


export default sendEmail;
