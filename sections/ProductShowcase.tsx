'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Star, Info } from 'lucide-react';

// SVG bileşenleri - Gerçek karton bardak referansı
const Cup6oz = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" style={{background: 'transparent'}} className="w-full h-full">
      <defs>
        <linearGradient id="cupBody6oz" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#ffffff'}}/>
          <stop offset="30%" style={{stopColor:'#fefefe'}}/>
          <stop offset="70%" style={{stopColor:'#f8f8f8'}}/>
          <stop offset="100%" style={{stopColor:'#f0f0f0'}}/>
        </linearGradient>
        <linearGradient id="cupRim6oz" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor:'#ffffff'}}/>
          <stop offset="100%" style={{stopColor:'#e8e8e8'}}/>
        </linearGradient>
        <filter id="shadow6oz">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#00000020"/>
        </filter>
      </defs>
      
      {/* Gölge */}
      <ellipse cx="70" cy="125" rx="20" ry="4" fill="#00000010"/>
      
      {/* Ana konik bardak gövdesi - 6oz küçük */}
      <path d="M35 15 L105 15 L95 115 L45 115 Z" 
            fill="url(#cupBody6oz)" 
            stroke="#d4d4d4" 
            strokeWidth="1"
            filter="url(#shadow6oz)"/>
      
      {/* Karton bardak kıvrımları */}
      <path d="M37 25 L103 25" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M39 35 L101 35" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M41 45 L99 45" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M43 55 L97 55" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M45 65 L95 65" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M47 75 L93 75" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M49 85 L91 85" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M51 95 L89 95" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M53 105 L87 105" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      
      {/* Kalın üst kenar (rim) */}
      <ellipse cx="70" cy="15" rx="35" ry="3" 
               fill="url(#cupRim6oz)" 
               stroke="#CBB994" 
               strokeWidth="1"/>
      <ellipse cx="70" cy="13" rx="35" ry="2" 
               fill="#ffffff" 
               opacity="0.8"/>
      
      {/* Alt kenar */}
      <ellipse cx="70" cy="115" rx="25" ry="2" 
               fill="#e8e8e8" 
               stroke="#d4d4d4" 
               strokeWidth="0.5"/>
      
      {/* Logo alanı - gerçekçi */}
      <ellipse cx="70" cy="65" rx="18" ry="12" 
               fill="#F5F5F5" 
               stroke="#CBB994" 
               strokeWidth="0.5"
               opacity="0.9"/>
      
      {/* VIRACUP logo */}
      <text x="70" y="68" 
            textAnchor="middle" 
            fontSize="7" 
            fill="#166534" 
            fontWeight="bold" 
            fontFamily="Arial, sans-serif">VIRACUP</text>
      
      {/* Kapasite */}
      <text x="70" y="78" 
            textAnchor="middle" 
            fontSize="9" 
            fill="#78716c" 
            fontWeight="bold" 
            fontFamily="Arial, sans-serif">6 OZ</text>
      
      {/* Sol taraf highlight */}
      <path d="M37 20 L39 20 L39 110 L37 110 Z" 
            fill="url(#cupRim6oz)" 
            opacity="0.3"/>
      
      {/* Sağ taraf gölge */}
      <path d="M101 20 L103 20 L93 110 L95 110 Z" 
            fill="#e0e0e0" 
            opacity="0.4"/>
    </svg>
  );
};

const Cup7oz = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 155" style={{background: 'transparent'}} className="w-full h-full">
      <defs>
        <linearGradient id="cupBody7oz" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#ffffff'}}/>
          <stop offset="30%" style={{stopColor:'#fefefe'}}/>
          <stop offset="70%" style={{stopColor:'#f8f8f8'}}/>
          <stop offset="100%" style={{stopColor:'#f0f0f0'}}/>
        </linearGradient>
        <linearGradient id="cupRim7oz" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor:'#ffffff'}}/>
          <stop offset="100%" style={{stopColor:'#e8e8e8'}}/>
        </linearGradient>
        <filter id="shadow7oz">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#00000020"/>
        </filter>
      </defs>
      
      {/* Gölge */}
      <ellipse cx="80" cy="140" rx="26" ry="5" fill="#00000010"/>
      
      {/* Ana konik bardak gövdesi - 7oz orta */}
      <path d="M35 15 L125 15 L115 130 L45 130 Z" 
            fill="url(#cupBody7oz)" 
            stroke="#d4d4d4" 
            strokeWidth="1"
            filter="url(#shadow7oz)"/>
      
      {/* Karton bardak kıvrımları */}
      <path d="M37 28 L123 28" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M39 41 L121 41" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M41 54 L119 54" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M43 67 L117 67" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M45 80 L115 80" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M47 93 L113 93" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M49 106 L111 106" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M51 119 L109 119" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      
      {/* Kalın üst kenar (rim) */}
      <ellipse cx="80" cy="15" rx="45" ry="4" 
               fill="url(#cupRim7oz)" 
               stroke="#CBB994" 
               strokeWidth="1"/>
      <ellipse cx="80" cy="13" rx="45" ry="3" 
               fill="#ffffff" 
               opacity="0.8"/>
      
      {/* Alt kenar */}
      <ellipse cx="80" cy="130" rx="35" ry="3" 
               fill="#e8e8e8" 
               stroke="#d4d4d4" 
               strokeWidth="0.5"/>
      
      {/* Logo alanı - gerçekçi */}
      <ellipse cx="80" cy="75" rx="22" ry="14" 
               fill="#F5F5F5" 
               stroke="#CBB994" 
               strokeWidth="0.5"
               opacity="0.9"/>
      
      {/* VIRACUP logo */}
      <text x="80" y="78" 
            textAnchor="middle" 
            fontSize="8" 
            fill="#166534" 
            fontWeight="bold" 
            fontFamily="Arial, sans-serif">VIRACUP</text>
      
      {/* Kapasite */}
      <text x="80" y="90" 
            textAnchor="middle" 
            fontSize="10" 
            fill="#78716c" 
            fontWeight="bold" 
            fontFamily="Arial, sans-serif">7 OZ</text>
      
      {/* Sol taraf highlight */}
      <path d="M37 20 L39 20 L39 125 L37 125 Z" 
            fill="url(#cupRim7oz)" 
            opacity="0.3"/>
      
      {/* Sağ taraf gölge */}
      <path d="M121 20 L123 20 L113 125 L115 125 Z" 
            fill="#e0e0e0" 
            opacity="0.4"/>
    </svg>
  );
};

