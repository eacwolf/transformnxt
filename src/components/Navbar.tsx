import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white border-b border-zinc-200 shadow-sm transition-all duration-300">
      <div
        className="container max-w-[1400px] mx-auto px-8 py-0 flex items-center justify-between gap-8"
        style={{ minHeight: "88px" }}
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="/assets/logo/transform-logo.png"
            alt="TransformNXT Logo"
            className="max-h-20 w-auto"
          />
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
            {/* Company Dropdown - align with other nav items */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((o) => !o)}
                className={
                  dropdownOpen
                    ? "flex items-center h-full text-zinc-900 font-semibold border-b-2 border-zinc-900 pb-1"
                    : "flex items-center h-full text-zinc-900 font-medium hover:text-zinc-900/80 transition-colors pb-1"
                }
                style={{ transform: 'translateY(6px)' }}
              >
                <span className="inline-flex items-center">
                  Company
                  <svg
                    className="w-5 h-5 ml-1.5 -mt-px transition-transform"
                    style={{
                      transform: dropdownOpen
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
              {dropdownOpen && (
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
                    onClick={() => setDropdownOpen(false)}
                  >
                    Careers
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    to="/case-studies"
                    className="block px-5 py-3 text-zinc-900 hover:bg-zinc-100 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Case Studies
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Contact Button */}
        <div className="hidden md:flex items-center ml-8">
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
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              {({ isActive }) => (
                <button className={`text-left w-full px-6 py-3 ${isActive ? 'text-zinc-900 font-semibold border-b-2 border-zinc-900' : 'text-zinc-900 font-medium hover:text-zinc-900/80'}`}>
                  About Us
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
            {/* Company dropdown for mobile */}
            <div className="w-full">
              <button
                className={`w-full text-left px-6 py-3 flex items-center justify-between ${dropdownOpen ? 'text-zinc-900 font-semibold' : 'text-zinc-900 font-medium'}`}
                onClick={() => setDropdownOpen((open) => !open)}
                aria-expanded={dropdownOpen}
                aria-controls="mobile-company-dropdown"
              >
                <span>Company</span>
                <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div
                id="mobile-company-dropdown"
                className={`w-full overflow-hidden transition-all duration-300 ${dropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ background: dropdownOpen ? '#f8f8f8' : 'transparent' }}
              >
                <NavLink to="/careers" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100 transition-colors" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Careers</NavLink>
                <NavLink to="/blog" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100 transition-colors" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Blog</NavLink>
                <NavLink to="/case-studies" className="block px-6 py-3 text-zinc-900 hover:bg-zinc-100 transition-colors" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Case Studies</NavLink>
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
