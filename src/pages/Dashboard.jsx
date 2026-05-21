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
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-1">Welcome back, <span className="text-gradient">Demo User</span></h1>
          <p className="text-zinc-400">Here's your fitness overview for today.</p>
        </div>
        <div className="mt-4 sm:mt-0 glass px-4 py-2 rounded-full inline-flex items-center space-x-2">
          <Flame className="w-5 h-5 text-orange-500" />
          <span className="font-semibold text-orange-500">12 Day Streak!</span>
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
          className="glass-card p-6 flex flex-col"
        >
          <h2 className="text-xl font-semibold mb-6">Today's Action Plan</h2>
          
          <div className="flex-1 space-y-4">
            <Link to="/workouts" className="block bg-surface/50 border border-white/5 rounded-xl p-4 flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Push Day</p>
                  <p className="text-xs text-zinc-400">45 mins • Hypertrophy</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-primary transition-colors" />
            </Link>

            <Link to="/meals" className="block bg-surface/50 border border-white/5 rounded-xl p-4 flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Lunch Meal</p>
                  <p className="text-xs text-zinc-400">Chicken Curry & Rice</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-primary transition-colors" />
            </Link>
          </div>
          
          <button 
            onClick={handleStartWorkout}
            className="w-full mt-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
          >
            Start Workout
          </button>
        </motion.div>
      </div>
    </div>
  );
}
