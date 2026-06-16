import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
