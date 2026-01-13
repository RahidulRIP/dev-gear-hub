import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6">
      <div className="text-center">
        {/* Large Decorative Text */}
        <h1 className="text-9xl font-extrabold text-gray-200 dark:text-gray-800 tracking-widest">
          404
        </h1>
        
        {/* Overlay Message */}
        <div className="bg-blue-600 text-white px-2 text-sm rounded rotate-12 absolute transform -translate-y-20 translate-x-20 hidden md:block">
          Page Not Found
        </div> 

        <h2 className="text-3xl font-bold mt-4 text-gray-900 dark:text-white">
          Lost in the Gear Store?
        </h2>
        
        <p className="text-gray-500 mt-4 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
          
          <Link
            href="/items"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Browse Items
          </Link>
        </div>
      </div>
    </div>
  );
}
