import PageContainer from '../../components/PageContainer';

export default function ATSCVRanker() {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">ATS with CV Ranker</h1>
          <p className="text-gray-700 mb-6">Dummy description: An applicant tracking system with AI-powered CV ranking to prioritize candidates based on skills, experience and cultural fit signals.</p>
          <p className="text-gray-700">Boost recruiter productivity and surface top talent faster with explainable ranking features.</p>
        </div>
        <aside className="bg-white border border-zinc-100 rounded-xl p-6 shadow-md">
          <h3 className="font-semibold text-lg mb-3">Why choose us</h3>
          <ul className="space-y-3 text-gray-700">
            <li>Smart CV parsing and ranking</li>
            <li>Customizable weighting and rules</li>
            <li>ATS workflows that fit your process</li>
          </ul>
        </aside>
      </div>
    </PageContainer>
  );
}
