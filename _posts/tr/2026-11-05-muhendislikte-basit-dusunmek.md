---
title: 'Mühendislikte Basit Düşünmek'
ref: basit-dusunmek
redirect_from: /muhendislik/muhendislikte-basit-dusunmek/
description: 'Mühendislikte olaylara basit bakmak ve her işin fiziksel karşılığını unutmamak üzerine bir deneme; yük yolundan kuvars kristaline.'
---

Mühendisliğin hangi dalıyla uğraşırsanız uğraşın, değişmeyen bir kural olduğunu düşünüyorum: Olaylara mümkün olduğunca basit bakmak ve yaptığımız her işin bir fiziksel karşılığı olduğunu unutmamak.

Burada basitlikten kastım, meseleleri hafife almak değil. Bir hesabın sayfalarca sürmesi, kullanılan matematiğin karmaşık olması ya da bir sistemin binlerce parçadan oluşması, onun temelindeki basitliği ortadan kaldırmaz.

Bir binanın ayakta durmasını ya da bir otomobilin hareket etmesini düşünün. Newton'un yüzyıllar önce ortaya koyduğu F = m·a ve kuvvet dengesi gibi birkaç temel ilke, bütün bu hesapların başlangıç noktasıdır. Elbette bir binanın deprem hesabı sayfalarca sürer, bir otomobilin tasarımında binlerce mühendis çalışır, bir işlemcinin geliştirilmesi yıllar alabilir. Bunların hiçbirini küçümsemiyorum. Söylemek istediğim şu: Karmaşıklık arttıkça temel ilkeler değişmez, yalnızca onları uygulamak zorlaşır.

İnşaat mühendisliğinde ilk öğrendiğimiz kavramlardan biri “yük yolu”dur. Çatıya yağan karın ağırlığını düşünün. Bu yük taşıyıcı elemanlardan geçerek kirişlere, kolonlara, temele ve sonunda zemine aktarılır; bir yerde ortadan kaybolmaz. Bir projeyi incelerken hesaplara girmeden önce yükün hangi yoldan zemine ulaştığını anlamaya çalışırsanız, bazen saatlerce hesap yaparak fark edemeyeceğiniz bir sorunu birkaç dakikada görebilirsiniz.

Örneğin bir kolonun yükünü alttaki taşıyıcı sisteme nasıl aktardığını açıklayamıyorsanız, orada durup düşünmeniz gerekir. Belki bir transfer kirişi vardır, belki başka bir çözüm düşünülmüştür. Ama önce yükün nereye gittiğini bilmelisiniz. Bence iyi mühendislik biraz da budur: Hesap yapmadan önce neyi hesapladığını anlamak.

Elektrikte de durum farklı değil: V = I·R. Sahadaki bir sensöre yüz metre kablo çektiğinizi ve sensörden beklediğiniz değeri alamadığınızı düşünün. Sorun sensörde mi, cihazın yazılımında mı, haberleşmede mi? Belki de kablonun direncini hesaba katmadınız. Üzerinden akım geçen iletkende gerilim düşümü oluşur ve bazı sistemlerde bu düşüm ölçümü etkileyebilir. Cihazın kılavuzunu açmadan, ayarlarını değiştirmeden önce akımın nereden geçtiğini ve gerilimin nerede düştüğünü düşünmek, çoğu zaman çözümün başlangıcıdır.

Sanayide yaygın olarak kullanılan 4–20 mA ölçüm sistemleri de güzel bir örnektir. Neden 0–20 mA değil? Çünkü ölçülen büyüklük sıfırken bile hattan 4 mA akım geçer. Sıfır akım gördüğünüzde bunun normal bir ölçüm olmadığını anlarsınız; kablo kopmuş, cihazın enerjisi kesilmiş veya başka bir arıza oluşmuş olabilir. Son derece basit bir fikir, ama endüstriyel otomasyonda yıllardır sayısız sorunun tespitini kolaylaştırıyor.

Yazılım tarafına geçtiğimizde ise bazen bu fiziksel düşünme alışkanlığını kaybediyoruz. Ekranda gördüğümüz değişkenler, fonksiyonlar, dosyalar ve servisler bize soyut kavramlar gibi geliyor. Oysa çalışan her yazılım, eninde sonunda fiziksel bir sistemin üzerinde hayat buluyor. Bir değişkenin değeri bellekte fiziksel bir durumla temsil ediliyor. Bir dosya, depolama ortamında manyetik ya da elektriksel durumlar üzerinden saklanıyor. Bir işlemci, transistörlerin durumlarını değiştirerek hesap yapıyor. Biz ekranda bir düğmeye basıyoruz, arkada milyonlarca fiziksel olay gerçekleşiyor.

