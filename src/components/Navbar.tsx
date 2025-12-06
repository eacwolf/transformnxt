import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [productMobileOpen, setProductMobileOpen] = useState(false);
  const [howOpen, setHowOpen] = useState(false);
  const [howMobileOpen, setHowMobileOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white border-b border-zinc-200 shadow-sm transition-all duration-300">
      <div
        className="container max-w-[1400px] mx-auto px-8 py-0 flex items-center justify-between gap-8"
        style={{ minHeight: "88px" }}
      >
        {/* Logo + Title */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-md shadow-sm flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20">
            <img
              src="/assets/logo/transform-logo.png"
              alt="TransformNXT Logo"
              className="max-h-full max-w-full"
            />
          </div>
        </NavLink>
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-8 items-center h-16">
            <NavLink to="/" end className="h-full flex items-center">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "flex items-center text-zinc-900 font-semibold border-b-2 border-zinc-900 pb-1 h-full"
                      : "flex items-center text-zinc-900 font-medium hover:text-zinc-900/80 transition-colors pb-1 h-full"
                  }
                >
                  Home
                </span>
              )}
            </NavLink>
            <NavLink to="/services" className="h-full flex items-center">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "flex items-center text-zinc-900 font-semibold border-b-2 border-zinc-900 pb-1 h-full"
                      : "flex items-center text-zinc-900 font-medium hover:text-zinc-900/80 transition-colors pb-1 h-full"
                  }
                >
                  Services
                </span>
              )}
            </NavLink>
            {/* Product Dropdown (single instance) - desktop */}
            <div className="relative" onMouseEnter={() => setProductOpen(true)} onMouseLeave={() => setProductOpen(false)}>
              <button type="button" className="flex items-center text-zinc-900 font-medium hover:text-zinc-900/80 transition-colors pb-1 h-full" aria-haspopup="true" aria-expanded={productOpen} onClick={() => setProductOpen((o) => !o)} style={{ transform: 'translateY(2px)' }}>
                <span className="inline-flex items-center gap-2">Products
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </span>
              </button>
              <div style={{ minHeight: '8px' }} />
              {productOpen && (
                <div className="absolute left-0 top-full min-w-[220px] bg-white border border-zinc-200 rounded-xl shadow-lg overflow-hidden transition-all duration-200 z-50">
                  <NavLink to="/products/ai-video-interviewer" className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100">AI Video Interviewer</NavLink>
                  <NavLink to="/products/ai-audio-interviewer" className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100">AI Audio Interviewer</NavLink>
                  <NavLink to="/products/ai-async-interviewer" className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100">AI Asynchronous Mode Interviewer</NavLink>
                  <NavLink to="/products/office-communicator" className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100">AI Office Communicator & Candidate Report Integration</NavLink>
                  <NavLink to="/products/interview-scheduler" className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100">AI Interview Scheduler</NavLink>
                  <NavLink to="/products/hr-analytics" className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100">HR Data Driven – Predictive Analytics</NavLink>
                  <NavLink to="/products/hr-reports" className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100">HR Report’s as SaaS</NavLink>
                  <NavLink to="/products/ats-cv-ranker" className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100">ATS with CV Ranker</NavLink>
                  <NavLink to="/products/hrms" className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100">HRMS</NavLink>
                </div>
              )}
            </div>
            <div className="relative" onMouseEnter={() => setHowOpen(true)} onMouseLeave={() => setHowOpen(false)}>
              <button
                type="button"
                className="flex items-center text-zinc-900 font-medium hover:text-zinc-900/80 transition-colors pb-1 h-full"
                aria-haspopup="true"
                aria-expanded={howOpen}
                onClick={() => setHowOpen((o) => !o)}
                style={{ transform: 'translateY(2px)' }}
              >
                <span className="inline-flex items-center gap-2">How it works
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </span>
              </button>
              <div style={{ minHeight: '8px' }} />
              {howOpen && (
                <div className="absolute left-0 top-full min-w-[240px] bg-white border border-zinc-200 rounded-xl shadow-lg overflow-hidden transition-all duration-200 z-50">
                  <NavLink to="/how-it-works/employers" className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100">For Employers</NavLink>
                  <NavLink to="/how-it-works/universities" className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100">For University / College</NavLink>
                  <NavLink to="/how-it-works/training" className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100">For Training Institutes</NavLink>
                  <NavLink to="/how-it-works/staffing" className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100">For Staffing Agencies</NavLink>
                  <NavLink to="/how-it-works/candidates" className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100">For Jobseekers / Students</NavLink>
                </div>
              )}
            </div>
            
            <NavLink to="/solutions" className="h-full flex items-center">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "flex items-center text-zinc-900 font-semibold border-b-2 border-zinc-900 pb-1 h-full"
                      : "flex items-center text-zinc-900 font-medium hover:text-zinc-900/80 transition-colors pb-1 h-full"
                  }
                >
                  Solutions
                </span>
              )}
            </NavLink>
            <NavLink to="/about" className="h-full flex items-center">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "flex items-center text-zinc-900 font-semibold border-b-2 border-zinc-900 pb-1 h-full"
                      : "flex items-center text-zinc-900 font-medium hover:text-zinc-900/80 transition-colors pb-1 h-full"
                  }
                >
                  About Us
                </span>
              )}
            </NavLink>
            {/* end duplicate product block removed */}
            {/* Company Dropdown - align with other nav items */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={companyOpen}
                onClick={() => setCompanyOpen((o) => !o)}
                className={
                  companyOpen
                    ? "flex items-center h-full text-zinc-900 font-semibold pb-1"
                    : "flex items-center h-full text-zinc-900 font-medium hover:text-zinc-900/80 transition-colors pb-1"
                }
                style={{ transform: 'translateY(6px)' }}
              >
                <span className="inline-flex items-center">
                  Company
                  <svg
                    className="w-5 h-5 ml-1.5 -mt-px transition-transform"
                    style={{
                      transform: companyOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {/* Dropdown menu with extra gap for easier access */}
              <div style={{ minHeight: "12px" }} />
              {companyOpen && (
                <div
                  className="absolute left-0 top-full min-w-[180px] bg-white border border-zinc-200 rounded-xl shadow-lg overflow-hidden transition-all duration-300 opacity-100 translate-y-0 pointer-events-auto z-50"
                  style={{
                    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)",
                    marginTop: "0px",
                    paddingTop: "12px",
                  }}
                >
                  <NavLink
                    to="/careers"
                    className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100 transition-colors"
                    onClick={() => setCompanyOpen(false)}
                  >
                    Careers
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100 transition-colors"
                    onClick={() => setCompanyOpen(false)}
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    to="/case-studies"
                    className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100 transition-colors"
                    onClick={() => setCompanyOpen(false)}
                  >
                    Case Studies
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Contact and Login Buttons */}
        <div className="hidden md:flex items-center gap-4 ml-8">
          <NavLink to="/login">
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? "inline-flex items-center px-6 py-2 rounded-full font-semibold text-white bg-blue-600 shadow-lg"
                    : "inline-flex items-center px-6 py-2 rounded-full font-medium text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
                }
              >
                Login
              </span>
            )}
          </NavLink>
          <NavLink to="/contact">
            {({ isActive }) => (
              <span
                className={
                  isActive
                    ? "inline-flex items-center px-6 py-2 rounded-full font-semibold text-white bg-zinc-900 shadow-lg"
                    : "inline-flex items-center px-6 py-2 rounded-full font-medium text-zinc-900 border border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-200"
                }
              >
                Contact Us
              </span>
            )}
          </NavLink>
        </div>
        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden p-2 rounded bg-zinc-100 hover:bg-zinc-200 text-zinc-900"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>
      {/* Mobile menu overlay with Company dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-zinc-200 shadow-md animate-slideDown z-50">
          <div className="flex flex-col gap-0 items-stretch py-4">
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
              {({ isActive }) => (
                <button className={`text-left w-full px-6 py-3 ${isActive ? 'text-zinc-900 font-semibold border-b-2 border-zinc-900' : 'text-zinc-900 font-medium hover:text-zinc-900/80'}`}>
                  Home
                </button>
              )}
            </NavLink>
            <NavLink to="/services" onClick={() => setMenuOpen(false)}>
              {({ isActive }) => (
                <button className={`text-left w-full px-6 py-3 ${isActive ? 'text-zinc-900 font-semibold border-b-2 border-zinc-900' : 'text-zinc-900 font-medium hover:text-zinc-900/80'}`}>
                  Services
                </button>
              )}
            </NavLink>
            {/* Mobile Product list (collapsible) */}
            <div className="w-full border-t border-zinc-100">
              <button
                className={`w-full text-left px-6 py-3 flex items-center justify-between text-zinc-900 font-medium`}
                onClick={() => {
                  setProductMobileOpen(o => !o);
                  // close other mobile dropdowns
                  if (!productMobileOpen) setCompanyOpen(false);
                }}
                aria-expanded={productMobileOpen}
                aria-controls="mobile-products-list"
              >
                <span>Products</span>
                <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${productMobileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="mobile-products-list" className={`w-full overflow-hidden transition-all duration-300 ${productMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} style={{ background: productMobileOpen ? '#f8f8f8' : 'transparent' }}>
                <NavLink to="/products/ai-video-interviewer" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100" onClick={() => { setMenuOpen(false); setProductMobileOpen(false); }}>AI Video Interviewer</NavLink>
                <NavLink to="/products/ai-audio-interviewer" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100" onClick={() => { setMenuOpen(false); setProductMobileOpen(false); }}>AI Audio Interviewer</NavLink>
                <NavLink to="/products/ai-async-interviewer" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100" onClick={() => { setMenuOpen(false); setProductMobileOpen(false); }}>AI Asynchronous Mode Interviewer</NavLink>
                <NavLink to="/products/office-communicator" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100" onClick={() => { setMenuOpen(false); setProductMobileOpen(false); }}>AI Office Communicator</NavLink>
                <NavLink to="/products/interview-scheduler" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100" onClick={() => { setMenuOpen(false); setProductMobileOpen(false); }}>AI Interview Scheduler</NavLink>
                <NavLink to="/products/hr-analytics" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100" onClick={() => { setMenuOpen(false); setProductMobileOpen(false); }}>HR Data Driven – Predictive Analytics</NavLink>
                <NavLink to="/products/hr-reports" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100" onClick={() => { setMenuOpen(false); setProductMobileOpen(false); }}>HR Report’s as SaaS</NavLink>
                <NavLink to="/products/ats-cv-ranker" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100" onClick={() => { setMenuOpen(false); setProductMobileOpen(false); }}>ATS with CV Ranker</NavLink>
                <NavLink to="/products/hrms" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100" onClick={() => { setMenuOpen(false); setProductMobileOpen(false); }}>HRMS</NavLink>
              </div>
            </div>
            {/* Mobile 'How it works' list (collapsible) */}
            <div className="w-full border-t border-zinc-100">
              <button
                className={`w-full text-left px-6 py-3 flex items-center justify-between text-zinc-900 font-medium`}
                onClick={() => {
                  setHowMobileOpen(o => !o);
                  // close other mobile dropdowns
                  if (!howMobileOpen) setProductMobileOpen(false);
                }}
                aria-expanded={howMobileOpen}
                aria-controls="mobile-how-list"
              >
                <span>How it works</span>
                <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${howMobileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div id="mobile-how-list" className={`w-full overflow-hidden transition-all duration-300 ${howMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} style={{ background: howMobileOpen ? '#f8f8f8' : 'transparent' }}>
                <NavLink to="/how-it-works/employers" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100" onClick={() => { setMenuOpen(false); setHowMobileOpen(false); }}>For Employers</NavLink>
                <NavLink to="/how-it-works/universities" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100" onClick={() => { setMenuOpen(false); setHowMobileOpen(false); }}>For University / College</NavLink>
                <NavLink to="/how-it-works/training" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100" onClick={() => { setMenuOpen(false); setHowMobileOpen(false); }}>For Training Institutes</NavLink>
                <NavLink to="/how-it-works/staffing" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100" onClick={() => { setMenuOpen(false); setHowMobileOpen(false); }}>For Staffing Agencies</NavLink>
                <NavLink to="/how-it-works/candidates" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100" onClick={() => { setMenuOpen(false); setHowMobileOpen(false); }}>For Jobseekers / Students</NavLink>
              </div>
            </div>
            <NavLink to="/solutions" onClick={() => setMenuOpen(false)}>
              <button className={`w-full px-6 py-3 text-left text-zinc-900 font-medium`}>Solutions</button>
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              {({ isActive }) => (
                <button className={`text-left w-full px-6 py-3 ${isActive ? 'text-zinc-900 font-semibold border-b-2 border-zinc-900' : 'text-zinc-900 font-medium hover:text-zinc-900/80'}`}>
                  About Us
                </button>
              )}
            </NavLink>
            {/* Company dropdown for mobile */}
            <div className="w-full">
               <button
                className={`w-full text-left px-6 py-3 flex items-center justify-between ${companyOpen ? 'text-zinc-900 font-semibold' : 'text-zinc-900 font-medium'}`}
                onClick={() => setCompanyOpen((open) => !open)}
                aria-expanded={companyOpen}
                aria-controls="mobile-company-dropdown"
               >
                 <span>Company</span>
                <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${companyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
               </button>
               <div
                id="mobile-company-dropdown"
                className={`w-full overflow-hidden transition-all duration-300 ${companyOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ background: companyOpen ? '#f8f8f8' : 'transparent' }}
               >
                <NavLink to="/careers" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100 transition-colors" onClick={() => { setCompanyOpen(false); setMenuOpen(false); }}>Careers</NavLink>
                <NavLink to="/blog" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100 transition-colors" onClick={() => { setCompanyOpen(false); setMenuOpen(false); }}>Blog</NavLink>
                <NavLink to="/case-studies" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100 transition-colors" onClick={() => { setCompanyOpen(false); setMenuOpen(false); }}>Case Studies</NavLink>
               </div>
             </div>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              {({ isActive }) => (
                <button className={`w-full px-6 py-3 text-left ${isActive ? 'text-white bg-zinc-900 font-semibold rounded-b-lg' : 'text-zinc-900 font-medium'}`}>
                  Contact Us
                </button>
              )}
            </NavLink>
          </div>
          <style>{`
            @keyframes slideDown { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: none; } }
            .animate-slideDown { animation: slideDown 0.2s ease; }
          `}</style>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
