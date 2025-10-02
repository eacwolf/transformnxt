const Home = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1400px] px-4 py-16 mt-0 md:mt-24">
        <div className="relative rounded-3xl shadow-xl overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-green-100 opacity-90" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center p-8 md:p-16">
            {/* Logo on the left */}
            <div className="flex items-center justify-center md:justify-start h-full w-full">
              <img
                src="/assets/logo/transform-logo.png"
                alt="TransformNXT Logo"
                className="w-full h-full object-contain max-h-[800px] md:max-h-[1000px] drop-shadow-xl"
              />
            </div>
            {/* Hero text on the right */}
            <div className="flex flex-col justify-center h-full w-full">
              <p className="text-base md:text-lg text-gray-700 mb-4">
                We are a comprehensive consulting and talent solutions firm dedicated to helping businesses thrive in today’s fast-evolving landscape.
              </p>
              <ul className="space-y-3 mt-2">
                <li className="flex items-center gap-2 text-base md:text-lg">
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-sm mr-2" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></span>
                  Technology Consulting
                </li>
                <li className="flex items-center gap-2 text-base md:text-lg">
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-sm mr-2" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></span>
                  Management Consulting
                </li>
                <li className="flex items-center gap-2 text-base md:text-lg">
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-sm mr-2" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></span>
                  Talent Acquisition &amp; Hiring Solutions
                </li>
              </ul>
              <div className="mt-8 flex gap-4">
                <a
                  href="/services"
                  className="inline-block px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-primary transition-colors font-semibold text-base md:text-lg"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="inline-block w-[170px] px-6 py-3 bg-white text-black rounded-lg shadow hover:bg-black hover:text-white transition-colors font-semibold text-base md:text-lg border border-black text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Partners Section */}
      <section className="container mx-auto max-w-[1400px] px-4 py-16 mt-8">
  <div className="bg-white rounded-2xl p-8 md:p-12 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Partners</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl">
            We are proud to collaborate with industry-leading organizations that share our commitment to excellence and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {/* Example partner logos - replace with real ones as needed */}
            <img src="https://via.placeholder.com/120x48?text=Partner+1" alt="Partner 1" className="h-12 md:h-16 w-auto object-contain rounded bg-gray-100 shadow hover:grayscale-0 transition duration-300" />
            <img src="https://via.placeholder.com/120x48?text=Partner+2" alt="Partner 2" className="h-12 md:h-16 w-auto object-contain rounded bg-gray-100 shadow hover:grayscale-0 transition duration-300" />
            <img src="https://via.placeholder.com/120x48?text=Partner+3" alt="Partner 3" className="h-12 md:h-16 w-auto object-contain rounded bg-gray-100 shadow hover:grayscale-0 transition duration-300" />
            <img src="https://via.placeholder.com/120x48?text=Partner+4" alt="Partner 4" className="h-12 md:h-16 w-auto object-contain rounded bg-gray-100 shadow hover:grayscale-0 transition duration-300" />
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
                <img src="/assets/images/it-consultancy.jpg" alt="Technology Consulting" className="absolute inset-0 w-full h-full object-cover opacity-70 blur-[1px]" style={{ filter: 'brightness(0.7) blur(1px)' }} />
                <div className="absolute bottom-0 left-0 w-full z-10 flex flex-col items-center justify-end">
                  <div className="w-full px-8 pb-6 pt-10 relative flex flex-col items-center"
                    style={{
                      background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(30,41,59,0.85) 100%)",
                      backdropFilter: undefined
                    }}>
                    <h3 className="font-bold text-lg mb-2 text-white drop-shadow-lg">Technology Consulting</h3>
                    <p className="text-white text-center font-medium drop-shadow">Expert guidance to leverage technology for business growth and efficiency.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-0 flex flex-col items-center hover:scale-105 transition-transform duration-300 relative overflow-hidden min-h-[340px]">
                <img src="/assets/images/management-consultancy.png" alt="Management Consulting" className="absolute inset-0 w-full h-full object-cover object-top opacity-70 blur-[1px]" style={{ filter: 'brightness(0.7) blur(1px)' }} />
                <div className="absolute bottom-0 left-0 w-full z-10 flex flex-col items-center justify-end">
                  <div className="w-full px-8 pb-6 pt-10 relative flex flex-col items-center"
                    style={{
                      background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(30,41,59,0.85) 100%)",
                      backdropFilter: undefined
                    }}>
                    <h3 className="font-bold text-lg mb-2 text-white drop-shadow-lg">Management Consulting</h3>
                    <p className="text-white text-center font-medium drop-shadow">Strategic solutions to optimize operations and drive organizational success.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-0 flex flex-col items-center hover:scale-105 transition-transform duration-300 relative overflow-hidden min-h-[340px]">
                <img src="/assets/images/hr.jpg" alt="Talent Acquisition & Hiring" className="absolute inset-0 w-full h-full object-cover opacity-70 blur-[1px]" style={{ filter: 'brightness(0.7) blur(1px)' }} />
                <div className="absolute bottom-0 left-0 w-full z-10 flex flex-col items-center justify-end">
                  <div className="w-full px-8 pb-6 pt-10 relative flex flex-col items-center"
                    style={{
                      background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(30,41,59,0.85) 100%)",
                      backdropFilter: undefined
                    }}>
                    <h3 className="font-bold text-lg mb-2 text-white drop-shadow-lg">Talent Acquisition &amp; Hiring</h3>
                    <p className="text-white text-center font-medium drop-shadow">Find and retain top talent with our comprehensive hiring solutions.</p>
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
