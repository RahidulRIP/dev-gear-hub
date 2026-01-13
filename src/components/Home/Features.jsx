const features = [
  { title: "Fast Shipping", desc: "Get your gear within 48 hours." },
  { title: "Quality Gear", desc: "Top-rated mechanical keyboards and accessories." },
  { title: "Dev Community", desc: "Trusted by 10k+ developers worldwide." }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
        {features.map((f, i) => (
          <div key={i} className="p-8 border rounded-2xl hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-4">{f.title}</h3>
            <p className="text-gray-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}