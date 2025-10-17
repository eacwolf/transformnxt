import PageContainer from "../components/PageContainer";

const About = () => (
  <PageContainer>
    <div className="space-y-12">
      <section className="text-center">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
          <span className="font-semibold text-gray-900">
            Digi Transformnxt Pvt Ltd
          </span>{" "}
          is a next-generation IT solutions provider, specializing in digital
          transformation, software development, cloud, and AI-driven consulting.
          We help businesses innovate, scale, and succeed in a rapidly evolving
          digital world.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-xl font-semibold mb-3">Mission</h3>
          <p className="text-gray-700">
            To deliver innovative, secure, and scalable IT solutions that
            empower organizations to achieve their business goals and drive
            digital transformation.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-xl font-semibold mb-3">Vision</h3>
          <p className="text-gray-700">
            To be a global leader in technology consulting, enabling businesses
            to thrive through the intelligent use of digital solutions and
            emerging technologies.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-xl font-semibold mb-3">What We Do</h3>
        <p className="text-gray-700">
          We offer end-to-end IT consulting, custom software development, cloud
          migration, AI/ML solutions, and digital strategy. Our team partners
          with clients to deliver robust, future-ready technology that
          accelerates business growth and operational excellence.
        </p>
      </section>

      <section className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-xl font-semibold mb-3">Contact</h3>
        <p className="text-gray-700 mb-1">Digi Transformnxt Pvt Ltd</p>
        <p className="text-gray-700 mb-1">
          No 6/1451 KK Nagar 2nd Street, KR Palayam, Erode 638316, Tamilnadu
        </p>
        <p className="text-gray-700 mb-1">akhil@transformnxt.in</p>
        <p className="text-gray-700 mb-1">000000000</p>
      </section>
    </div>
  </PageContainer>
);

export default About;
