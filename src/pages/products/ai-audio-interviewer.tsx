import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";

const HERO_IMAGE = "/images/ai-audio-interviewer.jpg"; // replace with your own asset

export default function AIAudioInterviewer() {
  return (
    <PageContainer>
      <main className="bg-[#f7f9ff] text-slate-900">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl bg-white px-6 py-12 shadow-sm md:px-10 md:py-14">
          {/* subtle dots on left */}
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
                TransformNXT · AI Audio Interviewer
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                Voice-first async interviews with AI-powered audio intelligence.
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                TransformNXT AI Audio Interviewer captures candidate responses as audio, converts
                them to precise transcripts, and applies advanced language and tone analysis so your
                team sees the full picture before live rounds.
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
                  Explore hiring workflows
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span>Audio-only interviews for bandwidth-limited regions</span>
                <span className="h-3 w-px bg-slate-300" />
                <span>Ideal for large-scale phone-screen replacement</span>
              </div>
            </div>

            {/* RIGHT IMAGE / MOCK */}
            <div className="md:justify-self-end">
              <div className="mx-auto max-w-md rounded-[2rem] bg-slate-50 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100">
                  <img
                    src={HERO_IMAGE}
                    alt="Audio interviewing interface"
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
              Hiring teams that prefer voice-first interviews, phone-screen style assessments and
              low-bandwidth candidate experiences.
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              What it does
            </p>
            <p className="mt-2">
              Records structured audio answers, transcribes them automatically, and scores content
              and tone using AI.
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Outcomes
            </p>
            <p className="mt-2">
              Faster, more consistent screening with deeper insight into what candidates say and how
              they say it.
            </p>
          </div>
        </section>

        {/* WHY TRANSFORMNXT AUDIO INTERVIEWER */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Move beyond manual phone screens.
              </h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Traditional phone screens are difficult to share, hard to compare and almost
                impossible to audit. TransformNXT AI Audio Interviewer turns every first
                conversation into structured, searchable data while keeping the experience simple
                for candidates.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                <li>• Candidates respond to guided audio questions from any device.</li>
                <li>• Recruiters get transcripts, tone indicators and key phrase highlights.</li>
                <li>• Hiring managers can replay important moments and leave aligned feedback.</li>
              </ul>
            </div>

            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                  Recruiter impact
                </p>
                <p className="mt-2 font-medium text-slate-900">Less time on repeat questions.</p>
                <p className="mt-2 text-xs text-slate-600">
                  Ask each candidate the same pre-defined questions once. Review answers in batches
                  with transcripts at your fingertips.
                </p>
              </div>
              <div className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-500">
                  Candidate impact
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  A simple, low-pressure way to respond.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Audio-only interviews work well in low-bandwidth or mobile-first environments,
                  helping more candidates participate.
                </p>
              </div>
              <div className="rounded-2xl bg-[#f7f9ff] p-5 md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">
                  Business impact
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  Consistent signals for every hiring decision.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Structured questions and scoring reduce variability between interviewers, which
                  improves overall fairness and hiring quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            How TransformNXT AI Audio Interviewer works
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 text-sm text-slate-800 md:grid-cols-4">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 1
              </p>
              <p className="mt-2 font-medium">Define your audio interview flows</p>
              <p className="mt-2 text-xs text-slate-600">
                Build question sets for each role: behavioural prompts, skill checks and follow-ups,
                with configurable preparation and answer time.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 2
              </p>
              <p className="mt-2 font-medium">Invite candidates at scale</p>
              <p className="mt-2 text-xs text-slate-600">
                Send invitations via email or integrate with your internal systems to trigger audio
                interviews instantly from existing workflows.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 3
              </p>
              <p className="mt-2 font-medium">AI transcription & analysis</p>
              <p className="mt-2 text-xs text-slate-600">
                The platform converts speech to text, flags key phrases, evaluates tone and
                structure, and attaches everything to the candidate profile.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 4
              </p>
              <p className="mt-2 font-medium">Shortlist & share with stakeholders</p>
              <p className="mt-2 text-xs text-slate-600">
                Recruiters and hiring managers review transcripts and audio clips, score
                consistently, and advance the right candidates to next stages.
              </p>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Audio-native capabilities for smarter screening
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-700">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">High-quality speech-to-text</p>
              <p className="mt-2 text-xs text-slate-600">
                Capture accurate transcripts, even in varied acoustic environments, with punctuation
                and paragraph breaks for easy reading.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Tone & sentiment cues</p>
              <p className="mt-2 text-xs text-slate-600">
                Understand how candidates communicate, not just what they say. See indicators for
                enthusiasm, clarity and confidence.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Multi-language support</p>
              <p className="mt-2 text-xs text-slate-600">
                Support multilingual pipelines with configurable language options, depending on your
                hiring geography and role requirements.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Searchable interview history</p>
              <p className="mt-2 text-xs text-slate-600">
                Quickly find past interviews by keywords, skills, or candidate names, and reuse
                insights for similar roles in the future.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Configurable scoring rubrics</p>
              <p className="mt-2 text-xs text-slate-600">
                Align scoring with your internal competency framework so every reviewer evaluates on
                the same criteria.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Secure, role-based access</p>
              <p className="mt-2 text-xs text-slate-600">
                Manage who can listen, annotate or export interviews with permissions that match
                your hiring and compliance policies.
              </p>
            </div>
          </div>
        </section>

        {/* IMPACT STRIP */}
        <section className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 px-6 py-10 text-slate-50 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold">Impact with TransformNXT audio workflows</h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl">
            TransformNXT customers use audio interviews to create more predictable, repeatable
            screening without adding pressure to candidates or recruiters.
          </p>

          <div className="mt-8 grid gap-6 text-sm md:grid-cols-4">
            <div>
              <p className="text-3xl font-semibold">60%</p>
              <p className="mt-1 text-xs text-slate-300">
                average reduction in time spent on initial conversations.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">3x</p>
              <p className="mt-1 text-xs text-slate-300">
                more interviews completed in the same calendar window.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">90%</p>
              <p className="mt-1 text-xs text-slate-300">
                of hiring managers say transcripts make shortlisting easier.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">24/7</p>
              <p className="mt-1 text-xs text-slate-300">
                candidates can complete interviews from any time zone.
              </p>
            </div>
          </div>
        </section>

        {/* SIMPLE INTEGRATION COPY – NO EXTERNAL NAMES */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Connect with your existing hiring tools
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />
          <p className="mt-4 text-sm text-slate-600 max-w-2xl">
            TransformNXT AI Audio Interviewer can run as a standalone workflow or be connected to
            your applicant tracking and internal systems through secure APIs and webhooks. Trigger
            interviews automatically when candidates reach specific stages and sync results back to
            your single source of truth.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm text-slate-700">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Stage-based triggers</p>
              <p className="mt-2 text-xs text-slate-600">
                Configure when audio interviews should be sent — after application, pre-screen, or
                just before a hiring manager review.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Automated notifications</p>
              <p className="mt-2 text-xs text-slate-600">
                Keep candidates and internal stakeholders informed with updates and reminders that
                match your communication style.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Exportable summaries</p>
              <p className="mt-2 text-xs text-slate-600">
                Download or sync transcripts, scores and notes into your reporting stack for deeper
                analytics and HR metrics.
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
                Here are some common questions about the TransformNXT AI Audio Interviewer. For
                deeper technical or security details, our team is happy to help.
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
                  Do candidates need a high-speed internet connection?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Audio interviews are lighter than video and designed to work reliably on typical
                  mobile and home connections, making them suitable for a wide range of locations.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  Can we use the same templates as our video interviews?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Yes. Many teams start from shared competency templates and then adapt individual
                  questions for audio-specific flows where needed.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  How does TransformNXT handle data privacy for audio files?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Access is controlled by permissions, and retention periods can be aligned with
                  your internal policies. Our team can work with your security and compliance
                  stakeholders during onboarding.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  Is the AI analysis used to make final decisions automatically?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  No. The AI Audio Interviewer provides additional signals, not automated hiring
                  decisions. Recruiters and hiring managers always stay in control of final
                  outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageContainer>
  );
}
