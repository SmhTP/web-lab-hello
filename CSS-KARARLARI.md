# CSS Kararlari

## 1. Breakpoint Secimi
Tasarima mobile-first yaklasimiyla basladigim icin ana stilim 0-639px arasini kapsiyor. Icerigin genislemeye ihtiyac duydugu 640px'i tablet, 1024px'i ise masaustu kırılım noktasi olarak belirledim. Bu noktalarda "Hakkimda" bolumundeki elemanlar alt alta dizilimden yan yana dizilime geciyor ve proje kartlarindaki sutun sayisi artiyor.

## 2. Layout Tercihleri
Header icindeki logo ve navigasyon menusu tek bir eksende (yatay) hizalanacagi icin Flexbox kullandim. Proje kartlari ise hem satir hem sutunlardan olusan iki boyutlu bir yapi gerektirdiginden CSS Grid'i sectim. Kartlarin ekran genisledikce boslugu doldurarak esnemesi icin `auto-fill` yerine `auto-fit` ozelligini tercih ettim.

## 3. Design Tokens
Renk paletinde bir yazilim muhendisine uygun, guven veren lacivert ve mavi tonlarini (--color-primary: #1E3A8A) sectim. Bosluklar (spacing) icin rem birimiyle orantili bir skala olusturdum. Font boyutlarinda ise `clamp()` fonksiyonunu kullanarak, yazilarin minimum ve maksimum rem degerleri arasinda, ekranin vw (viewport width) degerine gore akici bir sekilde olceklenmesini sagladim.

## 4. Responsive Stratejiler
CSS yazarken once mobil (en dar ekran) kurallarini belirleyip, daha sonra `@media (min-width)` sorgulariyla buyuk ekranlara ozel eklemeler yaptim (Mobile-first). Ekran buyudukce navigasyon menusu yataya donusuyor ve butonlar kendi genisligini aliyor. Gorsellerin tasmamasi icin `max-width: 100%`, esnemelerde orantilarinin bozulmamasi icin ise `object-fit: cover` kullandim.