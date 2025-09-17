// src/components/FloatingChart.jsx
import React, { useState } from "react";
import { MessageCircle } from "lucide-react"; // icon library, install via npm if missing

export default function FloatingChart() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <MessageCircle size={24} />
      </button>

      {/* Popup Chat/Chart */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-xl shadow-xl p-4 flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Live Chart</h2>
          <div className="flex-1 overflow-y-auto border p-2 rounded bg-gray-50">
            {/* Replace this with chart.js or chatbot UI */}
            <p className="text-sm text-gray-500">This is where live chart/chat will go.</p>
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            className="mt-2 w-full border rounded px-3 py-2 text-sm focus:ring focus:ring-blue-300"
          />
        </div>
      )}
    </div>
  );
}
