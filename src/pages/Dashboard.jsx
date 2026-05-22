import { motion } from 'framer-motion';
import { Activity, Flame, Droplets, Moon, ChevronRight } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#18181b',
      titleColor: '#fff',
      bodyColor: '#a1a1aa',
      borderColor: '#27272a',
      borderWidth: 1,
    }
  },
  scales: {
    y: { display: false, min: 0 },
    x: {
      grid: { display: false, drawBorder: false },
      ticks: { color: '#71717a' }
    }
  },
  elements: {
    line: { tension: 0.4 },
    point: { radius: 0, hitRadius: 10, hoverRadius: 4 }
  }
};

const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      fill: true,
      label: 'Calories Burned',
      data: [400, 550, 420, 600, 480, 700, 650],
      borderColor: '#6d28d9',
      backgroundColor: 'rgba(109, 40, 217, 0.1)',
    },
  ],
};

export default function Dashboard() {
  const navigate = useNavigate();

  const handleStartWorkout = () => {
    toast.success('Workout started! Timer is running in the background.');
    navigate('/workouts');
  };

  const handleTimelineChange = (e) => {
    toast(`Timeline updated to ${e.target.value}`, {
      icon: '📊',
    });
  };

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-1">Welcome back, <span className="text-gradient">Demo User</span></h1>
          <p className="text-zinc-400">Here's your fitness overview for today.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="glass px-4 py-2 rounded-xl inline-flex items-center space-x-3 border border-white/5 cursor-pointer hover:border-primary/30 transition-all">
            <div className="bg-primary/20 p-1.5 rounded-lg">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-zinc-400">Gym Access</p>
              <p className="text-sm font-semibold text-white">Show QR Pass</p>
            </div>
          </div>
          <div className="glass px-4 py-2 rounded-xl inline-flex items-center space-x-2 border border-orange-500/20">
            <Flame className="w-5 h-5 text-orange-500" />
            <div>
              <p className="text-xs text-zinc-400">Current Streak</p>
              <span className="text-sm font-semibold text-orange-500">12 Days</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Calories Burned', value: '2,450', unit: 'kcal', icon: <Flame className="w-6 h-6 text-orange-500" />, color: 'text-orange-500' },
          { title: 'Water Intake', value: '2.5', unit: 'L / 3L', icon: <Droplets className="w-6 h-6 text-blue-500" />, color: 'text-blue-500' },
          { title: 'Sleep Quality', value: '7.5', unit: 'hrs', icon: <Moon className="w-6 h-6 text-indigo-400" />, color: 'text-indigo-400' },
          { title: 'Active Minutes', value: '45', unit: 'min', icon: <Activity className="w-6 h-6 text-green-500" />, color: 'text-green-500' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:scale-110 transition-transform">{stat.icon}</div>
            <p className="text-sm text-zinc-400 mb-2">{stat.title}</p>
            <div className="flex items-baseline space-x-1">
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-sm text-zinc-500">{stat.unit}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 glass-card p-6 h-[400px] flex flex-col"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Activity Overview</h2>
            <select 
              onChange={handleTimelineChange}
              className="bg-surface border border-white/10 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-primary"
            >
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
          <div className="flex-1 relative w-full">
            <Line options={chartOptions} data={chartData} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6 flex flex-col space-y-6"
        >
          <div>
            <h2 className="text-xl font-semibold mb-4">Today's Action Plan</h2>
            <div className="space-y-3">
              <Link to="/workouts" className="block bg-surface/50 border border-white/5 rounded-xl p-3 flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Push Day</p>
                    <p className="text-xs text-zinc-400">45 mins • Hypertrophy</p>
                  </div>
                </div>
              </Link>

              <Link to="/meals" className="block bg-surface/50 border border-white/5 rounded-xl p-3 flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Flame className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Lunch Meal</p>
                    <p className="text-xs text-zinc-400">Chicken Curry & Rice</p>
                  </div>
                </div>
              </Link>
            </div>
            <button 
              onClick={handleStartWorkout}
              className="w-full mt-4 py-2.5 bg-white text-black text-sm font-semibold rounded-xl hover:bg-white/90 transition-colors"
            >
              Start Workout
            </button>
          </div>

          <div className="pt-4 border-t border-white/10">
            <h2 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wider">Recent Personal Bests</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Barbell Bench Press</span>
                <span className="text-sm font-bold text-primary">85 kg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Barbell Squat</span>
                <span className="text-sm font-bold text-primary">120 kg</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
