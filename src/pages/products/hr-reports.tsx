import PageContainer from '../../components/PageContainer';

export default function HRReports() {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">HR Report’s as SaaS</h1>
          <p className="text-gray-700 mb-6">Dummy description: Scalable HR reporting as a service—deliver role-based dashboards, scheduled reports and exportable analytics to stakeholders.</p>
          <p className="text-gray-700">Focus on decision-ready reporting without the infrastructure overhead.</p>
        </div>
        <aside className="bg-white border border-zinc-100 rounded-xl p-6 shadow-md">
          <h3 className="font-semibold text-lg mb-3">Why choose us</h3>
          <ul className="space-y-3 text-gray-700">
            <li>Hosted, secure reporting</li>
            <li>Custom dashboards for HR leaders</li>
            <li>Scheduled exports and alerts</li>
          </ul>
        </aside>
      </div>
    </PageContainer>
  );
}
