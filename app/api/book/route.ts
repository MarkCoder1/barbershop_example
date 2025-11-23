import { NextRequest, NextResponse } from "next/server";

interface Booking {
  id: string;
  name: string;
  email: string;
  date: string;
  time: string;
  service: string;
  createdAt: string;
}

// In-memory store (reset on redeploy)
const bookings: Booking[] = [];

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const required = ["name", "email", "date", "time", "service"] as const;
    for (const field of required) {
      if (!data[field] || typeof data[field] !== "string") {
        return NextResponse.json({ message: `Missing field: ${field}` }, { status: 400 });
      }
    }
    // Basic date/time validation
    const dateValid = /^\d{4}-\d{2}-\d{2}$/.test(data.date);
    const timeValid = /^\d{2}:\d{2}$/.test(data.time);
    if (!dateValid || !timeValid) {
      return NextResponse.json({ message: "Invalid date or time format." }, { status: 400 });
    }
    const booking: Booking = {
      id: crypto.randomUUID(),
      name: data.name.trim(),
      email: data.email.trim(),
      date: data.date,
      time: data.time,
      service: data.service.trim(),
      createdAt: new Date().toISOString(),
    };
    bookings.push(booking);
    return NextResponse.json({ message: "Created", booking }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ message: e.message || "Server error" }, { status: 500 });
  }
}

export async function GET() {
  // For demo: return all bookings
  return NextResponse.json({ bookings });
}
