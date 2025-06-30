import React from 'react';

const Footer = () => {
  // Dynamically set the current year for the copyright notice.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800/50 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Description Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-black text-white mb-4">MEAT</h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              A curated gallery for AI-generated art. Where human creativity meets artificial intelligence in a space designed for contemplation and discovery.
            </p>
          </div>

          {/* Explore Links Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><a href="/discover" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Discover</a></li>
              <li><a href="/create" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Create</a></li>
              <li><a href="/collections" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Collections</a></li>
            </ul>
          </div>

          {/* Support Links Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="/help" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Help</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Contact</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Notice */}
        <div className="border-t border-gray-800/50 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">© {currentYear} Meat. A space for AI creativity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
