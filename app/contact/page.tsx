import Link from "next/link";

export const metadata = {
  title: "Contact | Sharp Edge Barbershop",
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-4">Contact & Location</h1>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="font-semibold text-lg">Address</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              123 Barber Lane<br />Cityville, ST 00000<br />United States
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Phone</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">(000) 555-0123</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Email</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">hello@sharpedge.example</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Hours</h2>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
              <li>Mon–Fri: 9:00 – 19:00</li>
              <li>Saturday: 9:00 – 16:00</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <Link href="/book" className="btn-primary inline-block">Book Now</Link>
        </div>
        <div className="space-y-4">
          <h2 className="font-semibold text-lg">Map</h2>
          <div className="aspect-video w-full rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-500 text-xs">
            Embed map here (Google Maps iframe)
          </div>
        </div>
      </div>
    </div>
  );
}
