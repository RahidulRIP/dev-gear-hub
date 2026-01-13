// app/items/page.js

import ItemCard from "@/components/ItemsPage/ItemCard";

// ডাটা ফেচ করার জন্য অ্যারো ফাংশন
const fetchItems = async () => {
  const response = await fetch("http://localhost:5000/api/items", {
    cache: "no-store", // ডাটা ক্যাশ হবে না, প্রতিবার লেটেস্ট ডাটা আসবে
  });

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
        {/* টাইটেল সেকশন */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            DevGear Collection
          </h1>
          <p className="text-gray-500 mt-2 italic text-lg">
            Premium tools for elite developers
          </p>
        </div>

        {/* কন্ডিশনাল রেন্ডারিং (ডাটা চেক) */}
        {items.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-300">
            <p className="text-gray-400 text-lg font-medium">
              No gear found. Start by adding some items to your backend!
            </p>
          </div>
        ) : (
          /* ডাটা ম্যাপ করে গ্রিড আকারে কার্ড দেখানো */
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
