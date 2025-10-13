

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
    <section className="max-w-5xl w-full text-center mb-20">
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">About Us</h1>
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
        At <span className="font-semibold text-gray-900">TransformNXT</span>, we empower businesses to achieve transformative growth through cutting-edge Generative AI and next-generation digital solutions. 
        We specialize in Consulting, Proof-of-Concept development, AI Systems Integration, and Cloud-based Data Engineering.
      </p>
    </section>

    {/* ---------- MISSION & VISION ---------- */}
    <section className="max-w-5xl w-full text-center mb-20">
      <h2 className="text-3xl font-bold mb-10 text-gray-900">Mission & Vision</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-3 text-primary">Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To deliver innovative and agile solutions that solve complex business challenges through the power of AI, Cloud, and Data Analytics — fostering efficiency, intelligence, and growth.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-3 text-primary">Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To be a global leader in data-driven digital transformation, redefining how businesses evolve through the intelligent use of technology.
          </p>
        </div>
      </div>
    </section>

    {/* ---------- WHAT WE DO ---------- */}
    <section className="max-w-5xl w-full text-center mb-20">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">What We Do</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        We provide end-to-end consulting in Artificial Intelligence — from concept discovery and generation to real-world implementation and mentoring. Our expertise in Generative AI, 
        NLP, and enterprise knowledge management helps organizations accelerate innovation, streamline processes, and scale effectively.
      </p>
    </section>

    {/* ---------- LEADERSHIP ---------- */}
    <section className="max-w-6xl w-full text-center mb-20">
      <h2 className="text-3xl font-bold mb-12 text-gray-900">Our Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        {leadership.map((leader) => (
          <div
            key={leader.name}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center"
          >
            <h4 className="text-lg font-bold mb-2 text-primary">{leader.name}</h4>
            <p className="text-gray-700 text-sm text-center">{leader.title}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ---------- CONTACT ---------- */}
    <section className="max-w-4xl w-full text-center mb-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
      <div className="bg-white rounded-2xl shadow-md p-8">
        <p className="text-gray-700 mb-2">
          NO 6/1451 kk nagar 2nd street kr palayam erode 638316,tamilnadu
        </p>
        <p className="text-gray-700 mb-2">akhil@transformnxt.in</p>
        <p className="text-gray-700 mb-2">+xxxxxxx</p>
      </div>
    </section>
  </div>
);

export default About;
