#!/bin/bash

echo "🚀 Dr. Betül Şahin - React Web Sitesi Kurulumu"
echo "=============================================="
echo ""

# Web klasörünü kopyala
if [ ! -d "public/web" ]; then
    echo "📁 Web klasörü kopyalanıyor..."
    cp -r ../web public/web
    echo "✅ Web klasörü kopyalandı"
else
    echo "✅ Web klasörü zaten mevcut"
fi

# Bağımlılıkları kontrol et
if [ ! -d "node_modules" ]; then
    echo ""
    echo "📦 Bağımlılıklar yükleniyor..."
    npm install
    echo "✅ Bağımlılıklar yüklendi"
else
    echo "✅ Bağımlılıklar zaten yüklü"
fi

# .env.local kontrolü
if [ ! -f ".env.local" ]; then
    echo ""
    echo "⚠️  .env.local dosyası bulunamadı!"
    echo "   Lütfen .env.local.example dosyasını kopyalayıp düzenleyin:"
    echo "   cp .env.local.example .env.local"
    echo ""
    echo "   Supabase bilgilerinizi ekleyin:"
    echo "   - NEXT_PUBLIC_SUPABASE_URL"
    echo "   - NEXT_PUBLIC_SUPABASE_ANON_KEY"
    echo ""
fi

echo ""
echo "✅ Kurulum tamamlandı!"
echo ""
echo "🌐 Geliştirme sunucusunu başlatmak için:"
echo "   npm run dev"
echo ""
echo "📝 Supabase kurulumu için SUPABASE_SETUP.md dosyasına bakın"
echo ""
