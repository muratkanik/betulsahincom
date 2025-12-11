# Instagram Feed Kurulumu

Ana sayfanın altında, footer üstünde Instagram paylaşımlarını göstermek için Instagram Graph API kullanılıyor.

## Gereksinimler

1. **Facebook Business hesabı** (ücretsiz)
2. **Instagram Business hesabı** (ücretsiz)
3. **Facebook App** oluşturma

## Kurulum Adımları

### 1. Instagram Hesabını Business'a Dönüştürme

1. Instagram uygulamasında profil sayfanıza gidin
2. Ayarlar > Hesap > Hesap Türünü Değiştir
3. "Business" seçeneğini seçin
4. Facebook sayfanızı bağlayın (yoksa oluşturun)

### 2. Facebook App Oluşturma

1. [Facebook Developers](https://developers.facebook.com/) sitesine gidin
2. "My Apps" > "Create App" tıklayın
3. "Business" türünü seçin ve devam edin
4. App adı ve iletişim e-postası girin

### 3. Instagram Basic Display API Ekleme

1. Facebook App'inizde "Add Product" tıklayın
2. "Instagram Basic Display" ekleyin
3. "Basic Display" > "Settings" bölümüne gidin
4. Valid OAuth Redirect URIs ekleyin:
   - `http://localhost:3000/api/instagram/callback` (local için)
   - `https://website-react-five.vercel.app/api/instagram/callback` (production için)

### 4. Access Token Alma

1. Instagram Basic Display > "User Token Generator"
2. Instagram hesabınızı bağlayın
3. Token'ı kopyalayın

### 5. Instagram User ID Bulma

1. [Graph API Explorer](https://developers.facebook.com/tools/explorer/) kullanın
2. Access Token'ınızı girin
3. `me/accounts` endpoint'ini çağırın
4. Instagram hesabınızın ID'sini bulun

### 6. Environment Variables Ekleme

Vercel'de veya `.env.local` dosyasına ekleyin:

```bash
INSTAGRAM_ACCESS_TOKEN=your_access_token_here
INSTAGRAM_USER_ID=your_user_id_here
```

## Alternatif Çözümler

Eğer Instagram Graph API kurulumu zor geliyorsa:

1. **Instagram Embed**: Manuel olarak embed kodları eklenebilir
2. **Üçüncü Parti Servisler**: 
   - [Instafeed.js](https://instafeedjs.com/)
   - [Instagram Feed RSS](https://www.instagram.com/dr.betulsahin/?__a=1&__d=dis) (artık çalışmıyor)

## Notlar

- Access Token'lar süresi dolabilir (60 gün). Uzun süreli token için "Long-lived Token" kullanın
- Instagram Graph API rate limit'i var (200 istek/saat)
- API credentials yoksa feed gizlenecek, sayfa normal çalışmaya devam eder
