import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import connectDB from '@/lib/db'
import Contact from '@/models/Contact';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, service, country, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await connectDB();
    await Contact.create({ name, email, phone, service, country, message });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,       
      to: process.env.EMAIL_RECEIVER,     
      replyTo: email,                     
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Country: ${country}
Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Message sent and saved successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to process message' }, { status: 500 });
  }
}
