'use client';

import { motion } from 'framer-motion';

export default function ModernLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300 flex items-center justify-center z-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-800 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-stone-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-32 h-40 bg-gradient-to-b from-stone-300 to-stone-400 rounded-t-3xl rounded-b-lg mx-auto relative shadow-2xl"
          >
            {/* Cup Rim */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-stone-500 rounded-t-3xl"></div>
            
            {/* Logo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-2xl font-bold text-green-800 font-manrope">VIRACUP</div>
              <div className="text-stone-600 text-xs">ECO • FRIENDLY</div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-t-3xl rounded-b-lg bg-gradient-to-br from-green-800/10 via-transparent to-stone-600/10"></div>
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl font-bold text-green-800 mb-4 font-manrope"
        >
          Viracup Yükleniyor
        </motion.h2>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="w-3 h-3 bg-green-800 rounded-full"
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-stone-300 rounded-full mx-auto overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            className="h-full bg-gradient-to-r from-green-600 to-green-700 rounded-full"
          />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-stone-600 mt-6 text-lg"
        >
          Çevre dostu çözümler hazırlanıyor...
        </motion.p>
      </div>
    </div>
  );
} 