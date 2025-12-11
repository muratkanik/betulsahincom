# 🚀 Hızlı Başlangıç Rehberi

## 1. Projeyi Hazırlama

```bash
cd website-react
./start.sh
```

Bu script:
- Web klasörünü kopyalar
- Bağımlılıkları yükler
- .env.local kontrolü yapar

## 2. Supabase Kurulumu

1. [Supabase.com](https://supabase.com) hesabı oluşturun
2. Yeni proje oluşturun
3. SQL Editor'de `SUPABASE_SETUP.md` dosyasındaki SQL'i çalıştırın
4. Settings > API'den URL ve Anon Key'i alın

## 3. Environment Variables

`.env.local` dosyası oluşturun:

```bash
cp .env.local.example .env.local
```

İçeriğini düzenleyin:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 4. Geliştirme Sunucusunu Başlat

```bash
npm run dev
```

Web sitesi `http://localhost:3000` adresinde çalışacaktır.

## 5. Vercel'e Deploy

### GitHub'a Push

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

### Vercel'e Bağla

1. [Vercel.com](https://vercel.com) hesabı oluşturun
2. "New Project" > GitHub repo seçin
3. Environment Variables ekleyin:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. "Deploy" butonuna tıklayın

### Vercel CLI (Alternatif)

```bash
npm i -g vercel
vercel
```

## 📝 Önemli Notlar

- `public/web/` klasörü orijinal web klasörünü içermelidir
- Supabase RLS politikalarını ihtiyacınıza göre ayarlayın
- Production'da environment variables'ları Vercel'de ayarlayın

## 🎯 Sonraki Adımlar

1. ✅ Supabase tablolarını oluşturun
2. ✅ MySQL'den veri migrate edin (opsiyonel)
3. ✅ Diğer sayfaları oluşturun (tr-kimdir, ameliyatlar, vb.)
4. ✅ Email gönderimi için Vercel Serverless Function ekleyin

## 🆘 Sorun Giderme

### Web klasörü bulunamıyor
```bash
cp -r ../web public/web
```

### Supabase bağlantı hatası
- `.env.local` dosyasını kontrol edin
- Supabase projenizin aktif olduğundan emin olun

### Build hatası
```bash
rm -rf node_modules .next
npm install
npm run build
```
