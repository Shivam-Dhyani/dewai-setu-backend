import nodemailer from "nodemailer";

export const sendVerificationEmail = async (email: string, otp: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: "Verify your email",
    html: `<p>Your OTP is <b>${otp}</b></p>`, // Replace with Stripo-generated HTML
  };

  await transporter.sendMail(mailOptions);
};
