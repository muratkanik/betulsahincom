-- Dr. Betül Şahin Web Sitesi - Supabase Tabloları
-- Bu SQL'i Supabase SQL Editor'de çalıştırın

-- Fiyat istekleri tablosu
CREATE TABLE IF NOT EXISTS fiyat_istekleri (
  id BIGSERIAL PRIMARY KEY,
  ad TEXT NOT NULL,
  sehir TEXT NOT NULL,
  gsm TEXT NOT NULL,
  islem TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- İletişim formu tablosu
CREATE TABLE IF NOT EXISTS iletisim (
  id BIGSERIAL PRIMARY KEY,
  ad TEXT NOT NULL,
  email TEXT NOT NULL,
  telefon TEXT,
  mesaj TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Users tablosu (Akademi girişi için)
CREATE TABLE IF NOT EXISTS users (
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

-- Herkes insert yapabilir (form gönderimleri için)
DROP POLICY IF EXISTS "Allow public insert" ON fiyat_istekleri;
CREATE POLICY "Allow public insert" ON fiyat_istekleri 
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public insert" ON iletisim;
CREATE POLICY "Allow public insert" ON iletisim 
  FOR INSERT WITH CHECK (true);

-- Sadece authenticated kullanıcılar okuyabilir (güvenlik için)
DROP POLICY IF EXISTS "Authenticated read" ON fiyat_istekleri;
CREATE POLICY "Authenticated read" ON fiyat_istekleri 
  FOR SELECT USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Authenticated read" ON iletisim;
CREATE POLICY "Authenticated read" ON iletisim 
  FOR SELECT USING (auth.role() = 'authenticated');

-- Users tablosu için özel politika (login için public read gerekli)
DROP POLICY IF EXISTS "Public read users for login" ON users;
CREATE POLICY "Public read users for login" ON users 
  FOR SELECT USING (aktif = 1);

-- Index'ler (performans için)
CREATE INDEX IF NOT EXISTS idx_users_tc ON users(tc);
CREATE INDEX IF NOT EXISTS idx_users_aktif ON users(aktif);
CREATE INDEX IF NOT EXISTS idx_fiyat_istekleri_created ON fiyat_istekleri(created_at);
CREATE INDEX IF NOT EXISTS idx_iletisim_created ON iletisim(created_at);
