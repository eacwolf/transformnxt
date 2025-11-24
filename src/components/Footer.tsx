import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#f5f7ff] border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">

          {/* LEFT SECTION */}
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
              Transform<span className="text-[#2f6fff]">NXT</span>
            </h2>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-sm">
              TransformNXT is your trusted IT partner for digital transformation,
              software development, cloud services and technology consulting.
              We empower businesses with secure, scalable and innovative solutions.
            </p>

            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <p className="flex items-center gap-2">
                <span>📞</span> 0000000000
              </p>
              <p className="flex items-center gap-2">
                <span>✉</span> akhil@transformnxt.in
              </p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">QUICK LINKS</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link to="/about" className="hover:text-slate-900">About Us</Link></li>
              <li><Link to="/services" className="hover:text-slate-900">Services</Link></li>
              <li><Link to="/partners" className="hover:text-slate-900">Partners</Link></li>
              <li><Link to="/contact" className="hover:text-slate-900">Contact Us</Link></li>
              <li><Link to="/plans" className="hover:text-slate-900">Get Your Plan</Link></li>
            </ul>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">EXPLORE</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link to="/projects" className="hover:text-slate-900">Our Projects</Link></li>
              <li><Link to="/case-studies" className="hover:text-slate-900">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-slate-900">Tech Blog</Link></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} TransformNXT. All rights reserved.</p>

          {/* Social icons */}
          <div className="flex items-center gap-4 text-slate-600">
            <span className="cursor-pointer hover:text-slate-900">in</span>
            <span className="cursor-pointer hover:text-slate-900">X</span>
            <span className="cursor-pointer hover:text-slate-900">🌐</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
