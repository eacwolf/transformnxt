import { Link } from "react-router-dom";

const TRAINING_IMAGE =
  "https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=1200";

export default function Training() {
  return (
    <main className="bg-[#f7f9ff] text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        {/* light dotted texture */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 -translate-x-10 opacity-40 md:w-52">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "radial-gradient(#e2e8ff 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
            }}
          />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
              For Professional Training Institutes
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Validate skills &amp; job-readiness with structured AI interviews.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600">
              Assess learners after completion of training modules and provide employers with
              verified skill reports. Ensure your graduates stand out with real communication
              and problem-solving evidence — not just certificates.
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
              Designed for bootcamps, corporate training partners, and skills academies.
            </p>
          </div>

          {/* IMAGE */}
          <div>
            <div className="mx-auto max-w-md rounded-[2rem] bg-slate-50 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
              <div className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-slate-100">
                <img
                  src={TRAINING_IMAGE}
                  className="h-full w-full object-cover"
                  alt="Training assessment"
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
            Where training assessments make the biggest impact
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#2f6fff]" />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Technical Bootcamps</h3>
              <p className="mt-2 text-xs text-slate-600">
                Validate communication and problem-solving abilities after specialized technical
                training such as web development, DevOps, AI, or cybersecurity.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Corporate Upskilling Programs
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Assess employees post-training to measure learning outcomes and identify those
                ready for advanced responsibilities.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Vocational Training Institutes
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Provide employers with credible evidence of hands-on and soft-skill readiness,
                increasing placement chances for learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING WORKFLOW */}
      <section className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-[2rem]">
              How training assessments work
            </h2>
            <div className="mt-3 h-1 w-24 rounded-full bg-[#2f6fff]" />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Structured AI interviews track progress over time, verify competencies, and allow
              training teams to compare performance across multiple cohorts or batches.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Learners get a safe environment to practise. Trainers receive complete analytics.
              Employers receive verified profiles.
            </p>
          </div>

          <div>
            <ol className="space-y-5 text-sm text-slate-800">
              <li className="flex gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-sky-400 ring-4 ring-sky-100" />
                <div>
                  <h3 className="font-semibold">1. Map interviews to the curriculum</h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Define key learning outcomes and create interview templates that reflect
                    real-world job tasks and challenges.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-emerald-100" />
                <div>
                  <h3 className="font-semibold">2. Learners complete asynchronous interviews</h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Learners record responses at their own pace, ensuring consistent evidence
                    for evaluation.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-indigo-400 ring-4 ring-indigo-100" />
                <div>
                  <h3 className="font-semibold">3. Trainers review and score</h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Evaluate communication, presentation, technical clarity, and applied skills
                    using structured rubrics.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-rose-400 ring-4 ring-rose-100" />
                <div>
                  <h3 className="font-semibold">4. Generate verified candidate reports</h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Provide learners with downloadable reports they can share with recruiters to
                    boost placement success.
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
            Benefits for training providers
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#2f6fff]" />

          <ul className="mt-8 grid gap-6 text-sm text-slate-700 md:grid-cols-2">
            <li className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Evidence-based learning validation
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Move beyond multiple-choice tests and validate true communication and applied
                skills.
              </p>
            </li>

            <li className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Higher placement outcomes
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Provide employers with verified candidate profiles they can trust.
              </p>
            </li>

            <li className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Scalable, consistent assessments
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Assess hundreds of learners without interviewer fatigue or scheduling issues.
              </p>
            </li>

            <li className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Insights for course improvement
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Identify skill gaps across cohorts and tweak your curriculum with real
                performance data.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
