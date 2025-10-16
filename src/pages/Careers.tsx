

import PageContainer from '../components/PageContainer';

const Careers = () => (
  <PageContainer>
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Join our team of passionate IT professionals and help shape the future of digital transformation. We value innovation, collaboration, and continuous learning.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Current Openings</h3>
        <ul className="text-left text-gray-700 space-y-4">
          <li><span className="font-semibold">Software Engineer (React/Node.js)</span> – 2+ years experience</li>
          <li><span className="font-semibold">Cloud Solutions Architect</span> – 5+ years experience</li>
          <li><span className="font-semibold">AI/ML Engineer</span> – 3+ years experience</li>
        </ul>
        <p className="mt-8 text-gray-700">To apply, send your resume to <a href="mailto:akhil@transformnxt.in" className="hover:underline">akhil@transformnxt.in</a></p>
      </div>
    </div>
  </PageContainer>
);

export default Careers;
