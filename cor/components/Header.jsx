import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import Fuse from "fuse.js";
import searchData from "../data/searchData"; // ✅ fixed import

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // Configure Fuse.js
  const fuse = new Fuse(searchData, {
    keys: ["title", "content"], // Search both title and content
    threshold: 0.3, // Lower = stricter, Higher = fuzzier matches
  });

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim().length > 0) {
      const searchResults = fuse.search(value).map((r) => r.item);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  const handleSelect = (path) => {
    setQuery("");
    setResults([]);
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4 space-y-3 md:space-y-0">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Oraka Digital
        </Link>

        {/* Search Bar */}
        <div className="relative w-full max-w-lg">
          <div className="flex items-center border rounded-full px-4 py-2 shadow-sm">
            <Search className="text-gray-400 mr-2" size={20} />
            <input
              type="text"
              placeholder="Search services, pricing, portfolio..."
              value={query}
              onChange={handleSearch}
              className="flex-1 outline-none"
            />
          </div>

          {/* Search Results */}
          {results.length > 0 && (
            <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
              {results.map((r) => (
                <button
                  key={r.id}
                  onClick={() => handleSelect(r.path)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  <span className="font-semibold">{r.title}</span>
                  <p className="text-sm text-gray-600 truncate">{r.content}</p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/portfolio" className="hover:text-blue-600">Portfolio</Link>
          <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-2 p-4">
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Home</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Services</Link>
            <Link to="/portfolio" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Portfolio</Link>
            <Link to="/pricing" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Pricing</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
