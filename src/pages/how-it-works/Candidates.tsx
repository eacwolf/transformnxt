import { Link } from "react-router-dom";

const HERO_IMAGE =
  "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=1200";

export default function Candidates() {
  return (
    <main className="bg-[#f7f9ff] text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white">
        {/* subtle dots */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 -translate-x-10 opacity-60 md:w-52">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "radial-gradient(#ffd1bf 2px, transparent 2px)",
              backgroundSize: "16px 16px",
            }}
          />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:py-20">
          {/* LEFT */}
          <div className="relative z-10 md:w-1/2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-500">
              For Jobseekers & Students
            </p>

            <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.6rem] text-slate-900">
              Showcase your skills with async video interviews.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
              Record structured interview responses, practise with feedback, and share verified reports
              with recruiters to stand out in the hiring process.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                Get Help
              </Link>

              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
                style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
              >
                Login
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative z-10 md:w-1/2">
            <div className="mx-auto max-w-md rounded-[2.2rem] bg-slate-50 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
              <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100">
                <img
                  src={HERO_IMAGE}
                  alt="Candidate practising an interview"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-[#f7f9ff] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-semibold text-slate-900">
            Turn your practice into proof of skills
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 bg-[#2f6fff] rounded-full" />

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="p-6 bg-white rounded-3xl shadow-sm">
              <h3 className="text-sm font-semibold">Create your profile</h3>
              <p className="mt-2 text-xs text-slate-600">
                Set your interests and roles so interview templates match your goals.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl shadow-sm">
              <h3 className="text-sm font-semibold">Practise interviews</h3>
              <p className="mt-2 text-xs text-slate-600">
                Replay responses and improve communication with guided prompts.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl shadow-sm">
              <h3 className="text-sm font-semibold">Share verified reports</h3>
              <p className="mt-2 text-xs text-slate-600">
                Export skill reports and send them to recruiters to stand out.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-t border-slate-100 bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          {/* left */}
          <div>
            <h2 className="text-2xl sm:text-[2rem] font-semibold text-slate-900">
              Practise with structure, not guesswork.
            </h2>

            <div className="mt-3 h-1 w-24 bg-[#2f6fff] rounded-full" />

            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Real interview-style questions and replayable recordings help you gain confidence
              without pressure.
            </p>

            <ul className="mt-5 text-sm text-slate-700 space-y-2">
              <li>• Prepare for internships, grad roles or career switches.</li>
              <li>• Record anytime — mobile or desktop.</li>
              <li>• Track improvement across multiple attempts.</li>
            </ul>
          </div>

          {/* right */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Benefits for candidates</h3>

            <ul className="mt-4 grid gap-4 text-sm text-slate-700 md:grid-cols-1">
              <li className="p-4 rounded-2xl bg-[#f7f9ff]">
                <p className="font-medium">Showcase asynchronously</p>
                <p className="text-xs mt-1 text-slate-600">
                  Recruiters can review you anytime — no scheduling delays.
                </p>
              </li>

              <li className="p-4 rounded-2xl bg-[#f7f9ff]">
                <p className="font-medium">Reduce interview anxiety</p>
                <p className="text-xs mt-1 text-slate-600">
                  Practise in a stress-free environment before live calls.
                </p>
              </li>

              <li className="p-4 rounded-2xl bg-[#f7f9ff]">
                <p className="font-medium">Stand out from résumés</p>
                <p className="text-xs mt-1 text-slate-600">
                  Show your communication & thinking clearly — not just text.
                </p>
              </li>

              <li className="p-4 rounded-2xl bg-[#f7f9ff]">
                <p className="font-medium">Track your progress</p>
                <p className="text-xs mt-1 text-slate-600">
                  Compare attempts and get better with every try.
                </p>
              </li>

            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
