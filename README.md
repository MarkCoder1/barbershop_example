## Sharp Edge Barbershop Showcase

This is a showcase barbershop website built with the Next.js App Router. It includes:

- Hero landing page with services overview
- Responsive navigation & footer
- Image gallery (placeholder Unsplash images – replace with your own)
- Contact page (address, hours, map placeholder)
- Booking form with in‑memory API route (`/api/book`)

> NOTE: Bookings are stored only in memory and will reset on each restart or deployment. Integrate a database (e.g. Prisma + PostgreSQL) or email service for production use.

### Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

### Project Structure

```
app/
	page.tsx          # Home (hero + services)
	gallery/page.tsx  # Gallery
	book/page.tsx     # Booking page
	contact/page.tsx  # Contact info
	api/book/route.ts # Booking API
	components/       # Reusable UI pieces
```

### Customization

- Replace Unsplash image URLs with local images in `public/` or your own remote assets.
- Add a DB: create a Prisma schema, replace in‑memory array in `api/book/route.ts`.
- Email notifications: integrate Resend / Nodemailer in the POST handler.
- Map: drop a real Google Maps iframe into the placeholder div in `contact/page.tsx`.

### Styling

Tailwind CSS v4 is used via `@import "tailwindcss";` with custom utility classes in `globals.css` (`btn-primary`, `form-input`, etc.).

### Deployment

Deploy easily on Vercel. Set environment variables (DB URL, email API keys) once you add integrations.

### Next Steps (Suggested Enhancements)

- Service detail pages
- Reviews/testimonials section
- Authentication for managing bookings
- Dashboard to confirm/cancel appointments

### License

Showcase only – adapt freely for your own shop. Remove placeholder data before production.
