import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Red Onion Flakes',
    category: 'dehydrated',
    description: 'Premium quality dehydrated red onion flakes. Intense flavor and aroma, perfect for seasonings and ready-to-eat meals.',
    img: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'Garlic Powder',
    category: 'dehydrated',
    description: 'Fine grade garlic powder with pure pungent flavor. 100% natural with no anti-caking agents.',
    img: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Tomato Powder',
    category: 'powders',
    description: 'Vibrant and tangy spray-dried tomato powder. Ideal for soups, sauces, and snack seasonings.',
    img: 'https://plus.unsplash.com/premium_photo-1723759268094-df26a0e6757c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    name: 'Beetroot Powder',
    category: 'powders',
    description: 'Nutrient-rich beetroot powder. Excellent natural food colorant and health supplement ingredient.',
    img: 'https://images.unsplash.com/photo-1730035375813-88f7f26c3c82?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    name: 'Banana Powder',
    category: 'fruit',
    description: 'Spray-dried ripe banana powder. Natural sweetener and flavor for baby foods and smoothies.',
    img: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    name: 'Mango Powder',
    category: 'fruit',
    description: 'Aromatic and sweet spray-dried Alphonso mango powder. Perfect for confectionery and desserts.',
    img: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 7,
    name: 'Moringa Leaves',
    category: 'leaves',
    description: 'Carefully dried Moringa Oleifera leaves. Retains all essential nutrients and vibrant green color.',
    img: 'https://images.unsplash.com/photo-1667928729816-0ed8c59cd3c9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 8,
    name: 'Curry Leaves Powder',
    category: 'leaves',
    description: 'Aromatic dehydrated curry leaves powder. Essential for authentic spice blends and culinary applications.',
    img: 'https://images.unsplash.com/photo-1652757359639-575cbb557a38?auto=format&fit=crop&q=80&w=800'
  },
];

const ProductCatalog = ({ onQuote }) => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(p => {
    const matchesFilter = filter === 'all' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="products" className="py-32 bg-sde-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-5xl font-serif text-sde-dark mb-6">Our Product Portfolio</h2>
            <p className="text-sde-muted text-lg">Precision-processed ingredients for global food manufacturing standards.</p>
          </div>

          <div className="relative group min-w-[300px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sde-muted group-focus-within:text-sde-gold transition-colors" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border-none px-12 py-4 rounded-2xl shadow-sm focus:ring-2 focus:ring-sde-gold outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-16">
          {['all', 'dehydrated', 'powders', 'fruit', 'leaves'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-xl font-bold capitalize transition-all border-2 ${filter === cat
                ? 'bg-sde-dark border-sde-dark text-white'
                : 'bg-white border-transparent text-sde-muted hover:border-gray-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
              >
                <div className="h-64 overflow-hidden bg-gray-50 relative">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-sde-dark uppercase tracking-widest border border-white/50">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-sde-dark">{product.name}</h3>
                  <p className="text-sm text-sde-muted leading-relaxed mb-8 line-clamp-3">
                    {product.description}
                  </p>
                  <button
                    onClick={() => {
                      onQuote(product.name);
                      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center justify-between w-full p-4 rounded-2xl bg-sde-light text-sde-dark font-bold text-sm group-hover:bg-sde-gold group-hover:text-white transition-all duration-300"
                  >
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-sde-muted text-lg italic">No products match your search criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;
