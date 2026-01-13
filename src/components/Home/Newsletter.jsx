export default function Newsletter() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Subscribe for Gear Updates</h2>
        <div className="flex justify-center mt-6">
          <input
            type="email"
            placeholder="Email address"
            className="p-3 border rounded-l-lg outline-none"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
}
