// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        {/* Background zig-zag */}
        <div className="absolute left-0 top-0 h-full w-full opacity-10 pointer-events-none">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="zigzagGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop stopColor="#00f7ff" offset="0%" />
                <stop stopColor="#0091ff" offset="100%" />
              </linearGradient>
            </defs>

            <path
              d="M0,80 L80,40 L160,80 L240,40 L320,80 L400,40 L480,80 L560,40 L640,80"
              stroke="url(#zigzagGradient)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0,180 L80,140 L160,180 L240,140 L320,180 L400,140 L480,180 L560,140 L640,180"
              stroke="url(#zigzagGradient)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0,280 L80,240 L160,280 L240,240 L320,280 L400,240 L480,280 L560,240 L640,280"
              stroke="url(#zigzagGradient)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center gap-10 px-6">
          {/* Left Side */}
          <div className="flex-1 text-left relative z-20">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Let’s make your <span className="text-cyan-400">product</span> and
              team a success.
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-6 max-w-lg">
              We partner with you to build better products, accelerate growth,
              and empower your brand with innovative strategies.
            </p>
            <div className="flex gap-4">
              <button className="relative px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 shadow-lg shadow-purple-500/30 hover:from-blue-400 hover:via-green-300 hover:to-purple-400 transition">
                Let’s Talk
              </button>
              <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 via-blue-500 to-green-400 hover:from-purple-400 hover:via-blue-400 hover:to-green-300 shadow-md transition">
                Get Started
              </button>
            </div>
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
          🚀 Don’t miss our Open Summit!
        </div>
      </section>

      {/* Floating Cards Section */}
      <section className="relative w-full py-20 overflow-hidden">
        <div className="flex animate-marquee gap-8">
          {cards.map((card, i) => (
            <Card key={i} {...card} />
          ))}
          {cards.map((card, i) => (
            <Card key={`dup-${i}`} {...card} />
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

const cards = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    title: "Digital Marketing",
    color: "cyan-400",
    text: "Drive traffic, build awareness, and grow your brand with smart campaigns.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/2721/2721298.png",
    title: "Web & App Development",
    color: "green-400",
    text: "From sleek websites to powerful apps, we build platforms that put you ahead.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    title: "Market Reach",
    color: "purple-400",
    text: "Expand your business footprint and connect with new audiences globally.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/3208/3208725.png",
    title: "SEO Optimization",
    color: "pink-400",
    text: "Rank higher on search engines and attract quality traffic with proven SEO.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/753/753318.png",
    title: "Brand Identity",
    color: "yellow-400",
    text: "Craft a unique brand identity that speaks to your audience and builds trust.",
  },
];

function Card({ img, title, text, color }) {
  const isMarketing = title === "Digital Marketing";

  return (
    <div
      className={`floating-card bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-lg border border-${color} p-6 text-left min-w-[300px] min-h-[320px] flex flex-col justify-between`}
    >
      <div>
        <img src={img} alt={title} className="w-16 h-16 mb-4" />
        <h3 className={`text-xl font-bold text-${color} mb-2`}>{title}</h3>
        <p className="text-gray-300 text-sm mb-6">{text}</p>
      </div>
      {isMarketing ? (
        <button className="px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition self-start">
          Learn More
        </button>
      ) : (
        <button
          className={`px-4 py-2 rounded-lg bg-${color} text-gray-900 font-semibold hover:opacity-80 transition self-start`}
        >
          Learn More
        </button>
      )}
    </div>
  );
}
