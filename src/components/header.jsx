// src/components/Header.jsx
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import SearchBar from "./searchBar.jsx";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Oraka Digital
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/portfolio" className="hover:text-blue-600">Portfolio</Link>
          <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition"
          >
            <Search size={20} />
          </button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition"
          >
            <Search size={20} />
          </button>
        </div>

      </div>

      {/* Search Popup Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div ref={modalRef} className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <X size={20} />
            </button>
            <SearchBar />
          </div>
        </div>
      )}
    </header>
  );
}
