export default function Stats() {
  const statsData = [
    { label: "Items Sold", value: "50k+", icon: "📦" },
    { label: "Happy Devs", value: "12k", icon: "💻" },
    { label: "Support", value: "24/7", icon: "🛠️" },
    { label: "Countries", value: "45+", icon: "🌍" }, // একটি বাড়তি ডাটা যোগ করা হয়েছে ব্যালেন্সের জন্য
  ];

  return (
    <section className="py-10 md:py-20 bg-linear-to-br from-blue-700 via-blue-600 to-indigo-800 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-3xl mb-3 transform group-hover:scale-112 transition-transform duration-300">
                {stat.icon}
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-1 tracking-tight">
                {stat.value}
              </h2>
              <p className="text-blue-100 font-medium uppercase tracking-widest text-xs md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




// export default function Stats() {
//   return (
//     <section className="py-16 bg-blue-600 text-white">
//       <div className="container mx-auto px-6 flex flex-wrap justify-around text-center">
//         <div>
//           <h2 className="text-4xl font-bold">50k+</h2>
//           <p>Items Sold</p>
//         </div>
//         <div>
//           <h2 className="text-4xl font-bold">12k</h2>
//           <p>Happy Devs</p>
//         </div>
//         <div>
//           <h2 className="text-4xl font-bold">24/7</h2>
//           <p>Support</p>
//         </div>
//       </div>
//     </section>
//   );
// }
