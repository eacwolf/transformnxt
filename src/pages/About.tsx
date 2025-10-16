

const leadership = [
  {
    name: "xx",
    title: "xxxx",
  },
  {
    name: "xxxx",
    title: "xxxx",
  },
  {
    name: "xxxxik R",
    title: "xxxxs",
  },
  {
    name: "xxxx",
    title: "xxxx",
  },
];

const About = () => (
  <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-6 flex flex-col items-center mt-24">
    {/* ---------- ABOUT SECTION ---------- */}
    <section className="max-w-4xl w-full flex flex-col items-center text-center mb-20 animate-fadeIn">
      {/* Optionally remove About Us heading for a cleaner look */}
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6 max-w-2xl">
        <span className="font-semibold text-gray-900">Digi Transformnxt Pvt Ltd</span> is a next-generation IT solutions provider, specializing in digital transformation, software development, cloud, and AI-driven consulting. We help businesses innovate, scale, and succeed in a rapidly evolving digital world.
      </p>
    </section>

    {/* ---------- MISSION & VISION ---------- */}
    <section className="max-w-4xl w-full text-center mb-20">
      <h2 className="text-3xl font-bold mb-10 text-gray-900">Mission & Vision</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all">
          <h3 className="text-2xl font-semibold mb-3 text-gray-900">Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To deliver innovative, secure, and scalable IT solutions that empower organizations to achieve their business goals and drive digital transformation.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all">
          <h3 className="text-2xl font-semibold mb-3 text-gray-900">Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To be a global leader in technology consulting, enabling businesses to thrive through the intelligent use of digital solutions and emerging technologies.
          </p>
        </div>
      </div>
    </section>

    {/* ---------- WHAT WE DO ---------- */}
    <section className="max-w-4xl w-full text-center mb-20">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">What We Do</h2>
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
        We offer end-to-end IT consulting, custom software development, cloud migration, AI/ML solutions, and digital strategy. Our team partners with clients to deliver robust, future-ready technology that accelerates business growth and operational excellence.
      </p>
    </section>

    {/* ---------- LEADERSHIP ---------- */}
    <section className="max-w-5xl w-full text-center mb-20">
      <h2 className="text-3xl font-bold mb-12 text-gray-900">Our Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        {leadership.map((leader) => (
          <div
            key={leader.name}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition flex flex-col items-center"
          >
            {/* Placeholder for profile photo */}
            <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-gray-700">
              {leader.name[0]}
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-900">{leader.name}</h4>
            <p className="text-gray-700 text-sm text-center">{leader.title}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ---------- CONTACT ---------- */}
    <section className="max-w-4xl w-full text-center mb-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
      <div className="bg-white rounded-2xl shadow-md p-8">
        <p className="text-gray-700 mb-2 font-semibold">Digi Transformnxt Pvt Ltd</p>
        <p className="text-gray-700 mb-2">No 6/1451 KK Nagar 2nd Street, KR Palayam, Erode 638316, Tamilnadu</p>
        <p className="text-gray-700 mb-2">akhil@transformnxt.in</p>
        <p className="text-gray-700 mb-2">000000000</p>
      </div>
    </section>
    <style>{`
      @keyframes fadeIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
      .animate-fadeIn { animation: fadeIn 1s cubic-bezier(.4,0,.2,1) both; }
    `}</style>
  </div>
);

export default About;