const Cup10oz = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 180" style={{background: 'transparent'}} className="w-full h-full">
      <defs>
        <linearGradient id="cupBody10oz" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#ffffff'}}/>
          <stop offset="30%" style={{stopColor:'#fefefe'}}/>
          <stop offset="70%" style={{stopColor:'#f8f8f8'}}/>
          <stop offset="100%" style={{stopColor:'#f0f0f0'}}/>
        </linearGradient>
        <linearGradient id="cupRim10oz" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor:'#ffffff'}}/>
          <stop offset="100%" style={{stopColor:'#e8e8e8'}}/>
        </linearGradient>
        <linearGradient id="cupLid10oz" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor:'#CBB994'}}/>
          <stop offset="100%" style={{stopColor:'#A0936B'}}/>
        </linearGradient>
        <filter id="shadow10oz">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#00000020"/>
        </filter>
      </defs>
      
      {/* Gölge */}
      <ellipse cx="95" cy="165" rx="32" ry="6" fill="#00000010"/>
      
      {/* Kapak - gerçekçi */}
      <ellipse cx="95" cy="8" rx="48" ry="6" 
               fill="url(#cupLid10oz)" 
               stroke="#78716c" 
               strokeWidth="1"/>
      <ellipse cx="95" cy="6" rx="48" ry="4" 
               fill="#CBB994" 
               opacity="0.8"/>
      {/* Kapak merkez çukuru */}
      <ellipse cx="95" cy="7" rx="8" ry="2" 
               fill="#78716c" 
               opacity="0.6"/>
      
      {/* Ana konik bardak gövdesi - 10oz en geniş */}
      <path d="M40 22 L150 22 L135 155 L55 155 Z" 
            fill="url(#cupBody10oz)" 
            stroke="#d4d4d4" 
            strokeWidth="1"
            filter="url(#shadow10oz)"/>
      
      {/* Karton bardak kıvrımları */}
      <path d="M42 40 L148 40" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M44 55 L146 55" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M46 70 L144 70" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M48 85 L142 85" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M50 100 L140 100" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M52 115 L138 115" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M54 130 L136 130" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      <path d="M56 145 L134 145" stroke="#e8e8e8" strokeWidth="0.5" opacity="0.7"/>
      
      {/* Kalın üst kenar (rim) */}
      <ellipse cx="95" cy="22" rx="55" ry="5" 
               fill="url(#cupRim10oz)" 
               stroke="#CBB994" 
               strokeWidth="1"/>
      <ellipse cx="95" cy="20" rx="55" ry="4" 
               fill="#ffffff" 
               opacity="0.8"/>
      
      {/* Alt kenar */}
      <ellipse cx="95" cy="155" rx="40" ry="4" 
               fill="#e8e8e8" 
               stroke="#d4d4d4" 
               strokeWidth="0.5"/>
      
      {/* Logo alanı - gerçekçi */}
      <ellipse cx="95" cy="95" rx="28" ry="18" 
               fill="#F5F5F5" 
               stroke="#CBB994" 
               strokeWidth="0.5"
               opacity="0.9"/>
      
      {/* VIRACUP logo */}
      <text x="95" y="98" 
            textAnchor="middle" 
            fontSize="9" 
            fill="#166534" 
            fontWeight="bold" 
            fontFamily="Arial, sans-serif">VIRACUP</text>
      
      {/* Kapasite */}
      <text x="95" y="112" 
            textAnchor="middle" 
            fontSize="11" 
            fill="#78716c" 
            fontWeight="bold" 
            fontFamily="Arial, sans-serif">10 OZ</text>
      
      {/* Sol taraf highlight */}
      <path d="M42 27 L44 27 L44 150 L42 150 Z" 
            fill="url(#cupRim10oz)" 
            opacity="0.3"/>
      
      {/* Sağ taraf gölge */}
      <path d="M146 27 L148 27 L133 150 L135 150 Z" 
            fill="#e0e0e0" 
            opacity="0.4"/>
    </svg>
  );
};

