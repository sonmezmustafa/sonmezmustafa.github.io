---
title: Programlamaya Başlamak
ref: programlamaya-baslamak
description: 'Kod yazmadan önce sorunu anlamak: dinlemek, süreci birlikte canlandırmak ve çözümü ondan sonra tasarlamak üzerine.'
---

Programlamaya başlarken hangi dili kullanacağımızı, nasıl bir mimari kuracağımızı konuşuyoruz. Bunların hepsinin bir yeri var. Ama ben işe biraz daha önce başlamak gerektiğini düşünüyorum: Neyi çözmeye çalışıyoruz?

Sonuçta yazacağımız program bir iş yapacak. Birinin işini kolaylaştıracak, bir hatayı önleyecek, bir işlemi hızlandıracak. Bunları yapabilmek için önce o işin bugün nasıl yürüdüğünü ve nerede aksadığını öğrenmemiz gerekiyor.

Üstelik sorun, müşterinin ilk anlattığı şey olmayabilir.

Müşteri çoğu zaman yaşadığı sıkıntıyla birlikte aklındaki çözümü de getirir. “Buraya bir onay ekranı istiyoruz” der. Belki gerçekten bir onay ekranına ihtiyaç vardır. Ama hemen ekranı çizmeye başlarsak o talebin neden ortaya çıktığını kaçırabiliriz. İnsanlar yetkileri dışında işlem mi yapıyor? Kimin karar verdiği mi belli değil? Yoksa yapılan işlemden kimsenin haberi mi olmuyor? Bunların her biri farklı bir çözüm gerektirebilir.

Bu yüzden önce dinlemek gerekiyor. Zaten dinlemeyen insanın sorun çözmesi zor. Daha karşıdaki sözünü bitirmeden kafamızda ekranlar, tablolar ve iş akışları oluşmaya başladıysa, bir noktadan sonra yalnızca kendi çözümümüze uyan kısımları duyabiliriz.

Benim burada faydalı bulduğum soru şu: “En son bu sorun yaşandığında ne oldu, başından anlatır mısınız?”

Çünkü “Bizde satın alma süreci karışık” cümlesiyle bir program tasarlamak zor. Ama geçen hafta istenen bir malzemenin neden alınamadığını konuşabiliriz. Talebi kim açtı? Kime haber verdi? Nerede beklendi? Beklediğini kim fark etti? Sonra ne yapıldı?

Olay anlatıldıkça, ilk konuşmada duyulmayan ayrıntılar çıkmaya başlar. Sistemde var olduğu söylenen bir işlemin aslında telefonla yürüdüğünü öğrenirsin. Herkesin bildiği sanılan bir kuralın kişiden kişiye değiştiğini görürsün. Bazen de sorun diye anlatılan şeyin, daha önceki bir aksaklığın sonucu olduğu anlaşılır.

Bunun için konuştuğumuz kişiye, mevcut işleyişi rahatça anlatabileceği bir ortam sağlamak gerekiyor. Her cümlesini düzeltir, her alışkanlığına şaşırır veya hemen bir kusur bulursak konuşma değişir. Gerçekte ne yapıldığını öğrenmek isterken, olması gereken süreci dinlemeye başlayabiliriz.

Dinledikten sonra da anladığımızı varsaymamalıyız. Ben burada işi biraz tiyatro gibi ele almayı faydalı buluyorum. Anlatılan süreci birlikte oynatmak gerekiyor.

“Şimdi depodasınız. Malzemenin azaldığını gördünüz. İlk ne yapıyorsunuz?”

“Talep açıyorum.”

“Talep kimin önüne düşüyor?”

“Bölüm müdürünün.”

“Müdür o gün yoksa?”

Çoğu zaman asıl konuşma burada başlıyor.

Normal akışı herkes aşağı yukarı anlatabiliyor. Ama biri izinliyken, talep yanlış açıldığında, miktar değiştiğinde veya iş acil olduğunda ne yapıldığını sormak gerekiyor. Bunlar günlük hayatın içinde yaşanıyor ve yazacağımız programın da bu durumlarla karşılaşacağını bilmeliyiz.

Tiyatro derken kastettiğim tam olarak bu: Kişiler belli, ellerindeki bilgiler belli, yapabilecekleri işler belli. Bir olay oluyor ve herkes sırayla bir şey yapıyor. Biz de sahneyi ilerletiyoruz. Gerekirse bir yerde durup başa dönüyoruz.

