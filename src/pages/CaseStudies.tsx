

const CaseStudies = () => (
  <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-6 flex flex-col items-center mt-24">
    <section className="max-w-3xl w-full text-center mb-16 animate-fadeIn">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">Case Studies</h1>
      <p className="text-lg text-gray-700 mb-8">Explore how Digi Transformnxt has helped clients achieve digital transformation and business success through innovative IT solutions.</p>
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Featured Case Studies</h2>
        <ul className="text-left text-gray-700 space-y-4">
          <li><span className="font-semibold">Retail AI Automation</span> – Improved efficiency by 40%</li>
          <li><span className="font-semibold">Cloud Migration for Healthcare</span> – Reduced costs by 30%</li>
          <li><span className="font-semibold">Enterprise Data Analytics</span> – Enabled real-time insights</li>
        </ul>
      </div>
    </section>
    <style>{`
      @keyframes fadeIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
      .animate-fadeIn { animation: fadeIn 1s cubic-bezier(.4,0,.2,1) both; }
    `}</style>
  </div>
);

export default CaseStudies;
