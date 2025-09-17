// src/components/SearchBar.jsx
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import searchData from "../data/searchData";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const fuse = new Fuse(searchData, {
    keys: ["title", "content", "page"],
    threshold: 0.3,
  });

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (!value.trim()) {
      setResults([]);
    } else {
      const searchResults = fuse.search(value).map((res) => res.item);
      setResults(searchResults);
    }
  };

  const handleSelect = (path) => {
    setQuery("");
    setResults([]);
    setExpanded(false);
    navigate(path);
  };

  // Close search if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full flex justify-center items-center">
      {/* Magnifying lens */}
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="absolute w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center z-10"
        >
          <FiSearch className="text-white text-xl" />
        </button>
      )}

      {/* Expanded input appears in the same horizontal position */}
      {expanded && (
        <div className="absolute w-80 sm:w-96 z-10">
          <div className="flex items-center bg-white rounded-lg shadow-lg p-2">
            <FiSearch className="text-gray-500 text-lg" />
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search the website..."
              className="flex-1 px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </div>

          {results.length > 0 && (
            <div className="mt-2 max-h-64 overflow-y-auto bg-white rounded-lg shadow-lg">
              <ul className="space-y-2 p-2">
                {results.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleSelect(item.path)}
                      className="w-full text-left hover:bg-gray-100 p-2 rounded"
                    >
                      <p className="text-xs text-gray-500">{item.page} Page</p>
                      <h3 className="font-medium text-blue-600">{item.title}</h3>
                      <p className="text-gray-600 text-sm truncate">{item.content}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
