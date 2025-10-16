

const Careers = () => (
  <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-6 flex flex-col items-center mt-24">
    <section className="max-w-3xl w-full text-center mb-16 animate-fadeIn">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">Careers at Digi Transformnxt</h1>
      <p className="text-lg text-gray-700 mb-8">Join our team of passionate IT professionals and help shape the future of digital transformation. We value innovation, collaboration, and continuous learning.</p>
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Current Openings</h2>
        <ul className="text-left text-gray-700 space-y-4">
          <li><span className="font-semibold">Software Engineer (React/Node.js)</span> – 2+ years experience</li>
          <li><span className="font-semibold">Cloud Solutions Architect</span> – 5+ years experience</li>
          <li><span className="font-semibold">AI/ML Engineer</span> – 3+ years experience</li>
        </ul>
        <p className="mt-8 text-gray-700">To apply, send your resume to <a href="mailto:akhil@transformnxt.in" className="text-blue-700 hover:underline">akhil@transformnxt.in</a></p>
      </div>
    </section>
    <style>{`
      @keyframes fadeIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
      .animate-fadeIn { animation: fadeIn 1s cubic-bezier(.4,0,.2,1) both; }
    `}</style>
  </div>
);

export default Careers;
