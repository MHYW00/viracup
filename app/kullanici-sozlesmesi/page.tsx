'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Eye, FileText, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function UserAgreement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-stone-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-800/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-green-800 font-manrope"
              >
                VIRACUP
              </motion.div>
            </Link>
            
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 text-green-800 hover:text-green-700 transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                Ana Sayfa
              </motion.button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Page Title */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center bg-green-800/10 px-6 py-3 rounded-full mb-6"
            >
              <FileText className="w-5 h-5 text-green-800 mr-2" />
              <span className="text-green-800 font-semibold">Yasal Belgeler</span>
            </motion.div>

            <h1 className="text-4xl lg:text-5xl font-bold text-green-800 mb-4 font-manrope">
              Kullanıcı Sözleşmesi
            </h1>
            <p className="text-xl text-stone-700 max-w-2xl mx-auto">
              Viracup hizmetlerini kullanırken geçerli olan şartlar, gizlilik politikası ve kişisel veri korunması hakkında bilgiler
            </p>
            <p className="text-sm text-stone-500 mt-4">
              Son güncelleme: 10 Temmuz 2024
            </p>
          </div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/40"
          >
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Hızlı Navigasyon
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="#kullanim-sartlari" className="flex items-center p-3 bg-green-800/5 rounded-xl hover:bg-green-800/10 transition-colors duration-300 group">
                <Shield className="w-4 h-4 text-green-800 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-green-800 font-medium">Kullanım Şartları</span>
              </a>
              <a href="#gizlilik-politikasi" className="flex items-center p-3 bg-green-800/5 rounded-xl hover:bg-green-800/10 transition-colors duration-300 group">
                <Eye className="w-4 h-4 text-green-800 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-green-800 font-medium">Gizlilik Politikası</span>
              </a>
              <a href="#kvkk" className="flex items-center p-3 bg-green-800/5 rounded-xl hover:bg-green-800/10 transition-colors duration-300 group">
                <FileText className="w-4 h-4 text-green-800 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-green-800 font-medium">KVKK Metni</span>
              </a>
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Kullanım Şartları */}
            <motion.section
              id="kullanim-sartlari"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/40"
            >
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-green-800 mr-3" />
                <h2 className="text-3xl font-bold text-green-800 font-manrope">Kullanım Şartları</h2>
              </div>

              <div className="prose prose-green max-w-none space-y-6 text-stone-700">
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">1. Genel Hükümler</h3>
                  <p>Bu kullanım şartları, Viracup web sitesi ve hizmetlerinin kullanımını düzenler. Sitemizi kullanarak bu şartları kabul etmiş sayılırsınız.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">2. Hizmet Kapsamı</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Çevre dostu karton bardak üretimi ve satışı</li>
                    <li>Özel tasarım ve baskı hizmetleri</li>
                    <li>Toptan satış ve kurumsal çözümler</li>
                    <li>Minimum sipariş miktarı 3.000 adettir</li>
                    <li>Müşteri danışmanlığı ve teknik destek</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">3. Sipariş ve Ödeme</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Siparişler WhatsApp, telefon veya e-posta yoluyla alınır</li>
                    <li>Fiyat teklifleri proje bazında belirlenir</li>
                    <li>Ödeme seçenekleri: Kredi kartı, EFT/Havale, Kapıda ödeme</li>
                    <li>Sipariş onayı sonrası iptal edilemez</li>
                    <li>Teslimat süresi sipariş miktarına göre değişir</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">4. Kalite ve Garanti</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Tüm ürünlerimiz %100 geri dönüştürülebilir malzemelerden üretilir</li>
                    <li>ISO 9001 kalite standartlarına uygun üretim</li>
                    <li>Sızdırmazlık ve dayanıklılık garantisi</li>
                    <li>Hatalı üretim durumunda ücretsiz değişim</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">5. Sorumluluk Sınırlamaları</h3>
                  <p>Viracup, hizmet kesintileri, gecikme veya üçüncü taraf kaynaklı sorunlardan sorumlu değildir. Doğal afet ve mücbir sebep halleri kapsamındaki gecikmeler garanti kapsamı dışındadır.</p>
                </div>
              </div>
            </motion.section>

            {/* Gizlilik Politikası */}
            <motion.section
              id="gizlilik-politikasi"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/40"
            >
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-green-800 mr-3" />
                <h2 className="text-3xl font-bold text-green-800 font-manrope">Gizlilik Politikası</h2>
              </div>

              <div className="prose prose-green max-w-none space-y-6 text-stone-700">
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">1. Toplanan Bilgiler</h3>
                  <p>Hizmetlerimizi sunabilmek için aşağıdaki kişisel bilgileri topluyoruz:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Ad, soyad ve iletişim bilgileri</li>
                    <li>Şirket bilgileri ve vergi numarası</li>
                    <li>Sipariş geçmişi ve tercihler</li>
                    <li>Web sitesi kullanım istatistikleri</li>
                    <li>Ödeme bilgileri (güvenli sunucularda şifrelenir)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">2. Bilgi Kullanım Amaçları</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Sipariş işlemlerinin gerçekleştirilmesi</li>
                    <li>Müşteri hizmetleri ve teknik destek</li>
                    <li>Ürün ve hizmet bilgilendirmeleri</li>
                    <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                    <li>İstatistiksel analiz ve hizmet iyileştirme</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">3. Bilgi Güvenliği</h3>
                  <p>Kişisel verileriniz:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>SSL sertifikası ile şifrelenir</li>
                    <li>Güvenli sunucularda saklanır</li>
                    <li>Sadece yetkili personel erişebilir</li>
                    <li>Düzenli güvenlik denetimleri yapılır</li>
                    <li>Üçüncü taraflarla paylaşılmaz</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">4. Çerezler (Cookies)</h3>
                  <p>Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanır. Bu çerezler site performansını artırır ve tercihlerinizi hatırlar. Çerez kullanımını tarayıcınızdan kontrol edebilirsiniz.</p>
                </div>
              </div>
            </motion.section>

            {/* KVKK */}
            <motion.section
              id="kvkk"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/40"
            >
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-green-800 mr-3" />
                <h2 className="text-3xl font-bold text-green-800 font-manrope">KVKK Aydınlatma Metni</h2>
              </div>

              <div className="prose prose-green max-w-none space-y-6 text-stone-700">
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">1. Veri Sorumlusu</h3>
                  <p>6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, kişisel verilerinizin veri sorumlusu Viracup&apos;tır.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">2. Kişisel Veri Türleri</h3>
                  <p>Aşağıdaki kişisel veri kategorileri işlenmektedir:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li><strong>Kimlik Verileri:</strong> Ad, soyad, T.C. kimlik numarası</li>
                    <li><strong>İletişim Verileri:</strong> Telefon, e-posta, adres</li>
                    <li><strong>Müşteri İşlem Verileri:</strong> Sipariş geçmişi, ödeme bilgileri</li>
                    <li><strong>Dijital İz Verileri:</strong> IP adresi, çerez bilgileri</li>
                    <li><strong>Finansal Veriler:</strong> Banka hesap bilgileri, fatura bilgileri</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">3. İşleme Amaçları</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Satış sözleşmelerinin kurulması ve ifası</li>
                    <li>Müşteri memnuniyeti aktivitelerinin yürütülmesi</li>
                    <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                    <li>İş süreçlerinin yürütülmesi</li>
                    <li>Finans ve muhasebe işlerinin takibi</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">4. Veri Saklama Süresi</h3>
                  <p>Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve yasal saklama yükümlülükleri çerçevesinde saklanır. Genel olarak:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Müşteri verileri: Sözleşme süresi + 10 yıl</li>
                    <li>Finansal kayıtlar: 10 yıl</li>
                    <li>İletişim kayıtları: 3 yıl</li>
                    <li>Web sitesi logları: 1 yıl</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">5. KVKK Hakları</h3>
                  <p>KVKK md. 11 uyarınca aşağıdaki haklarınız bulunmaktadır:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                    <li>İşlenen kişisel verileriniz hakkında bilgi talep etme</li>
                    <li>İşleme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                    <li>Yurt içinde/dışında aktarıldığı 3. kişileri bilme</li>
                    <li>Eksik/yanlış işlenen verilerin düzeltilmesini isteme</li>
                    <li>Yasal koşullar çerçevesinde silme/yok etme isteme</li>
                    <li>Düzeltme/silme işlemlerinin 3. kişilere bildirilmesini isteme</li>
                    <li>Otomatik sistemlerle analiz sonucu aleyhte karar çıkmasına itiraz etme</li>
                    <li>Hukuka aykırı işleme nedeniyle zararın giderilmesini talep etme</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* İletişim */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-green-800 to-green-700 rounded-3xl p-8 text-white"
            >
              <div className="text-center">
                <AlertCircle className="w-12 h-12 mx-auto mb-4 text-green-200" />
                <h3 className="text-2xl font-bold mb-4">Sorularınız mı var?</h3>
                <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                  Kullanıcı sözleşmesi, gizlilik politikası veya KVKK hakları konusunda herhangi bir sorunuz varsa bizimle iletişime geçebilirsiniz.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  <a 
                    href="mailto:birinci854@gmail.com"
                    className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl hover:bg-white/30 transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    birinci854@gmail.com
                  </a>
                  
                  <a 
                    href="tel:+905321319594"
                    className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl hover:bg-white/30 transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    +90 532 131 95 94
                  </a>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 mt-16">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <Link href="/" className="text-2xl font-bold font-manrope mb-4 block">
            VIRACUP
          </Link>
          <p className="text-green-200">
            © 2024 Viracup. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
} 