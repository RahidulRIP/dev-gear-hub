import { Star, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "John Doe",
    role: "Senior Full Stack Dev",
    avatar: "https://i.pravatar.cc/150?u=john",
    text: "The mechanical keyboard I bought from DevGear changed my coding experience. The tactile feedback is amazing!",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    text: "Found the perfect ergonomic chair here. My back pain is gone, and the shipping was incredibly fast!",
    rating: 5,
  },
  {
    name: "Alex Rivera",
    role: "Open Source Contributor",
    avatar: "https://i.pravatar.cc/150?u=alex",
    text: "Best collection of dev gear online. The quality of the products is top-notch. Highly recommended!",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Decorative Quote Icon Background */}
        <Quote className="absolute top-0 left-10 w-32 h-32 text-gray-200 -z-10 opacity-50" />

        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
            Wall of Love
          </h2>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Trusted by 10k+ Developers
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                {/* Star Ratings */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={`${
                        index < rev.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed italic mb-8">
                  {rev.text}
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <Image
                  src={rev.avatar}
                  alt={rev.name}
                  width={400}
                  height={400}
                  className="w-12 h-12 rounded-full border-2 border-blue-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900 leading-none">
                    {rev.name}
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// export default function Testimonials() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-10">What Devs Say</h2>
//         <div className="max-w-3xl mx-auto italic text-gray-600">
//           `The mechanical keyboard I bought from DevGear changed my coding
//           experience. Highly recommended `
//           <p className="mt-4 font-bold text-gray-900 not-italic">
//             - John Doe, Senior Dev
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
