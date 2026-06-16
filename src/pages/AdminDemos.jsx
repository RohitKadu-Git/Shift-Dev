import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AdminDemos() {
  const [demos, setDemos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const apiUrl = import.meta.env.VITE_API_URL || 'https://site-former-backend.onrender.com';
    try {
      const res = await fetch(`${apiUrl}/api/demos`, {
        headers: { 'Authorization': `Bearer ${password}` },
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setDemos(data.demos);
        setAuthenticated(true);
        sessionStorage.setItem('admin_token', password);
      } else {
        setError('Invalid password');
      }
    } catch {
      setError('Connection error');
    }
    setLoading(false);
  };

  useEffect(() => {
    const saved = sessionStorage.getItem('admin_token');
    if (saved) {
      setLoading(true);
      const apiUrl = import.meta.env.VITE_API_URL || 'https://site-former-backend.onrender.com';
      fetch(`${apiUrl}/api/demos`, {
        headers: { 'Authorization': `Bearer ${saved}` },
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setDemos(data.demos);
            setAuthenticated(true);
            setPassword(saved);
          }
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, []);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-white">Admin Access</h1>
              <p className="text-gray-400 text-sm mt-1">Enter password to view demos</p>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 mb-4"
              autoFocus
            />
            {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 bg-purple-500 text-white font-semibold rounded-xl hover:bg-purple-600 transition-colors disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Generated Demos</h1>
            <p className="text-gray-400 mt-1">All AI-generated demo pages from leads</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
              {demos.length} demos
            </span>
            <button
              onClick={() => { sessionStorage.removeItem('admin_token'); setAuthenticated(false); }}
              className="text-xs text-gray-400 hover:text-red-400 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {demos.length === 0 ? (
          <div className="text-center py-20 bg-gray-900 rounded-2xl border border-gray-800">
            <p className="text-gray-400 text-lg">No demos generated yet.</p>
            <p className="text-gray-500 text-sm mt-2">Demos will appear here when leads submit the form with 5+ word descriptions.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {demos.map(demo => {
              let pageData = {};
              try {
                pageData = typeof demo.page_data === 'string' ? JSON.parse(demo.page_data) : demo.page_data;
              } catch (e) {}

              return (
                <div
                  key={demo.id}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Link to={`/admin/demos/${demo.id}`} className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: pageData.primaryColor || '#8b5cf6' }} />
                        <h3 className="text-lg font-bold text-white truncate">{demo.business_name}</h3>
                      </div>
                      {demo.business_description && (
                        <p className="text-gray-400 text-sm mb-2 line-clamp-1">{demo.business_description}</p>
                      )}
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>👤 {demo.client_name || 'Unknown'}</span>
                        <span>📅 {new Date(demo.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                    </Link>
                    <div className="flex-shrink-0 flex items-center gap-2">
                      <button
                        onClick={async () => {
                          const apiUrl = import.meta.env.VITE_API_URL || 'https://site-former-backend.onrender.com';
                          const token = sessionStorage.getItem('admin_token');
                          const newVal = !demo.show_in_portfolio;
                          await fetch(`${apiUrl}/api/demos/${demo.id}/portfolio`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({ show_in_portfolio: newVal }),
                          });
                          setDemos(prev => prev.map(d => d.id === demo.id ? { ...d, show_in_portfolio: newVal ? 1 : 0 } : d));
                        }}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                          demo.show_in_portfolio
                            ? 'bg-green-500/20 text-green-300 border-green-500/30 hover:bg-red-500/20 hover:text-red-300 hover:border-red-500/30'
                            : 'bg-gray-800 text-gray-400 border-gray-700 hover:bg-green-500/20 hover:text-green-300 hover:border-green-500/30'
                        }`}
                      >
                        {demo.show_in_portfolio ? '✓ In Portfolio' : '+ Portfolio'}
                      </button>
                      <button
                        onClick={() => {
                          const link = `${window.location.origin}/preview/${demo.share_token}`;
                          navigator.clipboard.writeText(link);
                          alert('Share link copied!');
                        }}
                        className="text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30 px-3 py-1.5 rounded-lg hover:bg-purple-500/30 transition-all"
                      >
                        📋 Copy Link
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
