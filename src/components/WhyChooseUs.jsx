import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Truck, Package, Users, CircleDollarSign } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'QUALITY & SAFETY',
      description: 'Maintain Stringent Product Quality Measures'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'STANDARDS',
      description: 'Maintain Ethical Standards and Fair Business Policy'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'FAST & SAFE DISPATCH',
      description: 'Get the products Delivery On time by maintaining farm quality'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'VARIETY OF PRODUCTS',
      description: 'A comprehensive range of Seed Products'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'CUSTOMER RELATIONSHIP',
      description: 'Believe in sustainable & long-term relationship'
    },
    {
      icon: <CircleDollarSign className="w-8 h-8" />,
      title: 'REASONABLE PRICES',
      description: 'Maintain Stringent Product Quality Measures'
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-serif text-sde-dark mb-6">WHY CHOOSE US</h2>
          <div className="w-24 h-1 bg-sde-gold mx-auto mb-6"></div>
          <p className="text-sde-muted text-lg">Here is why we are different from Others</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group text-center"
            >
              <div className="mb-8 relative">
                <div className="w-20 h-20 bg-sde-dark rounded-full flex items-center justify-center text-white mx-auto group-hover:bg-sde-gold transition-colors duration-500 shadow-xl shadow-sde-dark/20 group-hover:shadow-sde-gold/30">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-black text-sde-dark mb-4 tracking-tight group-hover:text-sde-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-sde-muted text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Subtle hover accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-sde-gold group-hover:w-1/2 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
