const Home = () => {
  return (
    <>
      {/* Animated background section, full viewport height, no hero image */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden hero-bg">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
          <div className="stripe-overlay" />
          <div className="particles">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  '--tx': `${(Math.random() - 0.5) * 200}px`,
                  '--ty': `${(Math.random() - 0.5) * 200}px`,
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tight text-zinc-900">
            Transform Your <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Hiring Process</span> with AI Technology
          </h1>
          <p className="text-lg md:text-2xl text-zinc-700 mb-8 max-w-3xl font-medium">Streamline recruitment with our AI-powered interview platform. Automate screening, enhance candidate experience, and make data-driven hiring decisions.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4">
            <a href="/services" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span className="mr-2">Get Started</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </a>
            <a href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 transition-all duration-200 bg-white border-2 border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section className="container mx-auto max-w-[1400px] px-4 py-16 mt-8">
  <div className="bg-white rounded-2xl p-8 md:p-12 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Partners</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl">
            We are proud to collaborate with industry-leading organizations that share our commitment to excellence and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 animate-fade-in-up">
            {/* Example partner logos - replace with real ones as needed */}
            <img loading="lazy" src="https://via.placeholder.com/120x48?text=Partner+1" alt="Partner 1" className="h-12 md:h-16 w-auto object-contain rounded bg-gray-100 shadow hover:grayscale-0 transition duration-300" />
            <img loading="lazy" src="https://via.placeholder.com/120x48?text=Partner+2" alt="Partner 2" className="h-12 md:h-16 w-auto object-contain rounded bg-gray-100 shadow hover:grayscale-0 transition duration-300" />
            <img loading="lazy" src="https://via.placeholder.com/120x48?text=Partner+3" alt="Partner 3" className="h-12 md:h-16 w-auto object-contain rounded bg-gray-100 shadow hover:grayscale-0 transition duration-300" />
            <img loading="lazy" src="https://via.placeholder.com/120x48?text=Partner+4" alt="Partner 4" className="h-12 md:h-16 w-auto object-contain rounded bg-gray-100 shadow hover:grayscale-0 transition duration-300" />
          </div>
        </div>
      </section>

      {/* Our Service Section */}
      <section className="w-full px-0 py-16 mt-8">
  <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-2xl p-0 flex flex-col items-center w-full mx-0">
          <div className="container mx-auto max-w-[1400px] px-6 md:px-16 py-12 md:py-32 flex flex-col items-center gap-8 md:gap-12">
            <div className="relative flex flex-col items-center justify-center w-full">
              <span className="absolute left-1/2 -translate-x-1/2 top-[3%] -translate-y-1/2 select-none pointer-events-none font-extrabold uppercase text-[80px] md:text-[140px] text-gray-200 opacity-40 tracking-tight whitespace-nowrap" style={{ zIndex: 0, letterSpacing: '-0.05em' }}>SERVICES</span>
              <div className="relative z-10 flex flex-col items-center justify-center w-full">
                  <div className="uppercase text-center mb-0" style={{ fontSize: '12px', lineHeight: '14.4px', fontWeight: 500, letterSpacing: '3px' }}>NEED TO KNOW</div>
                  <div style={{ position: 'relative', display: 'inline-block', width: 'fit-content' }}>
                    <h2 className="text-center uppercase mt-0" style={{ fontSize: '60px', lineHeight: '72px', fontWeight: 800, letterSpacing: '0.5px', color: 'oklch(0.24 0.059 10)', position: 'relative', zIndex: 1 }}>Our Services</h2>
                    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '30px', zIndex: 2, pointerEvents: 'none', background: 'linear-gradient(to top, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0))', filter: 'blur(6px)' }} />
                  </div>
              </div>
            </div>
            <p className="text-gray-700 text-center mb-10 max-w-2xl text-lg">
              Discover our range of services designed to help your organization grow, transform, and succeed in a dynamic business environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 w-full">
              <div className="bg-white rounded-xl shadow-lg p-0 flex flex-col items-center hover:scale-105 transition-transform duration-300 relative overflow-hidden min-h-[340px]">
                <img src="/assets/images/it-consultancy.jpg" alt="Product Dev Line" className="absolute inset-0 w-full h-full object-cover opacity-70 blur-[1px]" style={{ filter: 'brightness(0.7) blur(1px)' }} />
                <div className="absolute bottom-0 left-0 w-full z-10 flex flex-col items-center justify-end">
                  <div className="w-full px-8 pb-6 pt-10 relative flex flex-col items-center"
                    style={{
                      background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(30,41,59,0.85) 100%)",
                      backdropFilter: undefined
                    }}>
                    <h3 className="font-bold text-lg mb-2 text-white drop-shadow-lg">Product Dev Line</h3>
                    <p className="text-white text-center font-medium drop-shadow">End-to-end product development services from concept to deployment.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-0 flex flex-col items-center hover:scale-105 transition-transform duration-300 relative overflow-hidden min-h-[340px]">
                <img src="/assets/images/management-consultancy.png" alt="IT Managed Services" className="absolute inset-0 w-full h-full object-cover object-top opacity-70 blur-[1px]" style={{ filter: 'brightness(0.7) blur(1px)' }} />
                <div className="absolute bottom-0 left-0 w-full z-10 flex flex-col items-center justify-end">
                  <div className="w-full px-8 pb-6 pt-10 relative flex flex-col items-center"
                    style={{
                      background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(30,41,59,0.85) 100%)",
                      backdropFilter: undefined
                    }}>
                    <h3 className="font-bold text-lg mb-2 text-white drop-shadow-lg">IT Managed Services</h3>
                    <p className="text-white text-center font-medium drop-shadow">Comprehensive IT management and support for your business operations.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-0 flex flex-col items-center hover:scale-105 transition-transform duration-300 relative overflow-hidden min-h-[340px]">
                <img src="/assets/images/hr.jpg" alt="HR Solutions" className="absolute inset-0 w-full h-full object-cover opacity-70 blur-[1px]" style={{ filter: 'brightness(0.7) blur(1px)' }} />
                <div className="absolute bottom-0 left-0 w-full z-10 flex flex-col items-center justify-end">
                  <div className="w-full px-8 pb-6 pt-10 relative flex flex-col items-center"
                    style={{
                      background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(30,41,59,0.85) 100%)",
                      backdropFilter: undefined
                    }}>
                    <h3 className="font-bold text-lg mb-2 text-white drop-shadow-lg">HR Solutions</h3>
                    <p className="text-white text-center font-medium drop-shadow">Complete human resource management and staffing solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default Home;
