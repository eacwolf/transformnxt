import { Link } from 'react-router-dom';

const CAMPUS_IMAGE =
  'https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function Universities() {
  return (
    <main className="bg-[#f7f9ff] text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 -translate-x-10 md:w-52">
          <div
            className="h-full w-full opacity-40"
            style={{
              backgroundImage: 'radial-gradient(#e0e7ff 1.5px, transparent 1.5px)',
              backgroundSize: '16px 16px',
            }}
          />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-500">
              For Universities &amp; Colleges
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-[2.4rem]">
              Prepare students for real hiring conversations.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
              Build a structured interview lab on your campus. Use AI-assisted video interviews to
              assess job readiness, coach students, and give employers a clearer view of your
              graduates.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium"
                style={{
                  background: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                }}
              >
                Talk to our team
              </Link>

              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
                style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
              >
                Login
              </Link>
            </div>

            <p className="mt-5 text-xs text-slate-500">
              Designed for career centers, placement cells, and employability programs.
            </p>
          </div>

          <div className="relative z-10">
            <div className="relative mx-auto max-w-md rounded-[2.2rem] bg-slate-50 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
              <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100">
                <img
                  src={CAMPUS_IMAGE}
                  alt="Students preparing for interviews on campus"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 right-6 hidden w-40 rounded-2xl border border-slate-200 bg-white p-3 text-[0.7rem] text-slate-700 shadow-md sm:block">
                <p className="font-semibold text-slate-900">Cohort readiness</p>
                <div className="mt-2 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span>Communication</span>
                    <span className="font-semibold">84%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Problem solving</span>
                    <span className="font-semibold">79%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Job fit</span>
                    <span className="font-semibold">82%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blue panel */}
      <section className="bg-[#f7f9ff] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-[2.2rem] bg-[#2f6fff] px-6 py-10 text-white md:flex md:items-center md:gap-10 md:px-10">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold leading-snug sm:text-[1.7rem]">
                Start with small steps across one program.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-blue-50/90">
                Pilot structured video interviews in a single department, course, or batch of
                graduating students. Use the results to refine rubrics and build confidence before
                scaling across campus.
              </p>
              <p className="mt-3 text-xs text-blue-100/90">
                Career services teams keep full control of question banks, evaluation criteria, and
                reports.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2f6fff] shadow-sm hover:bg-blue-50"
              >
                Schedule a campus demo
              </Link>
            </div>

            <div className="mt-8 grid flex-1 gap-4 text-xs md:mt-0 md:grid-cols-2">
              <div className="rounded-2xl bg-blue-500/20 p-4">
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-blue-100">
                  For students
                </p>
                <p className="mt-2 text-blue-50">
                  Practise mock interviews anytime, get structured feedback, and build a shareable
                  profile for recruiters.
                </p>
              </div>
              <div className="rounded-2xl bg-blue-500/20 p-4">
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-blue-100">
                  For faculty
                </p>
                <p className="mt-2 text-blue-50">
                  Align interview tasks with course outcomes and map them directly to industry roles
                  and skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-slate-100 bg-white py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-[2rem]">
              Build an interview lab on campus.
            </h2>
            <div className="mt-3 h-1 w-24 rounded-full bg-[#2f6fff]" />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Bring together students, faculty, and employers around one shared definition of career
              readiness. Curate question templates by role, assess communication and problem-solving
              skills, and track progress for every cohort.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Use flexible interview flows for internships, final placements, alumni mentorship
              programs, or corporate partnerships.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 hover:border-slate-400"
            >
              Talk about integrations
            </Link>
          </div>

          <div>
            <ol className="space-y-4 text-sm text-slate-800">
              <li className="flex gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-[#2f6fff] ring-4 ring-blue-100" />
                <div>
                  <h3 className="font-semibold">Design competency-based templates</h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Collaborate with faculty and industry advisors to define the communication,
                    analytical, and technical skills you want to measure.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-sky-400 ring-4 ring-sky-100" />
                <div>
                  <h3 className="font-semibold">Invite students to practise</h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Students record responses on their own time, using laptops or mobiles, with
                    multiple chances to rehearse before final submission.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-emerald-100" />
                <div>
                  <h3 className="font-semibold">Review and coach</h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Career coaches and faculty leave time-stamped comments, assign scores, and share
                    examples of strong answers with the cohort.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-amber-400 ring-4 ring-amber-100" />
                <div>
                  <h3 className="font-semibold">Share with employers</h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Generate verified readiness reports and share candidate profiles with partner
                    employers to accelerate campus hiring.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* How it helps institutions */}
      <section className="bg-[#f7f9ff] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-semibold text-slate-900">
            How it helps institutions
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#2f6fff]" />
          <p className="mt-4 text-center text-sm text-slate-600">
            Turn employability into something you can measure, coach, and communicate.
          </p>

          <ul className="mt-8 grid gap-6 text-sm text-slate-700 md:grid-cols-2">
            <li className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Measurable student employability
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Track progress across cohorts with standardized rubrics and simple readiness scores
                for every student.
              </p>
            </li>
            <li className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Scalable placement support
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Support hundreds of students with async interviews and centralized review, without
                adding extra admin load.
              </p>
            </li>
            <li className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Stronger industry partnerships
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Give employers deeper insight into your talent pipeline and create more recurring
                hiring opportunities.
              </p>
            </li>
            <li className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Clear outcomes for accreditation
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Use aggregated reports and skill trends as evidence for accreditation bodies and
                institutional reviews.
              </p>
            </li>
          </ul>

          <p className="mt-8 text-center text-xs text-slate-600">
            Interested in campus pilots or integrations?{' '}
            <Link to="/contact" className="font-medium text-[#2f6fff] hover:underline">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
