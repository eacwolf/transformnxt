

const Blog = () => (
  <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-6 flex flex-col items-center mt-24">
    <section className="max-w-3xl w-full text-center mb-16 animate-fadeIn">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">Tech Blog</h1>
      <p className="text-lg text-gray-700 mb-8">Insights, news, and thought leadership from Digi Transformnxt. Stay updated on the latest in IT, digital transformation, and emerging technologies.</p>
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Latest Posts</h2>
        <ul className="text-left text-gray-700 space-y-4">
          <li><span className="font-semibold">How AI is Transforming Business Operations</span> – Oct 2025</li>
          <li><span className="font-semibold">Cloud Migration Best Practices</span> – Sep 2025</li>
          <li><span className="font-semibold">The Future of IT Consulting</span> – Aug 2025</li>
        </ul>
      </div>
    </section>
    <style>{`
      @keyframes fadeIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
      .animate-fadeIn { animation: fadeIn 1s cubic-bezier(.4,0,.2,1) both; }
    `}</style>
  </div>
);

export default Blog;
