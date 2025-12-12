-- SMTP ayarları tablosu
-- Bu tablo SMTP bilgilerini güvenli bir şekilde saklar

CREATE TABLE IF NOT EXISTS smtp_settings (
  id INTEGER PRIMARY KEY DEFAULT 1,
  host TEXT NOT NULL,
  port TEXT NOT NULL DEFAULT '587',
  secure BOOLEAN DEFAULT false,
  user TEXT NOT NULL,
  password TEXT NOT NULL,
  from_email TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT single_row CHECK (id = 1)
);

-- Row Level Security
ALTER TABLE smtp_settings ENABLE ROW LEVEL SECURITY;

-- Sadece admin kullanıcılar erişebilir (API üzerinden kontrol edilecek)
-- Public read yok - sadece backend API'den erişilebilir
DROP POLICY IF EXISTS "No public access" ON smtp_settings;
CREATE POLICY "No public access" ON smtp_settings
  FOR ALL USING (false);

-- Index
CREATE INDEX IF NOT EXISTS idx_smtp_settings_id ON smtp_settings(id);

-- Not: İlk ayarları environment variable'lardan veya admin panelinden eklemeniz gerekecek
-- INSERT INTO smtp_settings (host, port, secure, user, password, from_email) 
-- VALUES ('mail.sistemdestekas.com.tr', '587', false, 'drbetulsahin@sistemdestekas.com.tr', 'your_password_here', 'drbetulsahin@sistemdestekas.com.tr');
