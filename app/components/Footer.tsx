import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <h3 className="font-semibold mb-2">Sharp Edge Barbershop</h3>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Crafting precision cuts & classic shaves. Walk-ins welcome.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Hours</h3>
          <ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
            <li>Mon–Fri: 9:00 – 19:00</li>
            <li>Saturday: 9:00 – 16:00</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Connect</h3>
          <ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/book">Book Appointment</Link></li>
            <li><a href="#" aria-disabled>Instagram (coming soon)</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs py-4 border-t border-neutral-200 dark:border-neutral-800 text-neutral-500">
        © {new Date().getFullYear()} Sharp Edge Barbershop. All rights reserved.
      </div>
    </footer>
  );
}
