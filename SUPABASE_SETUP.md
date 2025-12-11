# Supabase Kurulum Rehberi

## 1. Supabase Projesi Oluşturma

1. [Supabase](https://supabase.com) hesabı oluşturun
2. "New Project" butonuna tıklayın
3. Proje adı: `drbetulsahin`
4. Database Password belirleyin (güvenli bir şifre)
5. Region seçin (Avrupa önerilir)
6. "Create new project" butonuna tıklayın

## 2. Veritabanı Tablolarını Oluşturma

Supabase Dashboard > SQL Editor'e gidin ve şu SQL'i çalıştırın:

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

-- Users tablosu
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

-- Herkes insert yapabilir (form gönderimleri için)
CREATE POLICY "Allow public insert" ON fiyat_istekleri 
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert" ON iletisim 
  FOR INSERT WITH CHECK (true);

-- Sadece authenticated kullanıcılar okuyabilir (güvenlik için)
CREATE POLICY "Authenticated read" ON fiyat_istekleri 
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated read" ON iletisim 
  FOR SELECT USING (auth.role() = 'authenticated');

-- Users tablosu için özel politika
CREATE POLICY "Authenticated read users" ON users 
  FOR SELECT USING (auth.role() = 'authenticated' OR aktif = 1);
```

## 3. MySQL'den Veri Migrate Etme

MySQL veritabanından Supabase'e veri aktarmak için:

1. MySQL'den verileri export edin
2. Supabase SQL Editor'de import edin

Veya Python scripti kullanın:

```python
import mysql.connector
from supabase import create_client, Client

# MySQL bağlantısı
mysql_conn = mysql.connector.connect(
    host='localhost',
    port=3306,
    user='betulsahin_dr',
    password='SD63551034*',
    database='betulsahin'
)

# Supabase bağlantısı
supabase_url = "your_supabase_url"
supabase_key = "your_supabase_service_key"
supabase: Client = create_client(supabase_url, supabase_key)

# Users tablosunu migrate et
mysql_cursor = mysql_conn.cursor()
mysql_cursor.execute("SELECT * FROM users")
users = mysql_cursor.fetchall()

for user in users:
    supabase.table('users').insert({
        'tc': user[1],
        'adsoyad': user[2],
        'sifre': user[3],
        'aktif': user[4],
        'klinikgiris': user[5],
        'baslama': user[6],
        'bitis': user[7]
    }).execute()
```

## 4. Environment Variables

`.env.local` dosyasına ekleyin:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Supabase Dashboard > Settings > API'den bu değerleri alabilirsiniz.

## 5. Vercel Environment Variables

Vercel Dashboard > Project Settings > Environment Variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Güvenlik Notları

- RLS (Row Level Security) politikalarını ihtiyacınıza göre ayarlayın
- Service Role Key'i asla client-side'da kullanmayın
- Anon Key sadece public insert için kullanılabilir
- Hassas veriler için Supabase Auth kullanın
