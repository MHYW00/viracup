'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, Clock, Leaf, CreditCard, MessageCircle, Star, Shield, Award } from 'lucide-react';

export default function Footer() {
  const handleWhatsAppContact = () => {
    const message = 'Merhaba, Viracup hakkında bilgi almak istiyorum.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/905321319594?text=${encodedMessage}`, '_blank');
  };

  const handleProductContact = (productName: string) => {
    const message = `Merhaba, ${productName} hakkında bilgi almak istiyorum.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/905321319594?text=${encodedMessage}`, '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-green-800 via-green-900 to-stone-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-stone-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-sm mx-auto sm:max-w-none">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center sm:text-left"
          >
            <div>
              <motion.h3 
                whileHover={{ scale: 1.05 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 font-manrope bg-gradient-to-r from-white to-stone-200 bg-clip-text text-transparent"
              >
                VIRACUP
              </motion.h3>
              <p className="text-stone-200 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
                Doğa dostu karton bardakların öncüsü. 
                Sürdürülebilir gelecek için her bardakta fark yaratıyoruz.
              </p>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-green-200 bg-white/10 p-2 rounded-lg sm:rounded-xl backdrop-blur-sm text-xs sm:text-sm"
              >
                <Leaf className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium">%100 Çevre Dostu</span>
              </motion.div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Bizi Takip Edin</h4>
              <div className="flex gap-2 justify-center sm:justify-start">
                {[
                  { icon: Facebook, href: "#", color: "from-blue-600 to-blue-700" },
                  { icon: Instagram, href: "#", color: "from-pink-600 to-purple-700" },
                  { icon: Twitter, href: "#", color: "from-blue-400 to-blue-600" },
                  { icon: Linkedin, href: "#", color: "from-blue-700 to-blue-800" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center sm:text-left"
          >
            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 text-white">Ürünlerimiz</h4>
            <ul className="space-y-1 sm:space-y-2">
              {[
                "6oz Küçük Bardak",
                "7oz Orta Bardak", 
                "10oz Büyük Bardak",
                "Özel Tasarım",
                "Toplu Sipariş"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="group flex justify-center sm:justify-start"
                >
                  <button 
                    onClick={() => handleProductContact(item)}
                    className="flex items-center text-stone-200 hover:text-white transition-all duration-300 text-xs sm:text-sm cursor-pointer"
                  >
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full mr-2 group-hover:bg-green-300 transition-colors duration-300"></div>
                    {item}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center sm:text-left"
          >
            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 text-white">Hizmetlerimiz</h4>
            <ul className="space-y-1 sm:space-y-2">
              {[
                "Özel Baskı", 
                "Müşteri Desteği",
                "Kalite Garantisi",
                "Hızlı Üretim",
                "Toptan Satış"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="group flex justify-center sm:justify-start"
                >
                  <button 
                    onClick={() => handleProductContact(item)}
                    className="flex items-center text-stone-200 hover:text-white transition-all duration-300 text-xs sm:text-sm cursor-pointer"
                  >
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-stone-400 rounded-full mr-2 group-hover:bg-stone-300 transition-colors duration-300"></div>
                    {item}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center sm:text-left"
          >
            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 text-white">İletişim</h4>
            <div className="space-y-2 sm:space-y-3">
              {[
                {
                  icon: Phone,
                  title: "+90 532 131 95 94",
                  subtitle: "Sipariş Hattı"
                },
                {
                  icon: Mail,
                  title: "birinci854@gmail.com",
                  subtitle: "E-posta"
                },
                {
                  icon: MapPin,
                  title: "Akçaabat, Trabzon, Türkiye",
                  subtitle: "Merkez Ofis"
                },
                {
                  icon: Clock,
                  title: "Pzt-Cmt: 08:00-18:00",
                  subtitle: "Çalışma Saatleri"
                }
              ].map((contact, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm justify-center sm:justify-start"
                >
                  <contact.icon className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">{contact.title}</div>
                    <div className="text-stone-300 text-xs">{contact.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsAppContact}
              className="w-full mt-3 sm:mt-4 group relative inline-flex items-center justify-center px-3 sm:px-4 py-2 sm:py-3 text-white font-semibold transition-all duration-300 rounded-lg sm:rounded-xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl text-xs sm:text-sm"
            >
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 relative z-10" />
              <span className="relative z-10">WhatsApp</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Payment & Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/20 py-4 sm:py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div>
              <h5 className="font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                <CreditCard className="w-3 h-3 sm:w-4 sm:h-4" />
                Ödeme Seçenekleri
              </h5>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {["Kredi Kartı", "EFT/Havale"].map((payment, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-lg text-xs font-medium"
                  >
                    {payment}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex gap-2 sm:gap-4 items-center">
              {[
                { icon: Leaf, label: "Çevre Dostu" },
                { icon: Award, label: "ISO 9001" },
                { icon: Shield, label: "SSL Güvenlik" }
              ].map((badge, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-center"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-1">
                    <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  </div>
                  <div className="text-xs text-stone-300 font-medium">{badge.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/20 py-3 sm:py-4"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="text-center md:text-left">
              <p className="text-stone-200">
                © 2024 Viracup. Tüm hakları saklıdır.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 text-xs">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/kullanici-sozlesmesi"
                className="text-stone-200 hover:text-white transition-colors duration-300 relative group"
              >
                Kullanıcı Sözleşmesi
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 