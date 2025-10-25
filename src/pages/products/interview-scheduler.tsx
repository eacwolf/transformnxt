import PageContainer from '../../components/PageContainer';

export default function InterviewScheduler() {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">AI Interview Scheduler</h1>
          <p className="text-gray-700 mb-6">Dummy description: Automate interview scheduling with AI that matches availability, optimizes interviewer panels, and reduces back-and-forth communication.</p>
          <p className="text-gray-700">Supports calendar integration, time zone handling, and bulk scheduling for high-volume recruitment.</p>
        </div>
        <aside className="bg-white border border-zinc-100 rounded-xl p-6 shadow-md">
          <h3 className="font-semibold text-lg mb-3">Why choose us</h3>
          <ul className="space-y-3 text-gray-700">
            <li>Reduces scheduling friction</li>
            <li>Syncs with calendars and reminders</li>
            <li>Built for scale and reliability</li>
          </ul>
        </aside>
      </div>
    </PageContainer>
  );
}
