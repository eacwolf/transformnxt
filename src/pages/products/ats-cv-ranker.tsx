import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";

const HERO_IMAGE =
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200";

export default function ATSCVRanker() {
  return (
    <PageContainer>
      <main className="bg-[#f7f9ff] text-slate-900">
        
        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl bg-white px-6 py-12 shadow-sm md:px-10 md:py-14">
          
          {/* subtle dot pattern */}
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
                TransformNXT · ATS with CV Ranker
              </p>

              <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                Modern ATS with AI-powered CV ranking and instant candidate scoring.
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                TransformNXT ATS with CV Ranker uses AI to evaluate resumes,
                match skills, predict candidate fit and automatically rank talent
                — helping recruiters shortlist the strongest profiles in seconds.
                Reduce manual screening and increase hiring accuracy across the 
                entire recruitment journey.
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
                  Book ATS Demo
                </Link>

                <Link
                  to="/how-it-works/employers"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-400"
                >
                  Explore Hiring Workflows
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span>AI Resume Scoring</span>
                <span className="h-3 w-px bg-slate-300" />
                <span>Job & Skill Match %</span>
                <span className="h-3 w-px bg-slate-300" />
                <span>Automated Shortlists</span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="md:justify-self-end">
              <div className="mx-auto max-w-md rounded-[2rem] bg-slate-50 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <div className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100">
                  <img
                    src={HERO_IMAGE}
                    alt="ATS interface with CV ranking dashboard"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* QUICK SUMMARY STRIP */}
        <section className="mt-10 grid gap-4 rounded-3xl bg-white px-6 py-8 shadow-sm text-xs text-slate-600 md:grid-cols-3 md:px-10">
          <div>
            <p className="uppercase text-[0.7rem] font-semibold tracking-[0.2em] text-slate-500">
              Built for
            </p>
            <p className="mt-2">
              Talent teams, staffing agencies and fast-growing companies hiring 
              at scale with limited screening bandwidth.
            </p>
          </div>

          <div>
            <p className="uppercase text-[0.7rem] font-semibold tracking-[0.2em] text-slate-500">
              What it does
            </p>
            <p className="mt-2">
              Scores, ranks and groups resumes automatically using AI-based 
              keyword, skill, experience, job fit and contextual matching.
            </p>
          </div>

          <div>
            <p className="uppercase text-[0.7rem] font-semibold tracking-[0.2em] text-slate-500">
              Outcomes
            </p>
            <p className="mt-2">
              Faster shortlists, better accuracy in screening, reduced manual 
              review and improved hiring outcomes.
            </p>
          </div>
        </section>

        {/* WHY SECTION */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">

          <div className="grid gap-12 md:grid-cols-2">
            
            {/* LEFT */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Stop manually screening hundreds of resumes.
              </h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Traditional resume screening is slow and inconsistent. 
                TransformNXT ATS with CV Ranker analyzes each CV using 
                machine learning and skill-matching algorithms to surface 
                the most relevant candidates instantly.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                <li>• AI-based scoring for every uploaded resume</li>
                <li>• Automated ranking based on job description fit</li>
                <li>• Identify hidden talent with contextual skill mapping</li>
              </ul>
            </div>

            {/* RIGHT GRID */}
            <div className="grid gap-4 text-sm md:grid-cols-2">

              <div className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="text-xs uppercase font-semibold tracking-[0.18em] text-sky-500">
                  For Recruiters
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  Shortlist in seconds.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Reduce time spent on initial screening by up to 80% using AI-generated top lists 
                  and role-fit scores.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f9ff] p-5">
                <p className="text-xs uppercase font-semibold tracking-[0.18em] text-emerald-500">
                  For Hiring Managers
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  Clear candidate insights.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  View structured profiles, experience summaries, skill match breakdowns and 
                  ranking rationale.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f9ff] p-5 md:col-span-2">
                <p className="text-xs uppercase font-semibold tracking-[0.18em] text-indigo-500">
                  For Talent Leaders
                </p>
                <p className="mt-2 font-medium text-slate-900">
                  Better screening quality at scale.
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Ensure every hiring team follows consistent, bias-minimized evaluation using 
                  structured scoring models.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          <h2 className="text-2xl font-semibold text-slate-900">
            How ATS with CV Ranker works
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 text-sm text-slate-800 md:grid-cols-4">

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs uppercase tracking-[0.18em] font-semibold text-sky-500">
                Step 1
              </p>
              <p className="mt-2 font-medium">Upload resumes or sync from ATS</p>
              <p className="mt-2 text-xs text-slate-600">
                Import resumes individually or in bulk. Integrates with existing ATS pipelines for 
                automated ingestion.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs uppercase tracking-[0.18em] font-semibold text-sky-500">
                Step 2
              </p>
              <p className="mt-2 font-medium">AI parses & analyzes each CV</p>
              <p className="mt-2 text-xs text-slate-600">
                Extracts skills, job history, projects, achievements, education and context using 
                NLP & ML models.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs uppercase tracking-[0.18em] font-semibold text-sky-500">
                Step 3
              </p>
              <p className="mt-2 font-medium">Rank candidates by job fit</p>
              <p className="mt-2 text-xs text-slate-600">
                Candidates are scored and ranked based on skill match %, seniority, experience, 
                role relevance and keywords.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="text-xs uppercase tracking-[0.18em] font-semibold text-sky-500">
                Step 4
              </p>
              <p className="mt-2 font-medium">Shortlist & share instantly</p>
              <p className="mt-2 text-xs text-slate-600">
                Recruiters and managers get clean shortlists with AI insights, recommended profiles 
                and red flags.
              </p>
            </div>

          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">

          <h2 className="text-2xl font-semibold text-slate-900">
            Key capabilities of TransformNXT CV Ranker
          </h2>
          <div className="mt-3 h-1 w-20 bg-[#2f6fff] rounded-full" />

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-700">

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">AI Resume Parsing</p>
              <p className="mt-2 text-xs text-slate-600">
                Extract skills, experience, education, certifications, tools and achievements 
                accurately from any resume format.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Skill & Keyword Matching</p>
              <p className="mt-2 text-xs text-slate-600">
                Match resumes with job descriptions using semantic and contextual matching, not 
                just keyword search.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Candidate Fit Scoring</p>
              <p className="mt-2 text-xs text-slate-600">
                Score candidates on skill relevance, experience alignment, seniority & 
                role-specific competencies.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Automated Shortlists</p>
              <p className="mt-2 text-xs text-slate-600">
                Instantly generate top 5/10/20 candidates with detailed match justifications.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Duplicate Detection</p>
              <p className="mt-2 text-xs text-slate-600">
                Identify duplicate resumes and merge or remove them intelligently to avoid clutter.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Bias Minimization</p>
              <p className="mt-2 text-xs text-slate-600">
                Reduce unconscious bias by focusing on skills and experience over demographic 
                indicators.
              </p>
            </div>

          </div>

        </section>

        {/* IMPACT STRIP */}
        <section className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-10 text-slate-50 shadow-sm md:px-10">

          <h2 className="text-2xl font-semibold">
            What teams achieve with TransformNXT ATS + CV Ranker.
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl">
            AI-assisted resume ranking enables faster shortlisting, better-quality 
            candidate pipelines and more consistent hiring decisions.
          </p>

          <div className="mt-8 grid gap-6 text-sm md:grid-cols-4">

            <div>
              <p className="text-3xl font-semibold">80%</p>
              <p className="mt-1 text-xs text-slate-300">
                reduction in screening time for large applicant pools.
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold">2×</p>
              <p className="mt-1 text-xs text-slate-300">
                better alignment between recruiters & hiring managers.
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold">40%</p>
              <p className="mt-1 text-xs text-slate-300">
                improvement in candidate-job match accuracy.
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold">100%</p>
              <p className="mt-1 text-xs text-slate-300">
                structured, consistent screening across roles.
              </p>
            </div>

          </div>

        </section>

        {/* USE CASES */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10">
          
          <h2 className="text-2xl font-semibold text-slate-900">
            Use cases for ATS with CV Ranker
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#2f6fff]" />

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-700">

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">High-volume hiring</p>
              <p className="mt-2 text-xs text-slate-600">
                Ideal for roles receiving hundreds or thousands of applicants — automate initial 
                filtering instantly.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Technical & specialist hiring</p>
              <p className="mt-2 text-xs text-slate-600">
                Skill-based ranking helps identify niche or hard-to-spot experience in complex CVs.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f9ff] p-5">
              <p className="font-semibold text-slate-900">Staffing & agency workflows</p>
              <p className="mt-2 text-xs text-slate-600">
                Share ranked profiles with clients quickly and consistently with evidence-based 
                scoring.
              </p>
            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="mt-10 rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10 mb-6">

          <div className="grid gap-10 md:grid-cols-[1.1fr,1.6fr]">
            
            {/* LEFT */}
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Frequently asked questions
              </h2>

              <p className="mt-3 text-sm text-slate-600">
                Here are common questions about TransformNXT ATS with CV Ranker. 
                Our team can provide a deeper walkthrough during a live product demo.
              </p>

              <Link
                to="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-slate-50"
              >
                Talk to TransformNXT
              </Link>
            </div>

            {/* RIGHT */}
            <div className="space-y-5 divide-y divide-slate-200 text-sm text-slate-700">

              <div className="pt-1">
                <p className="font-semibold text-slate-900">
                  How accurate is the CV ranking?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  CV ranking uses multiple scoring vectors (skills, context, seniority, 
                  experience fit). Accuracy increases as more resumes and job data flow 
                  through your system over time.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  Can we customize skill importance?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Yes. Weighting for specific skills, certifications or experience types 
                  can be tuned per job or role group.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  Does this replace our current ATS?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  No. TransformNXT CV Ranker can work as an add-on to your existing ATS 
                  or serve as a full ATS depending on your setup.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-semibold text-slate-900">
                  What resume formats are supported?
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  All major formats — PDF, DOCX, TXT, RTF, and machine-parsed structured inputs.
                </p>
              </div>

            </div>

          </div>
        </section>

      </main>
    </PageContainer>
  );
}
