import './App.css';

function App() {
  return (
    <>
      {/* Adım 4: Ana içeriğe atla bağlantısı (Ekran okuyucular için en üstte olmalı) */}
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <header>
        <h1>Semih Tepe - Portfolyo</h1>
        {/* Adım 3: Navigasyona ARIA etiketi ekleme */}
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      {/* Adım 4: Main etiketine ID ekleme */}
      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img src="profil.jpg" alt="Semih Tepe'nin vesikalik fotografi" />
            <figcaption>Semih Tepe</figcaption>
          </figure>
          <p>Yazılım Mühendisliği öğrencisiyim. Full-stack geliştirme ve mobil uygulamalarla ilgileniyorum.</p>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <h3>Trafik Sosyal</h3>
            <p>Capacitor ve Next.js ile geliştirilen sosyal trafik uygulaması.</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <p>Bana GitHub (SmhTP) üzerinden ulaşabilirsiniz.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Semih Tepe. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;