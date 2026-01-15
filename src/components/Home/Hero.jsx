"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  const sliderImages = [
    {
      src: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1000",
      alt: "Mechanical Keyboard",
    },
    {
      src: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1000",
      alt: "Setup",
    },
    {
      src: "https://i.ibb.co.com/F4FRWqcz/item-7.webp",
      alt: "Mouse",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-12 lg:py-24 overflow-hidden border-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Level Up Your <br />
              <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Coding Setup
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
              From ergonomic chairs to mechanical keyboards, find the gear that
              helps you code faster and stay comfortable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                href="/items"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 text-center"
              >
                Browse Gear
              </Link>
              <Link
                href="#features"
                className="bg-white text-gray-500 border border-gray-300 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Slider */}
          <div className="lg:w-1/2 w-full max-w-2xl">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-75 sm:h-112.5"
              >
                {sliderImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm font-bold text-blue-600">
                  New Arrivals 2026 🔥
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative bg-gray-50 py-20 lg:py-32 overflow-hidden">
//       <div className="container mx-auto px-6 text-center">
//         <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
//           Level Up Your <span className="text-blue-600">Coding Setup</span>
//         </h1>
//         <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
//           From ergonomic chairs to mechanical keyboards, find the gear that
//           helps you code faster and stay comfortable.
//         </p>
//         <div className="flex justify-center gap-4">
//           <Link
//             href="/items"
//             className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
//           >
//             Browse Gear
//           </Link>
//           <Link
//             href="#features"
//             className="bg-white border border-gray-300 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition"
//           >
//             Learn More
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
