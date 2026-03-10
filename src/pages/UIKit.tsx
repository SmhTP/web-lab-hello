import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKit() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white border-b pb-4">
        Semih'in UI Kütüphanesi
      </h1>

      {/* --- BUTTONS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 dark:text-gray-200">
          Buttons
        </h2>
        
        {/* Varyant 1: Renkler */}
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        
        {/* Varyant 2: Boyutlar ve Durumlar */}
        <div className="flex flex-wrap items-end gap-3 mt-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      {/* --- INPUTS --- */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 dark:text-gray-200">
          Inputs
        </h2>
        {/* Varyant 3: Normal */}
        <Input id="ui-name" label="Normal Input" placeholder="Bir seyler yazin..." />
        
        {/* Varyant 4: Hatali */}
        <Input id="ui-err" label="Hatali Input" error="Bu alan zorunludur!" />
        
        {/* Varyant 5: Yardimci Metinli ve Devre Disi */}
        <Input id="ui-help" type="email" label="E-posta" helpText="ornek@firat.edu.tr" />
        <Input id="ui-dis" label="Devre Disi (Disabled)" disabled value="Degistirilemez" />
      </section>

      {/* --- CARDS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 dark:text-gray-200">
          Cards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Varyant 6: Elevated */}
          <Card variant="elevated" title="Elevated Card">
            <p>Golgeli ve yukseltilmis standart kart tasarimi.</p>
          </Card>
          
          {/* Varyant 7: Outlined */}
          <Card variant="outlined" title="Outlined Card">
            <p>Sadece ince bir cerceveye sahip, daha sade kart.</p>
          </Card>
          
          {/* Varyant 8: Filled */}
          <Card variant="filled" title="Filled Card" footer={<Button size="sm">Detaylari Gor</Button>}>
            <p>Dolgulu arka plana ve alt bilgi (footer) kismina sahip kart.</p>
          </Card>
        </div>
      </section>

      {/* --- ALERTS --- */}
      <section className="space-y-4 max-w-xl">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 dark:text-gray-200">
          Alerts
        </h2>
        {/* Varyant 9: Alert Turleri */}
        <Alert variant="info" title="Bilgi">Sisteme yeni bir guncelleme eklendi.</Alert>
        <Alert variant="success" title="Basarili">Form basariyla sunucuya iletildi.</Alert>
        <Alert variant="warning" title="Uyari">Oturum sureniz 5 dakika icinde dolacak.</Alert>
        <Alert variant="error" title="Hata" dismissible onDismiss={() => alert('Kapatma butonuna basildi!')}>
          Sunucu ile baglanti kurulamadi. Lutfen tekrar deneyin.
        </Alert>
      </section>
    </div>
  );
}