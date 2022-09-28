import { Link } from "react-router-dom";
import Cardcarousel from "./card-carousel/Cardcarousel";
import Crew from "./Crew";
import "./Mainpage.css";
import Packages from "./Packages";

function Mainpage() {
  return (
    <>
      <div className="img-container">
        <div className="egitim-kocu-div">
          <p
            className="egitim-kocu-text header"
            style={{ color: "#ffffff", textAlign: "start" }}
          >
            Eğitim Koçu
          </p>
          <br></br>
          <p className="eğitim-kocu-text1">
            Eğitim koçluğu alan öğrencilerimiz; aldıkları bu hizmet sayesinde
            sadece sınav başarısına yönelik başarımlar değil tüm yaşamlarında
            uygulayabilecekleri bilgi ve beceri kazanırlar
          </p>
          <Link to="/egitimkoclugu">
            <button className="detaybutton">
              Detaylar
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
      <div className="wrapper-main">
        <div className="deneyim-img"></div>
        <div className="egitim-kocu-text2">
          <p className="header" style={{ color: "black" }}>
            Eğitim Koçu
          </p>
          <p>
            LGS ve YKS’ ye hazırlanan öğrencilerin farkındalık yaratıp, kendi
            ayakları üzerinde durmasını ve hedeflerine ulaşmasını amaçlıyoruz.
            Sabretmenin aslında mücadele etmek olduğunu, hayalleri için pes
            etmeden çalışan, geçmişteki hatalarından dersler çıkarıp, değişim ve
            gelişmeleri sürekli takip ederek geleceğine yön veren, başarmak için
            durmadan çalışan, kendi fikirleri ve hür iradesiyle düşünebilen,
            bilgisiyle sorgulayan ve eleştiren bireyler yetiştirmek için,
            değişimin olmazsa olmaz olduğu günümüz dünyasındaki karanlık yollara
            ışık tutabilmek ve bu yolları en iyi şekilde öğrencilerimize
            gösterebilmek adına bireye özel koçluk sistemini geliştirdik.
          </p>
          <p>
            Hedefimiz; İstanbul’un her köşesinde kesintisiz çalışmalarımızı
            sürdürüp, karşılaşacağımız her probleme çözüm bulmak.
          </p>
        </div>
        <p className="hakkimizda header">HAKKIMIZDA</p>
        <Cardcarousel />
        <p className="paketlerimiz header">PAKETLERİMİZ</p>
        <Packages />
        <p className="ekibimiz header">EKİBİMİZ</p>
        <Crew />
      </div>
    </>
  );
}
export default Mainpage;
