import dotenv from "dotenv";
import transporter from "./config/nodemailer.js";

dotenv.config();

console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("SMTP_PASS:", process.env.SMTP_PASS ? "✅ Loaded" : "❌ Missing");

const mailOptions = {
  from: process.env.SENDER_EMAIL,
  to: "test@example.com", // replace with your email
  subject: "Test Email from Nodemailer",
  text: "Hello! This is a test email sent using Nodemailer + Brevo SMTP.",
};

async function sendTestMail() {
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("✅ Test email sent:", info.response);
  } catch (error) {
    console.error("❌ Error sending test email:", error);
  }
}

sendTestMail();
