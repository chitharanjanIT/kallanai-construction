import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, location, projectType, message } =
      await req.json();

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    const to = process.env.QUOTE_TO_EMAIL;

    if (!user || !pass || !to) {
      return NextResponse.json(
        { ok: false, error: "Missing env vars (GMAIL_USER/GMAIL_APP_PASSWORD/QUOTE_TO_EMAIL)" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Kallanai Construction" <${user}>`,
      to,
      replyTo: email,
      subject: `New Quote Request – ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Location: ${location || "-"}
Project Type: ${projectType || "-"}
Message: ${message || "-"}
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Unknown error" },
      { status: 500 }
    );
  }
}