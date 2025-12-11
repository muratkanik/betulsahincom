-- MySQL'den Supabase'e users verilerini aktarmak için SQL
-- Bu SQL'i Supabase SQL Editor'de çalıştırın
-- Önce MySQL'den verileri export edip buraya yapıştırın

-- Eski MySQL veritabanından users verileri
-- Aktif kullanıcılar (aktif = 1)
INSERT INTO users (tc, adsoyad, mail, telefon, sifre, diploma, aktif, klinikgiris, baslama, bitis) VALUES
('34322246006', 'betül şahin', 'drbetsahin@hotmail.com', '5324422713', '7095BEzg', 'https://www.drbetulsahin.com/diplomalar/34322246006_diploma_2024_03_21.JPG', 1, 0, NULL, NULL),
('test', 'Deneme Kullanıcısı', 'deneme@deneme.com', '5325322410', 'test', 'https://www.drbetulsahin.com/diplomalar/test_diploma_2024_03_22.jpg', 1, 1, NULL, NULL),
('44674636448', 'Semih Sağlam', 'semihsaglam215@gmail.com', '05010353151', 'istanbul215', 'https://www.drbetulsahin.com/diplomalar/44674636448_diploma_2024_03_30.jpeg', 1, 0, NULL, NULL),
('51619418342', 'salih yayman', 'dr.salihyayman@gmail.com', '5533799194', 'Salih10.', 'https://www.drbetulsahin.com/diplomalar/51619418342_diploma_2024_03_31.jpg', 1, 0, NULL, NULL),
('14459266726', 'Hüseyin Öztarakçı', 'huseyinoztarakci@hotmail.com', '05327482259', '107500', 'https://www.drbetulsahin.com/diplomalar/14459266726_diploma_2024_03_31.jpg', 1, 0, NULL, NULL),
('12598399398', 'Ümmühan Karaca ', 'ummuhan.karaca02@hotmail.com', '05380476886', '12345678', 'https://www.drbetulsahin.com/diplomalar/12598399398_diploma_2024_04_18.jpeg', 1, 0, NULL, NULL),
('32428579998', 'Hüseyin Öner', 'husoner73@gmail.com', '05326752571', 'Cerenipek1', 'https://www.drbetulsahin.com/diplomalar/32428579998_diploma_2024_04_20.jpg', 1, 0, NULL, NULL),
('45178935686', 'Bilge SERİN KESKİNEĞE', 'bilges9@yahoo.com', '+491748425784', 'Bsk194600!!', 'https://www.drbetulsahin.com/diplomalar/45178935686_diploma_2024_05_15.jpeg', 1, 0, NULL, NULL),
('22223271630', 'Muhsin Birol ', 'drmuhsinbirol@hotmail.com', '5326806218', '2246425', 'https://www.drbetulsahin.com/diplomalar/22223271630_diploma_2024_05_25.jpg', 1, 0, NULL, NULL),
('22744554328', 'onat berkay taş', 'onat-berkay@hotmail.com', '5057022227', '0Nat1o93.b', 'https://www.drbetulsahin.com/diplomalar/22744554328_diploma_2024_05_28.jpg', 1, 0, NULL, NULL),
('20167013088', 'EMRE SOLGUNTEKİN', 'esolguntekin@hotmail.com', '05327314879', 'sardalya', 'https://www.drbetulsahin.com/diplomalar/20167013088_diploma_2024_06_03.jpg', 1, 0, NULL, NULL),
('23768409144', 'cemal ünsal', 'dr.cemal.unsal@gmail.com', '05395864646', '38En4012', 'https://www.drbetulsahin.com/diplomalar/23768409144_diploma_2024_06_09.jpeg', 1, 0, NULL, NULL),
('25993850876', 'Veli huzeyfe kartal', 'huzeyfe3595@hotmail.com', '5386496262', 'huzeyfe95', 'https://www.drbetulsahin.com/diplomalar/25993850876_diploma_2024_08_23.jpeg', 1, 0, NULL, NULL),
('19235129608', 'emrah yiğit', 'eyigit447@gmail.com', '05413756646', '4475568ey', 'https://www.drbetulsahin.com/diplomalar/19235129608_diploma_2024_09_15.JPG', 1, 0, NULL, NULL),
('11104414488', 'Kaan Kadir Alpaslan', 'kaankadiralpaslan@gmail.com', '0 538 301 91 05', 'Kalpaslan1827+', 'https://www.drbetulsahin.com/diplomalar/11104414488_diploma_2024_10_01.jpeg', 1, 0, NULL, NULL),
('38843124126', 'MUHAMMED VEYSEL YILMAZ', 'veyselyilmazkbb@gmail.com', '5423146002', 'vYsl0878', 'https://www.drbetulsahin.com/diplomalar/38843124126_diploma_2024_10_04.jpeg', 1, 0, NULL, NULL),
('32602722622', 'Bahar Aktaş Topuz', 'baharaktas5991@gmail.com', '05378652665', 'Dr.726263', 'https://www.drbetulsahin.com/diplomalar/32602722622_diploma_2024_10_13.jpg', 1, 0, NULL, NULL),
('10156848722', 'Osman Altınok', 'altinokosman10@gmail.com', '05468750305', '123987', 'https://www.drbetulsahin.com/diplomalar/10156848722_diploma_2024_11_26.jpeg', 1, 0, NULL, NULL),
('27280238664', 'sıddıka tuğçe altınok', 'tugcekasapoglu@icloud.com', '05369726324', 'Stk20011997', 'https://www.drbetulsahin.com/diplomalar/27280238664_diploma_2024_11_26.jpeg', 1, 0, NULL, NULL),
('53398029819', 'Begüm arda', 'ardabegumm@gmail.com', '5379297097', '123456Bgmmrd', 'https://www.drbetulsahin.com/diplomalar/53398029819_diploma_2024_12_20.jpeg', 1, 0, NULL, NULL),
('28253043636', 'sena uğur', 'sssenaugur@gmail.com', '5313017070', 'ssenauu', 'https://www.drbetulsahin.com/diplomalar/28253043636_diploma_2025_01_18.jpeg', 1, 0, NULL, NULL),
('43936554100', 'Ahmet Tarık', 'ahmettarikkilic@gmail.com', '5398272517', '12341234', 'https://www.drbetulsahin.com/diplomalar/43936554100_diploma_2025_01_19.jpeg', 1, 0, NULL, NULL),
('23888437744', 'Berke Temel', 'berketemel@gmail.com', '5064756606', 'Betulsahin', 'https://www.drbetulsahin.com/diplomalar/23888437744_diploma_2025_01_27.jpg', 1, 0, NULL, NULL),
('38266736876', 'Mustafa Yıldız', 'mustafayildiz.3896@hotmail.com', '05538705512', 'Must.3896', 'https://www.drbetulsahin.com/diplomalar/38266736876_diploma_2025_03_11.jpeg', 1, 0, NULL, NULL),
('56269382494', 'sevgi ayhan', 'sevgiserdar@hotmail.com', '05057280814', '123456', 'https://www.drbetulsahin.com/diplomalar/56269382494_diploma_2025_04_13.jpg', 1, 0, NULL, NULL)
ON CONFLICT (tc) DO UPDATE SET
  adsoyad = EXCLUDED.adsoyad,
  mail = EXCLUDED.mail,
  telefon = EXCLUDED.telefon,
  sifre = EXCLUDED.sifre,
  diploma = EXCLUDED.diploma,
  aktif = EXCLUDED.aktif,
  klinikgiris = EXCLUDED.klinikgiris,
  baslama = EXCLUDED.baslama,
  bitis = EXCLUDED.bitis;
