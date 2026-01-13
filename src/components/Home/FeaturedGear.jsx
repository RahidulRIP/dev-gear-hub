export default function FeaturedGear() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Popular Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Keyboards", "Mice", "Monitors", "Chairs"].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-xl shadow-sm hover:scale-105 transition"
            >
              <div className="h-40 bg-gray-100 rounded mb-4"></div>
              <h4 className="font-bold">{item}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
