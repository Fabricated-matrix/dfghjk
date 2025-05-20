import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            FuzenAI
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900">How it Works</Link>
            <Link to="/know-more" className="text-gray-700 hover:text-gray-900">Know More</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-gray-900">Pricing</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 text-gray-700 hover:text-gray-900">
              Sign In
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;