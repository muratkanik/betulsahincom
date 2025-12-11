-- Video Galeri ve Videolar tabloları
-- Bu SQL'i Supabase SQL Editor'de çalıştırın

-- Video Galeri tablosu (herkese açık)
CREATE TABLE IF NOT EXISTS videogaleri (
  id BIGSERIAL PRIMARY KEY,
  baslik TEXT NOT NULL,
  video TEXT NOT NULL,
  dosyaadi TEXT NOT NULL,
  arkaplanresmi TEXT,
  arkaplanyazi TEXT,
  aktif INTEGER DEFAULT 1,
  sira INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Videolar tablosu (sadece giriş yapan hekimler için)
CREATE TABLE IF NOT EXISTS videolar (
  id BIGSERIAL PRIMARY KEY,
  baslik TEXT NOT NULL,
  video TEXT NOT NULL,
  dosyaadi TEXT NOT NULL,
  arkaplanresmi TEXT,
  arkaplanyazi TEXT,
  aktif INTEGER DEFAULT 1,
  sira INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security (RLS) politikaları
ALTER TABLE videogaleri ENABLE ROW LEVEL SECURITY;
ALTER TABLE videolar ENABLE ROW LEVEL SECURITY;

-- Video Galeri herkese açık
DROP POLICY IF EXISTS "Public read videogaleri" ON videogaleri;
CREATE POLICY "Public read videogaleri" ON videogaleri 
  FOR SELECT USING (aktif = 1);

-- Videolar sadece authenticated kullanıcılar için (akademi girişi yapanlar)
DROP POLICY IF EXISTS "Authenticated read videolar" ON videolar;
CREATE POLICY "Authenticated read videolar" ON videolar 
  FOR SELECT USING (aktif = 1);

-- Index'ler (performans için)
CREATE INDEX IF NOT EXISTS idx_videogaleri_aktif ON videogaleri(aktif);
CREATE INDEX IF NOT EXISTS idx_videogaleri_sira ON videogaleri(sira);
CREATE INDEX IF NOT EXISTS idx_videolar_aktif ON videolar(aktif);
CREATE INDEX IF NOT EXISTS idx_videolar_sira ON videolar(sira);
