// app/items/page.js

import ItemCard from "@/components/ItemsPage/ItemCard";

const fetchItems = async () => {
  const response = await fetch(
    "https://dev-gear-hub-backend.onrender.com/api/items",
    {
      cache: "no-store", // ডাটা ক্যাশ হবে না, প্রতিবার লেটেস্ট ডাটা আসবে
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data from backend");
  }

  return response.json();
};  

const ItemsPage = async () => {
  const items = await fetchItems();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            DevGear Collection
          </h1>
          <p className="text-gray-500 mt-2 italic text-lg">
            Premium tools for elite developers
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-300">
            <p className="text-gray-400 text-lg font-medium">
              No gear found. Start by adding some items to your backend!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemsPage;
