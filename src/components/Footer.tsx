
import { Mail, Phone, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#f7f7fb] border-t-2 border-zinc-900 pt-10 pb-0 text-gray-700 relative" style={{ backgroundImage: 'radial-gradient(circle, #e5e5e5 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
    <div className="container mx-auto max-w-[1400px] px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-gray-200">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left col-span-1">
          <img src="/assets/logo/transform-logo.png" alt="TransformNXT Logo" className="h-20 mb-4" />
          <p className="text-base max-w-md mb-0">
            TransformNXT is your partner for business transformation, consulting, and talent solutions. We help organizations thrive in a fast-evolving landscape with tailored strategies and relentless support.
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start col-span-1">
          <h3 className="text-zinc-900 font-semibold text-lg mb-3">QUICK LINKS</h3>
          <ul className="space-y-2 text-base">
            <li><a href="/about" className="hover:text-zinc-900">About Us</a></li>
            <li><a href="/services" className="hover:text-zinc-900">Services</a></li>
            <li><a href="/partners" className="hover:text-zinc-900">Partners</a></li>
            <li><a href="/contact" className="hover:text-zinc-900">Contact Us</a></li>
            <li><a href="/get-plan" className="hover:text-zinc-900">Get Your Plan</a></li>
          </ul>
        </div>
        {/* Explore */}
        <div className="flex flex-col items-center md:items-start col-span-1">
          <h3 className="text-zinc-900 font-semibold text-lg mb-3">EXPLORE</h3>
          <ul className="space-y-2 text-base">
            <li><a href="/programs" className="hover:text-zinc-900">Nutrition & Fitness Programs</a></li>
            <li><a href="/corporate-wellness" className="hover:text-zinc-900">Corporate Wellness Programs</a></li>
            <li><a href="/videos" className="hover:text-zinc-900">Exercise Videos</a></li>
          </ul>
        </div>
      </div>
      {/* Contact & Social */}
      <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm border-b border-gray-200">
        <div className="flex items-center gap-4 mb-2 md:mb-0">
          <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91000000000000</span>
          <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> akhil@transformnxt.in</span>
        </div>
        <div className="flex gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900"><Linkedin className="w-5 h-5" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900"><Twitter className="w-5 h-5" /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900"><Github className="w-5 h-5" /></a>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center py-4 text-xs text-gray-400">© 2025 TransformNXT. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
