import React from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';

export default function App() {
  // Tema degistirme fonksiyonu
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
      
      {/* 1. Erisilebilirlik: Skip Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"> {/* [cite: 893-899] */}
        Ana icerige atla
      </a>

      {/* 2. Tema Degistirme Butonu */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-20 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      {/* 3. Header ve Navigasyon */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700"> {/* [cite: 900-903] */}
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-3"> {/* [cite: 906-908] */}
          <div className="text-xl font-bold text-blue-800 dark:text-blue-400"> {/* [cite: 915-916] */}
            Semih Tepe
          </div>
          <nav aria-label="Ana navigasyon"> {/* [cite: 917] */}
            <ul className="flex flex-wrap gap-2"> {/* [cite: 918] */}
              <li><a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors font-medium">Hakkimda</a></li> {/* [cite: 943-949] */}
              <li><a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors font-medium">Projeler</a></li> {/* [cite: 950-956] */}
              <li><a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors font-medium">Iletisim</a></li> {/* [cite: 957-963] */}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* 4. Hakkimda Bolumu */}
        <section id="hakkimda" className="py-20 px-4"> {/* [cite: 983] */}
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8"> {/* [cite: 984-986] */}
            <figure className="shrink-0"> {/* [cite: 987] */}
              <img src="profil.jpg" alt="Semih Tepe" className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-800" /> {/* [cite: 988-991] */}
            </figure>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"> {/* [cite: 994-996] */}
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg"> {/* [cite: 997-1002] */}
                Fırat Üniversitesi Yazılım Mühendisliği bölümünde öğrenimime devam ediyorum. Modern web teknolojileri, mobil uygulama geliştirme ve oyun motorları üzerine çalışıyorum.
              </p>
              <ul className="flex flex-wrap justify-center md:justify-start gap-2"> {/* [cite: 1003] */}
                {['React & Next.js', 'TypeScript', 'Flutter', 'Godot', 'Tailwind CSS', 'Python'].map(skill => (
                  <li key={skill} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Projelerim Bolumu */}
        <section id="projeler" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800"> {/* [cite: 1031-1034] */}
          <div className="max-w-6xl mx-auto"> {/* [cite: 1035] */}
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"> {/* [cite: 1035-1038] */}
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* [cite: 1039-1043] */}
              
              <Card variant="elevated" image="trafik-sosyal.png" title="Trafik Sosyal" footer={<Button size="sm" className="w-full">Detayları Gör</Button>}>
                Next.js ve Capacitor kullanılarak geliştirilmiş, trafik durumunu anlık paylaşmaya yarayan sosyal ağ projesi.
              </Card>

              <Card variant="elevated" image="prng-project.png" title="PRNG Xorshift">
                Düşük kaynak tüketimiyle yüksek kaliteli rastgele sayılar üreten Xorshift32 algoritmasının Python uygulaması.
              </Card>

              <Card variant="elevated" image="profil.jpg" title="Arduino Projeleri">
                7-segment display counter ve özel tone fonksiyonları barındıran gömülü sistem çalışmaları.
              </Card>

            </div>
          </div>
        </section>

        {/* 6. Iletisim Formu */}
        <section id="iletisim" className="py-20 px-4"> {/* [cite: 1059-1060] */}
          <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"> {/* [cite: 1062] */}
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white"> {/* [cite: 1063-1066] */}
              İletişim
            </h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}> {/* [cite: 1067] */}
              <Input id="name" label="Ad Soyad" placeholder="Adınızı girin" required /> {/* [cite: 1068-1069] */}
              <Input id="email" label="E-posta" type="email" placeholder="ornek@firat.edu.tr" required /> {/* [cite: 1070-1073] */}
              
              <div className="space-y-1"> {/* [cite: 1075] */}
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300"> {/* [cite: 1077-1088] */}
                  Mesajınız
                </label>
                <textarea id="message" rows={5} required className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 transition-colors"></textarea> {/* [cite: 1089-1096] */}
              </div>
              
              <Button variant="primary" size="lg" type="submit" className="w-full"> {/* [cite: 1121-1122] */}
                Gönder
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* 7. Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center py-8 px-4 text-gray-500 dark:text-gray-400 text-sm mt-auto"> {/* [cite: 1123-1128] */}
        <p>&copy; 2026 Semih Tepe. Tüm hakları saklıdır.</p> {/* [cite: 1129-1130] */}
      </footer>

    </div>
  );
}