import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f5f7ff]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* top row */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr),minmax(0,1fr),minmax(0,1fr)]">
          {/* BRAND + DESCRIPTION */}
          <div>
            <div className="text-lg font-extrabold tracking-tight text-slate-900">
              Transform<span className="text-[#2f6fff]">NXT</span>
            </div>

            <p className="mt-3 max-w-md text-xs leading-relaxed text-slate-600">
              TransformNXT is your trusted IT partner for digital transformation, software
              development, cloud solutions, and technology consulting. We empower businesses to
              innovate and grow with cutting-edge IT services and expert support.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-[0.7rem]">
                  ☎
                </span>
                <span>0000000000</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-[0.7rem]">
                  ✉
                </span>
                <span>akhil@transformnxt.in</span>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900">QUICK LINKS</h4>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
              <li>
                <Link to="/about" className="hover:text-slate-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-slate-900">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-slate-900">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-slate-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/plans" className="hover:text-slate-900">
                  Get Your Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900">EXPLORE</h4>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
              <li>
                <Link to="/projects" className="hover:text-slate-900">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-slate-900">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-slate-900">
                  Tech Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-4 text-[0.7rem] text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} TransformNXT. All rights reserved.</p>

          <div className="flex items-center gap-4">
            {/* simple social placeholders – replace with real icons if you like */}
            <button
              type="button"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 text-[0.7rem] text-slate-600 hover:border-slate-400 hover:text-slate-900"
            >
              in
            </button>
            <button
              type="button"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 text-[0.7rem] text-slate-600 hover:border-slate-400 hover:text-slate-900"
            >
              X
            </button>
            <button
              type="button"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 text-[0.7rem] text-slate-600 hover:border-slate-400 hover:text-slate-900"
            >
              🌐
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
