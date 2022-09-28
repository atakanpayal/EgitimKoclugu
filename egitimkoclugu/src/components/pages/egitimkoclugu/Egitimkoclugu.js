import "./Egitimkoclugu.css";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
function Egitimkoclugu() {
  return (
    <>
      <div className="tabbs">
        <Tabs>
          <TabList>
            <Tab>
              <button class="cta">
                <span class="hover-underline-animation"> Eğitim Koçluğu </span>
              </button>
            </Tab>
            <Tab>
              {" "}
              <button class="cta">
                <span class="hover-underline-animation"> Online Koçluk </span>
              </button>
            </Tab>
            <Tab>
              {" "}
              <button class="cta">
                <span class="hover-underline-animation">
                  {" "}
                  Çalışma Programı{" "}
                </span>
              </button>
            </Tab>
            <Tab>
              {" "}
              <button class="cta">
                <span class="hover-underline-animation">
                  {" "}
                  Konu ve Soru Takip Çizelgesi{" "}
                </span>
              </button>
            </Tab>
            <Tab>
              {" "}
              <button class="cta">
                <span class="hover-underline-animation">
                  {" "}
                  LGS-YKS-DGS Tercih Danışmanlığı{" "}
                </span>
              </button>
            </Tab>
          </TabList>

          <TabPanel id="egitimkoclugu">
            <div
              className="text-ekibimiz"
              style={{
                backgroundImage:
                  "url(" +
                  "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" +
                  ")",
              }}
            >
              <p className="text-big-ekibimiz">Eğitim Koçluğu</p>
              <p className="text-small-ekibimiz">Anasayfa → Eğitim Koçluğu</p>
            </div>
            <div className="egitim-tab">
              <h2 className="header-tab">Eğitim Koçluğu Nedir</h2>
              <hr></hr>
              <p>
                Eğitim koçluğu; öğrencinin kendini tanımasını ve
                yönlendirmesini, içsel kaynaklarına ulaşıp bu kaynakları
                istenilen biçim ve süreklilikte kullanmasını, yaşamıyla ilgili
                sorumluluğunu alıp daha mutlu ve doyurucu bir yaşam sürmesini;
                öğrenim hayatının kalitesini ve sonrasında ulaşacağı beklenti ve
                hedefleri artırmayı amaçlayan öğrenciler için destek amaçlı
                kişisel gelişim programıdır.Koç sizin adınıza karar vermez,
                sizin ne istediğinizi sizden daha iyi bilemez, size ‘şunu yap,
                şunu yapma’ diyecek sihirli bir gücü de yoktur. Sizin
                isteklerinizi, kararlarınızı, değerlerinizi ve yeteneklerinizi
                keşfetmeniz için iç görü ve farkındalık oluşturur. Koçluk
                eğitiminde amaç; gerekli alt yapıyı ve desteği sağlayarak,
                bireyi harekete geçirmek ve bireyin hedeflerine ulaşması
                konusunda istek uyandırmaktır. Bunun için de derin sorular
                sorar, güçlü geri bildirimlerde bulunur ve ilham verir.
                Öğrenciler Koçluk eğitimi sayesinde; planlı-programlı çalışmayı
                ve zamanı doğru kullanmayı öğrenirler. Hedef belirleme ve
                netleştirme çalışmalarını düzenli olarak gerçekleştirirler.
                Öğrenim ve toplumsal yaşam dengesini kurarken, kendi öğrenme
                biçiminin bilincine varırlar. Daha sağlıklı ve düzenli bir yaşam
                sürme alışkanlıklarını benimserler. Öğrenci kendi kendini
                disipline etme becerisini geliştirir. Başarısız ya da başarılı
                olma korkusu ortadan kalkar. Bu süreç boyunca özgüven,
                motivasyon ve kararlık başta olmak üzere tüm potansiyelinizi en
                üst seviyede kullanmanıza destek olur. Dikkat dağınıklığı ya da
                bozukluğu ile mücadele etmede daha başarılı olurlar. Hem birey
                hem de öğrenci olarak gelişme ve değişme sağlarlar.
              </p>
              <h2 className="header-tab">
                EĞİTİM KOÇUNDAN NEDEN DESTEK ALMALIYIZ?
              </h2>
              <hr></hr>
              <p>
                Eğitim koçu; eğitim ortamında bir koç ve öğrenci arasında
                kurulan, öğrencinin gelişimini desteklemek amaçlı bir güç
                birliğidir. Kişiye özel uyguladığımız eğitim sistemimizde eğitim
                koçu kişinin tüm yaşam alanlarına bir bütün olarak bakar. Ayrıca
                bütünsel yaklaşımının yanında son derece sistematik bir yapıya
                da sahiptir. Süreç boyunca adım adım ulaşmak istediği hedefe
                doğru giderken onu destekleyecek yeni yollar bulmasına yardımcı
                olur, öğrencinin hedefleri ve ulaşmak istediği sonuçlara kendi
                penceresinden bakmasını sağlayarak içsel motivasyonunu harekete
                geçirmeyi destekler. Bu yüzden eğer öğrenci ders çalışamıyorum,
                dikkatini veremiyorum, çok sıkılıyor, ne yapacağını bilmiyor,
                öğrenmekte zorlanıyorsa; veliler çocuğum ders çalışmıyor,
                sürekli bilgisayar ya da telefonla uğraşıyor, ne kadar
                konuşursak konuşalım bizi dinlemiyor, derslerinde ki
                başarısızlığın nedenlerini bulamıyoruz, hedef belirlemekte
                zorluk yaşıyoruz gibi sorunlarla baş edemiyorsanız bir koçtan
                destek almanız gerekiyor.
              </p>
              <h2 className="header-tab">EĞİTİM KOÇUNUN GÖREVLERİ NELERDİR?</h2>
              <hr></hr>
              <p>
                • Okul başarısını yükseltmek için gerekli plan ve programı
                yapmak, • Ders çalışma tekniklerini öğretmek, • Sınav ile ilgili
                kaygılarını ortadan kaldırma, • Aile iletişimindeki aksaklıları
                gidermeye yardımcı olmak, • Sosyal alanda başarıyı
                yakalamalarına yardımcı olmak, • Sosyal etkinliklere
                katılımlarını sağlamak,  • Meslek seçimine yardımcı olmak ve •
                Zaman yönetimi konularında bireysel ya da takım çalışması
                yaparak destek sağlamaktır.
              </p>
              <h2 className="header-tab">EGİTİM KOÇU İLE KİMLER ÇALIŞIR?</h2>
              <hr></hr>
              <p>
                Eğitim sürecine yeni başlayan veya devam edenler, ara sınıflarda
                (7-8-9-10 ve 11. Sınıf ) okuyanlar, ne yapacağını ve nereden
                başlayacağını kestiremeyenler, hedef ve önceliklerini
                belirlerken harekete geçmek konusunda cesarete ve yardıma
                ihtiyaç duyanlar, güçlü ve zayıf yanlarının neler olduğunu ve
                bunları nasıl kullanacağını bilmeyenler; kendisini,
                yeteneklerine ve zekasına göre çeşitli beceriler kazandırarak
                geliştirmek isteyenler ve en önemlisi LGS ve YKS sınavına
                hazırlanan öğrencilerin tercih ettiği bir süreçtir.
              </p>
            </div>
          </TabPanel>
          <TabPanel>
            <div
              className="text-ekibimiz"
              style={{
                backgroundImage:
                  "url(" +
                  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" +
                  ")",
              }}
            >
              <p className="text-big-ekibimiz">Online Koçluk</p>
              <p className="text-small-ekibimiz">Anasayfa → Online Koçluk</p>
            </div>
            <h2 className="header-tab">Online Koçluk Nedir?</h2>
            <hr></hr>
            <p>
              Sınav (LGS-YKS) döneminde herkesin desteğe ihtiyacı vardır.
              Bazılarımız bunu dershaneye giderek, bazılarımız da sadece okulla
              yürütmeye çalışırız. Hayatımızın bu döneminde günü gününe bizi
              takip edecek, planlı ve programlı çalışmamızı sağlayacak, stres ve
              kaygıdan bizi uzaklaştıracak, motivasyonumuzu artıracak, sınavla
              ilgili sorularımızı rahatlıkla sorabilecek birilerine ihtiyaç
              duyarız. Hayallere giden bu zorlu sınav sürecinde her geçen gün
              değişen ve gelişen teknoloji sayesinde zaman ve mekân kısıtlaması
              olmadan her kademedeki öğrenci Online Koçluk hizmetimizden
              faydalanabilirler.
            </p>
            <h2 className="header-tab">Online Kocluğun faydaları</h2>
            <hr></hr>
            <p>
              • Ofise ne kadar uzak olduğunuzun hiçbir önemi yok, evinizde
              anında koçluk eğitimini almaya başlayabilirsiniz. • Ofis çalışma
              saatlerimize uymak zorunda değilsiniz, randevu oluşturarak
              istediğiniz saatte koçluk eğitimini alabilirsiniz. • Son dönemde
              sürekli değişen ve gelişen teknoloji sayesinde anında ulaşmanın
              mümkün olmadığı her türlü dosya, görsel, yazı, sunum ve video
              paylaşımına, online seanslarımızda çok daha hızlı ulaşabilir ve
              işlevsel olarak kullanabilirsiniz. • Yüz yüze koçluk hizmetimizden
              daha esnek çalışma saatleri ve iptal etme koşulları sağlar. Çünkü
              yüz yüze randevu iptallerini 24 saat önceden yapmanız beklenirken
              online koçluklarda böyle bir koşul yoktur. • Ulaşım, hava şartları
              ve trafik gibi unsurlarla uğraşmak zorunda kalmaz ve zaman
              kaybetmezsiniz. • Bu yüzden yüz yüze eğitim koçluğu hizmetimizden
              daha ekonomiktir.
            </p>
            <h2 className="header-tab">Nasıl bir yol izliyoruz</h2>
            <hr></hr>
            <p>
              Online koçluk hizmetimize başlamadan önce öğrenciyle/danışanla ön
              görüşme yapmak için telefon aracılığıyla iletişime geçiyoruz.
              Öğrenciyle tanışma süreci bittikten sonra görüşmeler planlanan
              haftalık seanslara uygun olarak ayarlanır ve koçluk hizmetimiz
              öğrencinin isteğine bağlı olarak sınava kadar devam eder. Öğrenci
              istediği zaman koçluk eğitimini sonlandırabilir.
              Öğrenciyle/danışanla birlikte interaktif olarak takip sistemimiz
              üzerinden haftalık çalışma programınızı hazırlıyoruz. Hazırlamak
              demek size var olan bir şablonu sunmak demek değildir. Çünkü bizim
              hedefimiz; sizinle birlikte, sizi tanıyarak ve sizin için en uygun
              olanı belirleyerek çalışma programını hazırlamaktır. Daha sonra
              birlikte hazırladığımız programı online platforma aktararak
              geçirdiğimiz süre zarfında yaptığınız her şeyi (soru sayısı, konu
              tekrarları, deneme çözümleri ve netleri, doğru ve yanlışların
              istatiksel grafikleri, deneme analizleri…) kaydediyoruz. Kurmuş
              olduğumuz bu platform (tablo ve grafik) sayesinde neyi yapıp neyi
              yapmadığınızı somut verilerle ortaya koyup, gelişiminizi haftalık
              ve aylık olarak takip ettiğimiz için geriye dönüp baktığınızda,
              hangi dersten ne kadar çalıştığınızı, toplam kaç soru çözdüğünüzü,
              hangi konularda eksik olduğunuzu tek başınıza görebilme imkânı
              sunuyoruz. Çünkü sınav döneminde ki belki de en önemli şey konu
              eksiklerimizi saptamak ve bunlara yönelik önlemler almaktır.
            </p>
          </TabPanel>
          <TabPanel>
            <div
              className="text-ekibimiz"
              style={{
                backgroundImage:
                  "url(" +
                  "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80" +
                  ")",
              }}
            >
              <p className="text-big-ekibimiz">Çalışma Programı Nedir?</p>
              <p className="text-small-ekibimiz">
                Anasayfa → Çalışma Programı Nedir?
              </p>
            </div>
            <h2 className="header-tab">Çalışma Programı Nedir?</h2>
            <hr></hr>
            <p>
              Çalışma programı; öğrencilerin bireysel farklılıkları dikkate
              alınarak hazırlanan, zamanı doğru kullanıp yönetmesine ve plan
              yapmasına yardımcı olan bir sistemdir. Bizim amacımız ise
              öğrencilerimizin bu zor süreçte yanında olup, doğru yöntem ve
              sistemle onları istedikleri hedefe ulaştırmaktır. Bunun içinde ilk
              adım olarak, istek ve yeteneklerini de göz önünde bulundurarak
              uygun bir porgram hazırlamaktır. Sizlerde hedeflerinize ulaşmak
              istiyorsanız yapmanız gereken tek şey bize ulaşmak:)
            </p>
            <h2 className="header-tab">ÇALIŞMA PROGRAMININ İÇERİĞİ!</h2>
            <hr></hr>
            <p>
              Çalışma programı, özellikle üniversite (TYT-AYT) ve Liselere giriş
              (LGS) sınavına hazırlanan öğrenciler için en önemli konulardan
              birisi olmaktadır. Her yıl düzenlenen üniversite yerleştirme ve
              liseye giriş sınavına milyonlarca aday katılmaktadır. Bu nedenle
              rekabetin çok olduğu bir ortamda, iyi bir YKS ve LGS sonucu elde
              edebilmek için adayların çok disiplinli ve sıkı bir şekilde
              çalışması gerekmektedir. YKS sınavı 3 oturumdan oluşmakta olup;
              bunlardan birinci oturuma 120 sorudan oluşan TYT (40 Türkçe, 20
              Sosyal, 20 Fen, 40 Matematik) , ikinci oturuma 160 sorudan oluşan
              AYT (Sözel- Sayısal- Eşit Ağırlık), üçüncü oturuma ise 80 sorudan
              oluşan YDT denilmektedir. YKS sınavında TYT oturumuna bütün
              adayların girmesi gerekmektedir. AYT ve YDT sınavlarına ise isteğe
              bağlı olarak girilebilmektedir. Üniversitelerin ön lisans bölümüne
              girecek olan adayların sadece TYT sınavına girmesi yeterli
              olmaktadır. Lisans bölümlerine girmek isteyen üniversite
              adaylarının ise hem TYT, hem de AYT sınavlarına katılması şarttır.
              Sınav süresi ise sırasıyla; TYT 120 soru için 135 dk, AYT 160 soru
              için 180 dk ve AYT 80 soru için 120 dk olarak belirlenmiştir.
              Öğrencilerin süre konusunda sıkıntı yaşadıkları ve çoğunun
              elendiği sınav olarak bilinen TYT sınavında siz değerli
              öğrencilerimize büyük görevler düşüyor. Bizler yani eğitim koçları
              tam olarak burada devreye giriyoruz aslında. Doğru bir plan ve
              program sayesinde hem zamanı yönetmeyi hem de sistemli ve düzenli
              olmayı hedefliyoruz çalışmalarımızda. Bu yüzden çalışma programı
              hazırlanırken öğrencinin seviyesi, konu eksiklikleri, sınav
              kaygısı, zaman yönetimi... vb özellikleri dikkate alınmak
              zorundadır çünkü çalışma programları kişiye özel hazırlanır. LGS
              sınavı ise iki oturumdan oluşmakta olup; birinci oturum Sözel
              Bölüm, ikinci oturum ise Sayısal Bölümdür. Sözel bölüm (20 Türkçe,
              10 İngilizce, 10 Din Kültürü, 10 İnkılap Tarihi) 50 soru olup 75
              dk, Sayısal bölüm (20 Fen, 20 Matematik) 40 soru olup 80 dk olarak
              planlanmıştır.
            </p>
          </TabPanel>
          <TabPanel>
            <div
              className="text-ekibimiz"
              style={{
                backgroundImage:
                  "url(" +
                  "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" +
                  ")",
              }}
            >
              <p className="text-big-ekibimiz">Konu ve Soru Takip Çizelgesi</p>
              <p className="text-small-ekibimiz">
                Anasayfa → Konu ve Soru Takip Çizelgesi
              </p>
            </div>
            <h2 className="header-tab">Konu ve Soru Takip Çizelgesi</h2>
            <hr></hr>
            <p>
              Konu analiz çizelgesi; hem öğrencinin hem velinin hem de bizlerin
              sınava yönelik planlamalar yaparken kullandığı, eksikliklerin
              kolaylıkla tespit edilmesine ve kaynak takiplerinin yapılmasına
              yardımcı olan faydalı bir sistemdir. Öğrenci bu sistemi uyguladığı
              zaman tek başına da ilerleyişini görüp, ona göre çalışmalarını
              sürdürebilir. Aynı şekilde velilerimizde bu çizelge sayesinde
              öğrencisinin neler yaptığını, hangi konuları bitirip hangi
              konularda eksik olduğunu kolaylıkla görebilir. TYT Konu
              çizelgesinde; Tyt Matematik Konuları Tyt Geometri Konuları Tyt
              Türkçe Konuları Tyt Fizik Konuları Tyt Kimya Konuları Tyt Tarih
              Konuları Tyt Biyoloji Konuları Tyt Coğrafya Konuları Tyt Felsefe
              Konuları Tyt Din Kültürü ve Ahlak Bilgisi Konuları yer alırken,
              AYT Konu çizelgesinde; Ayt Matematik Konuları Ayt Geometri
              Konuları Ayt Biyoloji Konuları Ayt Fizik Konuları Ayt Kimya
              Konuları Ayt Edebiyat Konuları Ayt Coğrafya Konuları Ayt Felsefe
              Konuları Ayt Tarih Konuları Ayt Din Kültürü ve Ahlak Bilgisi
              güncel konuları olacak.
            </p>
          </TabPanel>
          <TabPanel>
            <div
              className="text-ekibimiz"
              style={{
                backgroundImage:
                  "url(" +
                  "https://images.unsplash.com/photo-1507415492521-917f60c93bfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" +
                  ")",
              }}
            >
              <p className="text-big-ekibimiz">
                LGS-YKS-DGS Tercih Danışmanlığı
              </p>
              <p className="text-small-ekibimiz">
                Anasayfa → LGS-YKS-DGS Tercih Danışmanlığı
              </p>
            </div>
            <h2 className="header-tab">LGS-YKS-DGS Tercih Danışmanlığı</h2>
            <hr></hr>
            <p>
              Öğrencilerimiz için sınav sonrası en önemli adım "Tercih Dönemi"
              diyebiliriz. Onlarla birlikte bu süreci yaşayan ebeveynlerimizde
              çocukları için doğru tercihler yapıp geleceklerini en iyi şekilde
              kurmak istiyorlar. Çünkü doğru tercih hayat kurtarır. Aileler
              genel olarak çocuklarının yanlarında kalması için başka şehir
              tercih etme haklarını ellerinden alabiliyor ve yüksek puanlarla
              yanlış tercihler yapmalarına sebep olabiliyorlar. Bu gibi
              durumların yaşanmaması ya da en aza indirgenmesi için öğrencilerin
              en önemlisi de anne ve babaların doğru yönlendirilmesi gerekiyor.
              Eğitim danışmanı olarak bizler tercih dönemlerimizde
              öğrencilerimize ücretsiz olarak "Tercih Danışmanlığı" ve
              "Mentorluk" yaparak destek olmak için buradayız. Bizim öğrencimiz
              olmayıp bu hizmetimizden yararlanmak isteyen öğrenci ve
              ebeveynlerimize de belli bir ücret karşılığında bunu
              sağlamaktayız. Faydalanmak için formumuzu doldurmanız ya da
              sitemizde bulunan iletişim numaramıza mesaj göndermeniz yeterli
              olacaktır.
            </p>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
export default Egitimkoclugu;
