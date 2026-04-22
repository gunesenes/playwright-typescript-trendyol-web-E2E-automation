 Test Senaryosu Detayları
1. Hazırlık ve Giriş

Trendyol ana sayfasına gidilir ve çerez politikası onaylanır.

Cinsiyet Seçimi: "Erkek" kategorisi seçilerek ana sayfaya giriş yapılır.

2. Ürün Arama ve Filtreleme
Arama Fonksiyonu: "Kazak" araması yapılır.

Marka Filtresi: "Bershka" markası filtrelenir.

Renk Filtresi: Renk seçeneklerinden "Kırmızı" seçilir.

Ürün Seçimi: İlk sıradaki ürün kartına tıklanarak detay sayfası yeni bir sekmede açılır.

3. Konum ve Sepet Yönetimi
Konum Belirleme: Dinamik dropdownlar kullanılarak İstanbul/Esenler konumu seçilir.

Sepete Ekleme: Ürün sepete eklenir ve sepet ikonundaki ürün sayısı doğrulanır.

Adet Güncelleme: Sepet sayfasında ürün adedi önce 2'ye çıkarılır, sonra tekrar 1'ye düşürülerek dinamik fiyat/adet kontrolü yapılır.

4. Kullanıcı Girişi (Authentication)
Login Süreci: Mevcut bir kullanıcı hesabı ile (E-posta ve Şifre) sisteme giriş yapılır.

Oturum Kontrolü: Giriş sonrası sepetin korunduğu doğrulanır.

5. Kategori ve Gelişmiş Filtreleme
Menü Navigasyonu: "Kategoriler -> Erkek -> Günlük Ayakkabı" yolu izlenerek yeni bir kategoriye gidilir.

Detaylı Filtreleme: Siyah renk ve "3000 TL - 4000 TL" fiyat aralığı seçilir.

Sıralama: Ürünler "En Yüksek Fiyat" olarak sıralanır.

6. Adres Yönetimi (Complex Form Handling)
Dinamik Form Doldurma: Yeni adres ekleme modalı açılır.

Dropdown Senkronizasyonu: İl (İstanbul), İlçe (Esenler) ve Mahalle (Turgut Reis) seçimleri yapılır. Burada elementlerin birbirini tetikleme süreçleri özel expect komutlarıyla yönetilmiştir.

Dinamik Veri: Math.random() kullanılarak her test için benzersiz bir "Adres Başlığı" (Örn: Test452) üretilir.

7. Test Temizliği (Teardown)
Ürün Silme: Eklenen ürün sepetten kaldırılır.

Doğrulama: "Ürünü sepetinden kaldırıldı" onay mesajı görünene kadar beklenir ve test başarıyla tamamlanır.