const products = [
  {
    id: 1,
    name: "6oz Küçük Bardak",
    subtitle: "Espresso ve küçük içecekler için ideal. Kompakt ve şık tasarım.",
    capacity: "180ml kapasite",
    features: [
      "Sızdırmaz tasarım",
      "Kişiye özel baskı",
      "Ergonomik tutma"
    ],
    minOrder: "Minimum Sipariş: 3000 adet",
    component: Cup6oz,
    badge: "POPÜLER",
    delay: 0.1
  },
  {
    id: 2,
    name: "7oz Orta Bardak", 
    subtitle: "Kahve ve çay için mükemmel boyut. En popüler seçenek.",
    capacity: "210ml kapasite",
    features: [
      "Ergonomik tutma",
      "Premium kalite",
      "Çevre dostu malzeme"
    ],
    minOrder: "Minimum Sipariş: 3000 adet",
    component: Cup7oz,
    badge: "TERCİH EDİLEN",
    delay: 0.2
  },
  {
    id: 3,
    name: "10oz Büyük Bardak",
    subtitle: "Soğuk içecekler ve büyük porsiyonlar için. Cafe standardı.",
    capacity: "300ml kapasite", 
    features: [
      "Extra dayanıklı",
      "Profesyonel görünüm",
      "Geniş ağız açısı"
    ],
    minOrder: "Minimum Sipariş: 3000 adet",
    component: Cup10oz,
    badge: "CAFE STANDARDI",
    delay: 0.3
  }
];

export default function ProductShowcase() {
  const handleWhatsAppContact = (productName: string) => {
    const message = `Merhaba, ${productName} hakkında bilgi almak istiyorum.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/905321319594?text=${encodedMessage}`, '_blank');
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center bg-green-800/10 px-6 py-3 rounded-full mb-6"
          >
            <Star className="w-5 h-5 text-green-800 mr-2" />
            <span className="text-green-800 font-semibold">Premium Ürünlerimiz</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-green-800 mb-4 sm:mb-6 font-manrope">
            Karton Bardak{' '}
            <span 
              className="text-gradient"
              style={{
                background: 'linear-gradient(135deg, #15803d 0%, #16a34a 30%, #eab308 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: '#15803d',
                fontWeight: '800'
              }}
            >
              Çeşitlerimiz
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 md:px-0">
            Her ihtiyacınıza uygun, çevre dostu karton bardaklar. 
            Kalite ve sürdürülebilirlik bir arada.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-stone-50 to-stone-100 p-4">
                <div className="aspect-[4/5] flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      rotateY: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <product.component />
                  </motion.div>
                </div>
                
                {/* Badge */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-4 right-4 bg-green-800 text-white px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {product.badge}
                </motion.div>
              </div>

              {/* Product Info */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-800 mb-2 sm:mb-3 font-manrope">
                {product.name}
              </h3>
              <p className="text-sm sm:text-base text-stone-600 mb-3 sm:mb-4 leading-relaxed">
                {product.subtitle}
              </p>

              {/* Capacity */}
              <div className="bg-stone-100/50 rounded-xl p-2 sm:p-3 mb-3 sm:mb-4">
                <div className="text-sm sm:text-base md:text-lg font-bold text-green-800">
                  {product.capacity}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4 sm:mb-6">
                <h4 className="font-semibold text-green-800 mb-2 sm:mb-3 text-sm sm:text-base">Özellikler:</h4>
                <ul className="space-y-1 sm:space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm text-stone-600">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-800 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Min Order */}
              <div className="bg-green-800/5 rounded-xl p-2 sm:p-3 mb-4 sm:mb-6">
                <div className="text-xs sm:text-sm text-green-800 font-semibold">
                  {product.minOrder}
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleWhatsAppContact(product.name)}
                className="w-full group relative inline-flex items-center justify-center px-6 py-4 text-white font-semibold transition-all duration-300 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <Info className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Bilgi Al</span>
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/40"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4 font-manrope">
            Özel Tasarım mı İstiyorsunuz?
          </h3>
          <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
            Markanıza özel logo, renk ve tasarım seçenekleri için 
            WhatsApp'tan bizimle iletişime geçin.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleWhatsAppContact('Özel Tasarım')}
            className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-white transition-all duration-300 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-xl hover:shadow-2xl"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            <MessageCircle className="w-6 h-6 mr-3 relative z-10" />
            <span className="relative z-10">WhatsApp ile Özel Teklif Al</span>
            <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 