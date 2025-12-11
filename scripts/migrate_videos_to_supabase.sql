-- MySQL'den Supabase'e videolar verilerini aktarmak için SQL
-- Bu SQL'i Supabase SQL Editor'de çalıştırın

-- Eski MySQL veritabanından videolar verileri
INSERT INTO videolar (baslik, video, dosyaadi, arkaplanresmi, arkaplanyazi, aktif, sira) VALUES
('Alın Dolgusu', 'alin.mp4', 'video_1.jpg', 'manset_arkaplan_icon.png', 'Alın Dolgusu', 1, 1),
('Burun Dolgusu', 'burun.mp4', 'video_2.jpg', 'manset_arkaplan_icon.png', 'Burun Dolgusu', 1, 2),
('Çene Dolgusu', 'cene.mp4', 'video_3.jpg', 'manset_arkaplan_icon.png', 'Çene Dolgusu', 1, 3),
('Şakak Dolgusu', 'sakak.mp4', 'video_4.jpg', 'manset_arkaplan_icon.png', 'Şakak Dolgusu', 1, 4),
('Jawline Dolgusu', 'jawline.mp4', 'video_5.jpg', 'manset_arkaplan_icon.png', 'Jawline Dolgusu', 1, 5),
('Orta Yüz Dolgusu', 'ortayuz.mp4', 'video_6.jpg', 'manset_arkaplan_icon.png', 'Orta Yüz Dolgusu', 1, 6),
('Alın Glabella Dolgusu', 'glabella.mp4', 'video_7.jpg', 'manset_arkaplan_icon.png', 'Alın Glabella Dolgusu', 1, 7),
('Göz Altı Dolgusu', 'gozalti.mp4', 'video_8.jpg', 'manset_arkaplan_icon.png', 'Göz Altı Dolgusu', 1, 8),
('Svf - Yağ Dolgusu', 'svf.mp4', 'video_9.jpg', 'manset_arkaplan_icon.png', 'Svf - Yağ Dolgusu', 1, 9),
('Burun Dolgusu-2', 'burundolgusu.mp4', 'video_2.jpg', 'manset_arkaplan_icon.png', 'Burun Dolgusu-2', 1, 10),
('Çene-Jawline Dolgusu', 'cenejawlineartfiller.mp4', 'video_11.jpg', 'manset_arkaplan_icon.png', 'Çene-Jawline Dolgusu', 1, 11),
('Orta Yüz Dolgusu', 'ortayuzartfiller.mp4', 'video_12.jpg', 'manset_arkaplan_icon.png', 'Orta Yüz Dolgusu', 1, 12)
ON CONFLICT DO NOTHING;
