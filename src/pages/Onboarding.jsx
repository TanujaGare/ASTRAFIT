import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Target, Activity, CheckCircle2 } from 'lucide-react';

const GOALS = [
  { id: 'fat_loss', label: 'Fat Loss', icon: <Activity className="w-6 h-6" /> },
  { id: 'muscle_gain', label: 'Muscle Gain', icon: <Target className="w-6 h-6" /> },
  { id: 'strength', label: 'Get Stronger', icon: <CheckCircle2 className="w-6 h-6" /> }
];

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    goal: '',
    gender: '',
    age: '',
    weight: '',
    height: '',
    activityLevel: '',
    dietPreference: ''
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else navigate('/dashboard');
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const updateForm = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-2xl relative">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: '0%' }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-zinc-400 font-medium">
            <span>Goal</span>
            <span>Metrics</span>
            <span>Lifestyle</span>
          </div>
        </div>

        <motion.div 
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="glass-card p-8 sm:p-10"
        >
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-bold mb-2">What's your primary goal?</h2>
              <p className="text-zinc-400 mb-8">This helps us personalize your workout and nutrition plans.</p>
              
              <div className="space-y-4">
                {GOALS.map((g) => (
                  <div 
                    key={g.id}
                    onClick={() => updateForm('goal', g.id)}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center space-x-4 ${formData.goal === g.id ? 'border-primary bg-primary/10' : 'border-white/10 bg-surface/30 hover:border-white/30'}`}
                  >
                    <div className={`p-3 rounded-xl ${formData.goal === g.id ? 'bg-primary text-white' : 'bg-surface text-zinc-400'}`}>
                      {g.icon}
                    </div>
                    <span className="text-lg font-medium">{g.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-3xl font-bold mb-2">Tell us about yourself</h2>
              <p className="text-zinc-400 mb-8">To calculate your macros accurately, we need some details.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">Age</label>
                  <input type="number" placeholder="25" className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">Gender</label>
                  <select className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:outline-none appearance-none">
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">Weight (kg)</label>
                  <input type="number" placeholder="70" className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">Height (cm)</label>
                  <input type="number" placeholder="175" className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:outline-none" />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-3xl font-bold mb-2">Lifestyle preferences</h2>
              <p className="text-zinc-400 mb-8">Final step to customize your plans.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Activity Level</label>
                  <select className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:outline-none appearance-none">
                    <option>Sedentary (Office job)</option>
                    <option>Lightly Active</option>
                    <option>Moderately Active</option>
                    <option>Very Active</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Dietary Preference</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div onClick={() => updateForm('dietPreference', 'veg')} className={`p-4 text-center rounded-xl border cursor-pointer ${formData.dietPreference === 'veg' ? 'border-primary bg-primary/10 text-white' : 'border-white/10 bg-surface/30 text-zinc-400 hover:border-white/30'}`}>
                      Vegetarian
                    </div>
                    <div onClick={() => updateForm('dietPreference', 'non-veg')} className={`p-4 text-center rounded-xl border cursor-pointer ${formData.dietPreference === 'non-veg' ? 'border-primary bg-primary/10 text-white' : 'border-white/10 bg-surface/30 text-zinc-400 hover:border-white/30'}`}>
                      Non-Vegetarian
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-10 flex justify-between">
            <button 
              onClick={handleBack}
              className={`px-6 py-3 font-medium flex items-center transition-opacity ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:text-primary'}`}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            <button 
              onClick={handleNext}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium flex items-center transition-all hover:shadow-[0_0_20px_rgba(109,40,217,0.4)]"
            >
              {step === 3 ? 'Generate Plan' : 'Continue'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
