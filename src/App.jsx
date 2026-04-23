import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import WhatsAppButton from './components/WhatsAppButton';
import { Leaf, Microscope, Award, MapPin, Phone, Mail, Globe, CheckCircle2 } from 'lucide-react';

function App() {
  const [inquiryProduct, setInquiryProduct] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          product: inquiryProduct
        })
      });

      const data = await response.json();
      if (data.success) {
        setStatus({ type: 'success', message: 'Thank you! Your inquiry has been submitted.' });
        setFormData({ name: '', email: '', details: '' });
      } else {
        setStatus({ type: 'error', message: data.message });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Connection failed. Is the server running?' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-sde-gold selection:text-white">
      <Navbar />

      <main>
        <Hero />

        {/* Brand Mission Section */}
        <section id="about" className="py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-sde-light/50 -skew-x-12 translate-x-1/2"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-sde-gold font-black uppercase tracking-widest text-[10px] mb-4 block">WHO WE ARE</span>
                <h2 className="text-5xl font-serif text-sde-dark mb-8 leading-tight">Setting the Standard in <span className="italic">Food Dehydration</span></h2>
                <p className="text-sde-muted text-lg leading-relaxed mb-8">
                  Sri Dhuthi Enterprises (SDE) is a global leader in natural, safe, and sustainable dehydrated food solutions. We specialize in the manufacturing and distribution of premium dehydrated vegetables, spray-dried fruit powders, and herbal extracts.
                </p>
                <div className="space-y-4 mb-10">
                  {[
                    'Farm-to-Factory vertical integration',
                    'Advanced Spray Drying & Dehydration tech',
                    'Strict ISO & FSSAI certified quality control',
                    'Global supply chain & logistics expertise'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sde-gold" />
                      <span className="font-semibold text-sde-dark">{text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-8">
                  <div className="border-l-4 border-sde-gold pl-6">
                    <div className="text-3xl font-bold text-sde-dark">15+</div>
                    <div className="text-xs text-sde-muted uppercase tracking-widest font-black">Years Experience</div>
                  </div>
                  <div className="border-l-4 border-sde-gold pl-6">
                    <div className="text-3xl font-bold text-sde-dark">50+</div>
                    <div className="text-xs text-sde-muted uppercase tracking-widest font-black">Global Clients</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: <Leaf />, title: 'Pure Natural', desc: 'Zero additives or preservatives.' },
                  { icon: <Microscope />, title: 'Tech Driven', desc: 'Precision nutrient retention.' },
                  { icon: <Award />, title: 'Certified', desc: 'International food safety standards.' },
                  { icon: <Globe />, title: 'Global Reach', desc: 'Supplying markets worldwide.' },
                ].map((item, i) => (
                  <div key={i} className="bg-sde-light p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100">
                    <div className="text-sde-gold mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-sde-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProductCatalog onQuote={(name) => setInquiryProduct(name)} />

        <Process />
        <WhyChooseUs />

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-sde-dark text-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <span className="text-sde-gold font-black uppercase tracking-widest text-[10px] mb-4 block">GET IN TOUCH</span>
                <h2 className="text-5xl font-serif mb-8">Discuss Your Bulk <br /><span className="text-sde-gold italic">Requirements</span></h2>
                <p className="text-gray-400 text-lg mb-12">Our procurement experts are ready to assist you with technical specifications and bulk pricing.</p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-sde-gold group-hover:bg-sde-gold group-hover:text-white transition-all"><MapPin /></div>
                    <div>
                      <h4 className="font-bold text-lg">Global HQ</h4>
                      <p className="text-gray-400">Plot No. 42, Industrial Estate, Hyderabad, India.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-sde-gold group-hover:bg-sde-gold group-hover:text-white transition-all"><Phone /></div>
                    <div>
                      <h4 className="font-bold text-lg">Direct Line</h4>
                      <p className="text-gray-400">+91 8688165049</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-sde-gold group-hover:bg-sde-gold group-hover:text-white transition-all"><Mail /></div>
                    <div>
                      <h4 className="font-bold text-lg">Email Inquiry</h4>
                      <p className="text-gray-400">koppalasaisantosh@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative">
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-sde-gold text-white px-8 py-2 rounded-full text-xs font-black tracking-widest uppercase">Fast Response</div>
                <form className="space-y-8" onSubmit={handleSubmit}>
                  {status.message && (
                    <div className={`p-4 rounded-2xl text-sm font-bold ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                      {status.message}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sde-dark">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-sde-muted">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-sde-light border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-sde-gold outline-none text-sm transition-all" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-sde-muted">Business Email</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-sde-light border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-sde-gold outline-none text-sm transition-all" 
                        placeholder="name@company.com" 
                      />
                    </div>
                  </div>
                  <div className="space-y-3 text-sde-dark">
                    <label className="text-xs font-black uppercase tracking-widest text-sde-muted">Product of Interest</label>
                    <input 
                      type="text" 
                      value={inquiryProduct}
                      onChange={(e) => setInquiryProduct(e.target.value)}
                      className="w-full bg-sde-light border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-sde-gold outline-none text-sm transition-all" 
                      placeholder="e.g. Red Onion Flakes" 
                    />
                  </div>
                  <div className="space-y-3 text-sde-dark">
                    <label className="text-xs font-black uppercase tracking-widest text-sde-muted">Requirement Details</label>
                    <textarea 
                      rows="4" 
                      required
                      value={formData.details}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                      className="w-full bg-sde-light border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-sde-gold outline-none text-sm transition-all" 
                      placeholder="Volume, Packaging, Destination..."
                    ></textarea>
                  </div>
                  <button 
                    disabled={loading}
                    className={`w-full btn-primary py-5 text-sm uppercase tracking-[3px] font-black shadow-2xl shadow-sde-gold/40 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                  >
                    {loading ? 'Sending...' : 'Request Quote'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#080c14] text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="space-y-8">
              <div className="text-3xl font-black tracking-tighter">SRI DHUTHI <span className="text-sde-gold font-serif italic font-normal">ENTERPRISES</span></div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">Global suppliers of precision-processed dehydrated food ingredients. Committed to pure essence and technological innovation since 2010.</p>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-sde-gold mb-10">Quick Access</h4>
              <ul className="space-y-5 text-sm text-gray-400 font-semibold">
                <li><a href="#home" className="hover:text-sde-gold transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-sde-gold transition-colors">About Us</a></li>
                <li><a href="#products" className="hover:text-sde-gold transition-colors">Product Portfolio</a></li>
                <li><a href="#contact" className="hover:text-sde-gold transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-sde-gold mb-10">Product Groups</h4>
              <ul className="space-y-5 text-sm text-gray-400 font-semibold">
                <li><a href="#" className="hover:text-sde-gold transition-colors">Dehydrated Veggies</a></li>
                <li><a href="#" className="hover:text-sde-gold transition-colors">Spray Dried Powders</a></li>
                <li><a href="#" className="hover:text-sde-gold transition-colors">Dried Herbal Leaves</a></li>
                <li><a href="#" className="hover:text-sde-gold transition-colors">Natural Extracts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-sde-gold mb-10">Global Update</h4>
              <p className="text-sm text-gray-500 mb-6">Receive industry insights and new product launches.</p>
              <div className="flex bg-white/5 p-2 rounded-2xl border border-white/10 focus-within:border-sde-gold transition-colors">
                <input type="email" className="bg-transparent px-4 py-2 outline-none text-xs w-full" placeholder="Business Email" />
                <button className="bg-sde-gold text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">Join</button>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-600">
            <div>&copy; 2026 Sri Dhuthi Enterprises. All rights reserved.</div>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Trade</a>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}

export default App;
