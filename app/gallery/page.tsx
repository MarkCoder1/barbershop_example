import GalleryGrid from "../components/GalleryGrid";
import Link from "next/link";

export const metadata = {
  title: "Gallery | Sharp Edge Barbershop",
};

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Gallery</h1>
        <Link href="/book" className="btn-primary text-sm">Book Now</Link>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl text-sm leading-relaxed">
        A glimpse into our craft — fades, trims, shaves & details. All images are inspirational placeholders .
      </p>
      <GalleryGrid />
    </div>
  );
}
