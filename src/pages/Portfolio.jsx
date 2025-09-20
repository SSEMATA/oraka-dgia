// src/pages/Portfolio.jsx
import React from "react";
import PropTypes from "prop-types";

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center gap-10 px-6">
          {/* Left Side */}
          <div className="flex-1 text-left relative z-20">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Explore my <span className="text-cyan-400">projects</span> and work.
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-6 max-w-lg">
              Here’s a selection of projects showcasing my skills in full-stack
              development, IoT, digital marketing, and software innovation.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center items-center relative">
            <svg
              className="w-full h-96 md:h-full"
              viewBox="0 0 600 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop stopColor="#00f7ff" offset="0%" />
                  <stop stopColor="#0091ff" offset="100%" />
                </linearGradient>
              </defs>
              <path
                d="M50,60 C150,20 200,120 300,60 S500,120 550,60"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M100,200 Q200,150 350,200 T550,200"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M80,320 L180,280 L280,340 L380,280 L480,340 L580,300"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Floating badge bottom-right */}
        <div className="absolute bottom-8 right-8 bg-gray-900 border border-cyan-500 text-cyan-400 px-4 py-3 rounded-full shadow-lg text-sm font-semibold">
          🚀 Check my latest work!
        </div>
      </section>

      {/* Floating Cards Section */}
      <section className="relative w-full py-20 overflow-hidden">
        <div className="flex animate-marquee gap-8">
          {projects.map((card, i) => (
            <ProjectCard key={i} {...card} />
          ))}
          {projects.map((card, i) => (
            <ProjectCard key={`dup-${i}`} {...card} />
          ))}
        </div>
      </section>

      {/* Animations */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            width: 200%;
            animation: marquee 25s linear infinite;
          }
          .floating-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .floating-card:hover {
            transform: translateY(-10px) scale(1.05);
            box-shadow: 0 0 25px rgba(255,255,255,0.2);
          }
        `}
      </style>
    </div>
  );
}

// Portfolio project data
const projects = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    title: "Spark Food Delivery",
    color: "cyan-400",
    text: "Full-stack e-commerce platform built with React and Django, enhancing user experience and operational efficiency.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/2721/2721298.png",
    title: "Smart Traffic Light System",
    color: "green-400",
    text: "IoT project using Arduino for smart traffic control, integrating sensors and automation for better urban mobility.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    title: "Aqualama Dashboard",
    color: "purple-400",
    text: "Dashboard for monitoring UV-C LED water treatment systems, with real-time analytics and alert notifications.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/3208/3208725.png",
    title: "Digital Marketing Campaigns",
    color: "pink-400",
    text: "Strategies for brand awareness, social media growth, and analytics-driven marketing solutions for businesses.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/753/753318.png",
    title: "Portfolio Website",
    color: "yellow-400",
    text: "Personal portfolio website built with React, TailwindCSS, and animations to showcase projects and skills.",
  },
];

function ProjectCard({ img, title, text, color }) {
  return (
    <div
      className={`floating-card bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-lg border border-${color} p-6 text-left
              w-full sm:w-[500px] sm:h-[250px] md:w-[350px] md:h-[500px] flex flex-col justify-between`}
    >
      <div>
        <img src={img} alt={title} className="w-16 h-16 mb-4" />
        <h3 className={`text-xl font-bold text-${color} mb-2`}>{title}</h3>
        <p className="text-gray-300 text-sm mb-6">{text}</p>
      </div>
      <button
        className={`px-4 py-2 rounded-lg bg-${color} text-gray-900 font-semibold hover:opacity-80 transition self-start`}
      >
        Learn More
      </button>
    </div>
  );
}

ProjectCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
