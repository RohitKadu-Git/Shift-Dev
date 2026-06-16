import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AdminDemos() {
  const [demos, setDemos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'https://site-formers-backend.onrender.com';
    fetch(`${apiUrl}/api/demos`)
      .then(res => res.json())
      .then(data => {
        if (data.success) setDemos(data.demos);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading demos...</p>
        </div>
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
          <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
            {demos.length} demos
          </span>
        </div>

        {demos.length === 0 ? (
          <div className="text-center py-20 bg-gray-900 rounded-2xl border border-gray-800">
            <p className="text-gray-400 text-lg">No demos generated yet.</p>
            <p className="text-gray-500 text-sm mt-2">Demos will appear here when leads submit the form.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {demos.map(demo => {
              let pageData = {};
              try {
                pageData = typeof demo.page_data === 'string' ? JSON.parse(demo.page_data) : demo.page_data;
              } catch (e) {}

              return (
                <Link
                  key={demo.id}
                  to={`/admin/demos/${demo.id}`}
                  className="block bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
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
                    </div>
                    <div className="flex-shrink-0 text-gray-500 hover:text-purple-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
