import './App.css';

function App() {
  return (
    <>
      <header>
        {/* Adım 1: h1 ile ana başlık hiyerarşisini kuruyoruz */}
        <h1>Semih Tepe - Portfolyo</h1>
        <nav>
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          {/* Adım 2: Profil fotoğrafı ve alt metin kontrolü */}
          <figure>
            <img 
              src="profil.jpg" 
              alt="Semih Tepe'nin vesikalik fotografi" 
            />
            <figcaption>Semih Tepe</figcaption>
          </figure>
          <p>Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim. Tam yığın (full-stack) ve mobil uygulama geliştirme üzerine çalışmalar yapıyorum.</p>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          {/* Adım 3: Projeler ve anlamlı alt metinler */}
          <div className="project-list">
            <article>
              <h3>Trafik Sosyal</h3>
              <figure>
                <img 
                  src="trafik-sosyal.png" 
                  alt="Trafik Sosyal mobil uygulamasının ana ekran arayüzü" 
                />
                <figcaption>Trafik Sosyal Uygulaması</figcaption>
              </figure>
            </article>

            <article>
              <h3>PRNG Xorshift</h3>
              <figure>
                <img 
                  src="prng-project.png" 
                  alt="Xorshift algoritması kullanan rastgele sayı üreteci proje kodları" 
                />
                <figcaption>PRNG-Xorshift-Project</figcaption>
              </figure>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <p>Bana GitHub üzerinden **SmhTP** kullanıcı adıyla ulaşabilirsiniz.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Semih Tepe. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;