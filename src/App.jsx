import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Onboarding from './pages/Onboarding';
import WorkoutPlanner from './pages/WorkoutPlanner';
import MealPlanner from './pages/MealPlanner';
import Progress from './pages/Progress';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-white selection:bg-primary/30">
        <Navbar />
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: '#18181b',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)',
            },
            success: {
              iconTheme: {
                primary: '#6d28d9',
                secondary: '#fff',
              },
            },
          }}
        />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workouts" element={<WorkoutPlanner />} />
            <Route path="/meals" element={<MealPlanner />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
