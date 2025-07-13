'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MessageCircle, Phone, Star, Sparkles } from 'lucide-react'

const Hero: React.FC = () => {
  const handleWhatsAppContact = () => {
    const message = 'Merhaba, Viracup hakkında bilgi almak istiyorum.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/905321319594?text=${encodedMessage}`, '_blank');
  };

  const handlePhoneCall = () => {
    window.open('tel:+905321319594', '_self');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-stone-100 relative overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-stone-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600 rounded-full blur-3xl"></div>
      </div>

      {/* Simplified Floating Particles - Reduced for performance */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-800/20 rounded-full"
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >


            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-green-800 mb-4 sm:mb-6 font-manrope leading-tight"
            >
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
                Üreticisi
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-800/80 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-4 md:px-0"
            >
              Türkiye'nin lider karton bardak üreticisi. 6oz, 7oz, 10oz karton bardak çeşitleri, özel baskı ve toplu sipariş. 
              <br className="hidden sm:block" />
              <span className="text-stone-600 font-semibold">WhatsApp'tan hemen karton bardak siparişi verin!</span>
            </motion.p>

            {/* Modern CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-2 sm:px-4 md:px-0"
            >
              {/* WhatsApp Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppContact}
                className="group relative inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white transition-all duration-300 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <MessageCircle className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">WhatsApp ile İletişim</span>
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              {/* Phone Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePhoneCall}
                className="group relative inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-green-800 transition-all duration-300 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-green-800/20 hover:border-green-800/50 shadow-lg hover:shadow-xl"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-800/5 to-stone-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Phone className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Bizi Arayın</span>
                <div className="absolute inset-0 rounded-2xl bg-green-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>

            {/* Stats with modern cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4 md:px-0"
            >
              {[
                { value: "150M+", label: "Bardak Kullanımı" },
                { value: "%100", label: "Geri Dönüşümlü" },
                { value: "24SA", label: "Hızlı Yanıt" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 text-center border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-800 mb-1">{stat.value}</div>
                  <div className="text-stone-600 text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Cup Mockup with floating elements - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center hidden lg:flex"
          >
            <motion.div
              animate={{ 
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
              className="relative"
            >
              {/* Cup Shadow */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 w-64 h-12 bg-green-800/20 rounded-full blur-xl"></div>
              
              {/* Main Cup with glow effect */}
              <div className="relative w-80 h-96 bg-gradient-to-b from-stone-200 to-stone-300 rounded-t-3xl rounded-b-lg shadow-2xl border-4 border-stone-400">
                {/* Glowing rim effect */}
                <div className="absolute inset-0 rounded-t-3xl rounded-b-lg bg-gradient-to-br from-green-800/10 via-transparent to-stone-600/10"></div>
                
                {/* Cup Design Area */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                  {/* VIRACUP Logo Animation */}
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative"
                  >
                    {/* Glow Background */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 rounded-3xl blur-xl opacity-40 transform scale-110"
                    />
                    
                    {/* Main Logo Container */}
                    <div className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 rounded-3xl p-8 shadow-2xl border border-green-600/30 backdrop-blur-sm">
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 rounded-3xl overflow-hidden">
                        <motion.div
                          animate={{
                            rotate: [0, 360]
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-green-600/20 to-transparent rounded-full blur-2xl"
                        />
                        <motion.div
                          animate={{
                            rotate: [360, 0]
                          }}
                          transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-l from-green-400/20 to-transparent rounded-full blur-2xl"
                        />
                      </div>
                      
                      {/* VIRACUP Text Animation */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-center space-x-1">
                          {['V', 'I', 'R', 'A', 'C', 'U', 'P'].map((letter, index) => (
                            <motion.span
                              key={index}
                              initial={{ 
                                opacity: 0, 
                                y: 30,
                                scale: 0.5,
                                rotateX: 90
                              }}
                              animate={{ 
                                opacity: 1, 
                                y: 0,
                                scale: 1,
                                rotateX: 0
                              }}
                              transition={{ 
                                duration: 0.8,
                                delay: index * 0.15,
                                ease: "backOut"
                              }}
                              className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-stone-100 via-stone-200 to-stone-300 font-manrope tracking-wider relative"
                              style={{
                                textShadow: '0 0 15px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.3)'
                              }}
                            >
                              {/* Letter Glow Effect */}
                              <motion.span
                                animate={{
                                  textShadow: [
                                    '0 0 15px rgba(255,255,255,0.5)',
                                    '0 0 25px rgba(255,255,255,0.8)',
                                    '0 0 15px rgba(255,255,255,0.5)'
                                  ]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: index * 0.3
                                }}
                              >
                                {letter}
                              </motion.span>
                              
                              {/* Individual Letter Animation */}
                              <motion.div
                                animate={{
                                  y: [0, -3, 0],
                                  scale: [1, 1.05, 1]
                                }}
                                transition={{
                                  duration: 2.5,
                                  repeat: Infinity,
                                  delay: index * 0.2,
                                  ease: "easeInOut"
                                }}
                                className="absolute inset-0"
                              />
                            </motion.span>
                          ))}
                        </div>
                        
                        {/* Subtitle */}
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 1.5 }}
                          className="mt-2 text-center"
                        >
                          <span className="text-stone-200 text-xs lg:text-sm font-medium tracking-widest">
                            ECO • FRIENDLY
                          </span>
                        </motion.div>
                        
                        {/* Animated Underline */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1, delay: 1.8 }}
                          className="mt-1 h-0.5 bg-gradient-to-r from-transparent via-stone-200 to-transparent transform origin-center"
                        />
                      </div>
                      
                      {/* Floating Particles around logo */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-stone-200 rounded-full"
                          animate={{
                            y: [0, -20, 0],
                            x: [0, Math.sin(i) * 15, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                          }}
                          transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.5
                          }}
                          style={{
                            left: `${20 + i * 10}%`,
                            top: `${10 + i * 12}%`
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Floating Eco Elements */}
                  <div className="relative">
                    <motion.div
                      animate={{ 
                        y: [0, -12, 0],
                        rotate: [0, 15, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        delay: 0.5
                      }}
                      className="absolute -top-8 -left-10 w-6 h-6 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <div className="w-2 h-2 bg-stone-100 rounded-full"></div>
                    </motion.div>

                    <motion.div
                      animate={{ 
                        y: [0, 15, 0],
                        x: [0, 8, 0],
                        rotate: [0, -20, 0]
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        delay: 1
                      }}
                      className="absolute -top-6 -right-8 w-4 h-4 bg-gradient-to-br from-stone-400 to-stone-500 rounded-lg shadow-md"
                    ></motion.div>

                    <motion.div
                      animate={{ 
                        scale: [1, 1.3, 1],
                        rotate: [0, 360, 720],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        delay: 2
                      }}
                      className="absolute -bottom-4 left-1 w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg opacity-80"
                    ></motion.div>

                    <motion.div
                      animate={{ 
                        y: [0, -8, 0],
                        x: [0, -5, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 3.5,
                        repeat: Infinity,
                        delay: 1.5
                      }}
                      className="absolute -bottom-2 -right-6 w-3 h-3 bg-gradient-to-br from-stone-300 to-stone-400 rounded-full shadow-sm"
                    ></motion.div>
                  </div>
                </div>
                
                {/* Cup Rim */}
                <div className="absolute top-0 left-0 right-0 h-4 bg-stone-400 rounded-t-3xl"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-green-800/20 to-green-600/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <div className="w-8 h-8 bg-green-800 rounded-full"></div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-12 w-12 h-12 bg-gradient-to-br from-stone-500/30 to-stone-400/30 rounded-full backdrop-blur-sm"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero 