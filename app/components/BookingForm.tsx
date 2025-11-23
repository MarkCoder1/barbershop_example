"use client";
import { useState } from "react";

interface BookingData {
  name: string;
  email: string;
  date: string;
  time: string;
  service: string;
}

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<BookingData>({
    name: "",
    email: "",
    date: "",
    time: "",
    service: "Haircut",
  });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed");
      setSuccess("Appointment requested! We'll confirm shortly.");
      setForm({ name: "", email: "", date: "", time: "", service: "Haircut" });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-6 max-w-xl">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="form-label">Name</label>
          <input
            required
            type="text"
            className="form-input"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className="form-label">Email</label>
          <input
            required
            type="email"
            className="form-input"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className="form-label">Date</label>
          <input
            required
            type="date"
            className="form-input"
            value={form.date}
            onChange={e => setForm({ ...form, date: e.target.value })}
          />
        </div>
        <div>
          <label className="form-label">Time</label>
          <input
            required
            type="time"
            className="form-input"
            value={form.time}
            onChange={e => setForm({ ...form, time: e.target.value })}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="form-label">Service</label>
          <select
            className="form-input"
            value={form.service}
            onChange={e => setForm({ ...form, service: e.target.value })}
          >
            <option>Haircut</option>
            <option>Haircut + Beard</option>
            <option>Beard Trim</option>
            <option>Hot Towel Shave</option>
          </select>
        </div>
      </div>
      {success && <p className="text-sm text-green-600">{success}</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button disabled={loading} className="btn-primary">
        {loading ? "Sending..." : "Request Appointment"}
      </button>
      
    </form>
  );
}
