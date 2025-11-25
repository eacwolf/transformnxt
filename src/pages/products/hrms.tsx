import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";

const HERO_IMAGE =
  "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200";

export default function HRMS() {
  return (
    <PageContainer>
      <main className="bg-[#f7f9ff] text-slate-900">

        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl bg-white px-6 py-12 shadow-sm md:px-10 md:py-14">

          {/* dotted background */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-40 -translate-x-10 opacity-40">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(#e2e8ff 1.5px, transparent 1.5px)",
                backgroundSize: "16px 16px",
              }}
            />
          </div>

          <div className="relative grid items-center gap-12 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                TransformNXT · HRMS Platform
              </p>

              <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                All-in-one HRMS for workforce, payroll & employee lifecycle management.
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                TransformNXT HRMS simplifies end-to-end HR operations — onboarding, 
                attendance, payroll, asset allocation, performance management, 
                leave tracking, and compliance — all in one unified system.
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
                  Book HRMS Demo
                </Link>

                <Link
                  to="/how-it-works/employers"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-400"
                >
                  Explore HR Tools
                </Link>
              </div>

              <div className="mt-5 text-xs text-slate-500 flex flex-wrap gap-4">
                <span>Workforce Automation</span>
                <span className="h-3 w-px bg-slate-300" />
                <span>Payroll & Compliance</span>
                <span className="h-3 w-px bg-slate-300" />
                <span>Attendance & Leave</span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="md:justify-self-end">
              <div className="mx-auto max-w-md rounded-[2rem] bg-slate-50 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <img
                  src={HERO_IMAGE}
                  alt="HRMS dashboard illustration"
                  className="rounded-[1.8rem] border border-slate-200 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* QUICK SUMMARY */}
        <section className="mt-10 grid gap-4 rounded-3xl bg-white px-6 py-8 shadow-sm text-xs text-slate-600 md:grid-cols-3 md:px-10">
          <div>
            <p className="uppercase text-[0.7rem] font-semibold tracking-[0.2em] text-slate-500">
              Core Purpose
            </p>
            <p className="mt-2">
              Manage the entire HR lifecycle from onboarding to offboarding 
              through one centralized platform.
            </p>
          </div>

          <div>
            <p className="uppercase text-[0.7rem] font-semibold tracking-[0.2em] text-slate-500">
              What HRMS Solves
            </p>
            <p className="mt-2">
              Eliminates manual HR tasks, prevents data fragmentation and improves 
              compliance, payroll accuracy and employee experience.
            </p>
          </div>

          <div>
            <p className="uppercase text-[0.7rem] font-semibold tracking-[0.2em] text-slate-500">
              Perfect For
            </p>
            <p className="mt-2">
              Companies of all sizes — startups, SMEs, enterprises and distributed 
              teams with hybrid workforces.
            </p>
          </div>
        </section>

        {/* WHY HRMS */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          
          <div className="grid gap-12 md:grid-cols-2">
            
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Transform HR operations with automation & centralized control.
              </h2>
              <div className="mt-3 h-1 w-20 bg-[#2f6fff] rounded-full" />
              
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                TransformNXT HRMS helps HR teams save time, reduce errors and deliver 
                a better employee experience by digitizing routine workflows — payroll, 
                timesheets, performance, onboarding, documents and compliance.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                <li>• Remove manual paperwork and spreadsheets</li>
                <li>• Provide employees with a self-service portal</li>
                <li>• Ensure 100% accurate payroll & attendance data</li>
                <li>• Track performance & goals transparently</li>
                <li>• Maintain compliance and audit-ready records</li>
              </ul>
            </div>

            {/* RIGHT */}
            <div className="grid gap-4 text-sm md:grid-cols-2">
              
              <div className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="text-xs uppercase tracking-[0.18em] font-semibold text-sky-500">
                  HR Teams
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  Reduce repetitive admin work.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Automate approvals, tracking and data entry to focus on strategic work.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="text-xs uppercase tracking-[0.18em] font-semibold text-emerald-500">
                  Employees
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  Self-service HR portal.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Apply for leave, download payslips, update info and track shifts instantly.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f9ff] p-5 md:col-span-2">
                <p className="text-xs uppercase tracking-[0.18em] font-semibold text-indigo-500">
                  Leaders
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  Real-time workforce insights.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Monitor productivity, payroll cost, compliance and performance metrics.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* FEATURES */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">

          <h2 className="text-2xl font-semibold text-slate-900">
            HRMS Modules & Capabilities
          </h2>
          <div className="mt-3 h-1 w-20 bg-[#2f6fff] rounded-full" />

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm">
            
            {[
              {
                title: "Employee Database",
                desc: "Secure, centralized employee records — documents, job history, ID proofs and lifecycle data."
              },
              {
                title: "Payroll Automation",
                desc: "Auto-calculate salary, deductions, tax, overtime and reimbursements with error-free processing."
              },
              {
                title: "Attendance & Timesheets",
                desc: "Biometric, mobile check-in/out, shift tracking, scheduling and timesheet approvals."
              },
              {
                title: "Leave & Holiday Management",
                desc: "Policy-based leave allocation, approvals, carry-forward, encashment and self-service."
              },
              {
                title: "Performance Management",
                desc: "OKRs, KPIs, 360° feedback, appraisal cycles and goal tracking made simple."
              },
              {
                title: "Onboarding & Offboarding",
                desc: "Digital onboarding, checklists, welcome kits, exit process and clearance workflows."
              },
              {
                title: "Asset Management",
                desc: "Allocate laptops, SIM cards, tools or resources and track asset lifecycle."
              },
              {
                title: "Compliance & Documentation",
                desc: "Auto-generate letters, maintain statutory records, and stay audit-ready."
              },
              {
                title: "Employee Self-Service",
                desc: "Payslips, forms, leave, updates, documents — everything employees need in one place."
              },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="font-semibold text-slate-900">{f.title}</p>
                <p className="mt-2 text-xs text-slate-600">{f.desc}</p>
              </div>
            ))}

          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">

          <h2 className="text-2xl font-semibold text-slate-900">
            How TransformNXT HRMS Works
          </h2>
          <div className="mt-3 h-1 w-20 bg-[#2f6fff] rounded-full" />

          <div className="mt-8 grid gap-6 text-sm text-slate-800 md:grid-cols-4">

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs text-sky-600 uppercase font-semibold tracking-[0.18em]">
                Step 1
              </p>
              <p className="mt-2 font-medium">Add or migrate employees</p>
              <p className="mt-2 text-xs text-slate-600">
                Import data, sync with payroll systems or onboard new hires instantly.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs text-sky-600 uppercase font-semibold tracking-[0.18em]">
                Step 2
              </p>
              <p className="mt-2 font-medium">Configure HR policies</p>
              <p className="mt-2 text-xs text-slate-600">
                Define attendance, leave, approval workflows, shift rules and salary structures.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs text-sky-600 uppercase font-semibold tracking-[0.18em]">
                Step 3
              </p>
              <p className="mt-2 font-medium">Automate operations</p>
              <p className="mt-2 text-xs text-slate-600">
                Payroll, attendance, leave, performance and compliance run automatically.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs text-sky-600 uppercase font-semibold tracking-[0.18em]">
                Step 4
              </p>
              <p className="mt-2 font-medium">Analyze & optimize</p>
              <p className="mt-2 text-xs text-slate-600">
                Access dashboards, insights and reports to improve workforce efficiency.
              </p>
            </div>

          </div>
        </section>

        {/* IMPACT */}
        <section className="mt-10 rounded-3xl bg-gradient-to-tr from-slate-900 to-slate-800 px-6 py-10 text-slate-50 shadow-sm md:px-10">

          <h2 className="text-2xl font-semibold">HRMS impact & business value</h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl">
            TransformNXT HRMS significantly reduces operational overhead, improves accuracy 
            and enhances HR productivity across distributed teams.
          </p>

          <div className="mt-8 grid gap-6 text-sm md:grid-cols-4">

            <div>
              <p className="text-3xl font-semibold">75%</p>
              <p className="text-xs text-slate-300 mt-1">
                reduction in HR admin workload.
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold">60%</p>
              <p className="text-xs text-slate-300 mt-1">
                decrease in payroll errors and mismatches.
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold">40%</p>
              <p className="text-xs text-slate-300 mt-1">
                improvement in employee experience metrics.
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold">100%</p>
              <p className="text-xs text-slate-300 mt-1">
                compliance-ready HR operations.
              </p>
            </div>

          </div>
        </section>

        {/* USE CASES */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          
          <h2 className="text-2xl font-semibold text-slate-900">
            Ideal use cases for HRMS
          </h2>
          <div className="mt-3 h-1 w-20 bg-[#2f6fff] rounded-full" />

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-700">

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Growing companies</p>
              <p className="mt-2 text-xs text-slate-600">
                Automate employee and payroll management as your workforce scales.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Hybrid & remote teams</p>
              <p className="mt-2 text-xs text-slate-600">
                Maintain attendance, shifts, documents and compliance across regions.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Enterprises</p>
              <p className="mt-2 text-xs text-slate-600">
                Replace legacy HR tools with modern automation and analytics.
              </p>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10 mb-6">

          <div className="grid gap-10 md:grid-cols-[1.1fr,1.6fr]">

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                HRMS Frequently Asked Questions
              </h2>
              <p className="mt-3 text-sm text-slate-600 max-w-md">
                Explore common questions companies ask before moving to TransformNXT HRMS.
              </p>

              <Link
                to="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-slate-50"
              >
                Talk to TransformNXT
              </Link>
            </div>

            <div className="space-y-6 divide-y divide-slate-200 text-sm text-slate-700">

              <div>
                <p className="font-semibold text-slate-900">Can HRMS integrate with payroll systems?</p>
                <p className="mt-1 text-xs text-slate-600">
                  Yes. It integrates with existing payroll tools or runs payroll natively 
                  inside TransformNXT.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">Does it support biometric attendance?</p>
                <p className="mt-1 text-xs text-slate-600">
                  Yes, alongside GPS, QR, mobile check-in/out and shift-based attendance.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">Can managers track performance?</p>
                <p className="mt-1 text-xs text-slate-600">
                  Performance tracking, OKRs, KPIs, feedback cycles and appraisals are fully supported.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">Is HRMS secure?</p>
                <p className="mt-1 text-xs text-slate-600">
                  All data is encrypted, access-controlled and stored with enterprise-grade security.
                </p>
              </div>

            </div>

          </div>

        </section>

      </main>
    </PageContainer>
  );
}
