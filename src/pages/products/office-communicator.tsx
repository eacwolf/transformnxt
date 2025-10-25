import PageContainer from '../../components/PageContainer';

export default function OfficeCommunicator() {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">AI Office Communicator & Candidate Report Integration</h1>
          <p className="text-gray-700 mb-6">Dummy description: Centralize candidate communication and integrate AI-generated candidate reports directly into your HR systems to keep stakeholders aligned.</p>
          <p className="text-gray-700">Automate notifications, interviewer feedback collection, and deliver concise candidate reports to hiring managers.</p>
        </div>
        <aside className="bg-white border border-zinc-100 rounded-xl p-6 shadow-md">
          <h3 className="font-semibold text-lg mb-3">Why choose us</h3>
          <ul className="space-y-3 text-gray-700">
            <li>Consolidated communication channels</li>
            <li>Integrated candidate reports for quick decisions</li>
            <li>Secure and auditable interactions</li>
          </ul>
        </aside>
      </div>
    </PageContainer>
  );
}
