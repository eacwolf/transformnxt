import { Link } from "react-router-dom";

const EMPLOYER_IMAGE =
  "https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=1200";

export default function Employers() {
  return (
    <main className="bg-[#f7f9ff] text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 -translate-x-10 md:w-52 opacity-60">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "radial-gradient(#ffd1bf 2px, transparent 2px)",
              backgroundSize: "16px 16px",
            }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-12 md:py-20">

          {/* LEFT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
              For Employers
            </p>

            <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">
              Hire faster with structured async interviews.
            </h1>

            <p className="mt-4 text-sm max-w-lg text-slate-600 leading-relaxed">
              Reduce screening workload by 70% using on-demand candidate responses, skill cues and
              structured templates — all before scheduling a single live call.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-7 py-3 text-sm rounded-full font-medium inline-flex items-center justify-center"
                style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
              >
                Schedule Demo
              </Link>

              <Link
                to="/login"
                className="px-6 py-3 rounded-full inline-flex items-center justify-center text-sm font-medium"
                style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
              >
                Login
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div>
            <div className="bg-slate-50 p-3 rounded-[2rem] shadow-[0_18px_45px_rgba(15,23,42,0.12)] max-w-md mx-auto">
              <div className="rounded-[1.8rem] overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={EMPLOYER_IMAGE}
                  alt="Employer reviewing candidates"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-16 bg-[#f7f9ff]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-2xl font-semibold">Where async interviews excel</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 bg-white rounded-3xl shadow-sm">
              <h3 className="text-sm font-semibold">High-volume hiring</h3>
              <p className="text-xs mt-2 text-slate-600">
                Automate first-round screening across hundreds of applicants.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl shadow-sm">
              <h3 className="text-sm font-semibold">Campus & entry-level</h3>
              <p className="text-xs mt-2 text-slate-600">
                Evaluate communication, reasoning and potential — not just keywords.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl shadow-sm">
              <h3 className="text-sm font-semibold">Technical & hybrid roles</h3>
              <p className="text-xs mt-2 text-slate-600">
                See how candidates explain their thinking and approach scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 border-y border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-2xl sm:text-[2rem] font-semibold text-slate-900">
              Reduce screening time and improve hiring outcomes.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Structured video interviews eliminate scheduling delays, letting your team review
              candidate responses anytime.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Recruiters focus only on aligned talent while managers receive clear evidence for
              decision-making.
            </p>
          </div>

          {/* RIGHT STEPS */}
          <div>
            <ol className="space-y-5 text-sm text-slate-800">
              <li className="flex gap-3">
                <span className="mt-1 w-3 h-3 rounded-full bg-slate-400" />
                <div>
                  <h3 className="font-semibold">1. Build templates</h3>
                  <p className="text-xs mt-1 text-slate-600">
                    Set up competency-aligned interview packs for every role.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 w-3 h-3 rounded-full bg-slate-400" />
                <div>
                  <h3 className="font-semibold">2. Invite applicants</h3>
                  <p className="text-xs mt-1 text-slate-600">
                    Candidates record responses anytime from any device.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 w-3 h-3 rounded-full bg-slate-400" />
                <div>
                  <h3 className="font-semibold">3. Review & shortlist</h3>
                  <p className="text-xs mt-1 text-slate-600">
                    Score, compare and filter talent efficiently.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 w-3 h-3 rounded-full bg-slate-400" />
                <div>
                  <h3 className="font-semibold">4. Move top talent to live rounds</h3>
                  <p className="text-xs mt-1 text-slate-600">
                    Managers get concise, evidence-based profiles for easy decisions.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#f7f9ff] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-2xl font-semibold">Benefits for Employers</h2>

          <ul className="mt-10 grid gap-6 md:grid-cols-2 text-sm text-slate-700">

            <li className="p-5 rounded-2xl bg-white shadow-sm">
              <h3 className="font-semibold text-slate-900">Better hiring decisions</h3>
              <p className="text-xs mt-2 text-slate-600">
                Evaluate real thinking, communication and problem-solving.
              </p>
            </li>

            <li className="p-5 rounded-2xl bg-white shadow-sm">
              <h3 className="font-semibold text-slate-900">Faster shortlisting</h3>
              <p className="text-xs mt-2 text-slate-600">
                Remove scheduling delays and complete the first round instantly.
              </p>
            </li>

            <li className="p-5 rounded-2xl bg-white shadow-sm">
              <h3 className="font-semibold text-slate-900">Consistent evaluation</h3>
              <p className="text-xs mt-2 text-slate-600">
                Every candidate receives identical prompts for fair comparison.
              </p>
            </li>

            <li className="p-5 rounded-2xl bg-white shadow-sm">
              <h3 className="font-semibold text-slate-900">Reduced recruiter workload</h3>
              <p className="text-xs mt-2 text-slate-600">
                Focus on top talent while the platform collects structured responses.
              </p>
            </li>

          </ul>
        </div>
      </section>

      {/* END STRIP */}
      <section className="border-t border-slate-200 bg-white py-10">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-slate-700">
          <p>
            Join employers modernizing hiring with{" "}
            <span className="font-semibold">TransformNXT</span>.
          </p>
        </div>
      </section>
    </main>
  );
}
