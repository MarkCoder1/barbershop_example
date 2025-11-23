import Image from "next/image";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

const items: GalleryItem[] = [
  {
    id: 1,
    src: "https://plus.unsplash.com/premium_photo-1661290481306-4841edd49719?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFkZSUyMGhhaXJjdXR8ZW58MHx8MHx8fDA%3D ",
    alt: "Fade haircut close-up",
  },
  {
    id: 2,
    src: "https://plus.unsplash.com/premium_photo-1661382028468-38612d62a254?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhcmQlMjB0cmltfGVufDB8fDB8fHww",
    alt: "Beard trim in progress",
  },
  {
    id: 3,
    src: "https://media.istockphoto.com/id/1677718095/photo/young-man-having-a-haircut-at-barber-shop.webp?a=1&b=1&s=612x612&w=0&k=20&c=i-MQTemNAjyZmhtFETROIoeEuN5JGR2cP4wHbFSRsLY=",
    alt: "Classic scissors technique",
  },
  {
    id: 4,
    src: "https://media.istockphoto.com/id/2217718340/photo/barber-shaving-a-clients-beard-with-a-straight-razor-in-a-barbershop.webp?a=1&b=1&s=612x612&w=0&k=20&c=f36_d2X-q1w-JJ_i6hYsRTIYufUzfwxT-uSzMrbwZSk=",
    alt: "Straight razor shave",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFyYmVyfGVufDB8fDB8fHww",
    alt: "Line-up finishing touches",
  },
  {
    id: 6,
    src: "https://plus.unsplash.com/premium_photo-1661380558859-40df8dd91dfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFyYmVyfGVufDB8fDB8fHww",
    alt: "Tools neatly arranged",
  },
];

export default function GalleryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(item => (
        <div key={item.id} className="group relative h-64 rounded-lg overflow-hidden shadow-sm">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-3">
            <p className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">{item.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
