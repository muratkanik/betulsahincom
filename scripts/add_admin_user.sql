-- Yönetici kullanıcı ekleme script'i
-- Bu SQL'i Supabase SQL Editor'de çalıştırın

-- Önce eksik sütunları ekle (eğer yoksa)
DO $$ 
BEGIN
  -- mail alanı
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'users' AND column_name = 'mail') THEN
    ALTER TABLE users ADD COLUMN mail TEXT;
  END IF;
  
  -- telefon alanı
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'users' AND column_name = 'telefon') THEN
    ALTER TABLE users ADD COLUMN telefon TEXT;
  END IF;
  
  -- diploma alanı
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name = 'users' AND column_name = 'diploma') THEN
    ALTER TABLE users ADD COLUMN diploma TEXT;
  END IF;
END $$;

-- Murat KANIK - Admin kullanıcı
INSERT INTO users (tc, adsoyad, mail, telefon, sifre, diploma, aktif, klinikgiris, baslama, bitis) 
VALUES (
  '25006089088', 
  'Murat KANIK', 
  'mkanik@gmail.com', 
  '', 
  'PinnerNanny2023..', 
  '', 
  1, 
  1, 
  NULL, 
  NULL
) 
ON CONFLICT (tc) DO UPDATE SET
  adsoyad = EXCLUDED.adsoyad,
  mail = EXCLUDED.mail,
  telefon = EXCLUDED.telefon,
  sifre = EXCLUDED.sifre,
  diploma = EXCLUDED.diploma,
  aktif = EXCLUDED.aktif,
  klinikgiris = EXCLUDED.klinikgiris,
  baslama = EXCLUDED.baslama,
  bitis = EXCLUDED.bitis;

-- Not: Bu kullanıcı login API'de yönetici olarak tanınacak (TC: 25006089088)
