import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle2, Clock, X, Flame } from 'lucide-react';
import { workoutPlans } from '../data/mockData';
import toast from 'react-hot-toast';

export default function WorkoutPlanner() {
  const [activeTab, setActiveTab] = useState('upper_back_biceps');
  const [completedWorkouts, setCompletedWorkouts] = useState({});
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const workouts = workoutPlans[activeTab] || [];

  useEffect(() => {
    let interval = null;
    if (isSessionActive) {
      interval = setInterval(() => {
        setSessionTime((time) => time + 1);
      }, 1000);
    } else if (!isSessionActive && sessionTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isSessionActive, sessionTime]);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleStartSession = () => {
    if (!isSessionActive) {
      setIsSessionActive(true);
      toast.success('Session Started! Timer is running.', { icon: '💪' });
    } else {
      setIsSessionActive(false);
      toast.success(`Workout completed! Time: ${formatTime(sessionTime)}`, { icon: '🎉' });
      setSessionTime(0);
    }
  };

  const handlePlayVideo = (exerciseName) => {
    // Array of high quality, royalty-free fitness videos for the portfolio demo
    const demoVideos = [
      "https://assets.mixkit.co/videos/preview/mixkit-man-training-with-a-kettlebell-in-the-gym-14603-large.mp4",
      "https://assets.mixkit.co/videos/preview/mixkit-fit-man-working-out-with-battle-ropes-22756-large.mp4",
      "https://assets.mixkit.co/videos/preview/mixkit-man-doing-push-ups-in-a-gym-2285-large.mp4"
    ];
    // Pick a video pseudo-randomly based on the exercise name length so it's consistent
    const videoUrl = demoVideos[exerciseName.length % demoVideos.length];
    
    setActiveVideo({ name: exerciseName, url: videoUrl });
  };

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Your <span className="text-gradient">Workout Plan</span></h1>
        <p className="text-zinc-400">Personalized routines designed to maximize your results.</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="glass p-1 rounded-full flex flex-wrap justify-center space-x-1">
          <button 
            onClick={() => setActiveTab('upper_back_biceps')}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'upper_back_biceps' ? 'bg-primary text-white shadow-lg' : 'text-zinc-400 hover:text-white'}`}
          >
            Upper (Back & Biceps)
          </button>
          <button 
            onClick={() => setActiveTab('upper_shoulders_triceps')}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'upper_shoulders_triceps' ? 'bg-primary text-white shadow-lg' : 'text-zinc-400 hover:text-white'}`}
          >
            Upper (Shoulders & Triceps)
          </button>
          <button 
            onClick={() => setActiveTab('lower_body')}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'lower_body' ? 'bg-primary text-white shadow-lg' : 'text-zinc-400 hover:text-white'}`}
          >
            Lower Body
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {workouts.map((workout, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between group"
            >
              <div className="flex items-center space-x-6 w-full sm:w-auto mb-4 sm:mb-0">
                <div 
                  onClick={() => handlePlayVideo(workout.name)}
                  className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center border border-white/5 relative overflow-hidden group-hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <Play className="w-6 h-6 text-primary absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img src={`https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=200&auto=format&fit=crop`} alt="exercise" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-20 transition-opacity" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{workout.name}</h3>
                  <p className="text-sm text-zinc-400">{workout.target} • {workout.difficulty}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-8 w-full sm:w-auto justify-between sm:justify-end">
                <div className="text-center">
                  <p className="text-sm text-zinc-500">Sets</p>
                  <p className="font-semibold text-lg">{workout.sets}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-zinc-500">Reps</p>
                  <p className="font-semibold text-lg">{workout.reps}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-zinc-500">Rest</p>
                  <p className="font-semibold text-lg text-accent">{workout.rest}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Session Summary</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center space-x-3 text-zinc-400">
                  <Clock className="w-5 h-5" />
                  <span>{isSessionActive ? "Active Time" : "Est. Time"}</span>
                </div>
                <span className={`font-semibold ${isSessionActive ? "text-primary text-xl tabular-nums animate-pulse" : ""}`}>
                  {isSessionActive ? formatTime(sessionTime) : "45 mins"}
                </span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center space-x-3 text-zinc-400">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <span>Est. Calories</span>
                </div>
                <span className="font-semibold">320 kcal</span>
              </div>
            </div>
            <button 
              onClick={handleStartSession}
              className={`w-full mt-6 text-white font-semibold py-3 rounded-xl transition-all ${isSessionActive ? 'bg-red-500 hover:bg-red-600 shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(109,40,217,0.3)] hover:shadow-[0_0_30px_rgba(109,40,217,0.5)]'}`}
            >
              {isSessionActive ? 'Stop Session' : 'Start Session'}
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#18181b] border border-white/10 rounded-2xl overflow-hidden w-full max-w-4xl shadow-2xl"
              onClick={e => e.stopPropagation()} // Prevent closing when clicking the modal itself
            >
              <div className="flex justify-between items-center p-4 border-b border-white/10 bg-black/50">
                <h3 className="text-xl font-bold">{activeVideo.name} <span className="text-zinc-400 text-sm font-normal ml-2">Demonstration</span></h3>
                <button 
                  onClick={() => setActiveVideo(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="relative w-full aspect-video bg-black">
                <video 
                  src={activeVideo.url} 
                  autoPlay 
                  loop 
                  controls 
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
