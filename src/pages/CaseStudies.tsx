

import PageContainer from '../components/PageContainer';

const CaseStudies = () => (
  <PageContainer>
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explore how Digi Transformnxt has helped clients achieve digital transformation and business success through innovative IT solutions.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Featured Case Studies</h3>
        <ul className="text-left text-gray-700 space-y-4">
          <li><span className="font-semibold">Retail AI Automation</span> – Improved efficiency by 40%</li>
          <li><span className="font-semibold">Cloud Migration for Healthcare</span> – Reduced costs by 30%</li>
          <li><span className="font-semibold">Enterprise Data Analytics</span> – Enabled real-time insights</li>
        </ul>
      </div>
    </div>
  </PageContainer>
);

export default CaseStudies;
