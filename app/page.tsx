import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="hero relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-700">
          <Image
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Barbershop background"
            fill
            priority
            className="object-cover opacity-30"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-32 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight max-w-2xl">
            Precision Cuts & Classic Shaves
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-200 max-w-xl">
            Experience authentic craftsmanship in a modern, welcoming space. Your style, elevated.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/book" className="btn-primary">Book Appointment</Link>
            <Link href="/gallery" className="btn-secondary">View Gallery</Link>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-20 grid gap-12 md:grid-cols-3">
        {[
          {
            title: "Haircuts",
            desc: "Skin fades, tapers & timeless classics tailored to you.",
            img: "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFyYmVyc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            title: "Shaves",
            desc: "Hot towel straight razor shaves for ultimate relaxation.",
            img: "https://images.unsplash.com/photo-1672642150228-3fcd5826ec26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFyYmVyc2hvcCUyMHNoYXZlfGVufDB8fDB8fHww",
          },
          {
            title: "Beard Care",
            desc: "Detailed shaping & conditioning to keep it sharp.",
            img: "https://images.unsplash.com/photo-1593269244684-3f9c90ddf5a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyYmVyc2hvcCUyMGJlYXJkfGVufDB8fDB8fHww",
          },
        ].map(card => (
          <div key={card.title} className="group rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900 shadow-sm">
            <div className="relative h-48">
              <Image
                src={card.img}
                alt={card.title}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </section>
      <section className="bg-neutral-100 dark:bg-neutral-900 py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-neutral-700 dark:text-neutral-300 text-sm">
              <li>• Master barbers with years of expertise</li>
              <li>• Premium products & hygienic tools</li>
              <li>• Relaxed atmosphere & curated music</li>
              <li>• Consistent results & personal advice</li>
            </ul>
            <Link href="/contact" className="btn-primary mt-8 inline-block">Get In Touch</Link>
          </div>
          <div className="flex-1 relative h-72 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1678356164573-9a534fe43958?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
              alt="Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
