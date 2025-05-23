import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { emailTemplate } from "@/app/email/emailTemplate";

export async function POST(req) {
  const { recipient } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Or your SMTP provider
    port: 465,
    auth: {
      user: "00xhiroh00@gmail.com", // Literal string 'apikey' for SendGrid
      pass: "wjlbomenbjgpdhwi",
    },
  });
  // Setup email data
  const mailOptions = {
    from: '"Sneakswash LTD" <00xhiroh00@gmail.com>', // Sender address
    to: recipient.email, // List of recipients
    subject: "Sneakswash Order Confrimation", // Subject line
    html: emailTemplate(recipient), // HTML body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Mail sent successfully");

    return NextResponse.json({ success: true, message: "Email sent" });
  } catch (error) {
    console.error("Error sending mail brevr:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
