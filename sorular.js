const quizData = {
    "5": {
        "SÖZCÜKTE ANLAM": [
            {q: "Hangisi 'ak' kelimesinin zıt anlamlısıdır?", a: ["Kara", "Beyaz", "Temiz", "Kırmızı"], c: 0},
            {q: "Hangisinde eş anlamlı kelimeler bir arada verilmiştir?", a: ["Siyah - Kara", "Büyük - Küçük", "Aşağı - Yukarı", "Uzun - Kısa"], c: 0}
        ],
        "CÜMLEDE ANLAM": [
            {q: "Hangisi neden-sonuç cümlesidir?", a: ["Yağmur yağdığı için ıslandım.", "Yarın okula gideceğim.", "Kitap okursan başarırsın.", "Çok güzel bir gün."], c: 0},
            {q: "Hangisi öznel bir yargıdır?", a: ["Bence en güzel renk mavidir.", "Türkiye'nin başkenti Ankara'dır.", "Bir hafta 7 gündür.", "Su 100 derecede kaynar."], c: 0}
        ],
        "PARÇADA ANLAM": [
            {q: "Metnin ana düşüncesi nerede bulunur?", a: ["Metnin tamamında", "Sadece ilk cümlede", "Sadece başlıkta", "Yalnızca son kelimede"], c: 0},
            {q: "Hangisi hikaye unsurlarından biri değildir?", a: ["Müzik", "Zaman", "Mekan", "Kişiler"], c: 0}
        ],
        "SES BİLGİSİ": [
            {q: "TDK kurallarına göre 'İlkokul' kelimesi hecelerine nasıl doğru ayrılır?", a: ["İl-ko-kul", "İlk-o-kul", "İl-kok-ul", "İ-lko-kul"], c: 0},
            {q: "Hangisinde ünlü düşmesi vardır?", a: ["Aklım", "Kitap", "Kalem", "Defter"], c: 0}
        ],
        "KÖK VE EKLER": [
            {q: "'Gözlük' kelimesinin kökü nedir?", a: ["Göz", "Gözlük", "Lük", "Öz"], c: 0},
            {q: "Aşağıdakilerden hangisi kök halindedir?", a: ["Ağaç", "Çiçekçi", "Evler", "Yolcu"], c: 0}
        ],
        "YAPIM EKLERİ": [
            {q: "Hangisi yapım eki almıştır?", a: ["Silgi", "Masalar", "Kitabı", "Evde"], c: 0},
            {q: "Yapım eki alan sözcüklere ne denir?", a: ["Türemiş", "Basit", "Birleşik", "Kök"], c: 0}
        ],
        "ÇEKİM EKLERİ": [
            {q: "Hangisi çoğul ekidir?", a: ["-ler / -lar", "-ci / -cı", "-lik / -lık", "-den / -dan"], c: 0},
            {q: "Çekim ekleri kelimenin neyini değiştirmez?", a: ["Anlamını", "Yerini", "Zamanını", "Kişisini"], c: 0}
        ],
        "İSİMLER (ADLAR)": [
            {q: "Hangisi özel isimdir?", a: ["Eğirdir", "Göl", "Dağ", "Şehir"], c: 0},
            {q: "Hangisi soyut isimdir?", a: ["Sevgi", "Masa", "Taş", "Rüzgar"], c: 0}
        ],
        "SIFATLAR (ÖN ADLAR)": [
            {q: "Sıfatlar hangi sözcük türünü niteler?", a: ["İsimleri", "Fiilleri", "Zarfları", "Zamirleri"], c: 0},
            {q: "Hangisinde niteleme sıfatı vardır?", a: ["Kırmızı elma", "Şu adam", "Kaç gün", "Beş öğrenci"], c: 0}
        ],
        "ZAMİRLER (ADILLAR)": [
            {q: "Hangisi kişi (şahıs) zamiridir?", a: ["Ben", "Şu", "Kimi", "Hangisi"], c: 0},
            {q: "İsimlerin yerini tutan sözcüklere ne denir?", a: ["Zamir", "Sıfat", "Fiil", "Zarf"], c: 0}
        ],
        "NOKTALAMA İŞARETLERİ": [
            {q: "Tamamlanmış cümlenin sonuna ne konur?", a: ["Nokta", "Virgül", "Soru İşareti", "Ünlem"], c: 0},
            {q: "Eş görevli sözcükleri ayırmak için ne kullanılır?", a: ["Virgül", "Nokta", "İki Nokta", "Tırnak"], c: 0}
        ],
        "YAZIM KURALLARI": [
            {q: "Cümle nasıl başlar?", a: ["Büyük harfle", "Küçük harfle", "Rakamla", "Noktayla"], c: 0},
            {q: "Hangisinin yazımı yanlıştır?", a: ["Herkez", "Herkes", "Yalnız", "Yanlış"], c: 0}
        ],
        "METİN TÜRLERİ": [
            {q: "Yaşanmış veya yaşanabilir olayları anlatan yazı türü nedir?", a: ["Hikaye", "Masal", "Fabl", "Şiir"], c: 0},
            {q: "Hayvanların konuşturulduğu masalsı tür hangisidir?", a: ["Fabl", "Deneme", "Roman", "Makale"], c: 0}
        ],
        "SÖZ SANATLARI": [
            {q: "Kişileştirme (Teşhis) sanatı nedir?", a: ["İnsana ait özelliği doğaya verme", "Abartma", "Benzetme", "Zıtlık"], c: 0},
            {q: "'Aslan gibi kuvvetli' cümlesinde hangi sanat vardır?", a: ["Benzetme", "Kişileştirme", "Konuşturma", "Abartma"], c: 0}
        ],
        "DEYİMLER": [
            {q: "'Etekleri zil çalmak' deyiminin anlamı nedir?", a: ["Çok sevinmek", "Çok korkmak", "Acele etmek", "Kızmak"], c: 0},
            {q: "Deyimler genellikle nasıldır?", a: ["Mecaz anlamlıdır", "Gerçek anlamlıdır", "Sadece isimdir", "Tek kelimedir"], c: 0}
        ],
        "ATASÖZLERİ": [
            {q: "Atasözleri için hangisi söylenemez?", a: ["Söyleyeni bellidir", "Kısa ve özlüdür", "Öğüt verir", "Kalıplaşmış sözlerdir"], c: 0},
            {q: "'Damlaya damlaya...' atasözünün devamı nedir?", a: ["göl olur", "sel olur", "deniz olur", "ırmak olur"], c: 0}
        ],
        "GERÇEK VE MECAZ ANLAM": [
            {q: "'Soğuk davranmak' ifadesindeki 'soğuk' hangi anlamdadır?", a: ["Mecaz", "Gerçek", "Terim", "Yan"], c: 0},
            {q: "Hangisi gerçek anlamlıdır?", a: ["Çay çok sıcak.", "Tatlı diliyle kandırdı.", "Ağır sözler söyledi.", "Boş gözlerle baktı."], c: 0}
        ],
        "EŞ VE ZIT ANLAM": [
            {q: "'İhtiyar' kelimesinin eş anlamlısı nedir?", a: ["Yaşlı", "Genç", "Çocuk", "Bebek"], c: 0},
            {q: "'Güzel' kelimesinin zıt anlamlısı nedir?", a: ["Çirkin", "İyi", "Kötü", "Hoş"], c: 0}
        ],
        "GÖRSEL OKUMA": [
            {q: "Trafik levhaları bize ne mesajı verir?", a: ["Görsel uyarı mesajı", "Sadece renkleri", "Şiirsel anlatım", "Matematik formülü"], c: 0},
            {q: "Bir grafiğe bakarak hangisine ulaşılabilir?", a: ["Sayısal verilere", "Yazarın hayatına", "Şiirin duygusuna", "Öykünün kahramanına"], c: 0}
        ],
        "ŞİİRDE ANA DUYGU": [
            {q: "Şiirde anlatılmak istenen temel hisse ne denir?", a: ["Ana duygu", "Ana düşünce", "Konu", "Başlık"], c: 0},
            {q: "Şiir yazan kişiye ne ad verilir?", a: ["Şair", "Yazar", "Ressam", "Müzisyen"], c: 0}
        ]
    },
    "6": {
        "SÖZCÜKTE ANLAM": [
            {q: "Hangisi terim anlamlıdır?", a: ["Açı", "Bardak", "Göz", "Masa"], c: 0},
            {q: "Hangisinde mecaz anlamlı bir kelime kullanılmıştır?", a: ["İnce davranışlarıyla göz doldurdu.", "İnce bir ip koptu.", "Kitap masada duruyor.", "Ağaç çok uzun."], c: 0}
        ],
        "CÜMLEDE ANLAM": [
            {q: "Hangisi amaç-sonuç cümlesidir?", a: ["Sınavı kazanmak için çok çalıştı.", "Kar yağdığı için okullar tatil edildi.", "Çalışırsan başarırsın.", "Kitabı okudum ve anladım."], c: 0},
            {q: "Hangisi koşul (şart) cümlesidir?", a: ["Erken uyursan dinlenirsin.", "Okula gittiği için yoruldu.", "Onu görmek için geldim.", "Bugün hava çok güzel."], c: 0}
        ],
        "PARÇADA ANLAM": [
            {q: "Metnin yazılış amacına ne denir?", a: ["Ana düşünce", "Başlık", "Yardımcı düşünce", "Konu"], c: 0},
            {q: "Paragrafta konuyu destekleyen diğer fikirlere ne denir?", a: ["Yardımcı düşünce", "Ana fikir", "Özet", "Giriş"], c: 0}
        ],
        "İSİMLER": [
            {q: "Hangisi topluluk ismidir?", a: ["Orman", "Ağaç", "Çiçek", "Yaprak"], c: 0},
            {q: "Hangisi çoğul eki almamıştır?", a: ["Elma", "Gözlükler", "Masalar", "Öğrenciler"], c: 0}
        ],
        "İSİM TAMLAMALARI": [
            {q: "Hangisi belirtili isim tamlamasıdır?", a: ["Kapının kolu", "Masa örtüsü", "Sokak lambası", "Güzel araba"], c: 0},
            {q: "Zincirleme isim tamlaması en az kaç isimden oluşur?", a: ["Üç", "İki", "Dört", "Beş"], c: 0}
        ],
        "SIFATLAR": [
            {q: "Hangisi işaret sıfatıdır?", a: ["Bu ev", "Güzel ev", "Bir ev", "Hangi ev"], c: 0},
            {q: "Hangisi soru sıfatıdır?", a: ["Kaç elma?", "Yeşil elma", "Şu elma", "Birkaç elma"], c: 0}
        ],
        "SIFAT TAMLAMALARI": [
            {q: "Sıfat ve ismin oluşturduğu gruba ne denir?", a: ["Sıfat Tamlaması", "İsim Tamlaması", "Zarf Fiil", "Edat Grubu"], c: 0},
            {q: "Hangisi sıfat tamlamasıdır?", a: ["Soğuk su", "Evin kapısı", "Okul yolu", "Sınıf başkanı"], c: 0}
        ],
        "ZAMİRLER": [
            {q: "Hangisi işaret zamiridir?", a: ["Bunu", "Ben", "Kimi", "Güzel"], c: 0},
            {q: "Hangisi belgisiz zamirdir?", a: ["Bazıları", "Sen", "Şu", "Hangisi"], c: 0}
        ],
        "EDAT": [
            {q: "Aşağıdakilerden hangisi edattır (ilgeç)?", a: ["Gibi", "Ve", "Fakat", "Eyvah"], c: 0},
            {q: "Edatlar tek başlarına anlam taşırlar mı?", a: ["Hayır", "Evet", "Sadece fiille", "Sadece isimle"], c: 0}
        ],
        "BAĞLAÇ": [
            {q: "Hangisi bağlaçtır?", a: ["Ve", "İçin", "Kadar", "Göre"], c: 0},
            {q: "Bağlaç olan 'ki' nasıl yazılır?", a: ["Ayrı", "Bitişik", "Kesme işaretiyle", "Küçük harfle başlar"], c: 0}
        ],
        "ÜNLEM": [
            {q: "Hangisi ünlem cümlesidir?", a: ["Eyvah, geç kaldım!", "Bugün hava güzel.", "Kitap okuyorum.", "Ne zaman geleceksin?"], c: 0},
            {q: "Ünlemler hangi duyguyu ifade etmez?", a: ["Sakinliği", "Şaşkınlığı", "Korkuyu", "Sevinci"], c: 0}
        ],
        "SES OLAYLARI": [
            {q: "Hangisinde ünsüz yumuşaması (değişimi) vardır?", a: ["Kitabı", "Ağaç", "Çiçek", "Taş"], c: 0},
            {q: "Hangisinde ünsüz benzeşmesi (sertleşmesi) vardır?", a: ["Sınıfta", "Odada", "Evde", "Yolda"], c: 0}
        ],
        "YAPIM EKLERİ": [
            {q: "Hangisinde isimden isim yapan yapım eki vardır?", a: ["Gözlük", "Yazı", "Gülüş", "Okumak"], c: 0},
            {q: "Yapım eki kelimenin neyini değiştirir?", a: ["Anlamını", "Zamanını", "Kişisini", "Çoğulluğunu"], c: 0}
        ],
        "ÇEKİM EKLERİ": [
            {q: "Hangisi durum (hal) ekidir?", a: ["-den", "-lik", "-ci", "-gi"], c: 0},
            {q: "İyelik ekleri kime ait olduğunu bildirir mi?", a: ["Evet", "Hayır", "Bazen", "Asla"], c: 0}
        ],
        "YAZIM KURALLARI": [
            {q: "Ayların adı ne zaman büyük harfle başlar?", a: ["Belirli bir tarih varsa", "Her zaman", "Cümle ortasında", "Hiçbir zaman"], c: 0},
            {q: "Hangisinin yazımı doğrudur?", a: ["Kılavuz", "Klavuz", "Matematik", "Türkce"], c: 0}
        ],
        "NOKTALAMA İŞARETLERİ": [
            {q: "Açıklama yapılacak cümlenin sonuna ne konur?", a: ["İki Nokta", "Nokta", "Virgül", "Ünlem"], c: 0},
            {q: "Özel isimlere gelen çekim ekleri ne ile ayrılır?", a: ["Kesme İşareti", "Kısa Çizgi", "Tırnak", "Virgül"], c: 0}
        ],
        "METİN TÜRLERİ": [
            {q: "Kişinin kendi hayatını anlattığı yazı türü nedir?", a: ["Otobiyografi", "Biyografi", "Anı", "Günlük"], c: 0},
            {q: "Günü gününe tarih atılarak yazılan yazılara ne denir?", a: ["Günlük", "Anı", "Deneme", "Roman"], c: 0}
        ],
        "SÖZ SANATLARI": [
            {q: "Aşırı abartmaya ne ad verilir?", a: ["Mübalağa (Abartma)", "Teşhis", "İntak", "Tezat"], c: 0},
            {q: "Zıt (Karşıt) durumların bir arada verilmesine ne denir?", a: ["Tezat", "Mübalağa", "Benzetme", "Konuşturma"], c: 0}
        ],
        "DEYİMLER VE ATASÖZLERİ": [
            {q: "Deyimler genellikle hangi kelime türüyle biter?", a: ["Fiil", "İsim", "Sıfat", "Zarf"], c: 0},
            {q: "'Ağaç yaşken eğilir' bir atasözü müdür?", a: ["Evet", "Hayır", "Deyimdir", "Özdeyiştir"], c: 0}
        ],
        "HAL (DURUM) EKLERİ": [
            {q: "Hangisi bulunma durum ekidir?", a: ["-de / -da", "-i / -ı", "-e / -a", "-den / -dan"], c: 0},
            {q: "Ayrılma durum eki aşağıdakilerden hangisidir?", a: ["-den / -dan", "-e / -a", "-i / -ı", "-de / -da"], c: 0}
        ]
    },
    "7": { 
        "ZARFLAR": [
            {q: "Hangisi durum zarfıdır?", a: ["Hızlı koştu", "Yarın gel", "Dışarı çıktı", "Niçin?"], c: 0},
            {q: "Hangisi miktar zarfıdır?", a: ["Biraz dinlen", "Hemen gel", "Sessizce", "Öteye"], c: 0},
            {q: "Hangisi soru zarfıdır?", a: ["Nasıl bildin?", "Mavi kitap", "Kim geldi?", "Hangi soru?"], c: 0},
            {q: "Hangisi yer-yön zarfıdır?", a: ["İçeri gir", "Dün gördüm", "Çok yedi", "Güzel konuştu"], c: 0},
            {q: "Zarflar hangisini etkilemez?", a: ["İsimleri", "Fiilleri", "Fiilimsileri", "Zarfları"], c: 0}
        ],
        "ANLAM BİLGİSİ": [
            {q: "Hangisi sesteş (eş sesli) bir kelimedir?", a: ["Yüz", "Güzel", "Kitap", "Kalem"], c: 0},
            {q: "Somut bir kavramın mecazlaşıp soyut hale gelmesine ne denir?", a: ["Soyutlama", "Somutlama", "Deyim", "Terim"], c: 0}
        ],
        "CÜMLEDE ANLAM": [
            {q: "Hangisi bir varsayım cümlesidir?", a: ["Diyelim ki sınavı kazandın.", "Keşke gelseydin.", "Kesinlikle haklıyım.", "Belki yarın gelirim."], c: 0},
            {q: "Hangisi bir pişmanlık cümlesidir?", a: ["O sözleri söylememeliydim.", "Acaba gelir mi?", "Sanki yağmur yağacak.", "Az kalsın düşüyordum."], c: 0}
        ],
        "PARÇADA ANLAM": [
            {q: "Paragrafta anlatımın akışını bozan cümle genellikle nasıldır?", a: ["Farklı bir konuya geçer", "Ana düşünceyi açıklar", "Giriş cümlesidir", "Sonuç bildirir"], c: 0},
            {q: "Bir paragrafın giriş cümlesi hangi özelliği taşımaz?", a: ["Bağlaçla başlar", "Genel bir yargıdır", "Açıklamaya uygundur", "Bağımsızdır"], c: 0}
        ],
        "FİİLLER": [
            {q: "Kılış (İş) fiilleri ne alır?", a: ["Nesne (Onu)", "Zaman eki", "Sadece kişi", "Hiçbir şey"], c: 0},
            {q: "Hangisi oluş fiilidir?", a: ["Sararmak", "Okumak", "Uyumak", "Kırmak"], c: 0}
        ],
        "EK FİİLLER": [
            {q: "Ek fiilin kaç görevi vardır?", a: ["İki", "Bir", "Üç", "Dört"], c: 0},
            {q: "Hangisinde isim ek fiil alarak yüklem olmuştur?", a: ["Hava çok soğuktu.", "Hızlıca koştu.", "Kitap okuyacak.", "Beni gördü."], c: 0}
        ],
        "FİİL YAPISI": [
            {q: "Hangisi kurallı birleşik fiildir?", a: ["Gidebilmek", "Hasta olmak", "Yardım etmek", "Gözden düşmek"], c: 0},
            {q: "Hangisi basit yapılı fiildir?", a: ["Okudu", "Yazdırdı", "Koşabildi", "Hissetti"], c: 0}
        ],
        "YAZIM KURALLARI": [
            {q: "Hangisinin yazımı doğrudur?", a: ["Oysa ki", "Mademki", "Halbuki", "Sanki"], c: 0},
            {q: "'Gökdelen' kelimesi nasıl yazılır?", a: ["Bitişik", "Ayrı", "Kısa çizgi ile", "Tırnak içinde"], c: 0}
        ],
        "NOKTALAMA İŞARETLERİ": [
            {q: "Kendisinden sonra örnek verilecek cümlenin sonuna ne konur?", a: ["İki Nokta", "Virgül", "Noktalı Virgül", "Üç Nokta"], c: 0},
            {q: "Soru bildirmeyen ancak şüphe belirten durumlarda ayraç içinde ne kullanılır?", a: ["(?)", "(!)", "(:)", "(...)"], c: 0}
        ],
        "METİN TÜRLERİ": [
            {q: "Bir düşünceyi kanıtlamak amacıyla yazılan bilimsel yazılara ne denir?", a: ["Makale", "Deneme", "Fıkra", "Söyleşi"], c: 0},
            {q: "Karşılıklı konuşma havası içinde yazılan tür hangisidir?", a: ["Söyleşi (Sohbet)", "Biyografi", "Anı", "Makale"], c: 0}
        ],
        "SÖZ SANATLARI": [
            {q: "İnsan dışı varlıkları konuşturma sanatına ne denir?", a: ["İntak", "Teşhis", "Tenasüp", "Tariz"], c: 0},
            {q: "Birbiriyle ilgili kelimeleri aynı dizede kullanma sanatına ne denir?", a: ["Tenasüp", "Tezat", "Kinaye", "Mübalağa"], c: 0}
        ],
        "DEYİMLER VE ATASÖZLERİ": [
            {q: "Hangisi bir deyimdir?", a: ["Göz atmak", "Su uyur düşman uyumaz", "Sakla samanı gelir zamanı", "Damlaya damlaya göl olur"], c: 0},
            {q: "Atasözleri genellikle ne içerir?", a: ["Genel geçer bir kural veya öğüt", "Sadece abartı", "Sadece komik unsurlar", "Tarihi olaylar"], c: 0}
        ],
        "KİP EKLERİ": [
            {q: "Hangisi haber (bildirme) kipidir?", a: ["Şimdiki zaman (-yor)", "Gereklilik (-meli)", "İstek (-e)", "Dilek-şart (-se)"], c: 0},
            {q: "Hangisi dilek kiplerinden biridir?", a: ["Emir kipi", "Gelecek zaman", "Geçmiş zaman", "Geniş zaman"], c: 0}
        ],
        "FİİLDE ANLAM KAYMASI": [
            {q: "Zaman (anlam) kayması ne demektir?", a: ["Bir kipin başka bir kip yerine kullanılması", "Fiilin isim olması", "Kipin yanlış yazılması", "Zaman ekinin düşmesi"], c: 0},
            {q: "Hangisinde anlam kayması vardır?", a: ["Yarın Ankara'ya gidiyorum.", "Dün çok çalıştım.", "Her gün kitap okur.", "Şu an dinleniyor."], c: 0}
        ],
        "ANLATIM BİÇİMLERİ": [
            {q: "Sözcüklerle resim çizme sanatına hangi anlatım biçiminde rastlanır?", a: ["Betimleme", "Öyküleme", "Açıklama", "Tartışma"], c: 0},
            {q: "Okuyucuyu bilgilendirmek amacıyla hangi anlatım biçimi kullanılır?", a: ["Açıklama", "Betimleme", "Öyküleme", "Kanıtlama"], c: 0}
        ],
        "DÜŞÜNCEYİ GELİŞTİRME YOLLARI": [
            {q: "Konuyu daha iyi anlatmak için ünlü birinin sözünü kullanmaya ne denir?", a: ["Tanık Gösterme", "Tanımlama", "Örneklendirme", "Karşılaştırma"], c: 0},
            {q: "İki farklı durumu kıyaslamaya ne denir?", a: ["Karşılaştırma", "Benzetme", "Açıklama", "Sayısal Veri"], c: 0}
        ],
        "GEÇİŞ VE BAĞLANTI İFADELERİ": [
            {q: "Hangisi düşüncenin yönünü değiştiren bir ifadedir?", a: ["Ancak", "Ayrıca", "Bununla birlikte", "Üstelik"], c: 0},
            {q: "Hangisi destekleyici ve açıklayıcı bir ifadedir?", a: ["Özellikle", "Fakat", "Oysaki", "Rağmen"], c: 0}
        ],
        "GÖRSEL OKUMA": [
            {q: "Bir karikatür genellikle neyi hedefler?", a: ["Mizah yoluyla eleştirmeyi", "Sadece güldürmeyi", "Renkleri öğretmeyi", "Matematik formülü vermeyi"], c: 0},
            {q: "Kroki ne amaçla çizilir?", a: ["Bir yerin konumunu kaba taslak göstermek için", "Şiir yazmak için", "Roman taslağı için", "Güzellik için"], c: 0}
        ],
        "SÖZEL MANTIK": [
            {q: "Sözel mantık soruları genellikle neyi ölçer?", a: ["Akıl yürütme becerisini", "Ezber yeteneğini", "Yazı güzelliğini", "Hızlı okumayı"], c: 0},
            {q: "Mantık sorularında tablo çizmek neden faydalıdır?", a: ["Verileri düzenlemek için", "Kağıdı doldurmak için", "Resim yapmak için", "Süreyi uzatmak için"], c: 0}
        ],
        "EŞ ANLAM": [
            {q: "'Doktor' kelimesinin eş anlamlısı nedir?", a: ["Hekim", "Hemşire", "Hasta", "İlaç"], c: 0},
            {q: "'Cevap' kelimesinin eş anlamlısı nedir?", a: ["Yanıt", "Soru", "Doğru", "Yanlış"], c: 0}
        ]
    },
    "8": { 
        "FİİLİMSİLER": [
            {q: "Hangisi isim-fiildir?", a: ["Gülmek", "Gülünce", "Gülerek", "Gülen"], c: 0},
            {q: "Hangisi sıfat-fiildir?", a: ["Yıkanmış elbiseler", "Gidince", "Koşup", "Okumak"], c: 0},
            {q: "Hangisi zarf-fiildir?", a: ["Bakınca", "Bakış", "Bakan", "Bakacak"], c: 0},
            {q: "Hangisinde fiilimsi yoktur?", a: ["Eve gittim", "Okumayı seviyorum", "Gelen çocuk", "Gülerek anlattı"], c: 0},
            {q: "Fiilimsiler ne eki alamazlar?", a: ["Kip eklerini", "İsim durum eklerini", "Olumsuzluk ekini", "İyelik eklerini"], c: 0}
        ],
        "SÖZCÜKTE ANLAM": [
            {q: "Çok anlamlılık ne demektir?", a: ["Bir kelimenin birden çok anlam taşıması", "Kelimenin uzun olması", "Kelimenin zor okunması", "Kelimenin yabancı olması"], c: 0},
            {q: "Hangisi yansıma bir sözcüktür?", a: ["Şırıltı", "Büyük", "Güzel", "Koşmak"], c: 0}
        ],
        "CÜMLEDE ANLAM": [
            {q: "Örtülü anlam nedir?", a: ["Cümlede açıkça söylenmeyen ama çıkarılabilen anlam", "Cümlenin çok uzun olması", "Cümlenin devrik olması", "Kelimenin gizli yazılması"], c: 0},
            {q: "Hangisinde eleştiri (tenkit) vardır?", a: ["Yazar son kitabında karakterleri çok yüzeysel işlemiş.", "Bu kitap çok satacak.", "Yarın yeni bir kitap çıkıyor.", "Kitabın kapağı kırmızı."], c: 0}
        ],
        "PARÇADA ANLAM": [
            {q: "Eğitimde dijitalleşmeyi anlatan 'FastLearn' projesi hangi amaca hizmet eder?", a: ["Öğrenmeyi hızlandırıp oyunlaştırmaya", "Zaman kaybettirmeye", "Sadece oyun oynamaya", "Kitapları yok etmeye"], c: 0},
            {q: "Bir metnin 'başlığı' ile ilgili en doğru ifade hangisidir?", a: ["Konuyu en kısa şekilde özetler", "Metnin en uzun cümlesidir", "Her zaman fiil olmak zorundadır", "Sadece yazarın adıdır"], c: 0}
        ],
        "YER TAMLAYICISI": [
            {q: "Yer tamlayıcısı (Dolaylı Tümleç) hangi sorulara cevap verir?", a: ["Neye, Nerede, Nereden", "Nasıl, Ne zaman", "Kim, Ne", "Neyi, Kimi"], c: 0},
            {q: "Hangisinde yer tamlayıcısı yoktur?", a: ["Bugün çok yoruldum.", "Eve doğru yürüdük.", "Okuldan yeni geldim.", "Masada kitabım kalmış."], c: 0}
        ],
        "FİİLDE ÇATI": [
            {q: "Öznesine göre fiiller kaça ayrılır?", a: ["Etken ve Edilgen (Temelde)", "Geçişli ve Geçişsiz", "Basit ve Türemiş", "Kurallı ve Kuralsız"], c: 0},
            {q: "Nesnesine göre 'geçişli' fiil ne demektir?", a: ["Nesne (Onu) alabilen fiil", "Nesne alamayan fiil", "Sadece 'l' veya 'n' eki alan fiil", "İsim soylu fiil"], c: 0}
        ],
        "CÜMLE TÜRLERİ": [
            {q: "Yüklemi sonda olmayan cümleye ne denir?", a: ["Devrik Cümle", "Kurallı Cümle", "Eksiltili Cümle", "İsim Cümlesi"], c: 0},
            {q: "İçinde fiilimsi bulunan cümle yapısına ne denir?", a: ["Fiilimsi bulunan (Birleşik) Cümle", "Basit Cümle", "Sıralı Cümle", "Bağlı Cümle"], c: 0}
        ],
        "ANLATIM BOZUKLUKLARI": [
            {q: "Gereksiz sözcük kullanımı neye yol açar?", a: ["Anlatım bozukluğuna (Duru olmamaya)", "Akıcılığa", "Etkileyiciliğe", "Kafiyeye"], c: 0},
            {q: "Henüz 'Atatürk' adını almadığı 1919 yılından bahsederken 'Atatürk Samsun'a çıktı' demek hangi hatadır?", a: ["Anlam (Mantık/Tarihi) Uyuşmazlığı", "Özne eksikliği", "Noktalama hatası", "Çatı uyuşmazlığı"], c: 0}
        ],
        "YAZIM KURALLARI": [
            {q: "'Ki' bağlacı her zaman ayrı yazılır ancak kalıplaşmış olanlar bitişik yazılır. (SOMBAHÇEM). Hangisi bitişik yazılmaz?", a: ["Öyle ki", "Sanki", "Oysaki", "Mademki"], c: 0},
            {q: "Birleşik fiillerde ses düşmesi veya türemesi olursa nasıl yazılır?", a: ["Bitişik", "Ayrı", "Tırnak içinde", "Büyük harfle"], c: 0}
        ],
        "NOKTALAMA İŞARETLERİ": [
            {q: "Eksiltili (yüklemi olmayan) cümlenin sonuna ne konur?", a: ["Üç Nokta", "Nokta", "Soru İşareti", "Virgül"], c: 0},
            {q: "Alıntı kelimelerde vurguyu belirtmek için ne kullanılır?", a: ["Tırnak İşareti", "Kısa Çizgi", "Noktalı Virgül", "Ayraç"], c: 0}
        ],
        "METİN TÜRLERİ": [
            {q: "Gezilip görülen yerlerin edebi bir dille anlatıldığı tür nedir?", a: ["Gezi Yazısı", "Hatıra", "Roman", "Biyografi"], c: 0},
            {q: "Gazetelerin ilk sayfalarında yer alan ve güncel bir konuyu kişisel görüşle kısaca anlatan tür?", a: ["Fıkra (Köşe Yazısı)", "Destan", "Masal", "Hikaye"], c: 0}
        ],
        "ÖZNE": [
            {q: "İşi yapanı bulmak için yükleme hangi soru sorulur?", a: ["Kim, Ne?", "Nasıl?", "Nerede?", "Neyi?"], c: 0},
            {q: "Gizli özne cümlenin içinde kelime olarak bulunur mu?", a: ["Hayır", "Evet", "Sadece fiillerde", "Her zaman"], c: 0}
        ],
        "NESNE": [
            {q: "Belirtili nesne hangi sorulara cevap verir?", a: ["Neyi, Kimi?", "Ne, Kim?", "Nasıl, Niçin?", "Nereye?"], c: 0},
            {q: "Belirtisiz nesne yükleme sorulan hangi soruyla bulunur?", a: ["Ne?", "Nereyi?", "Kimi?", "Nereden?"], c: 0}
        ],
        "DEYİMLER VE ATASÖZLERİ": [
            {q: "'Göze girmek' deyimi ne anlatır?", a: ["Sevgi ve güven kazanmak", "Göze bir şey kaçması", "Kıskanmak", "Çok korkmak"], c: 0},
            {q: "Atasözleri hangi kipte yoğun olarak kullanılır?", a: ["Geniş Zaman / Emir", "Şimdiki Zaman", "Gelecek Zaman", "Hikaye Kipi"], c: 0}
        ],
        "SÖZ SANATLARI": [
            {q: "Bir kavramı zıt anlamlısıyla birlikte vermeye ne denir?", a: ["Tezat", "Mübalağa", "Kinaye", "Tevriye"], c: 0},
            {q: "Gerçek anlamı dışında mecaz bir anlam kastedilerek yazılan ince alay sanatına ne denir?", a: ["Tariz (İğneleme)", "Teşhis", "İntak", "Benzetme"], c: 0}
        ],
        "ANLATIM BİÇİMLERİ": [
            {q: "Olayların bir zaman akışı içinde anlatıldığı anlatım biçimi nedir?", a: ["Öyküleyici Anlatım", "Betimleyici Anlatım", "Açıklayıcı Anlatım", "Tartışmacı Anlatım"], c: 0},
            {q: "Okuyucunun fikrini değiştirmeyi amaçlayan anlatım biçimi hangisidir?", a: ["Tartışmacı Anlatım", "Öyküleyici Anlatım", "Açıklayıcı Anlatım", "Betimleyici Anlatım"], c: 0}
        ],
        "DÜŞÜNCEYİ GELİŞTİRME YOLLARI": [
            {q: "Bir kavramın 'Ne olduğu' sorusuna cevap veren cümle ne cümlesidir?", a: ["Tanımlama", "Örneklendirme", "Benzetme", "Karşılaştırma"], c: 0},
            {q: "İddiayı güçlendirmek için anket, istatistik gibi öğeler kullanmaya ne denir?", a: ["Sayısal Verilerden Yararlanma", "Tanık Gösterme", "Tanımlama", "Somutlaştırma"], c: 0}
        ],
        "GÖRSEL VE GRAFİK OKUMA": [
            {q: "Sütun grafiği okurken nelere dikkat edilmelidir?", a: ["Eksenlerdeki değerlere ve başlıklara", "Sadece renklere", "Çizgilerin kalınlığına", "Kağıdın kalitesine"], c: 0},
            {q: "Görsel yorumlama sorularında hangisi yanlıştır?", a: ["Kendi hayal dünyamızı tamamen görsele eklemek", "Görseldeki ipuçlarını aramak", "Metin ile görsel bağını kurmak", "Görseldeki yazıları okumak"], c: 0}
        ],
        "SÖZEL MANTIK": [
            {q: "Sıralama sorularında ilk adım ne olmalıdır?", a: ["Kesin bilgileri tabloya yerleştirmek", "Soruyu atlamak", "Seçeneklerden gitmek", "Sadece metni okumak"], c: 0},
            {q: "Öncüllerdeki 'veya' ifadesi ne anlama gelir?", a: ["İhtimal olduğunu", "Kesinlik olduğunu", "Hiçbiri olmadığını", "Sıralamayı bozduğunu"], c: 0}
        ],
        "CÜMLENİN ÖGELERİ (GENEL)": [
            {q: "Ögeler bulunurken önce hangi öge bulunur?", a: ["Yüklem", "Özne", "Nesne", "Zarf Tamlayıcısı"], c: 0},
            {q: "Tamlamalar ve deyimler cümlenin ögelerine ayrılırken ne yapılmaz?", a: ["Bölünmez (Ayrılmaz)", "Kısaltılmaz", "Yüklem yapılamaz", "Özne yapılamaz"], c: 0}
        ]
    }
};