// components/ItemCard.js
import Link from 'next/link';

const ItemCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* প্রোডাক্ট ইমেজ */}
      <div className="h-52 overflow-hidden bg-gray-100">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* প্রোডাক্ট ইনফরমেশন */}
      <div className="p-5">
        <div className="mb-1">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            {item.brand}
          </span>
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
            {item.name}
          </h3>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-black text-gray-900">
            ${item.price}
          </span>
          
          <Link 
            href={`/items/${item.id}`}
            className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;