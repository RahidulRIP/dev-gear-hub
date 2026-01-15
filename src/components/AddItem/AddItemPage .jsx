"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AddItemPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    category: "",
    stock: "",
    rating: "",
    image: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://dev-gear-hub-backend.onrender.com/api/items",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            price: Number(formData.price),
            stock: Number(formData.stock),
            rating: Number(formData.rating) || 0,
          }),
        }
      );

      if (response.ok) {
        toast.success("Item added successfully!");
        router.push("/items");
        router.refresh();
      } else {
        toast.error("Failed to add item. Please try again.");
      }
    } catch (error) {
      console.error("Error adding item:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center uppercase tracking-wide">
            Add New Tech Gear
          </h2>
        </div>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          className="p-5 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          {/* Item Name - Full width on small, half on medium */}
          <div className="md:col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
              Item Name
            </label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full text-gray-400 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="e.g. Mechanical Keyboard"
            />
          </div>

          {/* Brand */}
          <div className="md:col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              required
              onChange={handleChange}
              className="w-full text-gray-400 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="e.g. Logitech"
            />
          </div>

          {/* Price */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
              Price ($)
            </label>
            <input
              type="number"
              name="price"
              required
              onChange={handleChange}
              min={1}
              className="w-full text-gray-400 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>

          {/* Stock */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
              Stock Quantity
            </label>
            <input
              type="number"
              name="stock"
              required
              onChange={handleChange}
              min={0}
              className="w-full text-gray-400 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>

          {/* Category */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              required
              onChange={handleChange}
              className="w-full text-gray-400 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="e.g. Accessories"
            />
          </div>

          {/* Rating */}
          <div className="col-span-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
              Rating (0 - 5)
            </label>
            <input
              type="number"
              step="0.1"
              max="5"
              min="0"
              name="rating"
              required
              onChange={handleChange}
              className="w-full text-gray-400 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="e.g. 4.5"
            />
          </div>

          {/* Image URL - Full Width on all devices */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              required
              onChange={handleChange}
              className="w-full text-gray-400 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Description - Full Width on all devices */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
              Description
            </label>
            <textarea
              name="description"
              rows="3"
              required
              onChange={handleChange}
              className="w-full text-gray-400 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
              placeholder="Write details about the product..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-4 sm:mt-6">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 sm:py-4 rounded-xl font-bold text-white text-base sm:text-lg transition-all transform active:scale-95 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200"
              }`}
            >
              {loading ? "Adding Item..." : "Add Item to Collection"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemPage;

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

// const AddItemPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     brand: "",
//     price: "",
//     category: "",
//     stock: "",
//     rating: "",
//     image: "",
//     description: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch(
//         "https://dev-gear-hub-backend.onrender.com/api/items",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             ...formData,
//             price: Number(formData.price),
//             stock: Number(formData.stock),
//             rating: Number(formData.rating) || 0,
//           }),
//         }
//       );

//       if (response.ok) {
//         toast.success("Item added successfully!");
//         router.push("/items");
//         router.refresh();
//       } else {
//         toast.error("Failed to add item. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error adding item:", error);
//       toast.error("Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4">
//       <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
//         <div className="bg-blue-600 p-6">
//           <h2 className="text-2xl font-bold text-white text-center">
//             Add New Tech Gear
//           </h2>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
//         >
//           {/* Item Name */}
//           <div className="col-span-2 md:col-span-1">
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Item Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               required
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="e.g. Mechanical Keyboard"
//             />
//           </div>

//           {/* Brand */}
//           <div className="col-span-2 md:col-span-1">
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Brand
//             </label>
//             <input
//               type="text"
//               name="brand"
//               required
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="e.g. Logitech"
//             />
//           </div>

//           {/* Price */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Price ($)
//             </label>
//             <input
//               type="number"
//               name="price"
//               required
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           {/* Stock */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Stock Quantity
//             </label>
//             <input
//               type="number"
//               name="stock"
//               required
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Category
//             </label>
//             <input
//               type="text"
//               name="category"
//               required
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="e.g. Accessories"
//             />
//           </div>

//           {/* Rating (নতুন যোগ করা হয়েছে) */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Rating (0 - 5)
//             </label>
//             <input
//               type="number"
//               step="0.1"
//               max="5"
//               min="0"
//               name="rating"
//               required
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="e.g. 4.5"
//             />
//           </div>

//           {/* Image URL */}
//           <div className="col-span-2">
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Image URL
//             </label>
//             <input
//               type="url"
//               name="image"
//               required
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="https://example.com/image.jpg"
//             />
//           </div>

//           {/* Description */}
//           <div className="col-span-2">
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Description
//             </label>
//             <textarea
//               name="description"
//               rows="3"
//               required
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder="Write details about the product..."
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <div className="col-span-2 pt-4">
//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full py-3 rounded-xl font-bold text-white transition-all ${
//                 loading
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200"
//               }`}
//             >
//               {loading ? "Adding Item..." : "Add Item to Collection"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddItemPage;

// // "use client";

// // import { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import { toast } from "sonner";

// // const   AddItemPage = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     brand: "",
// //     price: "",
// //     category: "",
// //     stock: "",
// //     rating: "",
// //     image: "",
// //     description: "",
// //   });

// //   const [loading, setLoading] = useState(false);
// //   const router = useRouter();

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     try {
// //       const response = await fetch(
// //         "https://dev-gear-hub-backend.onrender.com/api/items",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({
// //             ...formData,
// //             price: Number(formData.price),
// //             stock: Number(formData.stock),
// //             rating: Number(formData.rating),
// //           }),
// //         }
// //       );

// //       if (response.ok) {
// //         toast.success("Item added successfully!");
// //         router.push("/items");
// //         router.refresh();
// //       } else {
// //         toast.error("Failed to add item. Please try again.");
// //       }
// //     } catch (error) {
// //       console.error("Error adding item:", error);
// //       toast.error("Something went wrong!");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-12 px-4">
// //       <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
// //         <div className="bg-blue-600 p-6">
// //           <h2 className="text-2xl font-bold text-white text-center">
// //             Add New Tech Gear
// //           </h2>
// //         </div>

// //         <form
// //           onSubmit={handleSubmit}
// //           className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
// //         >
// //           {/* Item Name */}
// //           <div className="col-span-2 md:col-span-1">
// //             <label className="block text-sm font-semibold text-gray-700 mb-2">
// //               Item Name
// //             </label>
// //             <input
// //               type="text"
// //               name="name"
// //               required
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
// //               placeholder="e.g. Mechanical Keyboard"
// //             />
// //           </div>

// //           {/* Brand */}
// //           <div className="col-span-2 md:col-span-1">
// //             <label className="block text-sm font-semibold text-gray-700 mb-2">
// //               Brand
// //             </label>
// //             <input
// //               type="text"
// //               name="brand"
// //               required
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
// //               placeholder="e.g. Logitech"
// //             />
// //           </div>

// //           {/* Price & Stock */}
// //           <div>
// //             <label className="block text-sm font-semibold text-gray-700 mb-2">
// //               Price ($)
// //             </label>
// //             <input
// //               type="number"
// //               name="price"
// //               required
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-semibold text-gray-700 mb-2">
// //               Stock Quantity
// //             </label>
// //             <input
// //               type="number"
// //               name="stock"
// //               required
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
// //             />
// //           </div>

// //           {/* Image URL */}
// //           <div className="col-span-2">
// //             <label className="block text-sm font-semibold text-gray-700 mb-2">
// //               Image URL
// //             </label>
// //             <input
// //               type="url"
// //               name="image"
// //               required
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
// //               placeholder="https://example.com/image.jpg"
// //             />
// //           </div>

// //           {/* Description */}
// //           <div className="col-span-2">
// //             <label className="block text-sm font-semibold text-gray-700 mb-2">
// //               Description
// //             </label>
// //             <textarea
// //               name="description"
// //               rows="3"
// //               required
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
// //               placeholder="Write details about the product..."
// //             ></textarea>
// //           </div>

// //           {/* Submit Button */}
// //           <div className="col-span-2 pt-4">
// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className={`w-full py-3 rounded-xl font-bold text-white transition-all ${
// //                 loading
// //                   ? "bg-gray-400"
// //                   : "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200"
// //               }`}
// //             >
// //               {loading ? "Adding Item..." : "Add Item to Collection"}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddItemPage;
