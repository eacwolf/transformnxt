import PageContainer from '../../components/PageContainer';

export default function HRMS() {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">HRMS</h1>
          <p className="text-gray-700 mb-6">Dummy description: Comprehensive HRMS to manage employee lifecycle, payroll, leave, and performance with integrations to your core systems.</p>
          <p className="text-gray-700">Designed for HR teams looking for reliable day-to-day operational tooling with strong security and compliance features.</p>
        </div>
        <aside className="bg-white border border-zinc-100 rounded-xl p-6 shadow-md">
          <h3 className="font-semibold text-lg mb-3">Why choose us</h3>
          <ul className="space-y-3 text-gray-700">
            <li>End-to-end HR operations</li>
            <li>Payroll and compliance-ready</li>
            <li>Integrations with ATS and reporting</li>
          </ul>
        </aside>
      </div>
    </PageContainer>
  );
}
