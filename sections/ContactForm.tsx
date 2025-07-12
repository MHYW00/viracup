'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, Phone, Send, MapPin, Clock, Mail } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productType: '',
    quantity: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `
Merhaba! Viracup hakkında bilgi talebi:

👤 Ad Soyad: ${formData.name}
📧 E-posta: ${formData.email}
📞 Telefon: ${formData.phone}
🏢 Şirket: ${formData.company || 'Belirtilmemiş'}
📦 Ürün Türü: ${formData.productType || 'Belirtilmemiş'}
📊 Miktar: ${formData.quantity || 'Belirtilmemiş'}
💬 Mesaj: ${formData.message || 'Belirtilmemiş'}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/905321319594?text=${encodedMessage}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppContact = () => {
    const message = 'Merhaba, Viracup hakkında bilgi almak istiyorum.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/905321319594?text=${encodedMessage}`, '_blank');
  };

  const handlePhoneCall = () => {
    window.open('tel:+905321319594', '_self');
  };

  const handleEmailContact = () => {
    window.open('mailto:birinci854@gmail.com', '_self');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-green-100 to-stone-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-stone-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-800/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-green-800 mb-4 sm:mb-6 font-manrope">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-stone-700 max-w-3xl mx-auto px-2 sm:px-4 md:px-0">
            Karton bardak ihtiyaçlarınız için profesyonel ekibimizle iletişime geçin. 
            Size en uygun çözümleri sunalım!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/40">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-800 mb-4 sm:mb-6">İletişim Bilgileri</h3>
              
                              <div className="space-y-4 sm:space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center p-3 sm:p-4 bg-green-800/5 rounded-xl sm:rounded-2xl border border-green-800/10 hover:border-green-800/20 transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-800 mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-green-800 text-sm sm:text-base">Adres</div>
                    <div className="text-stone-600 text-xs sm:text-sm">Akçaabat, Trabzon, Türkiye</div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center p-3 sm:p-4 bg-green-800/5 rounded-xl sm:rounded-2xl border border-green-800/10 hover:border-green-800/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-800 mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-green-800 text-sm sm:text-base">Telefon</div>
                    <div className="text-stone-600 text-xs sm:text-sm">+90 532 131 95 94</div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center p-3 sm:p-4 bg-green-800/5 rounded-xl sm:rounded-2xl border border-green-800/10 hover:border-green-800/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-green-800 mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-green-800 text-sm sm:text-base">E-posta</div>
                    <div className="text-stone-600 text-xs sm:text-sm">birinci854@gmail.com</div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center p-3 sm:p-4 bg-green-800/5 rounded-xl sm:rounded-2xl border border-green-800/10 hover:border-green-800/20 transition-all duration-300"
                >
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-800 mr-3 sm:mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-green-800 text-sm sm:text-base">Çalışma Saatleri</div>
                    <div className="text-stone-600 text-xs sm:text-sm">Pazartesi - Cumartesi: 08:00 - 18:00</div>
                  </div>
                </motion.div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppContact}
                  className="w-full group relative inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl"
                >
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 relative z-10" />
                  <span className="relative z-10">WhatsApp ile Hızlı İletişim</span>
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePhoneCall}
                  className="w-full group relative inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-green-800 transition-all duration-300 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-green-800/20 hover:border-green-800/50 shadow-lg hover:shadow-xl"
                >
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-800/5 to-stone-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 relative z-10" />
                  <span className="relative z-10">Telefon ile Ara</span>
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-green-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleEmailContact}
                  className="w-full group relative inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-green-800 transition-all duration-300 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-green-800/20 hover:border-green-800/50 shadow-lg hover:shadow-xl"
                >
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-800/5 to-stone-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 relative z-10" />
                  <span className="relative z-10">E-posta ile İletişim</span>
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-green-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/40"
          >
            <h3 className="text-2xl font-bold text-green-800 mb-6">Bilgi Talep Formu</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-semibold text-green-800">Ad Soyad</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-green-800 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Adınızı girin"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-semibold text-green-800">E-posta</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-green-800 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="E-posta adresiniz"
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-semibold text-green-800">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-green-800 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Telefon numaranız"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-semibold text-green-800">Şirket</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-green-800 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Şirket adınız"
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-semibold text-green-800">Ürün Türü</label>
                  <select
                    name="productType"
                    value={formData.productType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-green-800 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  >
                    <option value="">Ürün seçiniz</option>
                    <option value="6oz Küçük Bardak">6oz Küçük Bardak</option>
                    <option value="7oz Orta Bardak">7oz Orta Bardak</option>
                    <option value="10oz Büyük Bardak">10oz Büyük Bardak</option>
                    <option value="Özel Tasarım">Özel Tasarım</option>
                  </select>
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-semibold text-green-800">Tahmini Miktar</label>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-green-800 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  >
                    <option value="">Miktar seçiniz</option>
                    <option value="3000-5000 adet">3000-5000 adet</option>
                    <option value="5000-10000 adet">5000-10000 adet</option>
                    <option value="10000-20000 adet">10000-20000 adet</option>
                    <option value="20000+ adet">20000+ adet</option>
                  </select>
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="block text-sm font-semibold text-green-800">Mesajınız</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-green-800 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                  placeholder="İhtiyaçlarınızı ve sorularınızı belirtin..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <Send className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">WhatsApp'tan Gönder</span>
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
