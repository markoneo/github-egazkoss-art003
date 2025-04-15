import React, { useState } from 'react';
import { navigation } from '../data/navigation';
import { Binary, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-cream-100 text-gray-900 py-4 px-6 fixed w-full z-50 mt-10 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <a href="/" className="flex items-center space-x-3">
            <div className="logo-container">
              <Binary className="w-8 h-8 text-cream-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">ArtComp</span>
              <span className="text-sm text-gray-600">Tech Solutions</span>
            </div>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-cream-400"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-cream-400 transition-colors hover:scale-110 transform duration-200"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/setup/telegram"
            className="text-gray-700 hover:text-cream-400 transition-colors hover:scale-110 transform duration-200"
          >
            Setup
          </a>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-2">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-cream-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/setup/telegram"
              className="text-gray-700 hover:text-cream-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Setup
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}