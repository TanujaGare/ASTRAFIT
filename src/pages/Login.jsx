import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Dumbbell, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to log in: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card w-full max-w-md p-8 relative z-10"
      >
        <div className="text-center mb-8">
          <Dumbbell className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="text-zinc-400 mt-2">Log in to continue your journey</p>
        </div>
        
        {error && <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-6 text-sm">{error}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">Email</label>
            <input 
              type="email" 
              required
              className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">Password</label>
            <input 
              type="password" 
              required
              className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            disabled={loading}
            type="submit" 
            className="w-full bg-white text-black hover:bg-white/90 rounded-xl py-3 font-medium transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center"
          >
            {loading ? 'Logging in...' : 'Log in'}
            {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
          </button>
        </form>
        
        <p className="text-center mt-6 text-zinc-400">
          Don't have an account? <Link to="/signup" className="text-accent hover:underline">Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
}
