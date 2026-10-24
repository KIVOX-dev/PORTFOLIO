import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

export async function POST(request: Request) {
  const formData = await request.formData();
  const isBot = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const message = String(formData.get("message") ?? "");
  const errors: { email?: string; message?: string } = {};

  // Return without sending if a bot trips the honeypot
  if (isBot) return Response.json({ success: true });

  // Handle input validation on the server
  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message) {
    errors.message = "Please enter a message.";
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return Response.json({ errors });
  }

  const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, EMAIL, FROM_EMAIL } = process.env;

  if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY || !EMAIL || !FROM_EMAIL) {
    return Response.json(
      { errors: { message: "The contact form isn't configured yet. Please email me directly." } },
      { status: 500 }
    );
  }

  const ses = new SESClient({
    region: "us-east-1",
    credentials: { accessKeyId: AWS_ACCESS_KEY_ID, secretAccessKey: AWS_SECRET_ACCESS_KEY },
  });

  // Send email via Amazon SES
  try {
    await ses.send(
      new SendEmailCommand({
        Destination: { ToAddresses: [EMAIL] },
        Message: {
          Body: { Text: { Data: `From: ${email}\n\n${message}` } },
          Subject: { Data: `Portfolio message from ${email}` },
        },
        Source: `Portfolio <${FROM_EMAIL}>`,
        ReplyToAddresses: [email],
      })
    );
  } catch {
    return Response.json(
      { errors: { message: "Your message couldn't be sent. Please try again later." } },
      { status: 502 }
    );
  }

  return Response.json({ success: true });
}
