import { Truck, ShieldCheck, Users } from "lucide-react";

const features = [
  { 
    title: "Fast Shipping", 
    desc: "Get your gear within 48 hours with our express delivery network.",
    icon: <Truck className="w-8 h-8 text-blue-600" />,
    color: "bg-blue-50"
  },
  { 
    title: "Quality Gear", 
    desc: "Handpicked top-rated mechanical keyboards and ergonomic accessories.",
    icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
    color: "bg-indigo-50"
  },
  { 
    title: "Dev Community", 
    desc: "Trusted by 10k+ elite developers and top tech companies worldwide.",
    icon: <Users className="w-8 h-8 text-purple-600" />,
    color: "bg-purple-50"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Why DevGear?</h2>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Built for the modern developer workflow
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="group p-10 bg-white border border-gray-100 rounded-3xl hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {f.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




// const features = [
//   { title: "Fast Shipping", desc: "Get your gear within 48 hours." },
//   { title: "Quality Gear", desc: "Top-rated mechanical keyboards and accessories." },
//   { title: "Dev Community", desc: "Trusted by 10k+ developers worldwide." }
// ];

// export default function Features() {
//   return (
//     <section id="features" className="py-20 bg-white">
//       <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
//         {features.map((f, i) => (
//           <div key={i} className="p-8 border rounded-2xl hover:shadow-lg transition">
//             <h3 className="text-xl font-bold mb-4">{f.title}</h3>
//             <p className="text-gray-500">{f.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }