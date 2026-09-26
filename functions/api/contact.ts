// Cloudflare Pages Function — handles POST /api/contact.
// Sends the enquiry by email through the Resend HTTP API.

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_FROM?: string;
  CONTACT_TO?: string;
}

type Context = { request: Request; env: Env };

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
  _gotcha?: string;
};

const DEFAULT_TO = "francisco.m.camposcunha@gmail.com";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function escape(s: string) {
  return s.replace(/[<>&"]/g, (c) =>
    c === "<" ? "&lt;" : c === ">" ? "&gt;" : c === "&" ? "&amp;" : "&quot;",
  );
}

export async function onRequestPost({ request, env }: Context) {
  let body: Payload;
  try {
    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      body = await request.json();
    } else {
      const form = await request.formData();
      body = Object.fromEntries(form.entries()) as Payload;
    }
  } catch {
    return json({ error: "Invalid body" }, 400);
  }

  if (body._gotcha) {
    return json({ ok: true });
  }

  const name = String(body.name || "").trim().slice(0, 200);
  const email = String(body.email || "").trim().slice(0, 200);
  const company = String(body.company || "").trim().slice(0, 200);
  const phone = String(body.phone || "").trim().slice(0, 50);
  const message = String(body.message || "").trim().slice(0, 5000);

  if (!name || !email || !company) {
    return json({ error: "Name, email, and company are required." }, 400);
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ error: "Please provide a valid email." }, 400);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_FROM) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_FROM missing");
    return json({ error: "Email is not configured on the server yet." }, 500);
  }

  const text = [
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Company: ${company}`,
    `Phone:   ${phone || "(not provided)"}`,
    "",
    message || "(no message)",
  ].join("\n");
  const html = `
    <p><strong>Name:</strong> ${escape(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escape(email)}">${escape(email)}</a></p>
    <p><strong>Company:</strong> ${escape(company)}</p>
    <p><strong>Phone:</strong> ${phone ? `<a href="tel:${escape(phone)}">${escape(phone)}</a>` : "<em>(not provided)</em>"}</p>
    <hr/>
    <p style="white-space:pre-wrap">${escape(message) || "<em>(no message)</em>"}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.CONTACT_TO || DEFAULT_TO],
      reply_to: `${name} <${email}>`,
      subject: `Diagnostic enquiry · ${company}`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Contact form: Resend failed", res.status, await res.text());
    return json({ error: "Could not send the message. Please email directly." }, 502);
  }

  return json({ ok: true });
}
