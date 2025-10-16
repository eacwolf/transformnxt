
const services = [
  {
    title: 'Technology Consulting',
    desc: 'Modernize your stack, adopt cloud native patterns, and accelerate delivery with robust engineering practices.',
    img: '/assets/images/it-consultancy.jpg'
  },
  {
    title: 'Management Consulting',
    desc: 'Strategic roadmaps and operating models to improve performance, reduce cost, and scale sustainably.',
    img: '/assets/images/management-consultancy.png'
  },
  {
    title: 'Talent Acquisition',
    desc: 'End-to-end hiring and talent programs to attract, assess and retain world-class teams.',
    img: '/assets/images/hr.jpg'
  }
]

import PageContainer from '../components/PageContainer';

const Services = () => {
  return (
    <PageContainer>
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-8 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">We partner with enterprises and startups to design, build and scale digital products and capability using data, cloud and AI.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((s) => (
            <article key={s.title} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="h-44 md:h-56 w-full relative">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover brightness-90" />
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
              <h2 className="text-2xl md:text-3xl font-bold mb-3">How we deliver value</h2>
              <p className="text-gray-700 mb-4">We combine product thinking, data, and engineering excellence. Our delivery model emphasizes rapid validation, secure architecture, and measurable outcomes.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                <li>Product & Design Sprints</li>
                <li>Cloud & Platform Engineering</li>
                <li>AI & Data Solutions</li>
                <li>Staffing & Managed Services</li>
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
