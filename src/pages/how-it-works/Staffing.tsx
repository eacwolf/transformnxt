import { Link } from "react-router-dom";

const STAFFING_IMAGE =
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200";

export default function Staffing() {
  return (
    <main className="bg-[#f7f9ff] text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        {/* subtle dots */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 -translate-x-10 opacity-50 md:w-52">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "radial-gradient(#e2e8ff 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
            }}
          />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
          {/* LEFT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
              For Staffing & Recruitment Agencies
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Deliver high-fit shortlists with faster, smarter pre-screening.
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600">
              Reduce time spent on initial calls and manual filtering. Use structured video
              interviews, client-aligned templates, and verified candidate reports to deliver higher-
              quality submissions — faster.
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
                Contact Sales
              </Link>

              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
                style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
              >
                Login
              </Link>
            </div>

            <p className="mt-5 text-xs text-slate-500">
              Trusted by staffing partners, agencies, and RPO teams globally.
            </p>
          </div>

          {/* IMAGE */}
          <div>
            <div className="mx-auto max-w-md rounded-[2rem] bg-slate-50 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
              <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100">
                <img
                  src={STAFFING_IMAGE}
                  alt="Staffing team reviewing interview submissions"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-16 bg-[#f7f9ff]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-semibold text-slate-900">
            How modern staffing teams use async interviews
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#2f6fff]" />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">High-volume roles</h3>
              <p className="mt-2 text-xs text-slate-600">
                Automate thousands of initial screenings at once while still ensuring consistent,
                structured evaluations.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Specialized technical recruiting
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Capture how candidates explain their experience and thought-process — something
                résumés alone never reveal.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">RPO engagements</h3>
              <p className="mt-2 text-xs text-slate-600">
                Deliver consistent interview standards across multiple client accounts while scaling
                effortlessly with demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-[2rem]">
              Streamline your pre-screening workflow.
            </h2>
            <div className="mt-3 h-1 w-24 rounded-full bg-[#2f6fff]" />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Build repeatable assessments that match your clients’ expectations. Standardize
              questions, automate invites, and create data-rich submissions that increase placement
              rates and client satisfaction.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              With structured templates and on-demand responses, your recruiters focus only on
              high-potential candidates.
            </p>
          </div>

          {/* STEPS */}
          <div>
            <ol className="space-y-5 text-sm text-slate-800">
              <li className="flex gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-sky-400 ring-4 ring-sky-100" />
                <div>
                  <h3 className="font-semibold">1. Create reusable role templates</h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Build interview packs for common positions and share them across your agency
                    teams.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-emerald-100" />
                <div>
                  <h3 className="font-semibold">2. Invite candidates automatically</h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Generate a secure link and allow candidates to record answers anytime, from any
                    device.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-indigo-400 ring-4 ring-indigo-100" />
                <div>
                  <h3 className="font-semibold">3. Review & score consistently</h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Recruiters evaluate candidates with shared rubrics, ensuring the same standards
                    across roles and clients.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-rose-400 ring-4 ring-rose-100" />
                <div>
                  <h3 className="font-semibold">4. Deliver high-quality shortlists</h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Export video responses, notes, and scores into clear, evidence-based client
                    submissions.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#f7f9ff] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-semibold text-slate-900">
            Why agencies rely on TransformNXT
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#2f6fff]" />

          <ul className="mt-8 grid gap-6 text-sm text-slate-700 md:grid-cols-2">
            <li className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Increase placement velocity
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Shortlist stronger candidates faster with standardized, async interviews.
              </p>
            </li>

            <li className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Deliver consistent client-ready submissions
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Provide hiring managers with reliable, evidence-backed reports for every candidate.
              </p>
            </li>

            <li className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Reduce recruiter workload
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Automate repetitive screening while focusing recruiter time on real fit evaluation.
              </p>
            </li>

            <li className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Scale your operations effortlessly
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Support surges in client demand or seasonal hiring without increasing team size.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
