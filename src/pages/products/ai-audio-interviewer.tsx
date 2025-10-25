import PageContainer from '../../components/PageContainer';

export default function AIAudioInterviewer() {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">AI Audio Interviewer</h1>
          <p className="text-gray-700 mb-6">Dummy description: Capture and analyze candidate audio interviews with advanced speech-to-text, sentiment analysis, and voice biometrics to streamline assessments.</p>
          <p className="text-gray-700">Supports multi-language transcription, keyword spotting, and integration with assessment rubrics for hiring teams.</p>
        </div>
        <aside className="bg-white border border-zinc-100 rounded-xl p-6 shadow-md">
          <h3 className="font-semibold text-lg mb-3">Why choose us</h3>
          <ul className="space-y-3 text-gray-700">
            <li>Fast, reliable audio transcription</li>
            <li>Detailed sentiment & tone analysis</li>
            <li>Optimized for scalable screening</li>
          </ul>
        </aside>
      </div>
    </PageContainer>
  );
}
