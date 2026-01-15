import Image from "next/image";
import Link from "next/link";

const fetchItemDetails = async (id) => {
  const res = await fetch(
    `https://dev-gear-hub-backend.onrender.com/api/items/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;
  return res.json();
};

const ItemDetails = async ({ params }) => {
  const { id } = await params;

  const item = await fetchItemDetails(id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">Item Not Found!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/items"
          className="text-blue-600 hover:underline mb-8 inline-block font-medium"
        >
          ← Back to Collection
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <span className="bg-blue-100 text-blue-700 text-sm font-bold px-3 py-1 rounded-full uppercase">
              {item.brand}
            </span>
            <h1 className="text-4xl font-black text-slate-900 mt-4 mb-2">
              {item.name}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-slate-900">
                ${item.price}
              </span>
              <span className="text-green-600 font-semibold bg-green-50 px-2 py-1 rounded text-sm">
                In Stock: {item.stock}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                Description
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {item.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
              <div>
                <p className="text-sm text-slate-400">Category</p>
                <p className="font-semibold text-slate-800">{item.category}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Rating</p>
                <p className="font-semibold text-slate-800">
                  ⭐ {item.rating} / 5.0
                </p>
              </div>
            </div>

            <button className="w-full mt-10 bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
