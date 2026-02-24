import './App.css';

function App() {
  return (
    <>
      {/* 1. Header ve Navigasyon */}
      <a href="#main-content" className="skip-link">Ana icerige atla</a>
      
      <header>
        <div className="logo">Semih Tepe</div>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        {/* 2. Hakkimda Bölümü */}
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img src="profil.jpg" alt="Semih Tepe'nin vesikalik fotografi" />
            <figcaption>Semih Tepe - Yazılım Mühendisi Adayı</figcaption>
          </figure>
          <p>
            Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim. 
            Tam yığın (full-stack) web geliştirme ve mobil uygulamalar üzerine çalışıyorum.
          </p>
          <h3>Kullandigim Teknolojiler</h3>
          <ul>
            <li>React & Next.js</li>
            <li>TypeScript</li>
            <li>Flutter</li>
            <li>Godot (Oyun Geliştirme)</li>
            <li>Tailwind CSS</li>
          </ul>
        </section>

        {/* 3. Projelerim Bölümü */}
        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <h3>Trafik Sosyal</h3>
              <p>Capacitor ve Next.js kullanılarak geliştirilmiş, trafik tabanlı bir sosyal ağ projesi.</p>
              <p><strong>Teknolojiler:</strong> Next.js, TypeScript, Capacitor</p>
              <img src="trafik-sosyal.png" alt="Trafik Sosyal uygulamasının arayüzü" />
            </article>

            <article className="project-card">
              <h3>PRNG Xorshift</h3>
              <p>Düşük kaynak tüketimiyle yüksek kaliteli rastgele sayılar üreten Xorshift algoritması uygulaması.</p>
              <p><strong>Teknolojiler:</strong> C++, Git</p>
              <img src="prng-project.png" alt="Xorshift algoritması çalışma mantığı grafiği" />
            </article>
          </div>
        </section>

        {/* 4. İletişim Bölümü (Uygulama-4 Formu Dahil) */}
        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>
              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input type="email" id="email" name="email" required aria-describedby="email-error" />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>
              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error"></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>
              <button type="submit" className="submit-btn">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      {/* 5. Footer */}
      <footer>
        <p>&copy; 2026 Semih Tepe. Tüm hakları saklıdır.</p>
        <div className="social-links">
          <a href="https://github.com/SmhTP" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </>
  );
}

export default App;