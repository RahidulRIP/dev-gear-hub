import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* 1. Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white">
              DevGear Hub
            </Link>
            <p className="mt-4 text-sm leading-6">
              Empowering developers with the finest mechanical keyboards, ergonomic chairs, and high-performance hardware.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Shop</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/items" className="hover:text-blue-400 transition-colors">Keyboards</Link></li>
              <li><Link href="/items" className="hover:text-blue-400 transition-colors">Monitors</Link></li>
              <li><Link href="/items" className="hover:text-blue-400 transition-colors">Desk Mats</Link></li>
            </ul>
          </div>

          {/* 3. Support */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Shipping Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Stay Updated</h3>
            <p className="mt-4 text-sm">Subscribe to get special offers and gear updates.</p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-gray-800 border-none rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {currentYear} DevGear Hub. All rights reserved. Built with Next.js 16.
          </p>
          <div className="flex space-x-6">
            {/* Social Links Placeholder */}
            <span className="text-xs hover:text-white cursor-pointer transition-colors">Twitter</span>
            <span className="text-xs hover:text-white cursor-pointer transition-colors">GitHub</span>
            <span className="text-xs hover:text-white cursor-pointer transition-colors">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;