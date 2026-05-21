import { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Info, CheckCircle2 } from 'lucide-react';
import { indianMeals } from '../data/mockData';
import toast from 'react-hot-toast';

export default function MealPlanner() {
  const [eatenMeals, setEatenMeals] = useState([]);

  const toggleMeal = (mealName) => {
    if (eatenMeals.includes(mealName)) {
      setEatenMeals(eatenMeals.filter(m => m !== mealName));
      toast(`Marked ${mealName} as not eaten yet.`, { icon: '🍽️' });
    } else {
      setEatenMeals([...eatenMeals, mealName]);
      toast.success(`Marked ${mealName} as eaten! Macros updated.`, { icon: '✅' });
    }
  };

  const totalMacros = {
    calories: 2200,
    protein: 150,
    carbs: 200,
    fats: 65
  };

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Your <span className="text-gradient">Nutrition Plan</span></h1>
        <p className="text-zinc-400">Delicious, realistic Indian meals perfectly balanced for your goals.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-card p-6 sticky top-24">
            <h3 className="text-xl font-semibold mb-6">Daily Targets</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-zinc-400">Calories</span>
                  <span className="font-medium text-white">{totalMacros.calories} kcal</span>
                </div>
                <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all duration-500" style={{ width: `${75 + (eatenMeals.length * 5)}%`, maxWidth: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-zinc-400">Protein</span>
                  <span className="font-medium text-white">{totalMacros.protein}g</span>
                </div>
                <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${60 + (eatenMeals.length * 8)}%`, maxWidth: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-zinc-400">Carbs</span>
                  <span className="font-medium text-white">{totalMacros.carbs}g</span>
                </div>
                <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 transition-all duration-500" style={{ width: `${80 + (eatenMeals.length * 3)}%`, maxWidth: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-zinc-400">Fats</span>
                  <span className="font-medium text-white">{totalMacros.fats}g</span>
                </div>
                <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 transition-all duration-500" style={{ width: `${45 + (eatenMeals.length * 5)}%`, maxWidth: '100%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-surface/50 border border-white/5 rounded-xl flex items-start space-x-3">
              <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-zinc-400 leading-relaxed">
                Click on the meals to mark them as eaten and update your macro progress.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-8">
          {Object.entries(indianMeals).map(([mealType, meals], index) => (
            <motion.div 
              key={mealType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold mb-4 capitalize flex items-center">
                <Utensils className="w-5 h-5 mr-3 text-primary" />
                {mealType}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {meals.map((meal, idx) => {
                  const isEaten = eatenMeals.includes(meal.name);
                  return (
                    <div 
                      key={idx} 
                      onClick={() => toggleMeal(meal.name)}
                      className={`glass-card p-5 group cursor-pointer transition-all relative overflow-hidden ${isEaten ? 'border-green-500/50 bg-green-500/5' : 'hover:border-primary/50'}`}
                    >
                      {isEaten && (
                        <div className="absolute -top-6 -right-6 w-16 h-16 bg-green-500/20 rounded-full flex items-end justify-start p-2">
                          <CheckCircle2 className="w-5 h-5 text-green-400" />
                        </div>
                      )}
                      <div className="flex justify-between items-start mb-4">
                        <h4 className={`font-medium text-lg leading-tight pr-6 ${isEaten ? 'text-zinc-300' : 'text-white'}`}>{meal.name}</h4>
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full shrink-0 ${meal.tag === 'Veg' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                          {meal.tag}
                        </span>
                      </div>
                      
                      <div className={`grid grid-cols-2 gap-2 text-sm ${isEaten ? 'opacity-60' : 'opacity-100'}`}>
                        <div className="bg-surface/50 rounded p-2 text-center">
                          <p className="text-zinc-500 text-xs">Calories</p>
                          <p className="font-semibold text-primary">{meal.calories}</p>
                        </div>
                        <div className="bg-surface/50 rounded p-2 text-center">
                          <p className="text-zinc-500 text-xs">Protein</p>
                          <p className="font-semibold text-white">{meal.protein}g</p>
                        </div>
                      </div>
                      <div className={`mt-3 flex justify-between text-xs text-zinc-500 px-1 ${isEaten ? 'opacity-60' : 'opacity-100'}`}>
                        <span>Carbs: {meal.carbs}g</span>
                        <span>Fats: {meal.fats}g</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
