'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, Globe, Users, TrendingUp, Calendar, MapPin } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Çevreye Saygı",
    description: "Doğaya en az zarar veren üretim süreçleriyle gezegen dostu olmayı ilke edindik."
  },
  {
    icon: Target,
    title: "Kalite Odaklılık",
    description: "Her bardakta mükemmellik arayışı, müşteri memnuniyeti bizim önceliğimiz."
  },
  {
    icon: Lightbulb,
    title: "İnovasyon",
    description: "Sürekli gelişim ve yenilikçi çözümlerle sektörde öncü olmaya devam ediyoruz."
  },
  {
    icon: Globe,
    title: "Sürdürülebilirlik",
    description: "Gelecek nesillere daha yaşanabilir bir dünya bırakma sorumluluğuyla hareket ediyoruz."
  }
];

const stats = [
  { icon: Users, number: "150M+", label: "Bardak Üretimi", color: "from-blue-600 to-blue-700" },
  { icon: Calendar, number: "5+", label: "Yıllık Deneyim", color: "from-green-600 to-green-700" },
  { icon: MapPin, number: "81", label: "İl Teslimat", color: "from-purple-600 to-purple-700" },
  { icon: TrendingUp, number: "%99", label: "Memnuniyet", color: "from-orange-600 to-orange-700" }
];

export default function About() {
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-green-800 mb-4 sm:mb-6 font-manrope">
            Viracup{' '}
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
              Hikayemiz
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4 md:px-0">
            2019'dan bu yana çevre dostu ambalaj çözümlerinde öncü olan Viracup, 
            sürdürülebilir bir gelecek için her gün yenilikçi ürünler geliştiriyor.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/40">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-800 mb-4 sm:mb-6 font-manrope">
                Misyonumuz
              </h3>
              <p className="text-stone-600 leading-relaxed text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                Çevre dostu karton bardak üretiminde Türkiye'nin en güvenilir markası olmak. 
                Her ürettiğimiz bardakla doğaya olan saygımızı göstermek ve işletmelere 
                sürdürülebilir çözümler sunmak.
              </p>
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-green-800/5 rounded-xl sm:rounded-2xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-800 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-green-800 text-sm sm:text-base">Çevre Dostu Üretim</div>
                  <div className="text-stone-600 text-xs sm:text-sm">%100 geri dönüştürülebilir malzemeler</div>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/40">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-800 mb-4 sm:mb-6 font-manrope">
                Vizyonumuz
              </h3>
              <p className="text-stone-600 leading-relaxed text-sm sm:text-base md:text-lg">
                Gelecek nesillere daha temiz bir dünya bırakabilmek için sürdürülebilir 
                ambalaj sektöründe dünya çapında tanınan bir marka olmak. İnovasyonla 
                çevre koruma arasında mükemmel dengeyi kurmak.
              </p>
            </div>
          </motion.div>

          {/* Right - Visual Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/40">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-800 mb-6 sm:mb-8 font-manrope text-center">
                Gelişim Yolculuğumuz
              </h3>
              
                              <div className="space-y-4 sm:space-y-6">
                {[
                  { year: "2019", event: "Viracup kuruldu", desc: "Çevre dostu karton bardak üretimine başladık" },
                  { year: "2020", event: "İlk 10M Bardak", desc: "İlk yılımızda 10 milyon bardak üretim seviyesine ulaştık" },
                  { year: "2022", event: "ISO 9001 Sertifikası", desc: "Kalite yönetim sistemimizi uluslararası standartlara taşıdık" },
                  { year: "2024", event: "150M+ Bardak", desc: "150 milyon bardak üretim kapasitesine ulaştık ve dijital dönüşümü tamamladık" }
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-green-800/5 to-stone-600/5 rounded-xl sm:rounded-2xl hover:from-green-800/10 hover:to-stone-600/10 transition-all duration-300"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-800 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-sm sm:text-base">
                      {milestone.year.slice(-2)}
                    </div>
                    <div>
                      <div className="font-semibold text-green-800 text-sm sm:text-base">{milestone.event}</div>
                      <div className="text-stone-600 text-xs sm:text-sm mt-1">{milestone.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-8 sm:mb-12 text-center font-manrope">
            Değerlerimiz
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-500"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-green-800 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg"
                  >
                    <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  <h4 className="text-lg sm:text-xl font-bold text-green-800 mb-2 sm:mb-3 font-manrope">
                    {value.title}
                  </h4>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-500"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3, type: "spring" }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-green-800 mb-1 sm:mb-2 font-manrope"
              >
                {stat.number}
              </motion.div>
              <div className="text-stone-600 font-medium text-xs sm:text-sm lg:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 