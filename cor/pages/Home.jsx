// src/pages/Home.jsx
import React, { useState } from "react";
import Fuse from "fuse.js";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Example data to search (you can extend this with content from other pages/components)
  const data = [
    { id: 1, title: "Welcome to Oraka Digital Agency", content: "We provide SEO, branding, and social media marketing." },
    { id: 2, title: "Our Services", content: "SEO optimization, PPC campaigns, content creation, and web design." },
    { id: 3, title: "Pricing Plans", content: "Affordable monthly packages for startups and enterprises." },
    { id: 4, title: "About Us", content: "We are a team of professionals helping brands grow digitally." },
  ];

  // Fuse.js configuration
  const fuse = new Fuse(data, {
    keys: ["title", "content"],
    threshold: 0.3, // lower = stricter match
  });

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
    } else {
      const searchResults = fuse.search(value).map((res) => res.item);
      setResults(searchResults);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Oraka Digital Agency</h1>
      <p className="mt-4 text-lg text-gray-600">
        We help businesses grow through Digital Marketing, SEO, and Branding.
      </p>

      {/* Search Section */}
      <div className="mt-6 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search anything..."
          value={query}
          onChange={handleSearch}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Search Results */}
      {results.length > 0 && (
        <div className="mt-4 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Search Results:</h2>
          <ul className="space-y-2">
            {results.map((item) => (
              <li key={item.id} className="border-b pb-2">
                <h3 className="font-medium text-blue-600">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
