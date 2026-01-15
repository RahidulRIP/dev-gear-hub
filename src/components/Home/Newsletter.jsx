import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative bg-linear-to-r from-blue-600 to-indigo-700 rounded-4xl p-8 md:p-16 overflow-hidden shadow-2xl shadow-blue-200">
          {/* Decorative Abstract Shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Never Miss a Gear Drop!
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Join 5,000+ developers. Get early access to new mechanical
              keyboards, setup inspiration, and exclusive tech deals.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full sm:w-auto flex-1 max-w-md px-6 py-4 rounded-xl text-gray-900 outline-none focus:ring-4 focus:ring-blue-300 transition-all shadow-inner border border-gray-400"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2 group shadow-lg"
              >
                Join Now
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>

            <p className="mt-6 text-blue-200 text-xs">
              Zero spam. Only high-quality tech updates. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function Newsletter() {
//   return (
//     <section className="py-20 bg-white text-center">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold mb-4">Subscribe for Gear Updates</h2>
//         <div className="flex justify-center mt-6">
//           <input
//             type="email"
//             placeholder="Email address"
//             className="p-3 border rounded-l-lg outline-none"
//           />
//           <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg">
//             Join Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
