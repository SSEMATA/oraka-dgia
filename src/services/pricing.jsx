export default function Pricing() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Pricing Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4">Starter</h2>
          <p className="text-3xl font-bold mb-4">$99<span className="text-lg">/mo</span></p>
          <ul className="mb-4 space-y-2 text-gray-700">
            <li>✔ Social Media Management</li>
            <li>✔ Basic SEO</li>
            <li>✔ Monthly Reports</li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Get Started</button>
        </div>

        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition bg-gray-100">
          <h2 className="text-2xl font-semibold mb-4">Professional</h2>
          <p className="text-3xl font-bold mb-4">$299<span className="text-lg">/mo</span></p>
          <ul className="mb-4 space-y-2 text-gray-700">
            <li>✔ Advanced SEO</li>
            <li>✔ Paid Ads Management</li>
            <li>✔ Bi-Weekly Reports</li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Get Started</button>
        </div>

        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
          <p className="text-3xl font-bold mb-4">$999<span className="text-lg">/mo</span></p>
          <ul className="mb-4 space-y-2 text-gray-700">
            <li>✔ Full Digital Strategy</li>
            <li>✔ Dedicated Manager</li>
            <li>✔ Weekly Reports</li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Get Started</button>
        </div>
      </div>
    </div>
  );
}
