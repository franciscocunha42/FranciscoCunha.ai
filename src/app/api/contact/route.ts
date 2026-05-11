import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const TO = "francisco.m.camposcunha@gmail.com";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  _gotcha?: string;
};

function escape(s: string) {
  return s.replace(/[<>&"]/g, (c) =>
    c === "<" ? "&lt;" : c === ">" ? "&gt;" : c === "&" ? "&amp;" : "&quot;",
  );
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      body = await req.json();
    } else {
      const form = await req.formData();
      body = Object.fromEntries(form.entries()) as Payload;
    }
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  if (body._gotcha) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const company = (body.company || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !company) {
    return NextResponse.json(
      { error: "Name, email, and company are required." },
      { status: 400 },
    );
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;

  if (!host || !user || !pass || !from) {
    console.error("Contact form: SMTP env vars missing");
    return NextResponse.json(
      { error: "Email is not configured on the server yet." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const subject = `Diagnostic enquiry · ${company}`;
  const text = [
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Company: ${company}`,
    "",
    message || "(no message)",
  ].join("\n");
  const html = `
    <p><strong>Name:</strong> ${escape(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escape(email)}">${escape(email)}</a></p>
    <p><strong>Company:</strong> ${escape(company)}</p>
    <hr/>
    <p style="white-space:pre-wrap">${escape(message) || "<em>(no message)</em>"}</p>
  `;

  try {
    await transporter.sendMail({
      from,
      to: TO,
      replyTo: `${name} <${email}>`,
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error("Contact form: sendMail failed", err);
    return NextResponse.json(
      { error: "Could not send the message. Please email directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
