
import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";

const HERO_IMAGE =
  "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1200";
 // replace with your own asset

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
            {/* LEFT */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                TransformNXT · AI Asynchronous Mode Interviewer
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                Run first-round interviews on autopilot with async video.
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                TransformNXT AI Asynchronous Mode Interviewer replaces unstructured phone screens
                with structured, on-demand video interviews. Candidates respond in their own time.
                AI highlights key moments so your team focuses only on the most promising talent.
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
                  Schedule a product demo
                </Link>
                <Link
                  to="/how-it-works/employers"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                >
                  See hiring workflows
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span>On-demand video interviews</span>
                <span className="h-3 w-px bg-slate-300" />
                <span>AI scoring & highlights</span>
                <span className="h-3 w-px bg-slate-300" />
                <span>Ideal for tech & non-tech roles</span>
              </div>
            </div>

            {/* RIGHT – IMAGE */}
            <div className="md:justify-self-end">
              <div className="mx-auto max-w-md rounded-[2rem] bg-slate-50 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100">
                  <img
                    src={HERO_IMAGE}
                    alt="TransformNXT async video interview interface"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK SUMMARY STRIP */}
        <section className="mt-10 grid gap-4 rounded-3xl bg-white px-6 py-8 text-xs text-slate-600 shadow-sm md:grid-cols-3 md:px-10">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Designed for
            </p>
            <p className="mt-2">
              Talent teams, staffing partners and hiring managers who need consistent early-round
              interviews without calendar chaos.
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              What it does
            </p>
            <p className="mt-2">
              Delivers structured one-way video interviews, applies AI to surface insights, and
              makes review and collaboration simple.
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Outcomes
            </p>
            <p className="mt-2">
              Faster shortlists, better evidence before live rounds, and a more predictable hiring
              process for every role.
            </p>
          </div>
        </section>

        {/* WHY TRANSFORMNXT ASYNC */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Give every candidate the same chance to shine.
              </h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Early interviews often depend on who picks up the phone and how much time a recruiter
                has that day. With TransformNXT async video, every candidate gets the same structured
                questions, the same prep time and the same opportunity to showcase their skills.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                <li>• Replace manual phone screens with consistent, replayable video.</li>
                <li>• Reduce scheduling friction for candidates across time zones.</li>
                <li>• Capture richer signals while keeping recruiters in full control.</li>
              </ul>
            </div>

            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                  Recruiter experience
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  Screen more people, not more hours.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Review videos at 1.5x or 2x speed, skip weak responses quickly and share only
                  relevant clips with hiring managers.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-500">
                  Candidate experience
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  Interview when it actually works for them.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Candidates can respond outside working hours, practise beforehand and retake
                  where you allow it.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f9ff] p-5 md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">
                  Business impact
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  Stronger shortlists and fewer wasted panels.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  By the time hiring managers join a live call, they’ve already seen how candidates
                  communicate and think through real scenarios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            How TransformNXT async video interviews work
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 text-sm text-slate-800 md:grid-cols-4">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 1
              </p>
              <p className="mt-2 font-medium">Create role-specific templates</p>
              <p className="mt-2 text-xs text-slate-600">
                Build structured question sets aligned to competencies, seniority levels and
                locations. Configure time to think, answer duration and retake rules.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 2
              </p>
              <p className="mt-2 font-medium">Invite candidates automatically</p>
              <p className="mt-2 text-xs text-slate-600">
                Send secure interview links via email or from your internal systems when candidates
                reach specific stages in the hiring pipeline.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 3
              </p>
              <p className="mt-2 font-medium">AI assists the review process</p>
              <p className="mt-2 text-xs text-slate-600">
                AI flags key moments, extracts skills, summarises long answers and suggests areas to
                focus on — without replacing human judgement.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 4
              </p>
              <p className="mt-2 font-medium">Shortlist & move to live rounds</p>
              <p className="mt-2 text-xs text-slate-600">
                Recruiters and hiring managers review, score and comment directly on each response,
                then progress the right candidates into panel interviews.
              </p>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Capabilities built for async video hiring
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-700">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Structured one-way video flows</p>
              <p className="mt-2 text-xs text-slate-600">
                Combine intro videos, practice questions and timed responses to create a consistent
                experience across every candidate and role.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">
                AI-assisted scoring & highlights
              </p>
              <p className="mt-2 text-xs text-slate-600">
                See recommended scores, key phrases and summarised insights for each question,
                helping reviewers stay aligned and efficient.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">
                Collaboration for hiring managers
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Invite managers to review shortlisted interviews, leave comments and rate
                candidates — all without extra scheduling.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">
                Custom branding & candidate messaging
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Configure branded welcome screens, instructions and follow-up messages so
                candidates experience a cohesive TransformNXT journey.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">
                Configurable retakes & time windows
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Choose how flexible or strict each interview should be — from single-take sessions
                to practice-friendly flows for campus and junior roles.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">
                Secure storage & access control
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Use permissions and retention policies that align with your internal security and
                compliance requirements.
              </p>
            </div>
          </div>
        </section>

        {/* IMPACT STRIP */}
        <section className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 px-6 py-10 text-slate-50 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold">
            What async interviewing delivers with TransformNXT
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl">
            Teams using TransformNXT AI Asynchronous Mode Interviewer report faster screening,
            better hiring manager alignment and a more modern candidate experience.
          </p>

          <div className="mt-8 grid gap-6 text-sm md:grid-cols-4">
            <div>
              <p className="text-3xl font-semibold">4×</p>
              <p className="mt-1 text-xs text-slate-300">
                more candidates screened in the same calendar window.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">60%</p>
              <p className="mt-1 text-xs text-slate-300">
                reduction in recruiter hours spent on early-stage calls.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">80%</p>
              <p className="mt-1 text-xs text-slate-300">
                of hiring managers say they feel “more confident” in first-round shortlists.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">24/7</p>
              <p className="mt-1 text-xs text-slate-300">
                candidates can complete interviews from any location and time zone.
              </p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Where async video interviews fit best
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-700">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">High-volume hiring</p>
              <p className="mt-2 text-xs text-slate-600">
                Screen large applicant pools for customer-facing, operations or support roles while
                still capturing personality and communication skills.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Campus & early-career</p>
              <p className="mt-2 text-xs text-slate-600">
                Give students and recent graduates time to prepare and record thoughtful responses
                without the pressure of a live call.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Specialist & hybrid roles</p>
              <p className="mt-2 text-xs text-slate-600">
                Ask scenario-based questions that reveal how candidates think, prioritise and
                communicate across technical and business domains.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10 mb-6">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr),minmax(0,1.6fr)]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Frequently asked questions
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Here are some common questions about TransformNXT AI Asynchronous Mode Interviewer.
                Our team can share detailed playbooks and security documentation during a demo.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-slate-50"
              >
                Talk to our specialists
              </Link>
            </div>

            <div className="space-y-5 divide-y divide-slate-200 text-sm text-slate-700">
              <div className="pt-1">
                <p className="font-semibold text-slate-900">
                  Do async interviews replace all live interviews?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  No. Async interviews streamline early stages so live conversations can focus on
                  deeper fit, collaboration and decision-making.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  Can candidates use mobile devices for interviews?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Yes. Candidates can complete interviews from modern browsers on desktop or mobile.
                  They only need a camera, microphone and stable connection.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  Is AI making automatic hiring decisions?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  No. AI provides recommendations, summaries and highlights. Recruiters and hiring
                  managers always control the final decisions.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  How long are video interviews stored?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Retention settings are configurable and can be aligned with your internal policies
                  and legal requirements. Access is controlled via permissions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageContainer>
  );
}
