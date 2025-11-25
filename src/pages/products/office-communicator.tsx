import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";

const HERO_IMAGE =
  "https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=1200";

export default function AIOfficeCommunicator() {
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
                TransformNXT · AI Office Communicator
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                Bring candidate insights directly into your daily tools.
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                TransformNXT AI Office Communicator & Candidate Report Integration connects your
                hiring data to the tools your teams already live in — so recruiters, hiring managers
                and leaders can see candidate reports, summaries and updates without logging into
                another system.
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
                  Talk to our team
                </Link>
                <Link
                  to="/how-it-works/employers"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                >
                  Explore hiring workflows
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span>Candidate reports inside your office tools</span>
                <span className="h-3 w-px bg-slate-300" />
                <span>AI summaries for faster decisions</span>
                <span className="h-3 w-px bg-slate-300" />
                <span>Designed for distributed hiring teams</span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="md:justify-self-end">
              <div className="mx-auto max-w-md rounded-[2rem] bg-slate-50 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100">
                  <img
                    src={HERO_IMAGE}
                    alt="Teams collaborating with candidate reports on screen"
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
              Built for
            </p>
            <p className="mt-2">
              Talent teams, hiring managers and leadership who want real-time candidate insights in
              their existing office tools.
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              What it does
            </p>
            <p className="mt-2">
              Pushes candidate reports, AI summaries and status updates into chat, email and
              dashboards — with secure, role-based access.
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Value
            </p>
            <p className="mt-2">
              Fewer “send me the report” requests, clearer alignment and faster, data-backed
              hiring decisions.
            </p>
          </div>
        </section>

        {/* WHY SECTION */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Stop hunting for candidate information in different systems.
              </h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Candidate reports, interview notes and scoring often live in separate platforms that
                only recruiters open regularly. TransformNXT AI Office Communicator brings the most
                important information into your shared workspace — so everyone sees the same data,
                in context, at the right time.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                <li>• Share candidate snapshots directly into team channels or groups.</li>
                <li>• Notify panel members when new reports are ready to review.</li>
                <li>• Highlight AI-generated summaries, risks and strengths automatically.</li>
              </ul>
            </div>

            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                  For recruiters
                </p>
                <p className="mt-2 font-medium text-slate-900">Fewer manual exports & PDFs.</p>
                <p className="mt-2 text-xs text-slate-600">
                  Share live, always-up-to-date candidate cards instead of downloading and emailing
                  static attachments.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-500">
                  For hiring managers
                </p>
                <p className="mt-2 font-medium text-slate-900">Context without extra logins.</p>
                <p className="mt-2 text-xs text-slate-600">
                  Quickly review top candidates, see interview highlights, and give feedback from
                  your everyday collaboration space.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f9ff] p-5 md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">
                  For leadership
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  Real-time visibility into pipelines & quality.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Stay informed about critical roles, candidate quality trends and interview
                  progress without waiting for a weekly summary deck.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            How AI Office Communicator & Candidate Reports work together
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 text-sm text-slate-800 md:grid-cols-4">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 1
              </p>
              <p className="mt-2 font-medium">Capture structured interview data</p>
              <p className="mt-2 text-xs text-slate-600">
                TransformNXT collects responses, scores, notes and AI insights from async interviews
                and assessments into a unified candidate profile.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 2
              </p>
              <p className="mt-2 font-medium">Generate candidate reports & summaries</p>
              <p className="mt-2 text-xs text-slate-600">
                AI builds concise reports that highlight skills, strengths, concerns and notable
                interview moments for quick review.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 3
              </p>
              <p className="mt-2 font-medium">Push reports into office tools</p>
              <p className="mt-2 text-xs text-slate-600">
                Reports and updates are shared into designated teams, groups or inboxes using secure
                links and role-based access rules.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 4
              </p>
              <p className="mt-2 font-medium">Collaborate & decide faster</p>
              <p className="mt-2 text-xs text-slate-600">
                Stakeholders react, comment and align on next steps with shared candidate context —
                without leaving their daily workspace.
              </p>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Capabilities of TransformNXT AI Office Communicator
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-700">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Live candidate cards</p>
              <p className="mt-2 text-xs text-slate-600">
                Share live candidate cards that always stay in sync with the latest reports, scores
                and interview status inside your office tools.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">AI summary snippets</p>
              <p className="mt-2 text-xs text-slate-600">
                Post short summaries of each candidate into relevant channels — perfect for quick
                triage conversations and hiring standups.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Priority alerts</p>
              <p className="mt-2 text-xs text-slate-600">
                Flag critical candidates, urgent roles or expiring offers with automatic alerts
                directed to the right people.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Role-based access & permissions</p>
              <p className="mt-2 text-xs text-slate-600">
                Control who can see which candidates and which parts of the report, based on role,
                team and seniority.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Activity trails & auditability</p>
              <p className="mt-2 text-xs text-slate-600">
                Keep a clear record of when reports were shared, viewed and updated to support
                internal governance and compliance.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Configurable templates</p>
              <p className="mt-2 text-xs text-slate-600">
                Customize the tone, structure and level of detail in messages so they match how your
                teams communicate day-to-day.
              </p>
            </div>
          </div>
        </section>

        {/* IMPACT STRIP */}
        <section className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 px-6 py-10 text-slate-50 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold">
            How AI Office Communicator changes collaboration.
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl">
            With candidate reports integrated directly into your communication stack, hiring
            decisions become more transparent, collaborative and data-informed.
          </p>

          <div className="mt-8 grid gap-6 text-sm md:grid-cols-4">
            <div>
              <p className="text-3xl font-semibold">50%</p>
              <p className="mt-1 text-xs text-slate-300">
                fewer “status update” messages to recruiting teams.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">2×</p>
              <p className="mt-1 text-xs text-slate-300">
                faster feedback cycles for shortlists and final candidates.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">80%</p>
              <p className="mt-1 text-xs text-slate-300">
                of hiring managers say they feel “more aligned” with talent teams.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">100%</p>
              <p className="mt-1 text-xs text-slate-300">
                of candidate reports accessible from one central workspace.
              </p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Where AI Office Communicator is most useful
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-700">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Executive & critical roles</p>
              <p className="mt-2 text-xs text-slate-600">
                Ensure leadership, HR and talent all see the same candidate data early for
                high-impact positions.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Distributed hiring teams</p>
              <p className="mt-2 text-xs text-slate-600">
                Keep regional hiring teams and central HR aligned when they rarely share meetings or
                time zones.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">High-volume pipelines</p>
              <p className="mt-2 text-xs text-slate-600">
                Quickly surface standout candidates and share their reports into dedicated hiring
                channels for rapid triage.
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
                Here are common questions about TransformNXT AI Office Communicator & Candidate
                Report Integration. Our team can share a deeper technical walkthrough during a
                demo.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-slate-50"
              >
                Contact TransformNXT
              </Link>
            </div>

            <div className="space-y-5 divide-y divide-slate-200 text-sm text-slate-700">
              <div className="pt-1">
                <p className="font-semibold text-slate-900">
                  Do we need to move all hiring into TransformNXT first?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  No. You can start by connecting specific interview workflows or candidate reports
                  while keeping your existing tools in place. Integrations can expand over time.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  Can we control which roles and candidates are shared?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Yes. Sharing can be restricted by project, role, geography, seniority and more,
                  ensuring sensitive searches stay tightly controlled.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  Does this replace our existing HR systems?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  No. AI Office Communicator complements your systems by surfacing key information
                  where people work day-to-day, rather than replacing core HR platforms.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  How does TransformNXT keep candidate data secure?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Access is permissioned, audit logs track report sharing, and retention settings
                  can be aligned with your security and compliance framework. Our team can work with
                  your internal security stakeholders as part of onboarding.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageContainer>
  );
}
