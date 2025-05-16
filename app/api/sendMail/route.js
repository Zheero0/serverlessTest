import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { to, subject, text, html } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net", // Or your SMTP provider
    port: 587,
    auth: {
      user: "apikey", // Literal string 'apikey' for SendGrid
      pass: process.env.SENDGRID_API_KEY,
    },
  });

  try {
    await transporter.sendMail({
      from: '"My App" <no-reply@mydomain.com>',
      to,
      subject,
      text,
      html,
    });

    return NextResponse.json({ success: true, message: "Email sent" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
