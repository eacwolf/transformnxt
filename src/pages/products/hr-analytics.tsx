import PageContainer from '../../components/PageContainer';

export default function HRAnalytics() {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">HR Data Driven – Predictive Analytics</h1>
          <p className="text-gray-700 mb-6">Dummy description: Use predictive analytics to forecast hiring needs, turnover risk, and candidate success probability to make smarter workforce decisions.</p>
          <p className="text-gray-700">Combine HR data sources with advanced models to surface actionable insights for HR leaders.</p>
        </div>
        <aside className="bg-white border border-zinc-100 rounded-xl p-6 shadow-md">
          <h3 className="font-semibold text-lg mb-3">Why choose us</h3>
          <ul className="space-y-3 text-gray-700">
            <li>Data-driven hiring forecasts</li>
            <li>Reduce turnover with targeted insights</li>
            <li>Actionable dashboards and exports</li>
          </ul>
        </aside>
      </div>
    </PageContainer>
  );
}
