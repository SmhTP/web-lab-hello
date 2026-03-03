import './App.css';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana icerige atla</a>
      
      {/* ===== HEADER & NAVIGASYON (Flexbox) ===== */}
      <header>
        <div className="site-title">Semih Tepe</div>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        
        {/* ===== HAKKIMDA BOLUMU ===== */}
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <div className="about-content">
            <figure>
              <img src="profil.jpg" alt="Semih Tepe'nin vesikalik fotografi" />
              <figcaption>Semih Tepe - Yazılım Mühendisi Adayı</figcaption>
            </figure>
            <div>
              <p>Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim. Tam yığın (full-stack) web geliştirme ve mobil uygulamalar üzerine çalışıyorum.</p>
              
              <h3>Kullandigim Teknolojiler</h3>
              {/* Flexbox Toolbar (Uygulama-5) */}
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Flutter</li>
                <li>Godot (Oyun Geliştirme)</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== PROJELER BOLUMU ===== */}
        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            
            <article className="project-card">
              <img src="trafik-sosyal.png" alt="Trafik Sosyal mobil uygulamasının arayüzü" />
              <h3>Trafik Sosyal</h3>
              <p>Next.js ve Capacitor kullanılarak geliştirilmiş, trafik tabanlı bir sosyal ağ projesi.</p>
              <ul className="skill-tags">
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Capacitor</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="prng-project.png" alt="Xorshift algoritması çalışma grafiği" />
              <h3>PRNG Xorshift</h3>
              <p>Düşük kaynak tüketimiyle yüksek kaliteli rastgele sayılar üreten Xorshift algoritması uygulaması.</p>
              <ul className="skill-tags">
                <li>Python</li>
                <li>Algoritma</li>
              </ul>
            </article>

          </div>
        </section>

        {/* ===== ILETISIM BOLUMU ===== */}
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
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
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

      <footer>
        <p>&copy; 2026 Semih Tepe. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;