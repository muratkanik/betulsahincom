# 🚀 Vercel Deploy Rehberi

## 1. Supabase Tablolarını Oluşturma

1. [Supabase Dashboard](https://supabase.com/dashboard) açın
2. Projenize girin: `pndeebzfztbyrbanagbt`
3. Sol menüden **SQL Editor**'e tıklayın
4. **New Query** butonuna tıklayın
5. `SUPABASE_SQL.sql` dosyasındaki SQL'i kopyalayıp yapıştırın
6. **Run** butonuna tıklayın

✅ Tablolar oluşturuldu!

## 2. MySQL'den Veri Migrate Etme (Opsiyonel)

Eğer mevcut MySQL veritabanından kullanıcıları migrate etmek isterseniz:

```python
# migrate_users.py
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
supabase_url = "https://pndeebzfztbyrbanagbt.supabase.co"
supabase_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuZGVlYnpmenRieXJiYW5hZ2J0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTQ1NDA3OCwiZXhwIjoyMDgxMDMwMDc4fQ.1bHUF4ZrfodOL8y0J_s14sNuuwEnFkVGC7sf2pCkNRQ"
supabase: Client = create_client(supabase_url, supabase_key)

# Users tablosunu migrate et
mysql_cursor = mysql_conn.cursor()
mysql_cursor.execute("SELECT * FROM users")
users = mysql_cursor.fetchall()

for user in users:
    try:
        supabase.table('users').insert({
            'tc': user[1],
            'adsoyad': user[2],
            'sifre': user[3],
            'aktif': user[4],
            'klinikgiris': user[5] if len(user) > 5 else None,
            'baslama': user[6] if len(user) > 6 else None,
            'bitis': user[7] if len(user) > 7 else None
        }).execute()
        print(f"✅ {user[2]} migrate edildi")
    except Exception as e:
        print(f"❌ {user[2]} migrate edilemedi: {e}")

mysql_conn.close()
```

## 3. GitHub'a Push

```bash
cd website-react

# Git başlat (eğer yoksa)
git init

# Dosyaları ekle
git add .

# Commit
git commit -m "Initial commit - React + Supabase + Vercel"

# GitHub'da repo oluştur ve remote ekle
git remote add origin https://github.com/yourusername/drbetulsahin-react.git
git branch -M main
git push -u origin main
```

## 4. Vercel'e Deploy

### Yöntem 1: Vercel Dashboard

1. [Vercel.com](https://vercel.com) hesabı oluşturun (GitHub ile giriş yapın)
2. **"New Project"** butonuna tıklayın
3. GitHub repo'nuzu seçin
4. **Framework Preset:** Next.js (otomatik algılanır)
5. **Root Directory:** `website-react` (eğer repo root'unda değilse)
6. **Environment Variables** ekleyin:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://pndeebzfztbyrbanagbt.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuZGVlYnpmenRieXJiYW5hZ2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NTQwNzgsImV4cCI6MjA4MTAzMDA3OH0._6zFuUytglnawj6VIAdDdMct0WTdF0RouFZ6HQORvZQ`
   - `SUPABASE_SERVICE_ROLE_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuZGVlYnpmenRieXJiYW5hZ2J0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTQ1NDA3OCwiZXhwIjoyMDgxMDMwMDc4fQ.1bHUF4ZrfodOL8y0J_s14sNuuwEnFkVGC7sf2pCkNRQ`
7. **Deploy** butonuna tıklayın

### Yöntem 2: Vercel CLI

```bash
# Vercel CLI yükle
npm i -g vercel

# Proje dizinine git
cd website-react

# Deploy
vercel

# Production'a deploy
vercel --prod
```

## 5. Domain Ayarlama (Opsiyonel)

1. Vercel Dashboard > Project Settings > Domains
2. Custom domain ekleyin: `drbetulsahin.com`
3. DNS kayıtlarını güncelleyin (Vercel'in verdiği talimatlara göre)

## ✅ Deploy Sonrası Kontroller

1. ✅ Web sitesi açılıyor mu?
2. ✅ Form gönderimleri çalışıyor mu?
3. ✅ Supabase bağlantısı çalışıyor mu?
4. ✅ Akademi girişi çalışıyor mu?

## 🔧 Sorun Giderme

### Build hatası
- Environment variables'ları kontrol edin
- Supabase URL ve key'lerin doğru olduğundan emin olun

### Supabase bağlantı hatası
- RLS politikalarını kontrol edin
- Anon key'in doğru olduğundan emin olun

### Form gönderimleri çalışmıyor
- Supabase tablolarının oluşturulduğundan emin olun
- RLS politikalarını kontrol edin

## 📊 Monitoring

- Vercel Dashboard'da analytics ve logs görüntüleyebilirsiniz
- Supabase Dashboard'da veritabanı kullanımını takip edebilirsiniz
