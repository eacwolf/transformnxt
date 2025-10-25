import PageContainer from '../../components/PageContainer';

export default function AIAsyncInterviewer() {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">AI Asynchronous Mode Interviewer</h1>
          <p className="text-gray-700 mb-6">Dummy description: Conduct interviews without scheduling constraints. Candidates record responses on their own time, while AI evaluates and provides scoring and highlights for reviewers.</p>
          <p className="text-gray-700">Ideal for high-volume hiring and distributed teams—streamline screening without compromising quality.</p>
        </div>
        <aside className="bg-white border border-zinc-100 rounded-xl p-6 shadow-md">
          <h3 className="font-semibold text-lg mb-3">Why choose us</h3>
          <ul className="space-y-3 text-gray-700">
            <li>Flexible candidate experience</li>
            <li>Automated scoring and notes</li>
            <li>Integrates with ATS and reporting</li>
          </ul>
        </aside>
      </div>
    </PageContainer>
  );
}
