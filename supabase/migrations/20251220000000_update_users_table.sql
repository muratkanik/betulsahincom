-- Users tablosunu güncelle (eksik alanları ekle)
-- Eski MySQL veritabanından veri aktarımı için

-- Eğer alanlar yoksa ekle
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
  
  -- klinikgiris'i TEXT'ten INTEGER'a çevir (eğer TEXT ise)
  -- Önce verileri kontrol et ve gerekirse güncelle
  IF EXISTS (SELECT 1 FROM information_schema.columns 
             WHERE table_name = 'users' AND column_name = 'klinikgiris' 
             AND data_type = 'text') THEN
    -- Mevcut verileri koru, sadece tipi değiştir
    ALTER TABLE users ALTER COLUMN klinikgiris TYPE INTEGER USING 
      CASE 
        WHEN klinikgiris = '1' OR klinikgiris = 'true' THEN 1
        WHEN klinikgiris = '0' OR klinikgiris = 'false' OR klinikgiris IS NULL THEN 0
        ELSE 0
      END;
  END IF;
END $$;

-- Index'leri güncelle
CREATE INDEX IF NOT EXISTS idx_users_mail ON users(mail);
CREATE INDEX IF NOT EXISTS idx_users_klinikgiris ON users(klinikgiris);
