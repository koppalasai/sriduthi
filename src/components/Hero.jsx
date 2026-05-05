import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] h-screen flex items-center overflow-hidden">
      {/* Full-screen Background Image - Lush green farmland */}
      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1920"
        alt="Lush green agricultural farmland"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e1a]/90 via-[#0a2e1a]/75 to-[#0a2e1a]/50"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e1a]/80 via-transparent to-[#0a2e1a]/40"></div>

      {/* Decorative geometric accent */}
      <div className="absolute top-10 right-10 md:top-20 md:right-20 w-32 h-32 md:w-72 md:h-72 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none">
          <polygon points="100,10 190,190 10,190" fill="rgba(100,200,100,0.3)" stroke="rgba(100,200,100,0.2)" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl text-white"
        >
          {/* Subtitle tag */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block bg-white/10 backdrop-blur-sm text-green-300 text-[10px] md:text-xs font-bold uppercase tracking-[2px] md:tracking-[4px] px-4 md:px-5 py-2 rounded-full mb-6 md:mb-8 border border-green-400/20"
          >
            🌿 Premium Dehydrated Food Solutions
          </motion.span>

          {/* Main Quote / Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="text-4xl sm:text-5xl md:text-7xl font-serif leading-[1.2] md:leading-[1.15] mb-6 md:mb-8 tracking-tight"
          >
            <span className="italic">Pure. Natural.</span> <br />
            <span className="text-green-400">Powerful.</span>
          </motion.h1>

          {/* Supporting Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base md:text-xl text-white/70 mb-8 md:mb-12 max-w-xl leading-relaxed font-light"
          >
            Premium Fruit, Vegetable &amp; Leaf Powders — Straight from Farm to Industry.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-5"
          >
            <a
              href="#products"
              className="group flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-400/40 hover:-translate-y-0.5 active:scale-95 text-sm md:text-base"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm active:scale-95 text-sm md:text-base"
            >
              Our Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

    </section>
  );
};

export default Hero;
