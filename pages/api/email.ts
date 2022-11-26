import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

type Data = {
  error: string;
};

const EmailHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  if (req.method === "POST") {
    const {
      name,
      email,
      message,
    }: { name: string; email: string; message: string } = req.body;

    const msg = `
      Name: ${name}\r\n
      Email: ${email}\r\n
      Message: ${message}
    `;

    const data = {
      to: "abhi.jha.cs@gmail.com",
      from: {
        name: `${name}`,
        email: "abhishekjha25112001@gmail.com",
      },
      subject: `${name.toUpperCase()} sent you a message via portfolio`,
      text: msg,
      html: msg.replace(/\r\n/g, "<br>"),
    };

    try {
      await sgMail.send(data);
      return res.status(201).json({ error: "" });
    } catch (error) {
      return res.status(500).json({ error: `${error}` });
    }
  }
};

export default EmailHandler;
