import './App.css';

function App() {
  return (
    <>
      {/* Erişilebilirlik: Ana içeriğe atla bağlantısı */}
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <header>
        <h1>Semih Tepe - Portfolyo</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img 
              src="profil.jpg" 
              alt="Semih Tepe'nin vesikalik fotografi" 
            />
            <figcaption>Semih Tepe</figcaption>
          </figure>
          <p>Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim. Full-stack geliştirme ve mobil uygulamalarla ilgileniyorum.</p>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <article className="project-card">
            <h3>Trafik Sosyal</h3>
            <figure>
              <img src="trafik-sosyal.png" alt="Trafik Sosyal uygulaması arayüzü" />
              <figcaption>Next.js ve Capacitor ile geliştirildi.</figcaption>
            </figure>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  minLength={2} 
                  aria-describedby="name-error" 
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  aria-describedby="email-error" 
                />
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
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  minLength={10} 
                  aria-describedby="message-error"
                ></textarea>
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