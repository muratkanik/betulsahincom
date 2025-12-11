# Veritabanı Migrasyon Rehberi

Bu rehber, eski MySQL veritabanından Supabase'e veri aktarımı için hazırlanmıştır.

## Adımlar

### 1. Supabase Tablosunu Güncelle

Önce Supabase SQL Editor'de şu migration'ı çalıştırın:

```sql
-- supabase/migrations/20251220000000_update_users_table.sql dosyasını çalıştırın
```

Bu migration:
- `users` tablosuna `mail`, `telefon`, `diploma` alanlarını ekler
- `klinikgiris` alanını INTEGER'a çevirir

### 2. Users Verilerini Aktar

Supabase SQL Editor'de şu script'i çalıştırın:

```sql
-- scripts/migrate_users_to_supabase.sql dosyasını çalıştırın
```

Bu script tüm aktif kullanıcıları (aktif = 1) Supabase'e aktarır.

### 3. Videolar Verilerini Aktar

Supabase SQL Editor'de şu script'i çalıştırın:

```sql
-- scripts/migrate_videos_to_supabase.sql dosyasını çalıştırın
```

Bu script tüm videoları Supabase'e aktarır.

### 4. RLS Politikasını Düzelt

Supabase SQL Editor'de şu migration'ı çalıştırın:

```sql
-- supabase/migrations/20251220000001_fix_videolar_rls.sql dosyasını çalıştırın
```

Bu migration videolar tablosu için RLS politikasını düzeltir.

## Test

1. Akademi sayfasına gidin: `/akademi`
2. Test kullanıcısı ile giriş yapın:
   - TC: `test`
   - Şifre: `test`
3. Videolar sayfasına yönlendirilmelisiniz: `/videolar`
4. Videolar listelenmelidir

## Notlar

- Tüm şifreler plain text olarak saklanıyor (eski sistemle uyumluluk için)
- `klinikgiris` alanı INTEGER olarak saklanıyor (0 veya 1)
- `aktif` alanı INTEGER olarak saklanıyor (0 veya 1)
