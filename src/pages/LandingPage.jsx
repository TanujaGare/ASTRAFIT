import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      
      {/* Transformation Stats CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Ready to build your <span className="text-gradient">dream physique?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 mb-10"
          >
            Join AstraFit today and get your personalized training and nutrition plan in less than 2 minutes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/signup" className="inline-flex items-center justify-center px-10 py-5 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-lg transition-all hover:shadow-[0_0_40px_rgba(109,40,217,0.6)] hover:-translate-y-1">
              Start Your Journey Now
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
