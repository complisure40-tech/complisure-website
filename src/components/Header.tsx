import { Menu, X, FileCheck } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FileCheck className="w-8 h-8 text-emerald-500" />
            <span className="text-2xl font-bold text-white">CompliSure</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-emerald-500 transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-emerald-500 transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-emerald-500 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-all transform hover:scale-105">
              Contact Us
            </Link>
          </div>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link to="/" className="block text-gray-300 hover:text-emerald-500 py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/services" className="block text-gray-300 hover:text-emerald-500 py-2" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/about" className="block text-gray-300 hover:text-emerald-500 py-2" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" className="block w-full text-left bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 mt-2" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
