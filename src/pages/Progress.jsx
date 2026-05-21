import { motion } from 'framer-motion';
import { Target, TrendingUp, Calendar, Trophy } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const weightData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
  datasets: [
    {
      label: 'Body Weight (kg)',
      data: [82.5, 81.8, 81.0, 80.5, 79.8, 79.2],
      borderColor: '#6d28d9',
      backgroundColor: '#6d28d9',
      tension: 0.4,
    }
  ]
};

const habitData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Habit Score (%)',
      data: [100, 80, 100, 60, 100, 100, 80],
      backgroundColor: '#d8b4fe',
      borderRadius: 4,
    }
  ]
};

const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: { color: '#a1a1aa' }
    },
    tooltip: {
      backgroundColor: '#18181b',
      titleColor: '#fff',
      bodyColor: '#a1a1aa',
      borderColor: '#27272a',
      borderWidth: 1,
    }
  },
  scales: {
    y: {
      grid: { color: 'rgba(255, 255, 255, 0.05)' },
      ticks: { color: '#71717a' }
    },
    x: {
      grid: { display: false },
      ticks: { color: '#71717a' }
    }
  }
};

export default function Progress() {
  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Your <span className="text-gradient">Progress</span></h1>
        <p className="text-zinc-400">Track your consistency and visualize your transformation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
          <Trophy className="w-10 h-10 text-yellow-500 mb-3" />
          <h3 className="text-3xl font-bold">12</h3>
          <p className="text-sm text-zinc-400">Day Streak</p>
        </div>
        <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
          <Target className="w-10 h-10 text-primary mb-3" />
          <h3 className="text-3xl font-bold">-3.3 kg</h3>
          <p className="text-sm text-zinc-400">Total Lost</p>
        </div>
        <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
          <Calendar className="w-10 h-10 text-blue-500 mb-3" />
          <h3 className="text-3xl font-bold">24</h3>
          <p className="text-sm text-zinc-400">Workouts Completed</p>
        </div>
        <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
          <TrendingUp className="w-10 h-10 text-green-500 mb-3" />
          <h3 className="text-3xl font-bold">92%</h3>
          <p className="text-sm text-zinc-400">Diet Adherence</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 h-[400px] flex flex-col"
        >
          <h3 className="text-xl font-semibold mb-6">Weight Trend</h3>
          <div className="flex-1 relative w-full">
            <Line options={commonOptions} data={weightData} />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 h-[400px] flex flex-col"
        >
          <h3 className="text-xl font-semibold mb-6">Habit Consistency (This Week)</h3>
          <div className="flex-1 relative w-full">
            <Bar options={commonOptions} data={habitData} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
