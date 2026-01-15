import Image from "next/image";
import Link from "next/link";

async function fetchCategories() {
  const res = await fetch(
    "https://dev-gear-hub-backend.onrender.com/api/categories",
    {
      cache: "no-store",
    }
  );
  if (!res.ok) return [];
  return res.json();
}

export default async function FeaturedGear() {
  const categories = await fetchCategories();

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-left">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">
              Explore Collections
            </h2>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Popular Categories
            </h1>
          </div>
          <Link
            href="/items"
            className="text-blue-600 font-bold hover:underline mt-4 md:mt-0"
          >
            View All Items →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.length > 0 ? (
            categories.map((cat) => (
              <Link
                key={cat._id}
                href={`/items?category=${cat._id}`} // ক্লিক করলে নির্দিষ্ট ক্যাটাগরিতে নিয়ে যাবে
                className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              >
                <Image
                  src={
                    cat.image ||
                    "https://via.placeholder.com/400x500?text=No+Image"
                  }
                  alt={cat._id}
                  width={400}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <p className="text-blue-400 text-xs font-bold uppercase mb-1">
                    {cat.count} Products
                  </p>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {cat._id}
                  </h4>
                  <span className="text-white/70 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Browse Collection ↗
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">
              No categories found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

// export default function FeaturedGear() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-12">Popular Collections</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {["Keyboards", "Mice", "Monitors", "Chairs"].map((item) => (
//             <div
//               key={item}
//               className="bg-white p-6 rounded-xl shadow-sm hover:scale-105 transition"
//             >
//               <div className="h-40 bg-gray-100 rounded mb-4"></div>
//               <h4 className="font-bold">{item}</h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
