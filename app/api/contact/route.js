import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
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

    return NextResponse.json({ message: 'Message saved successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to process message' }, { status: 500 });
  }
}
