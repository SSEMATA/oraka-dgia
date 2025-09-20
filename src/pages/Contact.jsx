// src/pages/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h1 className="text-5xl font-extrabold mb-6">
          Contact <span className="text-cyan-400">Me</span>
        </h1>
        <p className="text-gray-300 max-w-xl text-lg">
          I’m always open to discussing new projects, opportunities, or collaborations.
          Fill out the form below or reach me via email. Let’s connect and create something great!
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="flex justify-center flex-1 px-6 pb-32">
        <form
          className="w-full max-w-2xl bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-lg p-8 flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! Your message has been sent.");
          }}
        >
          <div>
            <label className="block mb-2 font-semibold text-gray-200">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-200">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-200">Message</label>
            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 shadow-lg hover:from-blue-400 hover:via-green-300 hover:to-purple-400 transition font-semibold text-white"
          >
            Send Message
          </button>

          <p className="text-gray-400 text-sm mt-4 text-center">
            Or email me directly at{" "}
            <a href="mailto:ssematasabira24@gmail.com" className="text-cyan-400 underline">
              ssematasabira24@gmail.com
            </a>
          </p>
        </form>
      </section>
    </div>
  );
}
