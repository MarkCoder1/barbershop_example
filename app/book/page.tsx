import BookingForm from "../components/BookingForm";

export const metadata = {
  title: "Book Appointment | Sharp Edge Barbershop",
};

export default function BookPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-4">Book an Appointment</h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-10 max-w-2xl">
        Choose your preferred date, time and service. We will review your request and confirm via email.
      </p>
      <BookingForm />
    </div>
  );
}
