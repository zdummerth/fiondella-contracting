// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@/lib/sendgrid";
import { createFormSubmission } from "@/lib/fauna";

type Data = {
  name?: string;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("submit-contact-form.ts");
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.status(500).json({ error: "Name, Email, and Message are required" });
  }

  try {
    const faunares = await createFormSubmission({ name, email, message });
    const msg = {
      to: ["zdummerth@gmail.com", "captain@integraldeveloping.com"], // Change to your recipient
      replyTo: email,
      from: "mailer@integraldeveloping.com", // Change to your verified sender
      subject: `Outdoors By Chaz Messsage from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
    const sengridres = await sgMail.sendMultiple(msg);
    console.log("Message sent: ", sengridres);
    res.status(200).json({ name });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}
