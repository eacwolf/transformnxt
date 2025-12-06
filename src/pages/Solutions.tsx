import PageContainer from "../components/PageContainer";
import { Link } from "react-router-dom";

export default function Solutions() {
  return (
    <PageContainer>
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 items-center">
        
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-blue-600">
            Solutions
          </p>

          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
            Modern AI-powered Solutions for Hiring, HR & Workforce Intelligence
          </h1>

          <p className="mt-4 text-zinc-700 text-lg">
            TransformNXT brings together interviewing, analytics, automation, and 
            talent intelligence—helping HR teams move faster, hire smarter, and 
            operate with confidence at scale.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium"
            >
              Talk to Solutions Team
            </Link>

            <Link
              to="/products/ai-video-interviewer"
              className="px-6 py-3 rounded-md border border-blue-600 text-blue-600 font-medium"
            >
              View Products
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-200">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="HR Solutions"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* SECTION – What Solutions Cover */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">
          A Connected Suite of Intelligent HR Solutions
        </h2>

        <p className="mt-3 text-zinc-700 max-w-2xl">
          From screening to analytics, TransformNXT empowers HR teams with 
          high-performance tools that reduce effort, enhance accuracy, and 
          create predictable outcomes.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "AI Video Assessment",
              desc: "Evaluate candidates using on-demand video interviews with AI-driven insights.",
            },
            {
              title: "AI Audio Assessment",
              desc: "Voice analysis, sentiment scoring, and speech intelligence for hiring.",
            },
            {
              title: "Interview Scheduling",
              desc: "Automated scheduling with reminders, timezone intelligence, and calendar sync.",
            },
            {
              title: "ATS + Resume Ranking",
              desc: "Automatically rank candidates, shortlist high-fit profiles, and remove bias.",
            },
            {
              title: "Predictive HR Analytics",
              desc: "Forecast hiring success, performance potential, and workforce movement.",
            },
            {
              title: "HR Reporting & Insights",
              desc: "Generate actionable reports for leadership, compliance, and planning.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="text-zinc-700 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION – Workflow */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">
          How TransformNXT Solutions Fit Into Your Workflow
        </h2>

        <p className="mt-3 text-zinc-700 max-w-2xl">
          Every module is designed to integrate seamlessly—no matter your 
          industries, team size, or hiring volume.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Screen",
              desc: "AI-powered interviews & resume ranking create the first shortlist.",
            },
            {
              step: "02",
              title: "Evaluate",
              desc: "Structured scoring, competency insights, and job-fit indicators.",
            },
            {
              step: "03",
              title: "Schedule",
              desc: "Automated coordination, reminders & interviewer workflows.",
            },
            {
              step: "04",
              title: "Decide",
              desc: "Predictive analytics & insights support final hiring decisions.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm"
            >
              <div className="text-3xl font-bold text-blue-600">
                {item.step}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION – Industries we support */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">
          Trusted Across Multiple Industries
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            "Staffing Agencies",
            "Corporate Hiring Teams",
            "Universities & Colleges",
            "Training Institutes",
            "BPOs & Operations Teams",
            "IT & Technology Companies",
          ].map((sector, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-zinc-200 shadow-sm"
            >
              <h3 className="font-semibold text-zinc-900">{sector}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION – Security */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">
          Enterprise-Grade Security
        </h2>
        <p className="mt-3 text-zinc-700 max-w-2xl">
          With RBAC, encrypted data flow, audit logs, and controlled access, 
          TransformNXT ensures your infrastructure stays secure and compliant.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">
          Ready to explore the right solution for your team?
        </h2>

        <p className="text-zinc-700 mt-3 max-w-xl mx-auto">
          Our experts will help you tailor the TransformNXT suite to match 
          your organisation’s goals.
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-flex px-8 py-3 rounded-md bg-blue-600 text-white text-lg font-medium"
        >
          Contact Us
        </Link>
      </section>
    </PageContainer>
  );
}
