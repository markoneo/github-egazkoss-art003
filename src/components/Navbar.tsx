import React, { useState } from 'react';
import { navigation } from '../data/navigation';
import { Binary, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white/95 backdrop-blur-sm text-gray-900 py-4 px-6 fixed w-full z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <a href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center">
              <Binary className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">ArtComp</span>
              <span className="text-xs text-gray-500 font-medium">Tech Solutions</span>
            </div>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-gray-900"
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
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/setup/telegram"
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
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
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/setup/telegram"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
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