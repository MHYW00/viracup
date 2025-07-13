'use client';

import { motion } from 'framer-motion';
import { Recycle, Shield, Palette, Leaf, Star, ArrowRight, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Recycle,
    title: "%100 Geri Dönüşümlü",
    description: "Tamamen doğaya dost malzemelerden üretilen bardaklarımız çevreye zarar vermez ve geri dönüştürülebilir.",
    color: "from-green-600 to-green-700",
    delay: 0.1
  },
  {
    icon: Shield,
    title: "Sızdırmaz Tasarım",
    description: "Özel üretim teknolojimiz sayesinde bardaklarımız mükemmel sızdırmazlık sağlar ve uzun süre dayanıklılığını korur.",
    color: "from-blue-600 to-blue-700",
    delay: 0.2
  },
  {
    icon: Palette,
    title: "Kişiye Özel Baskı",
    description: "Markanıza özel tasarımlar ve logolarla bardaklarınızı kişiselleştirin. Profesyonel baskı kalitesi garantili.",
    color: "from-purple-600 to-purple-700",
    delay: 0.3
  }
];

const benefits = [
  "Doğa dostu üretim süreci",
  "ISO 9001 kalite sertifikası",
  "Hızlı teslimat imkanı",
  "Uygun fiyat garantisi",
  "7/24 müşteri desteği",
  "Özel tasarım seçenekleri"
];

export default function WhyViracup() {
  const handleWhatsAppContact = () => {
    const message = 'Merhaba, Viracup hakkında daha fazla bilgi almak istiyorum.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/905551234567?text=${encodedMessage}`, '_blank');
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
            <Leaf className="w-5 h-5 text-green-800 mr-2" />
            <span className="text-green-800 font-semibold">Çevre Dostu Çözüm</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-green-800 mb-4 sm:mb-6 font-manrope">
            Neden{' '}
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
              Viracup?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4 md:px-0">
            Sürdürülebilirlik ve kalite bir arada. Çevreye duyarlı üretim süreçlerimizle 
            hem doğayı hem de işinizi düşünüyoruz.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
              >
                <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-800 mb-3 sm:mb-4 font-manrope text-center">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-stone-600 leading-relaxed text-center">
                {feature.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-800/5 to-stone-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Left - Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-6 sm:mb-8 font-manrope">
              Viracup ile{' '}
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
                Avantajlarınız
              </span>
            </h3>
            
            <div className="space-y-3 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/40 hover:border-green-800/20 transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 sm:w-6 sm:h-6 bg-green-800 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:bg-green-700 transition-colors duration-300"
                  >
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </motion.div>
                  <span className="text-stone-700 font-medium group-hover:text-green-800 transition-colors duration-300 text-sm sm:text-base">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Floating Cup Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 3, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Cup Shadow */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 w-80 h-16 bg-green-800/20 rounded-full blur-2xl"></div>
              
              {/* Main Cup with enhanced design */}
              <div className="relative w-80 h-96 bg-gradient-to-b from-stone-200 to-stone-300 rounded-t-3xl rounded-b-lg shadow-2xl border-4 border-stone-400">
                {/* Glowing rim effect */}
                <div className="absolute inset-0 rounded-t-3xl rounded-b-lg bg-gradient-to-br from-green-800/20 via-transparent to-stone-600/20"></div>
                
                {/* Cup Logo Area */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-4xl font-bold text-green-800 mb-2 font-manrope"
                  >
                    VIRACUP
                  </motion.div>
                  <div className="text-stone-600 text-sm mb-2">ECO • SUSTAINABLE</div>
                  <div className="flex justify-center">
                    {[1,2,3,4,5].map((star) => (
                      <motion.div
                        key={star}
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, delay: star * 0.2, repeat: Infinity }}
                      >
                        <Star className="w-4 h-4 fill-green-600 text-green-600" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Cup Rim */}
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-stone-400 to-stone-500 rounded-t-3xl"></div>
              </div>

              {/* Enhanced Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -25, 0],
                  x: [0, 15, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -top-8 -right-12 w-20 h-20 bg-gradient-to-br from-green-800/30 to-green-600/30 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <Recycle className="w-10 h-10 text-green-800" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  x: [0, -20, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-16 w-16 h-16 bg-gradient-to-br from-stone-500/40 to-stone-400/40 rounded-full backdrop-blur-sm flex items-center justify-center"
              >
                <Leaf className="w-8 h-8 text-green-800" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center bg-gradient-to-r from-green-800 to-green-700 rounded-3xl p-12 shadow-2xl"
        >
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-manrope">
              Sürdürülebilir Geleceğe Adım Atın
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Çevre dostu ürünlerimizle fark yaratın
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppContact}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-green-800 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <span className="relative z-10 mr-3">Daha Fazla Bilgi Al</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 