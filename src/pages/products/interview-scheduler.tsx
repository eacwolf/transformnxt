import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";

const HERO_IMAGE =
  "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200";


export default function AIInterviewScheduler() {
  return (
    <PageContainer>
      <main className="bg-[#f7f9ff] text-slate-900">

        {/* HERO SECTION */}
        <section className="relative overflow-hidden rounded-3xl bg-white px-6 py-12 shadow-sm md:px-10 md:py-14">
          {/* subtle dotted pattern */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-40 -translate-x-10 opacity-40">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: "radial-gradient(#e3eaff 1.4px, transparent 1.4px)",
                backgroundSize: "16px 16px",
              }}
            />
          </div>

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                TransformNXT · AI Interview Scheduler
              </p>

              <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                Automate interview booking with AI-powered scheduling.
              </h1>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                TransformNXT AI Interview Scheduler automates coordination between candidates and hiring teams.
                No more back-and-forth emails, calendar conflicts, or delayed processes — AI handles time zones,
                availability matching, reminders, and rescheduling seamlessly.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium"
                  style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                >
                  Book a Scheduler Demo
                </Link>

                <Link
                  to="/how-it-works/employers"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-400"
                >
                  Explore Hiring Workflow
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="md:justify-self-end">
              <div className="mx-auto max-w-md rounded-[2rem] bg-slate-50 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.1)]">
                <img
                  src={HERO_IMAGE}
                  alt="TransformNXT AI Interview Scheduler"
                  className="rounded-[1.8rem] border border-slate-200 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* QUICK SUMMARY */}
        <section className="mt-10 grid gap-4 rounded-3xl bg-white px-6 py-8 text-xs text-slate-600 shadow-sm md:grid-cols-3 md:px-10">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Purpose
            </p>
            <p className="mt-2">Automate interview booking based on shared availability and hiring rules.</p>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Core Strength
            </p>
            <p className="mt-2">Zero manual coordination and instant calendar sync across global teams.</p>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Impact
            </p>
            <p className="mt-2">Faster interviews, fewer drop-offs, and improved hiring experience.</p>
          </div>
        </section>

        {/* WHY TRANSFORMNXT SCHEDULER */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Let AI handle scheduling — precision, speed and zero conflict.
              </h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Manual interview coordination wastes time and delays hiring decisions.
                TransformNXT AI scheduler automatically finds matching time slots, books interviews,
                sends reminders, and handles cancellations with no human effort required.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                <li>• Detects availability conflicts & suggests alternatives instantly.</li>
                <li>• Sends automated reminders and follow-ups to reduce no-shows.</li>
                <li>• Syncs with Google, Outlook, Teams & internal calendars.</li>
                <li>• Supports multi-panel, multi-round & sequential interviews.</li>
              </ul>
            </div>

            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="text-xs uppercase font-semibold tracking-[0.18em] text-indigo-500">Recruiters</p>
                <p className="mt-2 font-medium text-slate-900">Reduce admin burden</p>
                <p className="mt-2 text-xs text-slate-600">
                  Free your team from manual emailing and back-and-forth coordination.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="text-xs uppercase font-semibold tracking-[0.18em] text-emerald-500">Candidates</p>
                <p className="mt-2 font-medium text-slate-900">Self-serve booking</p>
                <p className="mt-2 text-xs text-slate-600">
                  Let candidates pick a time that suits them — improving experience and reducing drop-offs.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f9ff] p-5 md:col-span-2">
                <p className="text-xs uppercase font-semibold tracking-[0.18em] text-sky-500">
                  Hiring Managers
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  No scheduling conflicts again
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  AI considers meeting blocks, working hours, time zones & workload.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">How AI scheduling works</h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 md:grid-cols-4 text-sm text-slate-800">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs text-sky-600 font-semibold uppercase tracking-[0.18em]">Step 1</p>
              <p className="mt-2 font-medium">Define scheduling rules</p>
              <p className="mt-2 text-xs text-slate-600">
                Working hours, time zone matching, panel rules, buffer times and interview duration.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs text-sky-600 font-semibold uppercase tracking-[0.18em]">Step 2</p>
              <p className="mt-2 font-medium">AI checks all calendars</p>
              <p className="mt-2 text-xs text-slate-600">
                Pulls availability from recruiter & panel calendars securely.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs text-sky-600 font-semibold uppercase tracking-[0.18em]">Step 3</p>
              <p className="mt-2 font-medium">Candidate selects a slot</p>
              <p className="mt-2 text-xs text-slate-600">
                Candidate receives a self-booking link and picks from available options.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs text-sky-600 font-semibold uppercase tracking-[0.18em]">Step 4</p>
              <p className="mt-2 font-medium">AI confirms & sends reminders</p>
              <p className="mt-2 text-xs text-slate-600">
                Auto-emails, SMS updates, calendar invites and rescheduling options are sent.
              </p>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Powerful scheduling capabilities built for hiring
          </h2>
          <div className="mt-3 h-1 w-20 bg-[#2f6fff] rounded-full" />

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm">
            {[
              {
                title: "Smart multi-panel scheduling",
                desc: "AI identifies overlapping availability for multiple interviewers instantly."
              },
              {
                title: "Time-zone intelligence",
                desc: "Automatically adjusts for global candidates & hiring teams without confusion."
              },
              {
                title: "Auto-reminders & follow-ups",
                desc: "Reduce no-shows with timely email & SMS reminders."
              },
              {
                title: "Calendar sync",
                desc: "Works with Google Calendar, Outlook, Teams & custom work calendars."
              },
              {
                title: "Sequential interviewing",
                desc: "Schedule Round 1 → Round 2 → Final Panel in a single unified workflow."
              },
              {
                title: "Candidate self-rescheduling",
                desc: "Candidates can reschedule without emailing recruiters manually."
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-xs text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IMPACT SECTION */}
        <section className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-10 text-slate-50 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold">Measurable scheduling impact</h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl">
            AI removes friction, delays and human errors — making your hiring faster & smoother.
          </p>

          <div className="mt-8 grid gap-6 text-sm md:grid-cols-4">
            <div>
              <p className="text-3xl font-semibold">85%</p>
              <p className="text-xs text-slate-300">Reduction in manual coordination time</p>
            </div>

            <div>
              <p className="text-3xl font-semibold">40%</p>
              <p className="text-xs text-slate-300">Faster time-to-interview</p>
            </div>

            <div>
              <p className="text-3xl font-semibold">60%</p>
              <p className="text-xs text-slate-300">Decrease in no-show rates</p>
            </div>

            <div>
              <p className="text-3xl font-semibold">24/7</p>
              <p className="text-xs text-slate-300">Scheduling works even when your team is offline</p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">Best use cases</h2>
          <div className="mt-3 h-1 w-20 bg-[#2f6fff] rounded-full" />

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-700">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">High-volume hiring</p>
              <p className="mt-2 text-xs text-slate-600">Automate bulk scheduling for large applicant pools.</p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Multi-round interviews</p>
              <p className="mt-2 text-xs text-slate-600">Coordinate connected interview rounds instantly.</p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Executive or panel roles</p>
              <p className="mt-2 text-xs text-slate-600">Find the perfect overlapping slot for busy leaders.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10 mb-6">
          <div className="grid gap-10 md:grid-cols-[1fr,1.5fr]">

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
              <p className="mt-3 text-sm text-slate-600">
                Everything you need to know about TransformNXT AI Interview Scheduler.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-slate-100"
              >
                Talk to our team
              </Link>
            </div>

            <div className="space-y-6 divide-y divide-slate-200 text-sm">
              <div>
                <p className="font-semibold text-slate-900">Does it work globally?</p>
                <p className="mt-1 text-xs text-slate-600">Yes. It auto-adjusts across all time zones.</p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">Can candidates reschedule?</p>
                <p className="mt-1 text-xs text-slate-600">
                  Candidates can reschedule anytime through a secure self-service link.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">Does it integrate with calendars?</p>
                <p className="mt-1 text-xs text-slate-600">
                  Yes — Google Calendar, Outlook, Microsoft Teams & internal systems.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">Can it schedule multi-panel interviews?</p>
                <p className="mt-1 text-xs text-slate-600">
                  Yes. AI finds overlapping availability for multiple interviewers.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
    </PageContainer>
  );
}
