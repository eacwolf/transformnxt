import PageContainer from '../components/PageContainer';

export default function Login() {
  return (
    <PageContainer>
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <p className="text-gray-700 mb-6">This is a placeholder login page. Replace with auth flow or SSO integration as needed.</p>
        <div className="bg-white border border-zinc-100 rounded-lg p-6 shadow-sm">
          <label className="block mb-2 text-sm">Email</label>
          <input className="w-full border border-zinc-200 rounded px-3 py-2 mb-4" />
          <label className="block mb-2 text-sm">Password</label>
          <input type="password" className="w-full border border-zinc-200 rounded px-3 py-2 mb-4" />
          <button className="w-full py-3 bg-zinc-900 text-white rounded font-semibold">Sign in</button>
        </div>
      </div>
    </PageContainer>
  );
}
