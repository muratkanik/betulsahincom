-- Yönetici kullanıcı ekleme script'i
-- Bu SQL'i Supabase SQL Editor'de çalıştırın

INSERT INTO users (tc, adsoyad, mail, telefon, sifre, diploma, aktif, klinikgiris, baslama, bitis) 
VALUES (
  '25006089088', 
  'Yönetici', 
  'admin@drbetulsahin.com', 
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
