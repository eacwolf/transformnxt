

import PageContainer from '../components/PageContainer';

const Blog = () => (
  <PageContainer>
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Insights, news, and thought leadership from Digi Transformnxt. Stay updated on the latest in IT, digital transformation, and emerging technologies.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Latest Posts</h3>
        <ul className="text-left text-gray-700 space-y-4">
          <li><span className="font-semibold">How AI is Transforming Business Operations</span> – Oct 2025</li>
          <li><span className="font-semibold">Cloud Migration Best Practices</span> – Sep 2025</li>
          <li><span className="font-semibold">The Future of IT Consulting</span> – Aug 2025</li>
        </ul>
      </div>
    </div>
  </PageContainer>
);

export default Blog;
