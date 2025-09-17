// src/pages/Pricing.jsx
import React, { useState } from "react";

export default function Pricing() {
  const [showWebsitePlans, setShowWebsitePlans] = useState(false);

  const plans = [
    {
      name: "Startup",
      price: "$29",
      color: "cyan-400",
      desc: "Perfect for small businesses starting out.",
      features: [
        "Basic marketing support",
        "Email campaigns (up to 1,000)",
        "Basic analytics dashboard",
      ],
    },
    {
      name: "Silver",
      price: "$59",
      color: "green-400",
      desc: "For growing businesses needing more reach.",
      features: [
        "Advanced marketing support",
        "Email campaigns (up to 5,000)",
        "Detailed analytics",
        "Priority support",
      ],
    },
    {
      name: "Premiere",
      price: "$99",
      color: "purple-400",
      desc: "Best for businesses scaling fast.",
      features: [
        "Premium marketing support",
        "Email campaigns (up to 20,000)",
        "Advanced analytics & reports",
        "Priority phone support",
      ],
    },
    {
      name: "Pro",
      price: "$149",
      color: "pink-400",
      desc: "For large businesses or agencies.",
      features: [
        "All-in-one marketing suite",
        "Unlimited email campaigns",
        "Custom analytics dashboard",
        "Dedicated account manager",
      ],
    },
  ];

  const websitePlans = [
    {
      name: "Basic Website",
      price: "$199",
      color: "cyan-400",
      desc: "A simple website to get started.",
      features: ["Up to 5 pages", "Responsive design", "Basic SEO"],
    },
    {
      name: "Business Website",
      price: "$399",
      color: "green-400",
      desc: "For growing businesses with more features.",
      features: ["Up to 10 pages", "SEO & analytics", "CMS integration"],
    },
    {
      name: "E-commerce",
      price: "$699",
      color: "purple-400",
      desc: "Full online store solution.",
      features: ["Unlimited products", "Payment gateway", "Advanced analytics"],
    },
  ];

  const cardClasses =
    "floating-card bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center flex flex-col justify-between";

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen relative px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="relative z-10 text-center pt-20">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Choose Your <span className="text-cyan-400">Plan</span>
        </h1>
        <p className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Flexible plans to power your marketing needs
        </p>
      </div>

      {/* Marketing Pricing Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center pb-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`${cardClasses} border border-${plan.color} w-full sm:max-w-xs md:max-w-sm lg:max-w-md`}
          >
            <div>
              <h2 className={`text-2xl font-bold text-${plan.color} mb-2`}>
                {plan.name}
              </h2>
              <p className="text-gray-300 text-sm mb-4">{plan.desc}</p>
              <div className="text-4xl font-extrabold text-white mb-4">
                {plan.price}
                <span className="text-base text-gray-400 font-normal">/mo</span>
              </div>
              <ul className="space-y-2 text-gray-300 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-400 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-6 px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition self-center ${
                i === 0
                  ? "bg-white text-gray-900"
                  : `bg-${plan.color} text-gray-900`
              }`}
            >
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>

      {/* View Website Development Plan Button */}
      <div className="text-center mb-12">
        <button
          className="flex items-center justify-center mx-auto text-cyan-400 font-semibold text-lg hover:text-cyan-300 transition"
          onClick={() => setShowWebsitePlans(!showWebsitePlans)}
        >
          View Website Development Plan
          <span
            className={`ml-2 transform transition-transform duration-300 ${
              showWebsitePlans ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
      </div>

      {/* Website Plans Section */}
      {showWebsitePlans && (
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center pb-20">
          {websitePlans.map((plan, i) => (
            <div
              key={i}
              className={`${cardClasses} border border-${plan.color} w-full sm:max-w-xs md:max-w-sm lg:max-w-md`}
            >
              <div>
                <h2 className={`text-2xl font-bold text-${plan.color} mb-2`}>
                  {plan.name}
                </h2>
                <p className="text-gray-300 text-sm mb-4">{plan.desc}</p>
                <div className="text-4xl font-extrabold text-white mb-4">
                  {plan.price}
                  <span className="text-base text-gray-400 font-normal">/mo</span>
                </div>
                <ul className="space-y-2 text-gray-300 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-400 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-6 px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition self-center ${
                  i === 0
                    ? "bg-white text-gray-900"
                    : `bg-${plan.color} text-gray-900`
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      )}

      <style>
        {`
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
