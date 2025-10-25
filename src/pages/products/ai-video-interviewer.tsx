import PageContainer from '../../components/PageContainer';

export default function AIVideoInterviewer() {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">AI Video Interviewer</h1>
          <p className="text-gray-700 mb-6">Dummy description: Our AI Video Interviewer records, analyzes and scores candidate video responses using computer vision and NLP to provide structured insights for faster hiring decisions. Replace this text with your final product copy.</p>
          <p className="text-gray-700">Features include candidate scoring, customizable rubrics, interviewer templates, and exportable reports for hiring teams.</p>
        </div>
        <aside className="bg-white border border-zinc-100 rounded-xl p-6 shadow-md">
          <h3 className="font-semibold text-lg mb-3">Why choose us</h3>
          <ul className="space-y-3 text-gray-700">
            <li>Accurate candidate insights powered by AI</li>
            <li>Reduces screening time and bias</li>
            <li>Seamless integration with hiring workflows</li>
          </ul>
        </aside>
      </div>
    </PageContainer>
  );
}
