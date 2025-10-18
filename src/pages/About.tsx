import PageContainer from "../components/PageContainer";

const About = () => (
  <PageContainer>
    <div className="max-w-4xl mx-auto space-y-16">
      <section>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">About TransformNXT</h1>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          <span className="font-semibold text-gray-900">
            Digi Transformnxt Pvt Ltd
          </span>{" "}
          is a next-generation IT solutions provider at the forefront of digital innovation. 
          We specialize in transforming businesses through cutting-edge technology solutions, 
          custom software development, and strategic consulting services. Our commitment to 
          excellence and innovation helps organizations thrive in today's rapidly evolving 
          digital landscape.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-extrabold mb-3 text-gray-900 border-b-4 border-blue-500 inline-block pb-1">Why Choose Us</h2>
        <div className="space-y-6 text-gray-800">
          <p>
            We bring a unique combination of deep technical expertise and business acumen to every engagement. 
            Our team of experienced professionals works closely with clients to understand their specific needs 
            and deliver tailored solutions that drive real business value.
          </p>
          <ul className="space-y-4 ml-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Innovation Focus:</strong> We stay ahead of technology trends to bring you cutting-edge solutions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Expert Team:</strong> Seasoned professionals with deep industry knowledge</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Client-Centric:</strong> Your success is our priority - we align our solutions with your goals</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-extrabold mb-3 text-gray-900 border-b-4 border-blue-500 inline-block pb-1">Our Mission</h2>
        <p className="text-gray-800">
          To deliver innovative, secure, and scalable IT solutions that empower organizations 
          to achieve their business goals and drive digital transformation. We are committed to 
          helping our clients stay ahead in an increasingly competitive digital landscape.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-extrabold mb-3 text-gray-900 border-b-4 border-blue-500 inline-block pb-1">Our Vision</h2>
        <p className="text-gray-800">
          To be a global leader in technology consulting, enabling businesses to thrive through 
          intelligent digital solutions and emerging technologies. We aim to be the catalyst for 
          digital innovation and transformation across industries.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-extrabold mb-3 text-gray-900 border-b-4 border-blue-500 inline-block pb-1">Get in Touch</h2>
        <div className="space-y-2">
          <p className="text-gray-800 font-semibold">Digi Transformnxt Pvt Ltd</p>
          <p className="text-gray-800">
            No 6/1451 KK Nagar 2nd Street, KR Palayam<br />
            Erode 638316, Tamilnadu
          </p>
          <p className="text-gray-800">
            <strong>Email:</strong> akhil@transformnxt.in<br />
            <strong>Phone:</strong> 000000000
          </p>
        </div>
      </section>
    </div>
  </PageContainer>
);

export default About;
