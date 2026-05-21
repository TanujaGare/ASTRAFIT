import { Link } from 'react-router-dom';
import { Dumbbell, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-primary" />
            <Link to="/" className="text-2xl font-bold tracking-tighter">
              Astra<span className="text-gradient">Fit</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <Link to="/workouts" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">Workouts</Link>
              <Link to="/meals" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">Meals</Link>
              <Link to="/progress" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">Progress</Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-sm font-medium hover:text-primary transition-colors">Log in</Link>
            <Link to="/signup" className="bg-primary hover:bg-primary/80 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-[0_0_20px_rgba(109,40,217,0.4)]">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
