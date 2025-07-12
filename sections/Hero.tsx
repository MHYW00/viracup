'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, Award, Zap } from 'lucide-react';

export default function Hero() {
  const handleWhatsAppContact = () => {
    const message = 'Merhaba, karton bardak siparişi vermek istiyorum.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/905321319594?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-green-100 to-blue-50">
      {/* Simplified Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6 font-manrope leading-tight">
              Karton Bardak
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Üreticisi
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
              Çevre dostu, kaliteli karton bardaklar ile işletmenizi destekliyoruz. 
              Profesyonel çözümler, hızlı teslimat.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
              <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-green-800 mb-2">Premium Kalite</h3>
              <p className="text-stone-600">ISO 9001 sertifikalı üretim</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
              <Zap className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-green-800 mb-2">Hızlı Teslimat</h3>
              <p className="text-stone-600">3-5 iş günü içinde teslim</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
              <Phone className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-green-800 mb-2">7/24 Destek</h3>
              <p className="text-stone-600">Müşteri memnuniyeti önceliğimiz</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleWhatsAppContact}
              className="group bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <span>Hemen Sipariş Ver</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="tel:+905321319594"
              className="bg-white/80 backdrop-blur-sm text-green-800 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 border border-white/40"
            >
              <Phone className="w-5 h-5" />
              <span>Hemen Ara</span>
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-stone-600"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-600" />
              <span>+90 532 131 95 94</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-green-600" />
              <span>birinci854@gmail.com</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 