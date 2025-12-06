import PageContainer from "../components/PageContainer";

export default function About() {
  return (
    <PageContainer>
      <main className="space-y-28">

        {/* HERO */}
        <section className="relative text-center py-20">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-transparent opacity-60 pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6">
            <span className="text-xs tracking-[0.25em] uppercase font-semibold text-sky-600">
              About TransformNXT
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Building the Future of Automated & Intelligent Hiring
            </h1>

            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              TransformNXT blends AI, automation, and deep domain expertise to help
              organizations hire faster, evaluate smarter, and scale confidently — without
              compromising on quality, fairness, or human experience.
            </p>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">
              Our mission
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We exist to remove friction from hiring — eliminating repetitive tasks while
              empowering teams with data-backed insights and automation. Our solutions enable HR
              leaders, recruiters, and organizations to focus on what matters: people, potential,
              and growth.
            </p>

            <p className="text-slate-700 leading-relaxed">
              With our AI-first platform, every step of the recruitment journey becomes
              efficient, structured, and scalable.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
            {/* image overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-transparent" />
          </div>
        </section>

        {/* OUR VALUES */}
        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-slate-900 text-center mb-12">
            What drives us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                body:
                  "We create intelligent, future-ready tools that transform hiring and workforce operations.",
                icon: "⚡"
              },
              {
                title: "Transparency",
                body:
                  "We build systems that ensure fair, structured and data-backed evaluations for every candidate.",
                icon: "🔍"
              },
              {
                title: "Scalability",
                body:
                  "Our solutions adapt to your hiring volume — whether you screen 50 or 50,000 candidates.",
                icon: "🚀"
              }
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Our story</h2>
          <p className="text-slate-700 leading-relaxed">
            TransformNXT began as a small team focused on simplifying the most painful parts of
            hiring. As recruitment teams struggled with coordination, screening, and consistency,
            we saw an opportunity to use AI to reshape the foundations of modern talent
            workflows.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Today, our platform powers universities, enterprises, staffing firms, and training
            institutes across the globe — helping them automate interviews, evaluate talent, and
            predict outcomes with unprecedented accuracy.
          </p>
        </section>

        {/* PRODUCT GRID */}
        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-slate-900 text-center mb-12">
            What we build
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Interview Automation",
                text:
                  "Asynchronous, audio, and video interviews with automated scoring, transcripts and insights."
              },
              {
                title: "Predictive Talent Analytics",
                text:
                  "Forecast performance, identify top candidates and make better hiring decisions with AI."
              },
              {
                title: "Workflow & Scheduling Automation",
                text:
                  "Automate interview scheduling, reminders, coordination, and screening cycles."
              },
              {
                title: "Custom HR Platforms",
                text:
                  "ATS, HRMS, CV ranking engines and enterprise-scale recruitment systems built for your needs."
              }
            ].map((p) => (
              <div
                key={p.title}
                className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-slate-700 leading-relaxed text-sm">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">
            How we work
          </h2>
          <p className="text-slate-700 leading-relaxed">
            We follow a collaborative, transparent, and outcome-driven approach. From discovery
            to rollout, our teams partner closely with yours to ensure the solution fits your
            technical, operational, and business goals — not just today, but as you scale.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center py-20">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            Want to learn more about TransformNXT?
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto mb-6">
            Whether you're exploring automation, upgrading your hiring process or planning a
            digital transformation — we’d love to talk.
          </p>

          <a
            href="/contact"
            className="inline-flex px-8 py-3 rounded-full text-sm font-medium shadow-md bg-sky-600 text-white hover:bg-sky-700 transition-all"
          >
            Contact us
          </a>
        </section>
      </main>
    </PageContainer>
  );
}
