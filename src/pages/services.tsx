
const services = [
  {
    title: 'Technology Consulting',
    desc: 'We help organizations adapt to change and lead it through deep domain expertise and forward-looking innovation. Our services span cloud computing, cybersecurity, and intelligent automation.',
    img: '/assets/images/it-consultancy.jpg'
  },
  {
    title: 'Management Consulting',
    desc: 'Strategic roadmaps and operating models to improve performance, reduce costs, and drive sustainable growth through digital transformation and operational excellence.',
    img: '/assets/images/management-consultancy.png'
  },
  {
    title: 'Talent Acquisition',
    desc: 'End-to-end hiring and talent solutions to build world-class teams. We help you attract, assess, and retain top talent for your digital initiatives.',
    img: '/assets/images/hr.jpg'
  }
]

import PageContainer from '../components/PageContainer';

const Services = () => {
  return (
    <PageContainer>
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Technology Consulting & IT Managed Services</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We're not just consultants—we're your innovators. With a unique blend of deep domain expertise 
            and forward-looking innovation, we help organizations not only adapt to change but lead it. 
            We partner with clients to accelerate digital transformation, enhance operational performance, 
            and adopt cutting-edge solutions.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((s) => (
            <article key={s.title} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col animate-fade-in-up">
              <div className="h-44 md:h-56 w-full relative">
                <img loading="lazy" src={s.img} alt={s.title} className="w-full h-full object-cover brightness-90 transition-opacity duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-700 mb-4 flex-1">{s.desc}</p>
                <a href="/contact" className="mt-4 inline-block px-5 py-3 bg-zinc-900 text-white rounded-lg font-semibold">Talk to us</a>
              </div>
            </article>
          ))}
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow p-8 md:p-12 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">How We Deliver Value</h2>
              <p className="text-gray-700 mb-6">We combine product thinking, data science, and engineering excellence to deliver measurable business outcomes. Our approach emphasizes:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-900">•</span>
                  <span>Rapid Innovation & Validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-900">•</span>
                  <span>Cloud & Platform Engineering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-900">•</span>
                  <span>AI & Advanced Analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-900">•</span>
                  <span>Managed IT Services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-900">•</span>
                  <span>Digital Transformation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-900">•</span>
                  <span>Security & Compliance</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <img src="/assets/images/it-consultancy.jpg" alt="Delivery" className="w-full rounded-lg object-cover shadow" />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow overflow-hidden p-6">
              <h3 className="font-semibold text-lg mb-2">Enterprise Cloud Transformation</h3>
              <p className="text-gray-700">Enabled a Fortune 500 client to migrate critical workloads to the cloud, reducing costs and improving reliability.</p>
            </div>
            <div className="bg-white rounded-xl shadow overflow-hidden p-6">
              <h3 className="font-semibold text-lg mb-2">AI-powered Customer Insights</h3>
              <p className="text-gray-700">Built an LLM-enhanced knowledge assistant that reduced support handling time by 40%.</p>
            </div>
          </div>
        </section>

        <section className="mb-24 text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to transform?</h3>
          <p className="text-gray-700 mb-6">Let's discuss how we can help you modernize, scale, and innovate.</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-black text-white rounded-xl font-semibold">Get in touch</a>
        </section>
      </div>
    </PageContainer>
  )
}

export default Services
