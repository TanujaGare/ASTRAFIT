import { motion } from 'framer-motion';
import { Target, Utensils, Activity, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Personalized Workouts",
    description: "AI-generated workout plans based on your physique goals, experience level, and available equipment."
  },
  {
    icon: <Utensils className="w-8 h-8 text-accent" />,
    title: "Indian Nutrition Plans",
    description: "Realistic, budget-friendly Indian meal suggestions tailored for fat loss or muscle gain."
  },
  {
    icon: <Activity className="w-8 h-8 text-green-400" />,
    title: "Habit Tracking",
    description: "Stay consistent by tracking daily water intake, sleep, and activity with beautiful streak visualizations."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
    title: "Progress Analytics",
    description: "Visualize your transformation journey with premium charts and data analytics."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for <span className="text-gradient">Consistency</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Everything you need to transform your physique, packaged in a premium, frictionless experience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="mb-6 bg-surface p-4 inline-block rounded-2xl border border-white/5 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
