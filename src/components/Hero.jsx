import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-sde-dark">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1600" 
        alt="Premium Dehydrated Solutions" 
        className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
      />
      <div className="absolute inset-0 bg-hero-gradient"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl text-white"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-sde-gold font-black uppercase tracking-[6px] text-[10px] mb-6 block"
          >
            GLOBAL FOOD INGREDIENT SPECIALISTS
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8">
            Pure Essence. <br />
            <span className="text-sde-gold italic">Superior Quality.</span>
          </h1>
          <p className="text-xl opacity-80 mb-12 max-w-xl leading-relaxed font-light">
            Empowering the global food industry with high-purity dehydrated vegetables, spray-dried fruit powders, and natural extracts. Engineered for excellence.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#products" className="btn-primary group flex items-center gap-3">
              View Catalog
            </a>
            <a href="#about" className="btn-outline">
              Our Legacy
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold text-white">Scroll</span>
        <div className="w-[1px] h-12 bg-white"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
