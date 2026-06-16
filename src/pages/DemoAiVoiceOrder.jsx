import React, { useState } from 'react';

const styles = [
  { id: 'realistic', label: '📷 Realistic', desc: 'Photo-like images' },
  { id: 'anime', label: '🎌 Anime', desc: 'Japanese art style' },
  { id: '3d', label: '🎮 3D Render', desc: 'Cinema quality 3D' },
  { id: 'watercolor', label: '🎨 Watercolor', desc: 'Artistic painting' },
  { id: 'minimal', label: '✏️ Minimal', desc: 'Clean & simple' },
  { id: 'cyberpunk', label: '🌆 Cyberpunk', desc: 'Neon futuristic' },
];

const samplePrompts = [
  'A cozy coffee shop at night with warm lighting and rain outside',
  'Futuristic city skyline with flying cars at sunset',
  'A cute robot gardening in a greenhouse full of exotic plants',
  'Underwater temple with bioluminescent coral and fish',
  'Mountain cabin surrounded by aurora borealis',
  'A magical library with floating books and glowing shelves',
];

const sampleImages = [
  'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=512&h=512&fit=crop',
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=512&h=512&fit=crop',
  'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=512&h=512&fit=crop',
  'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=512&h=512&fit=crop',
  'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=512&h=512&fit=crop',
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=512&h=512&fit=crop',
];

export default function DemoAiVoiceOrder() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('realistic');
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState([]);
  const [history, setHistory] = useState([]);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setGenerating(true);

    // Simulate AI generation with delay
    setTimeout(() => {
      const randomImages = [
        sampleImages[Math.floor(Math.random() * sampleImages.length)],
        sampleImages[Math.floor(Math.random() * sampleImages.length)],
        sampleImages[Math.floor(Math.random() * sampleImages.length)],
        sampleImages[Math.floor(Math.random() * sampleImages.length)],
      ];
      setGenerated(randomImages);
      setHistory(prev => [{ prompt, style, images: randomImages, time: new Date() }, ...prev].slice(0, 5));
      setGenerating(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-gray-900 to-gray-900">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-md border-b border-purple-700/30 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">🎨</div>
            <div>
              <h1 className="text-white font-bold text-lg">AI Image Generator</h1>
              <p className="text-xs text-gray-400">Powered by Site Former</p>
            </div>
          </div>
          <span className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">✨ AI Art Demo</span>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Prompt Input */}
        <div className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6 mb-6">
          <label className="text-white font-semibold text-sm mb-2 block">Describe your image</label>
          <div className="flex gap-3">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="A cozy coffee shop at night with warm lighting and rain outside..."
              rows={3}
              className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 resize-none"
            />
          </div>

          {/* Quick Prompts */}
          <div className="mt-3 flex flex-wrap gap-2">
            {samplePrompts.slice(0, 4).map((p, i) => (
              <button
                key={i}
                onClick={() => setPrompt(p)}
                className="text-xs bg-gray-900 text-gray-400 border border-gray-700 px-3 py-1.5 rounded-lg hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-300 transition-all"
              >
                {p.slice(0, 40)}...
              </button>
            ))}
          </div>

          {/* Style Selector */}
          <div className="mt-5">
            <label className="text-white font-semibold text-sm mb-3 block">Choose style</label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {styles.map(s => (
                <button
                  key={s.id}
                  onClick={() => setStyle(s.id)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    style === s.id
                      ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                      : 'border-gray-700 bg-gray-900 text-gray-400 hover:border-gray-600'
                  }`}
                >
                  <div className="text-lg">{s.label.split(' ')[0]}</div>
                  <div className="text-xs mt-1">{s.label.split(' ').slice(1).join(' ')}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={generating || !prompt.trim()}
            className="mt-5 w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {generating ? (
              <>
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                Generating... (~10 seconds)
              </>
            ) : (
              <>✨ Generate 4 Images</>
            )}
          </button>
        </div>

        {/* Generated Images */}
        {generated.length > 0 && (
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-4">Generated Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {generated.map((img, i) => (
                <div key={i} className="group relative aspect-square rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all">
                  <img src={img} alt={`Generated ${i + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center gap-2">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-white text-black text-xs font-semibold rounded-lg">
                      ⬇ Download
                    </button>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-purple-500 text-white text-xs font-semibold rounded-lg">
                      🔄 Upscale
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex gap-3">
              <button className="text-xs text-gray-400 hover:text-purple-400 transition-colors">🔄 Regenerate</button>
              <button className="text-xs text-gray-400 hover:text-purple-400 transition-colors">📐 Different aspect ratio</button>
              <button className="text-xs text-gray-400 hover:text-purple-400 transition-colors">🎨 Change style</button>
            </div>
          </div>
        )}

        {/* Generation History */}
        {history.length > 0 && (
          <div>
            <h3 className="text-white font-semibold mb-4">Recent Generations</h3>
            <div className="space-y-3">
              {history.map((item, i) => (
                <div key={i} className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-4 flex items-center gap-4">
                  <img src={item.images[0]} alt="" className="w-14 h-14 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm truncate">{item.prompt}</p>
                    <p className="text-gray-500 text-xs mt-1">Style: {item.style} · {item.time.toLocaleTimeString()}</p>
                  </div>
                  <button className="text-xs text-purple-400 hover:text-purple-300 whitespace-nowrap">Use again →</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-5">
            <div className="text-2xl mb-2">⚡</div>
            <h4 className="text-white font-semibold text-sm">Fast Generation</h4>
            <p className="text-gray-400 text-xs mt-1">Generate images in under 10 seconds with our optimized AI pipeline.</p>
          </div>
          <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-5">
            <div className="text-2xl mb-2">🎨</div>
            <h4 className="text-white font-semibold text-sm">Multiple Styles</h4>
            <p className="text-gray-400 text-xs mt-1">From photorealistic to anime, choose from 6+ artistic styles.</p>
          </div>
          <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-5">
            <div className="text-2xl mb-2">📐</div>
            <h4 className="text-white font-semibold text-sm">High Resolution</h4>
            <p className="text-gray-400 text-xs mt-1">Upscale any image to 4K. Perfect for marketing & social media.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