“Bir dakika, bu kişi talebin reddedildiğini nereden öğrendi?”

Bu soruya cevap veremiyorsak akışta henüz çözmediğimiz bir yer var demektir.

Süreci kendi zihnimizde canlandırmamız yetmez. Müşterinin de aynı şeyi görmesi gerekiyor. Bazen birkaç kutu çizmek, bazen örnek bir form göstermek, bazen de yalnızca bir talebi baştan sona konuşmak yeterli olur. Önemli olan, aynı kelimeleri kullanırken aynı işlemi düşünüp düşünmediğimizi anlamak.

Müşteriyle bu konuşmayı teknik terimler üzerinden yapmamaya çalışırım. Karşımızdaki kişi teknik bir rol üstlenmiyorsa, veri tabanının yapısını veya kullanacağımız mimariyi bilmek zorunda değil. Onun değerlendireceği şey, işinin nasıl yürüyeceği.

“Rol bazlı yetkilendirme yapacağız” demek yerine, “Depodaki çalışan talebi açabilecek, satın alma fiyatları girecek, bu tutarın üzerindeki alımı siz onaylayacaksınız” demek daha anlaşılır. Üstelik bu cümleye itiraz edebilir. “Hayır, o tutarda benim onayım gerekmiyor” diyebilir. İhtiyacımız olan da bu karşılıktır.

Teknik bir açıklamayı dinleyip başını sallaması, bizi anladığı anlamına gelmeyebilir. Bazen anlamadığını söylemek istemez, bazen ayrıntıyı bize bırakır. Biz de bunu mutabakat sanabiliriz. Sonra program teslim edildiğinde “Ben böyle düşünmemiştim” cümlesini duyarız.

Bu yüzden “Anlaştık mı?” diye sormak yerine, örnek üzerinden ilerlemek daha faydalı. Birlikte bir işlem açmak, değiştirmek, reddetmek, tamamlamak. Kullanıcının nerede duraksadığına bakmak. Biz anlatmadan bir sonraki adımı bulabiliyor mu? Ekranda gördüğü bilgiyle karar verebiliyor mu?

Bir de konuştuğumuz kişiyle programı kullanacak kişi her zaman aynı olmayabilir. Yönetici raporu görmek ister; o raporun verisini başka biri girer. Veri girecek kişinin işini anlamadan yalnızca raporu tasarlarsak, sonradan eksik veya güvenilmez verilerle uğraşabiliriz. Mümkünse işi gerçekten yapan insanı dinlemek, hatta bir süre nasıl çalıştığını görmek gerekir.

Bütün bunlardan sonra sorunu birkaç cümleyle yazabilmeliyiz. Bugün ne oluyor? Bunun kime, nasıl bir etkisi var? Program devreye girdiğinde neyin değişmesini bekliyoruz?

“Bir satın alma modülü yapılacak” cümlesi bana bu konuda pek bir şey söylemiyor. “Taleplerin kimde beklediği görülemiyor; çalışanlar durum öğrenmek için birbirini arıyor” dediğimizde ise üzerinde çalışabileceğimiz bir sorun ortaya çıkıyor. Çözümü değerlendirirken de dönüp bakabileceğimiz bir ölçümüz oluyor: İnsanlar hâlâ aynı telefonları açmak zorunda mı?

Bazen bu incelemenin sonunda yeni bir programa ihtiyaç olmadığını da görebiliriz. Yetkinin netleşmesi, mevcut sistemde küçük bir değişiklik veya kullanılmayan bir özelliğin doğru anlatılması yeterli olabilir. Bunu söyleyebilmek de yaptığımız işin bir parçası.

Ben programlamaya başlamayı böyle düşünüyorum. Önce dinlemek, sonra anladığını birlikte sınamak, ardından çözümü tasarlamak. Yazılım dili ve mimariyle ilgili kararlar da bu bilgilerle daha sağlam bir yere oturuyor.

Kod yazmaya oturduğumda, en azından şu soruya cevap verebilmek isterim: Bu programı kullanacak kişi bugün hangi işi yapmakta zorlanıyor ve benim yazdığım şey ona nasıl yardımcı olacak?
