import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { id: 1, title: 'Sourcing', desc: 'We partner with local farmers for the freshest seasonal produce.' },
  { id: 2, title: 'Cleaning', desc: 'Multi-stage washing and grading to ensure purity.' },
  { id: 3, title: 'Processing', desc: 'Low-temperature dehydration or spray drying for nutrient retention.' },
  { id: 4, title: 'Packaging', desc: 'Industrial-grade moisture-proof packaging for global shipping.' },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-sde-light/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-serif text-sde-dark mb-4">Our Process</h2>
          <p className="text-sde-muted">From farm to powder, we maintain the highest standards of hygiene and technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-sde-gold text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg shadow-sde-gold/20">
                {step.id}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-sde-muted leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
