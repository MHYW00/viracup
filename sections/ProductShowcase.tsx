'use client';

import { motion } from 'framer-motion';
import { Badge, Star, Award } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: '6oz Küçük Bardak',
    capacity: '6oz (177ml)',
    description: 'Espresso ve küçük içecekler için ideal',
    badge: 'KOMPAKT',
    badgeColor: 'bg-blue-500',
    svgPath: '/cup-6oz.svg'
  },
  {
    id: 2,
    name: '7oz Orta Bardak',
    capacity: '7oz (207ml)',
    description: 'Kahve ve çay için en popüler boyut',
    badge: 'TERCİH EDİLEN',
    badgeColor: 'bg-green-500',
    svgPath: '/cup-7oz.svg'
  },
  {
    id: 3,
    name: '10oz Büyük Bardak',
    capacity: '10oz (296ml)',
    description: 'Soğuk içecekler ve büyük porsiyonlar için',
    badge: 'CAFE STANDARDI',
    badgeColor: 'bg-purple-500',
    svgPath: '/cup-10oz.svg'
  }
];

// Lazy loading için SVG component
const LazyProductSVG = ({ svgPath, alt }: { svgPath: string; alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-80 flex items-center justify-center">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg animate-pulse">
          <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
        </div>
      )}
      <img
        src={svgPath}
        alt={alt}
        className={`w-full h-full object-contain transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};

export default function ProductShowcase() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 font-manrope">
            Ürün Kataloğumuz
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Her ihtiyaca uygun, kaliteli ve çevre dostu karton bardak seçeneklerimizi keşfedin
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/40 group"
            >
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <span className={`${product.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide`}>
                  {product.badge}
                </span>
              </div>

              {/* Product Image */}
              <div className="mb-8 group-hover:scale-105 transition-transform duration-300">
                <LazyProductSVG svgPath={product.svgPath} alt={product.name} />
              </div>

              {/* Product Info */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-green-800 font-manrope">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <Badge className="w-5 h-5" />
                  <span className="font-semibold text-lg">{product.capacity}</span>
                </div>

                <p className="text-stone-600 text-lg leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex justify-center gap-4 pt-4">
                  <div className="flex items-center gap-1 text-green-600">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">Kaliteli</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <Award className="w-4 h-4 fill-current" />
                    <span className="text-sm">Sertifikalı</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-800 to-green-700 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4 font-manrope">
              Toplu Sipariş İndirimi
            </h3>
            <p className="text-green-100 mb-6 text-lg max-w-2xl mx-auto">
              Büyük miktarlarda sipariş verin, özel fiyatlardan yararlanın. 
              Özel tasarım ve baskı seçenekleri de mevcuttur.
            </p>
            <a
              href="https://wa.me/905321319594?text=Merhaba, toplu sipariş için bilgi almak istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-green-800 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-colors duration-300 shadow-lg"
            >
              <span>Toplu Sipariş Ver</span>
              <Badge className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 