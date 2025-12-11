# Dr. Betül Şahin Web Sitesi - React + Supabase + Vercel

Modern, hızlı ve ölçeklenebilir web sitesi. React, Next.js, Supabase ve Vercel ile geliştirilmiştir.

## 🚀 Özellikler

- ⚡ Next.js 14 (App Router)
- ⚛️ React 18 + TypeScript
- 🗄️ Supabase (Veritabanı + Auth)
- 🎨 Tailwind CSS
- 📱 Responsive Design
- 🔒 Güvenli API Routes
- 🚀 Vercel'de Host Edilebilir
- 📧 Email gönderimi

## 📦 Kurulum

### 1. Bağımlılıkları Yükle

```bash
cd website-react
npm install
```

### 2. Supabase Kurulumu

1. [Supabase](https://supabase.com) hesabı oluşturun
2. Yeni bir proje oluşturun
3. `.env.local` dosyasını oluşturun:

```bash
cp .env.local.example .env.local
```

4. Supabase projenizden URL ve Anon Key'i kopyalayıp `.env.local` dosyasına ekleyin

### 3. Supabase Veritabanı Tabloları

Supabase SQL Editor'de şu tabloları oluşturun:

```sql
-- Fiyat istekleri tablosu
CREATE TABLE fiyat_istekleri (
  id BIGSERIAL PRIMARY KEY,
  ad TEXT NOT NULL,
  sehir TEXT NOT NULL,
  gsm TEXT NOT NULL,
  islem TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- İletişim formu tablosu
CREATE TABLE iletisim (
  id BIGSERIAL PRIMARY KEY,
  ad TEXT NOT NULL,
  email TEXT NOT NULL,
  telefon TEXT,
  mesaj TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Users tablosu (mevcut MySQL'den migrate edilecek)
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  tc TEXT UNIQUE NOT NULL,
  adsoyad TEXT NOT NULL,
  sifre TEXT NOT NULL,
  aktif INTEGER DEFAULT 1,
  klinikgiris TEXT,
  baslama TEXT,
  bitis TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security (RLS) politikaları
ALTER TABLE fiyat_istekleri ENABLE ROW LEVEL SECURITY;
ALTER TABLE iletisim ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Herkes okuyabilir (gerekirse)
CREATE POLICY "Public read access" ON fiyat_istekleri FOR SELECT USING (true);
CREATE POLICY "Public read access" ON iletisim FOR SELECT USING (true);

-- Sadece authenticated kullanıcılar yazabilir (gerekirse)
CREATE POLICY "Authenticated insert" ON fiyat_istekleri FOR INSERT WITH CHECK (true);
CREATE POLICY "Authenticated insert" ON iletisim FOR INSERT WITH CHECK (true);
```

### 4. Geliştirme Sunucusunu Başlat

```bash
npm run dev
```

Web sitesi `http://localhost:3000` adresinde çalışacaktır.

## 🚀 Vercel'e Deploy

### 1. GitHub'a Push

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

### 2. Vercel'e Bağla

1. [Vercel](https://vercel.com) hesabı oluşturun
2. "New Project" butonuna tıklayın
3. GitHub repo'nuzu seçin
4. Environment Variables ekleyin:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. "Deploy" butonuna tıklayın

### 3. Vercel CLI ile Deploy (Alternatif)

```bash
npm i -g vercel
vercel
```

## 📁 Proje Yapısı

```
website-react/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Ana sayfa
│   └── api/            # API routes
├── components/         # React components
├── lib/                # Utilities (Supabase client, etc.)
├── public/             # Static files
│   └── web/            # Orijinal web klasörü
└── styles/             # Global styles
```

## 🔧 API Routes

### POST /api/fiyat-iste
Fiyat iste formu gönderimi

### POST /api/iletisim
İletişim formu gönderimi

### POST /api/akademi/login
Akademi girişi (Supabase Auth kullanılabilir)

## 📝 Notlar

- Orijinal `web/` klasörü `public/web/` altına kopyalanmalıdır
- Supabase RLS (Row Level Security) politikalarını ihtiyacınıza göre ayarlayın
- Email gönderimi için Vercel Serverless Functions kullanılabilir
- MySQL'den Supabase'e veri migrate etmek için script eklenebilir

## 🎨 Özelleştirme

- Tailwind config: `tailwind.config.js`
- Supabase client: `lib/supabase.ts`
- Global styles: `app/globals.css`

## 📚 Kaynaklar

- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Vercel Docs](https://vercel.com/docs)
