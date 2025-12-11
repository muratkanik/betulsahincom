-- Videolar tablosu için RLS politikasını düzelt
-- Login yapmış kullanıcılar için çalışması gerekiyor
-- Cookie kontrolü API route'da yapılıyor, burada sadece tablo erişimini açıyoruz

-- Mevcut politikayı kaldır
DROP POLICY IF EXISTS "Authenticated read videolar" ON videolar;

-- Yeni politika: Herkes okuyabilir (API route'da cookie kontrolü yapılıyor)
-- Bu şekilde API route cookie kontrolü yapabilir
DROP POLICY IF EXISTS "Public read videolar" ON videolar;
CREATE POLICY "Public read videolar" ON videolar 
  FOR SELECT USING (aktif = 1);
