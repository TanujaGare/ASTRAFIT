import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Dumbbell, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await signup(email, password);
      navigate('/onboarding');
    } catch (err) {
      setError('Failed to create an account: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card w-full max-w-md p-8 relative z-10"
      >
        <div className="text-center mb-8">
          <Dumbbell className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Create Account</h2>
          <p className="text-zinc-400 mt-2">Start your transformation journey today</p>
        </div>
        
        {error && <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-6 text-sm">{error}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">Email</label>
            <input 
              type="email" 
              required
              className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
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
              className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            disabled={loading}
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-3 font-medium transition-all hover:shadow-[0_0_20px_rgba(109,40,217,0.4)] flex items-center justify-center"
          >
            {loading ? 'Creating account...' : 'Sign up'}
            {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
          </button>
        </form>
        
        <p className="text-center mt-6 text-zinc-400">
          Already have an account? <Link to="/login" className="text-primary hover:underline">Log in</Link>
        </p>
      </motion.div>
    </div>
  );
}
