'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Star, Info } from 'lucide-react';
import Image from 'next/image';

// Performans için SVG'leri external dosyalar olarak kullanıyoruz
const Cup6oz = () => (
  <Image 
    src="/cup-6oz.svg" 
    alt="6oz Karton Bardak" 
    width={140} 
    height={140}
    className="w-full h-full"
    loading="lazy"
    priority={false}
  />
);

const Cup7oz = () => (
  <Image 
    src="/cup-7oz.svg" 
    alt="7oz Karton Bardak" 
    width={160} 
    height={155}
    className="w-full h-full"
    loading="lazy"
    priority={false}
  />
);

const Cup10oz = () => (
  <Image 
    src="/cup-10oz.svg" 
    alt="10oz Karton Bardak" 
    width={190} 
    height={180}
    className="w-full h-full"
    loading="lazy"
    priority={false}
  />
);

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

      {/* Floating Particles - Reduced for performance */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-800/15 rounded-full"
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
            style={{
              left: `${15 + i * 20}%`,
              top: `${30 + i * 10}%`,
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
            <span className="text-gradient">Çeşitlerimiz</span>
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
                      y: [0, -6, 0]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <product.component />
                  </motion.div>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-green-800 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {product.badge}
                </div>
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