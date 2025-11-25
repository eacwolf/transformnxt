import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";

const HERO_IMAGE =
  "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200";

export default function HRReportsSaaS() {
  return (
    <PageContainer>
      <main className="bg-[#f7f9ff] text-slate-900">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl bg-white px-6 py-12 shadow-sm md:px-10 md:py-14">
          {/* subtle dots */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-40 -translate-x-10 opacity-40">
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
                TransformNXT · HR Reports as SaaS
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                Always-on HR reporting delivered as a service.
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                TransformNXT HR Reports as SaaS gives you ready-to-use HR dashboards, automated
                updates and executive-grade reporting — without building your own analytics
                platform. Get accurate people insights on-demand, month after month.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium"
                  style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                >
                  Book a reporting demo
                </Link>

                <Link
                  to="/how-it-works/employers"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                >
                  Explore HR solutions
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span>Pre-built HR dashboards</span>
                <span className="h-3 w-px bg-slate-300" />
                <span>Automated monthly updates</span>
                <span className="h-3 w-px bg-slate-300" />
                <span>No in-house BI team required</span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="md:justify-self-end">
              <div className="mx-auto max-w-md rounded-[2rem] bg-slate-50 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100">
                  <img
                    src={HERO_IMAGE}
                    alt="HR analytics dashboard on screen"
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
              HR, talent, finance and business leaders who want reliable HR reporting without
              building or maintaining their own BI stack.
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              What it provides
            </p>
            <p className="mt-2">
              Standardized reports on headcount, attrition, hiring, diversity, engagement and more
              — delivered as a managed service.
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Outcomes
            </p>
            <p className="mt-2">
              Consistent numbers, shared definitions and less time chasing spreadsheets and manual
              presentations.
            </p>
          </div>
        </section>

        {/* WHY SECTION */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                HR reports that don’t depend on one person’s spreadsheet.
              </h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                In many organizations, HR reporting lives in separate spreadsheets and slide decks
                that are hard to maintain and even harder to trust. TransformNXT HR Reports as SaaS
                centralizes your core HR metrics into a managed, always-on reporting service.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                <li>• Align everyone on a single, trusted set of HR metrics.</li>
                <li>• Reduce manual reporting work at the end of every month or quarter.</li>
                <li>• Make HR data easy to consume for leaders and managers.</li>
              </ul>
            </div>

            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                  For HR teams
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  Free up time from manual reporting.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Focus on programs and strategy while TransformNXT keeps your dashboards and core
                  HR reports up to date.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-500">
                  For leadership
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  Consistent HR numbers across reviews.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Make decisions with confidence using standardized definitions and trends, rather
                  than ad-hoc one-off reports.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f9ff] p-5 md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">
                  For finance & operations
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  Link HR reporting to planning and budgets.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Use headcount, cost and hiring trends directly in budgeting and capacity planning,
                  without extra data wrangling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            How TransformNXT HR Reports as SaaS works
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 text-sm text-slate-800 md:grid-cols-4">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 1
              </p>
              <p className="mt-2 font-medium">Connect your HR data</p>
              <p className="mt-2 text-xs text-slate-600">
                Securely connect TransformNXT to your HRIS, ATS and other core people systems —
                plus any CSV exports you rely on today.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 2
              </p>
              <p className="mt-2 font-medium">Standardize metrics & definitions</p>
              <p className="mt-2 text-xs text-slate-600">
                Work with TransformNXT to define how you count headcount, attrition, roles, levels &
                other core concepts — then lock them in.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 3
              </p>
              <p className="mt-2 font-medium">Deploy dashboards & recurring reports</p>
              <p className="mt-2 text-xs text-slate-600">
                Get pre-built HR dashboards and scheduled PDF/CSV/online reports for key audiences
                like HR, leadership and managers.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 4
              </p>
              <p className="mt-2 font-medium">Evolve with your organization</p>
              <p className="mt-2 text-xs text-slate-600">
                Adjust segments, add new metrics and incorporate additional sources as your
                organization grows — without rebuilding everything from scratch.
              </p>
            </div>
          </div>
        </section>

        {/* CORE REPORT PACKS */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Report packs delivered as a managed service
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-700">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Executive HR overview</p>
              <p className="mt-2 text-xs text-slate-600">
                High-level dashboard on headcount, attrition, hiring pipeline, diversity, internal
                movement and engagement, packaged for leadership reviews.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">HR operations pack</p>
              <p className="mt-2 text-xs text-slate-600">
                Detailed views on hires, exits, time-to-fill, offer acceptance, sources of hire and
                recruiter workload for HR and TA teams.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Manager team snapshots</p>
              <p className="mt-2 text-xs text-slate-600">
                Team-level reports for people managers covering span of control, tenure mix,
                attrition, performance & growth indicators.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Diversity & inclusion trends</p>
              <p className="mt-2 text-xs text-slate-600">
                Tracking representation, hiring, promotion and attrition patterns across different
                groups and levels with consistent methodology.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Compensation & headcount views</p>
              <p className="mt-2 text-xs text-slate-600">
                Combine headcount, grade, role and region data with cost metrics to support
                budgeting and workforce planning.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Custom packs by region/function</p>
              <p className="mt-2 text-xs text-slate-600">
                Tailored variations for specific countries, business units or shared services, while
                still using a common core data model.
              </p>
            </div>
          </div>
        </section>

        {/* IMPACT STRIP */}
        <section className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 px-6 py-10 text-slate-50 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold">
            What HR teams gain with HR Reports as SaaS.
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl">
            Instead of trying to build and maintain reporting infrastructure internally, HR teams
            can rely on TransformNXT to deliver clean, consistent reports on a regular cadence.
          </p>

          <div className="mt-8 grid gap-6 text-sm md:grid-cols-4">
            <div>
              <p className="text-3xl font-semibold">50%</p>
              <p className="mt-1 text-xs text-slate-300">
                reduction in time spent preparing monthly or quarterly HR decks.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">2×</p>
              <p className="mt-1 text-xs text-slate-300">
                more HR leaders using live dashboards instead of static slides.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">0</p>
              <p className="mt-1 text-xs text-slate-300">
                dependency on a single “spreadsheet owner” for key reports.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">1</p>
              <p className="mt-1 text-xs text-slate-300">
                shared source of HR truth across the organization.
              </p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Where HR Reports as SaaS fits best
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-700">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Growing organizations</p>
              <p className="mt-2 text-xs text-slate-600">
                When manual HR spreadsheets no longer scale but internal BI resources are limited
                or fully allocated elsewhere.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Multi-region or multi-entity setups</p>
              <p className="mt-2 text-xs text-slate-600">
                Unify reporting across different entities, countries or business lines while
                respecting local structures and requirements.
              </p>
            </div>
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Data-driven HR transformations</p>
              <p className="mt-2 text-xs text-slate-600">
                Provide a strong reporting foundation before adding more advanced analytics,
                surveys or predictive models.
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
                Questions about TransformNXT HR Reports as SaaS? Here are some of the most common
                ones. We can walk through specifics using your context during a demo.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-slate-50"
              >
                Speak with the TransformNXT team
              </Link>
            </div>

            <div className="space-y-5 divide-y divide-slate-200 text-sm text-slate-700">
              <div className="pt-1">
                <p className="font-semibold text-slate-900">
                  Do we still own our HR data?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Yes. Your data remains yours. TransformNXT uses it to generate reports and
                  dashboards, with secure access and clear data-processing agreements.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  How often are reports refreshed?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Refresh cycles can be configured — for example weekly or monthly for most
                  dashboards, with ad-hoc refreshes possible for specific needs.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  Can we customize the visuals and layout?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Yes. There is a standard core set of reports, and on top of that, layouts,
                  filters and views can be adapted to your organization’s preferences.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  How is this different from buying a generic BI tool?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Generic tools require internal teams to design, build and maintain HR reporting.
                  TransformNXT HR Reports as SaaS combines tooling, data modelling and ongoing
                  service, so you get value quickly without staffing a BI squad.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageContainer>
  );
}
