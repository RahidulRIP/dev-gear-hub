import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gray-50 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
          Level Up Your <span className="text-blue-600">Coding Setup</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          From ergonomic chairs to mechanical keyboards, find the gear that
          helps you code faster and stay comfortable.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/items"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Browse Gear
          </Link>
          <Link
            href="#features"
            className="bg-white border border-gray-300 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
