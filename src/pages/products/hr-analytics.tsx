import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";

const HERO_IMAGE =
  "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1200";

export default function HRPredictiveAnalytics() {
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
                TransformNXT · HR Data Driven – Predictive Analytics
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                Turn HR data into predictive insights for smarter workforce decisions.
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                TransformNXT HR Data Driven – Predictive Analytics helps HR and business leaders
                move from reactive reporting to proactive workforce planning. Anticipate attrition,
                hiring needs, skill gaps and performance trends using your existing people data.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium"
                  style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                >
                  Book a Predictive Analytics Demo
                </Link>

                <Link
                  to="/how-it-works/employers"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                >
                  Explore HR Use Cases
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span>Forecast hiring needs</span>
                <span className="h-3 w-px bg-slate-300" />
                <span>Identify retention risks early</span>
                <span className="h-3 w-px bg-slate-300" />
                <span>Align workforce with business goals</span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="md:justify-self-end">
              <div className="mx-auto max-w-md rounded-[2rem] bg-slate-50 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100">
                  <img
                    src={HERO_IMAGE}
                    alt="HR team reviewing predictive analytics dashboard"
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
              HR leaders, people analytics teams and business stakeholders who want data-backed workforce decisions.
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              What it does
            </p>
            <p className="mt-2">
              Aggregates HR data, applies predictive models and surfaces insights on attrition, hiring, skills and performance.
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Outcomes
            </p>
            <p className="mt-2">
              Fewer surprises, better planning, and a more resilient, data-driven people strategy.
            </p>
          </div>
        </section>

        {/* WHY SECTION */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Move from backward-looking HR reports to forward-looking decisions.
              </h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Most HR teams rely on monthly reports that explain what already happened: attrition,
                time-to-fill, engagement scores. TransformNXT Predictive Analytics helps you see what
                is likely to happen next — so you can act before challenges become problems.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                <li>• Identify roles and teams with higher predicted attrition risk.</li>
                <li>• Forecast hiring demand based on growth and internal movements.</li>
                <li>• Spot emerging skill gaps before they impact delivery.</li>
              </ul>
            </div>

            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                  For HR & People Teams
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  Answer “why” and “what next”, not just “what happened”.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Combine data from multiple HR systems into clear, explainable insights that inform policy,
                  programs and headcount decisions.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-500">
                  For Business Leaders
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  Align talent plans with business strategy.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Understand which teams have capacity, where risk is building and where investment in talent is most urgent.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f9ff] p-5 md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">
                  For Finance & Operations
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  Bring headcount, cost and productivity into one picture.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Support forecasting, budgeting and workforce optimization with reliable, HR-driven predictions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            How TransformNXT HR Predictive Analytics works
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 text-sm text-slate-800 md:grid-cols-4">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 1
              </p>
              <p className="mt-2 font-medium">Connect HR data sources</p>
              <p className="mt-2 text-xs text-slate-600">
                Bring in data from HRIS, ATS, engagement tools, performance systems and spreadsheets
                into a secure, unified model.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 2
              </p>
              <p className="mt-2 font-medium">Clean, normalize & enrich</p>
              <p className="mt-2 text-xs text-slate-600">
                Standardize job families, levels, locations, tenure and other attributes to ensure
                consistent, comparable data across the organization.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 3
              </p>
              <p className="mt-2 font-medium">Apply predictive models</p>
              <p className="mt-2 text-xs text-slate-600">
                Use machine learning to predict attrition, hiring demand, internal movement and
                capacity based on historical and real-time patterns.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                Step 4
              </p>
              <p className="mt-2 font-medium">Deliver insights & scenarios</p>
              <p className="mt-2 text-xs text-slate-600">
                Surface insights via dashboards, reports and “what-if” scenarios that HR and
                leadership can use in planning cycles.
              </p>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Predictive capabilities across the employee lifecycle
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-700">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Attrition & retention risk</p>
              <p className="mt-2 text-xs text-slate-600">
                Identify teams, roles or segments with higher probability of attrition so you can
                intervene sooner with targeted actions.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Hiring demand forecasting</p>
              <p className="mt-2 text-xs text-slate-600">
                Forecast hiring needs based on trends in growth, churn, promotions and planned
                initiatives across departments or geographies.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Skill gap visibility</p>
              <p className="mt-2 text-xs text-slate-600">
                Map current skill inventory against strategic priorities and highlight where you
                need to hire, train or redeploy talent.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Headcount & capacity planning</p>
              <p className="mt-2 text-xs text-slate-600">
                Align capacity with demand by understanding where you have surplus, constraints and
                upcoming needs across teams and functions.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Diversity & inclusion trends</p>
              <p className="mt-2 text-xs text-slate-600">
                Track representation, mobility and retention of different groups with trendlines and
                scenario-based projections.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Performance & potential signals</p>
              <p className="mt-2 text-xs text-slate-600">
                Combine performance, tenure and role data to identify talent at risk of leaving or
                ready for advancement.
              </p>
            </div>
          </div>
        </section>

        {/* IMPACT STRIP */}
        <section className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 px-6 py-10 text-slate-50 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold">
            What HR teams achieve with TransformNXT Predictive Analytics.
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl">
            When HR decisions are driven by predictive insights instead of intuition alone, you
            unlock a more stable, strategic and future-ready workforce.
          </p>

          <div className="mt-8 grid gap-6 text-sm md:grid-cols-4">
            <div>
              <p className="text-3xl font-semibold">30%</p>
              <p className="mt-1 text-xs text-slate-300">
                reduction in regretted attrition in targeted segments.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">25%</p>
              <p className="mt-1 text-xs text-slate-300">
                faster response to emerging hiring and capacity gaps.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">3×</p>
              <p className="mt-1 text-xs text-slate-300">
                more HR initiatives backed by measurable projections.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">1</p>
              <p className="mt-1 text-xs text-slate-300">
                single, trusted view of workforce health and risk.
              </p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            Use cases across HR and business teams
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-700">
            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Strategic workforce planning</p>
              <p className="mt-2 text-xs text-slate-600">
                Use predictive data during annual planning and quarterly reviews to align headcount
                and skills with business priorities.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Retention programs & interventions</p>
              <p className="mt-2 text-xs text-slate-600">
                Design targeted retention initiatives for roles and populations where risk is rising
                instead of generic, one-size-fits-all programs.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Talent & leadership pipelines</p>
              <p className="mt-2 text-xs text-slate-600">
                Identify critical roles and successors early, then track readiness and risk over time
                with predictive indicators.
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
                Here are some common questions about TransformNXT HR Data Driven – Predictive
                Analytics. Our team can walk you through real examples using your data.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-slate-50"
              >
                Talk to the TransformNXT team
              </Link>
            </div>

            <div className="space-y-5 divide-y divide-slate-200 text-sm text-slate-700">
              <div className="pt-1">
                <p className="font-semibold text-slate-900">
                  Do we need a data science team to use this?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  No. TransformNXT handles the modelling and setup. HR and business users interact
                  with dashboards, scenarios and guided insights, not raw models.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  Which HR systems can this connect to?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  The platform can connect to common HRIS, ATS, performance and engagement tools,
                  as well as exports and custom data sources via secure pipelines or APIs.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  How do you ensure predictions are explainable?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Each predictive model includes contributing factors and trend explanations, so HR
                  can see why a risk or forecast is flagged, not just the score itself.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  Is this suitable for smaller organizations too?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Yes. Even with fewer employees, looking ahead on attrition, hiring and skills can
                  significantly improve planning and reduce surprises. The setup can scale with your
                  growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageContainer>
  );
}
