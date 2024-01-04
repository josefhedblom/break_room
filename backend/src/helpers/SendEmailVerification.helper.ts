import nodemailer from "nodemailer";

const sendEmailVarifactionLink = (link: string) => {
  const HTML_TEMPLATE = `
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  
  <body>
      <h1>Email Verification</h1>
  
      <p>Please verifi your email to veify your account.</p>
  
      <a href="${link}" traget="_blank">Verify your email to verify your account</a>
  </body>
  
  </html>
  `;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODE_MAILER_EMAIL,
      pass: process.env.NODE_MAILER_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.NODE_MAILER_EMAIL,
    to: process.env.NODE_MAILER_TEST_RECEIVER,
    subject: "Verifi your email",
    html: `${HTML_TEMPLATE}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

export default sendEmailVarifactionLink;