Bu yüzden bir uygulama yavaşladığında ilk sorum genellikle şudur: Nerede bekliyor? Diskten veri mi okunuyor? Ağdan cevap mı bekleniyor? İşlemci mi meşgul? Yoksa işlemler birbirini mi bekliyor? Elbette bunların altında daha karmaşık yazılımsal nedenler olabilir. Ama sorunun hangi kaynakta ve hangi aşamada ortaya çıktığını bulduğunuzda, çözüm alanını ciddi biçimde daraltırsınız.

Bilgisayar ağlarında da aynı yaklaşım geçerli. Fiber optik kablonun içinde ışık saniyede yaklaşık 200 bin kilometre hızla ilerler. Ankara'dan Frankfurt'taki bir sunucuya ulaşmak istediğinizi düşünün; aradaki mesafe iki bin kilometreden fazla. Kablonun hiç dolanmadığını ve arada hiçbir cihazın gecikme oluşturmadığını varsaysak bile, verinin gidip gelmesi en az 20 milisaniye sürer. Gerçekte kablolar daha uzun güzergâhlardan geçer, aradaki ağ cihazları da zaman harcar. Hangi programlama dilini kullanırsanız kullanın, ışığın hızını artıramazsınız. Bunu bildiğinizde, ağ üzerinden çalışan bir uygulamadaki gecikmeyi değerlendirirken daha gerçekçi davranırsınız: Önce fiziksel sınırı anlarsınız, sonra iyileştirebileceğiniz kısmı ararsınız.

Aslında bütün bu örneklerde anlatmaya çalıştığım şey aynı. Karmaşık bir sistemi anlamanın yolu, önce en basit soruları sorabilmekten geçiyor. Burada ne oluyor? Ne, nereden nereye gidiyor? Hangi kuvvet, hangi akım, hangi veri, hangi enerji aktarılıyor? Ve belki de en önemlisi: Bunun neden böyle çalıştığını gerçekten biliyor muyum?

Şimdi bilgisayarla uğraşanlara küçük bir soru sormak istiyorum: Bir bilgisayar, bir saniyenin geçtiğini nereden biliyor? Bir program yazıyorsunuz ve program size bir işlemin 650 milisaniye sürdüğünü söylüyor. Cep telefonunuzda kronometreyi açıyorsunuz, saniyeler ilerliyor. Peki bilgisayar o bir saniyeyi nasıl ölçüyor? İnternette kısa bir aramayla cevabını bulabilirsiniz. Ama aramadan önce bir dakika düşünmenizi isterim.

Bilgisayarın içinde zamanı bilen biri yok. Doğadan bağımsız, kendi kendine işleyen soyut bir saniye de yok. En temelde, düzenli aralıklarla tekrarlanan fiziksel bir olayı sayıyoruz.

Bunun en bilinen örneklerinden biri kuvars kristali. Kuvarsın ilginç bir özelliği var: Elektriksel olarak uyarıldığında belirli frekanslarda mekanik titreşim oluşturabiliyor; elektronik devreler de bu düzenli titreşimlerden bir zaman referansı elde ediyor. Saat devrelerinde yaygın kullanılan kuvars kristallerinden biri saniyede 32.768 kez titreşir. Neden 32.768? Çünkü bu sayı 2'nin 15. kuvvetidir. Frekansı art arda ikiye bölerek saniyede bir darbeye ulaşabilirsiniz.

Modern bilgisayarlarda ve telefonlarda çok daha hızlı saat kaynakları, osilatörler ve donanımsal sayaçlar da kullanılır. Ama temel düşünce değişmez: Düzenli gerçekleşen fiziksel olayları sayarak zamanı ölçmek. Telefonunuz saatini zaman zaman şebekeden veya internetten düzeltir, çünkü fiziksel saat kaynakları da kusursuz değildir; sıcaklık ve başka etkenler nedeniyle küçük sapmalar oluşur. Ama iki düzeltme arasında geçen zamanı yine kendi donanımıyla takip eder.

Son derece karmaşık bir cihazın zamanı ölçmesinin arkasında, temelde düzenli bir titreşim ve onu sayan bir devre var. Bir taş ve bir sayaç.

Mühendislikte beni en çok etkileyen şeylerden biri bu. Yıllar içinde daha karmaşık sistemler kuruyor, daha güçlü bilgisayarlar kullanıyor, daha büyük projeler geliştiriyoruz. Hesaplama gücümüz artıyor, kullandığımız araçlar değişiyor. Ama doğanın kuralları bizim teknolojimize göre değişmiyor.

Belki de mühendislikte olgunlaşmak, her şeyi daha karmaşık düşünmeyi öğrenmek değil, karmaşık görünen şeylerin içindeki basitliği görebilmektir.

Çünkü bir problemi çözmeden önce onu anlamak gerekir. Anlamak ise çoğu zaman doğru soruyu sormakla başlar.

**Burada aslında ne oluyor?**
