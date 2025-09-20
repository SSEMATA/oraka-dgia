// Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 text-gray-300 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-6 gap-6">
        {/* Brand */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">Oraka Digital</h2>
          <p className="text-sm md:text-base">Building innovative and scalable digital solutions for your business.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-semibold mb-2">Quick Links</span>
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Services</a>
            <a href="#" className="hover:text-white transition">Projects</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-2">
            <span className="font-semibold mb-2">Follow Us</span>
            <div className="flex gap-4 mt-1 text-lg">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Oraka Digital. All rights reserved.
      </div>
    </footer>
  );
}
