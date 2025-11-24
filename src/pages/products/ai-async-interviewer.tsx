import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";

const HERO_IMAGE =
  "https://images.pexels.com/photos/6898859/pexels-photo-6898859.jpeg?auto=compress&cs=tinysrgb&w=1200";

const INTEGRATIONS = [
  "Greenhouse",
  "Lever",
  "Workday",
  "SAP SuccessFactors",
  "Oracle HCM",
  "BambooHR",
  "JazzHR",
  "Custom ATS",
];

export default function AIAsyncInterviewer() {
  return (
    <PageContainer>
      <main className="bg-[#f7f9ff] text-slate-900">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl bg-white px-6 py-12 shadow-sm md:px-10 md:py-14">
          {/* subtle dots */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-40 -translate-x-10 opacity-50">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: "radial-gradient(#e2e8ff 1.5px, transparent 1.5px)",
                backgroundSize: "16px 16px",
              }}
            />
          </div>

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            {/* left */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                Product · AI Video Interviewer
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                AI Asynchronous Interviewer for modern hiring teams.
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Replace unstructured phone screens with on-demand video interviews. Candidates
                respond in their own time. AI highlights key signals, and your team reviews only the
                most promising talent.
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
                  Book a product demo
                </Link>
                <Link
                  to="/how-it-works/employers"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                >
                  See how it works
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span>4x faster shortlisting</span>
                <span className="h-3 w-px bg-slate-300" />
                <span>Consistent candidate experience</span>
                <span className="h-3 w-px bg-slate-300" />
                <span>Ideal for tech & non-tech roles</span>
              </div>
            </div>

            {/* right image */}
            <div className="md:justify-self-end">
              <div className="mx-auto max-w-md rounded-[2rem] bg-slate-50 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100">
                  <img
                    src={HERO_IMAGE}
                    alt="Candidate doing an async video interview"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK HIGHLIGHTS */}
        <section className="mt-10 grid gap-4 rounded-3xl bg-white px-6 py-8 text-xs text-slate-600 shadow-sm md:grid-cols-3 md:px-10">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Designed for
            </p>
            <p className="mt-2">
              Talent teams, staffing agencies, and hiring managers who need structured screening at
              scale.
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Ideal scenarios
            </p>
            <p className="mt-2">
              High-volume roles, campus hiring, specialty technical roles, distributed or remote
              teams.
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Outcomes
            </p>
            <p className="mt-2">
              Reduced time-to-hire, better candidate insights before live rounds, consistent quality
              of interviews.
            </p>
          </div>
        </section>

        {/* WHY SECTION */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Why async interviews change the way you hire.
              </h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Traditional phone screenings burn recruiter time and create scheduling bottlenecks.
                Our AI Asynchronous Interviewer lets candidates respond when they’re ready, while
                AI-driven insights help you see who’s worth progressing — without extra calls.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                <li>• No more calendar ping-pong for first-round interviews.</li>
                <li>• Candidate responses are available to all stakeholders in one place.</li>
                <li>• AI extracts key skills, sentiment, and talking points automatically.</li>
              </ul>
            </div>

            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                  Recruiters
                </p>
                <p className="mt-2 font-medium text-slate-900">Spend time only on top talent.</p>
                <p className="mt-2 text-xs text-slate-600">
                  Review responses at 2x speed, skip low-fit candidates instantly, and move faster
                  on the right profiles.
                </p>
              </div>
              <div className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-500">
                  Candidates
                </p>
                <p className="mt-2 font-medium text-slate-900">Interview on their own time.</p>
                <p className="mt-2 text-xs text-slate-600">
                  Evening? Weekend? No problem. Candidates record answers in a distraction-free
                  environment and feel more prepared.
                </p>
              </div>
              <div className="rounded-2xl bg-[#f7f9ff] p-5 md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">
                  Hiring managers
                </p>
                <p className="mt-2 font-medium text-slate-900">Get real signals before the panel.</p>
                <p className="mt-2 text-xs text-slate-600">
                  Instead of skimming résumés, managers watch key clips, read summaries and score
                  candidates with shared rubrics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">How the AI interviewer works</h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 text-sm text-slate-800 md:grid-cols-4">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 1
              </p>
              <p className="mt-2 font-medium">Design interview templates</p>
              <p className="mt-2 text-xs text-slate-600">
                Create competency-based question sets for each role, including video, audio or text
                prompts and time limits.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 2
              </p>
              <p className="mt-2 font-medium">Invite candidates</p>
              <p className="mt-2 text-xs text-slate-600">
                Send interview links automatically via email, your ATS, or bulk upload — no
                scheduling required.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 3
              </p>
              <p className="mt-2 font-medium">AI analyses responses</p>
              <p className="mt-2 text-xs text-slate-600">
                The platform evaluates speech, keywords and behaviour cues, surfacing strengths,
                risks, and suggested fit.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 4
              </p>
              <p className="mt-2 font-medium">Shortlist & share</p>
              <p className="mt-2 text-xs text-slate-600">
                Recruiters and hiring managers review videos, notes and scores, then move the best
                candidates into live rounds.
              </p>
            </div>
          </div>
        </section>

        {/* KEY CAPABILITIES */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">Key capabilities</h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-700">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">AI-powered scoring & highlights</p>
              <p className="mt-2 text-xs text-slate-600">
                Automatically surface top candidates with relevance scores, sentiment cues and
                keyword highlights for each response.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Structure & fairness</p>
              <p className="mt-2 text-xs text-slate-600">
                Every candidate receives the same prompts and rating scales, supporting fairer and
                more transparent hiring decisions.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Panel-friendly playback</p>
              <p className="mt-2 text-xs text-slate-600">
                Share shortlisted interviews with hiring managers, who can watch at their own pace,
                add notes and scores, and collaborate.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Brand-aligned candidate experience</p>
              <p className="mt-2 text-xs text-slate-600">
                Customize introductions, closing messages and email templates to match your brand
                tone and employer value proposition.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Configurable question formats</p>
              <p className="mt-2 text-xs text-slate-600">
                Combine behavioural, technical and scenario-based prompts. Support video, audio and
                written answers in the same flow.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Security & compliance</p>
              <p className="mt-2 text-xs text-slate-600">
                Enterprise-grade storage, controlled access and audit logs help you stay compliant
                with internal and external policies.
              </p>
            </div>
          </div>
        </section>

        {/* IMPACT STRIP */}
        <section className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 px-6 py-10 text-slate-50 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold">Impact our customers see</h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl">
            Numbers vary by use case, but across TransformNXT customers we see consistent
            improvements in throughput and quality.
          </p>

          <div className="mt-8 grid gap-6 text-sm md:grid-cols-4">
            <div>
              <p className="text-3xl font-semibold">4x</p>
              <p className="mt-1 text-xs text-slate-300">faster from application to shortlist.</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">70%</p>
              <p className="mt-1 text-xs text-slate-300">
                reduction in recruiter time spent on initial screening.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">3000+</p>
              <p className="mt-1 text-xs text-slate-300">
                async interviews run across tech & non-tech roles.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">80%</p>
              <p className="mt-1 text-xs text-slate-300">
                of hiring managers say they feel “more confident” in shortlists.
              </p>
            </div>
          </div>
        </section>

        {/* INTEGRATIONS */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Integration support with ATS platforms
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />
          <p className="mt-4 text-sm text-slate-600 max-w-2xl">
            Plug the AI Asynchronous Interviewer into your existing hiring stack. Use it as a
            standalone workflow or trigger interviews directly from your ATS.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {INTEGRATIONS.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-2xl border border-slate-200 bg-[#f7f9ff] px-4 py-5 text-sm font-medium text-slate-800"
              >
                {name}
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-slate-500">
            Need a custom integration? Our team supports webhooks and API-level workflows for
            internal tools.
          </p>
        </section>

        {/* USE CASES */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Use cases across industries & teams
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-700">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">In-house talent teams</p>
              <p className="mt-2 text-xs text-slate-600">
                Standardize first-round interviews across locations, brands or business units while
                keeping hiring managers closely involved.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Staffing & recruitment agencies</p>
              <p className="mt-2 text-xs text-slate-600">
                Pre-screen candidates at scale and share concise video snapshots with client
                hiring managers.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Universities & training providers</p>
              <p className="mt-2 text-xs text-slate-600">
                Run job-readiness assessments and build shareable interview profiles for graduating
                cohorts.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION (STATIC) */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10 mb-6">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr),minmax(0,1.6fr)]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Frequently asked questions
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Got a question about the AI Asynchronous Interviewer? Start here. Our team can share
                more detailed documentation during a demo.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-slate-50"
              >
                Talk to our team
              </Link>
            </div>

            <div className="space-y-5 divide-y divide-slate-200 text-sm text-slate-700">
              <div className="pt-1">
                <p className="font-semibold text-slate-900">
                  Do candidates need to install anything?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  No. Interviews run in a modern browser on desktop or mobile. A stable internet
                  connection and camera/microphone access are all that’s required.
                </p>
              </div>
              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  Can we disable AI scoring and review manually?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Yes. You can treat the platform as a structured recording and playback tool,
                  optionally enabling or disabling AI signals by role, project or client.
                </p>
              </div>
              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  How long are interviews typically available for?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Retention settings are configurable. You can define how long recordings and reports
                  are kept, and who is allowed to access them.
                </p>
              </div>
              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  Will this replace live interviews?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  No. The goal is to make early screening more efficient, so your teams spend more
                  time in high-quality conversations, not less.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageContainer>
  );
}