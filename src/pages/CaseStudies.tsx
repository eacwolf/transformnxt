import PageContainer from "../components/PageContainer";

export default function CaseStudies() {
  return (
    <PageContainer>
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16 animate-fade-in-up">

        {/* --------------------- HERO SECTION --------------------- */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-zinc-900 leading-tight">
            TransformNXT Case Studies
          </h1>
          <p className="mt-4 text-lg text-zinc-700 max-w-3xl mx-auto">
            Explore how TransformNXT has helped organizations accelerate digital transformation,
            optimize operations, and deliver measurable business outcomes through AI, automation,
            cloud, and data-driven solutions.
          </p>

          <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-zinc-200">
            <img
              src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&w=1200"
              alt="Case studies overview"
              className="w-full object-cover"
            />
          </div>
        </section>

        {/* --------------------- FEATURED CASE STUDIES --------------------- */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Featured Case Studies
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-zinc-900">
                Retail AI Automation
              </h3>
              <p className="mt-2 text-zinc-700">
                Automated workforce operations and reduced manual work by <strong>40%</strong>.
              </p>

              <img
                src="https://images.pexels.com/photos/5632383/pexels-photo-5632383.jpeg?auto=compress&w=1200"
                className="rounded-lg mt-4"
              />
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-zinc-900">
                Healthcare Cloud Migration
              </h3>
              <p className="mt-2 text-zinc-700">
                Migrated legacy systems to cloud, cutting infrastructure cost by <strong>30%</strong>.
              </p>

              <img
                src="https://images.pexels.com/photos/4386469/pexels-photo-4386469.jpeg?auto=compress&w=1200"
                className="rounded-lg mt-4"
              />
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-zinc-900">
                Enterprise Data Analytics
              </h3>
              <p className="mt-2 text-zinc-700">
                Built a data platform delivering <strong>real-time insights</strong> across all departments.
              </p>

              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=1200"
                className="rounded-lg mt-4"
              />
            </div>
          </div>
        </section>

        {/* --------------------- DEEP DIVE STUDIES --------------------- */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Deep-Dive Engagements
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "AI Workforce Optimization for Manufacturing",
                text: "Improved productivity by using predictive analytics to forecast labor needs and intelligent scheduling.",
                image:
                  "https://images.pexels.com/photos/8467419/pexels-photo-8467419.jpeg?auto=compress&w=1200",
              },
              {
                title: "Automation of HR Operations for Finance Firm",
                text: "Eliminated 70% of manual screening work through AI-powered interview and CV ranking tools.",
                image:
                  "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&w=1200",
              },
              {
                title: "Custom HRMS Deployment for Large Enterprise",
                text: "Designed and deployed an enterprise-grade HRMS platform with secure data governance.",
                image:
                  "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&w=1200",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-2xl border border-zinc-200 shadow-md overflow-hidden"
              >
                <img src={c.image} className="w-full h-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-900">{c.title}</h3>
                  <p className="mt-2 text-zinc-700">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --------------------- IMPACT METRICS --------------------- */}
        <section className="py-10">
          <h2 className="text-2xl font-bold text-zinc-900 text-center">
            Our Impact Across Industries
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center">
            {[
              ["40%", "Avg. Process Efficiency Gain"],
              ["30%", "Infra Cost Saved"],
              ["3x", "Faster Decision Making"],
              ["80%", "Reduction in Manual Work"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-white border border-zinc-200 p-6 rounded-xl shadow-sm"
              >
                <div className="text-3xl font-bold text-zinc-900">{value}</div>
                <p className="mt-1 text-sm text-zinc-600">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --------------------- CTA --------------------- */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            Want to Build Your Own Success Story?
          </h2>
          <p className="mt-2 text-zinc-700 max-w-2xl mx-auto">
            Whether you're modernizing operations, deploying automation, or building AI-driven solutions—
            we can help you transform faster.
          </p>

          <a
            href="/contact"
            className="inline-flex mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Contact Our Team
          </a>
        </section>
      </div>
    </PageContainer>
  );
}
