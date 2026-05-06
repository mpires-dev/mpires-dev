import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "ferreiramatheus48@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not set — contact form submission not delivered.");
      return NextResponse.json({ success: true, dev: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "mpires.dev Contact <contact@mpires.dev>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: subject ? `[mpires.dev] ${subject}` : `[mpires.dev] New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111;">New contact message from mpires.dev</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #555; width: 100px;"><strong>From:</strong></td>
              <td style="padding: 8px 0;">${name} &lt;${email}&gt;</td>
            </tr>
            ${subject ? `<tr><td style="padding: 8px 0; color: #555;"><strong>Subject:</strong></td><td style="padding: 8px 0;">${subject}</td></tr>` : ""}
          </table>
          <hr style="border: 1px solid #eee; margin: 16px 0;" />
          <p style="white-space: pre-wrap; color: #222; line-height: 1.6;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
