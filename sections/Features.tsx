'use client'

import { motion } from 'framer-motion'
import { Recycle, Shield, Palette } from 'lucide-react'

const features = [
  {
    icon: Recycle,
    title: '%100 Geri Dönüşümlü',
    description: 'Tamamen doğaya dost malzemelerden üretilen bardaklarımız çevreye zarar vermez ve geri dönüştürülebilir.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Shield,
    title: 'Sızdırmaz Tasarım',
    description: 'Özel üretim teknolojimiz sayesinde bardaklarımız mükemmel sızdırmazlık sağlar ve uzun süre dayanıklılığını korur.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Palette,
    title: 'Kişiye Özel Baskı',
    description: 'Markanıza özel tasarımlar ve logolarla bardaklarınızı kişiselleştirin. Profesyonel baskı kalitesi garantili.',
    color: 'bg-purple-100 text-purple-600'
  }
]

export default function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-darkGreen mb-4 sm:mb-6">
            Neden Viracup?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4 md:px-0">
            Sürdürülebilirlik ve kalite bir arada. Çevreye duyarlı üretim süreçlerimizle 
            hem doğayı hem de işinizi düşünüyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-creamy p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-kraft/30"
            >
                          <div className={`w-14 h-14 sm:w-16 sm:h-16 ${feature.color} rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto`}>
              <feature.icon size={28} className="sm:w-8 sm:h-8" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-darkGreen mb-3 sm:mb-4 text-center">
              {feature.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed text-center text-sm sm:text-base">
              {feature.description}
            </p>

              {/* Decorative elements */}
              <div className="mt-4 sm:mt-6 flex justify-center space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-kraft rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-darkGreen rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-kraft rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-kraft to-darkGreen p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Sürdürülebilir Geleceğe Adım Atın
            </h3>
            <p className="text-lg sm:text-xl mb-4 sm:mb-6 opacity-90">
              Çevre dostu ürünlerimizle fark yaratın
            </p>
            <button className="bg-white text-darkGreen px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-creamy transition-colors duration-300 shadow-lg text-sm sm:text-base">
              Daha Fazla Bilgi Al
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 