import { motion } from 'framer-motion';
import { ArrowRight, Activity, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8"
          >
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">The Future of AI Fitness</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
          >
            Sculpt Your Physique with <br className="hidden md:block"/>
            <span className="text-gradient">AstraFit</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto"
          >
            Personalized workouts, tailored Indian meal plans, and intelligent progress tracking. Your venture-backed AI fitness companion.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/signup" className="group relative w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all hover:shadow-[0_0_30px_rgba(109,40,217,0.5)]">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/login" className="w-full sm:w-auto px-8 py-4 glass rounded-full font-medium hover:bg-surface/60 transition-all">
              View Demo
            </Link>
          </motion.div>
        </div>

        {/* Dashboard Preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="glass-card p-2 rounded-3xl border border-white/10 bg-surface/50 backdrop-blur-xl">
            <div className="h-[400px] md:h-[600px] w-full bg-background rounded-2xl border border-white/5 overflow-hidden flex flex-col">
              <div className="h-12 border-b border-white/5 flex items-center px-4 space-x-2 bg-surface/30">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative overflow-hidden">
                <div className="col-span-2 space-y-6">
                  <div className="glass-card h-40 p-6 flex flex-col justify-between">
                    <h3 className="text-xl font-semibold">Today's Target</h3>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-3xl font-bold text-primary">2,450</p>
                        <p className="text-zinc-400 text-sm">kcal burned</p>
                      </div>
                      <Activity className="w-12 h-12 text-accent/50" />
                    </div>
                  </div>
                  <div className="glass-card h-64 p-6">
                    <h3 className="text-lg font-medium mb-4">Weekly Progress</h3>
                    <div className="w-full h-full bg-gradient-to-t from-primary/20 to-transparent rounded-lg border border-primary/20 flex items-end px-4 pb-4 space-x-4">
                        {[40, 70, 45, 90, 60, 100, 80].map((h, i) => (
                           <div key={i} className="w-full bg-primary/50 rounded-t-sm transition-all hover:bg-primary" style={{ height: `${h}%` }}></div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="glass-card h-[432px] p-6 flex flex-col">
                    <h3 className="text-lg font-medium mb-4">Next Workout</h3>
                    <div className="flex-1 space-y-4">
                       <Link to="/workouts" className="block p-4 bg-background/50 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
                         <p className="font-semibold text-accent">Push Day (Hypertrophy)</p>
                         <p className="text-sm text-zinc-400">45 mins • High Intensity</p>
                       </Link>
                       <Link to="/meals" className="block p-4 bg-background/50 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
                         <p className="font-semibold text-white">Diet Plan</p>
                         <p className="text-sm text-zinc-400">High Protein Indian Veg</p>
                       </Link>
                    </div>
                    <Link to="/workouts" className="w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium mt-auto flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(109,40,217,0.3)]">Start Session</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
