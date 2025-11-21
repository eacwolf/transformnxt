import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Solutions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const features = [
    {
      title: 'AI-powered Interviewing',
      body: 'Automate candidate screening with video & audio analysis, extract skills and fit insights, and reduce time-to-hire with data-driven shortlisting.'
    },
    {
      title: 'HR Analytics & Reporting',
      body: 'Turn HR data into actionable dashboards, predictive attrition models and compliance-ready reports for stakeholders.'
    },
    {
      title: 'Interview Scheduling & Orchestration',
      body: 'Seamlessly schedule interviews across timezones, sync calendars, send reminders and reduce no-shows.'
    },
    {
      title: 'ATS & CV Ranking',
      body: 'Rank CVs using AI, prioritize high-fit candidates and integrate with your existing HRMS and ATS workflows.'
    }
  ];

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <header className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900">Solutions for modern HR & Hiring</h1>
        <p className="mt-4 text-zinc-600">A unified suite of tools to accelerate recruiting, streamline HR operations, and deliver measurable business outcomes.</p>
        <div className="mt-6 flex justify-center gap-3 flex-wrap">
          <Link to="/products/ai-video-interviewer" className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700">AI Video Interviewer</Link>
          <Link to="/products/ai-audio-interviewer" className="inline-flex items-center px-5 py-3 bg-zinc-100 text-zinc-900 rounded-md shadow hover:bg-zinc-200">AI Audio Interviewer</Link>
        </div>
      </header>

      <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900">Why TransformNXT?</h2>
          <p className="mt-4 text-zinc-600">We combine artificial intelligence and HR domain expertise to provide right-sized solutions for companies of all sizes — from startups to enterprises.</p>

          <ul className="mt-6 space-y-4">
            <li className="flex gap-3">
              <div className="flex-shrink-0 bg-blue-50 text-blue-600 rounded-full h-10 w-10 flex items-center justify-center font-bold">1</div>
              <div>
                <div className="font-semibold text-zinc-900">Faster hiring</div>
                <div className="text-zinc-600">Reduce screening time with automated shortlisting and interview automation.</div>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 bg-blue-50 text-blue-600 rounded-full h-10 w-10 flex items-center justify-center font-bold">2</div>
              <div>
                <div className="font-semibold text-zinc-900">Better quality</div>
                <div className="text-zinc-600">Use objective analytics to improve hiring decisions and reduce bias.</div>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 bg-blue-50 text-blue-600 rounded-full h-10 w-10 flex items-center justify-center font-bold">3</div>
              <div>
                <div className="font-semibold text-zinc-900">Scalable operations</div>
                <div className="text-zinc-600">From a handful of interviews to thousands, easily scale your processes without adding headcount.</div>
              </div>
            </li>
          </ul>
        </div>

        <aside>
          <div className="bg-white border border-zinc-100 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-zinc-900">Key Features</h3>
            <div className="mt-4 space-y-3">
              {features.map((f, i) => (
                <div key={f.title} className="border border-zinc-100 rounded-md overflow-hidden">
                  <button
                    aria-expanded={openIndex === i}
                    onClick={() => toggle(i)}
                    className="w-full text-left px-4 py-3 flex items-center justify-between bg-white hover:bg-zinc-50"
                  >
                    <span className="font-medium text-zinc-900">{f.title}</span>
                    <svg className={`h-5 w-5 text-zinc-500 transform ${openIndex === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className={`px-4 pt-0 pb-4 text-zinc-600 transition-all ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <p className="pt-3">{f.body}</p>
                    <p className="mt-3"><Link to="/contact" className="text-blue-600 hover:underline">Get a demo</Link></p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-blue-50 to-white border border-zinc-100 rounded-lg p-6 text-center">
            <h4 className="font-semibold text-zinc-900">Ready to transform hiring?</h4>
            <p className="text-zinc-600 mt-2">Talk to our team for a tailored solution and deployment plan.</p>
            <div className="mt-4 flex justify-center">
              <Link to="/contact" className="inline-flex items-center px-5 py-3 bg-zinc-900 text-white rounded-md shadow hover:bg-zinc-800">Contact Sales</Link>
            </div>
          </div>
        </aside>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-bold text-zinc-900">Integrations & Compatibility</h3>
        <p className="mt-3 text-zinc-600">We support common HR systems, SSO providers and calendar integrations. Our product is built with modern web standards for broad browser compatibility (Chrome, Edge, Firefox, Safari) and responsive behavior across device sizes.</p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex items-center justify-center p-4 bg-white border border-zinc-100 rounded">HRMS</div>
          <div className="flex items-center justify-center p-4 bg-white border border-zinc-100 rounded">ATS</div>
          <div className="flex items-center justify-center p-4 bg-white border border-zinc-100 rounded">SSO</div>
          <div className="flex items-center justify-center p-4 bg-white border border-zinc-100 rounded">Calendar</div>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-bold text-zinc-900">Security & Compliance</h3>
        <p className="mt-3 text-zinc-600">Privacy, security and compliance are core to our platform. We support role-based access control, encryption at rest and in transit, and compliance reporting for common standards.</p>
      </section>
    </div>
  );
}
