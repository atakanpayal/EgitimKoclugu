import "./Adayform.css";
import { useForm, ValidationError } from "@formspree/react";
import swal from "sweetalert";

export default function Adayform() {
  const [state, handleSubmit] = useForm("xnqrdokk");
  if (state.succeeded) {
    swal({
      title: "Gönderildi!",
      text: "Aday Formunuz Başarıyla Gönderildi!",
      icon: "success",
      button: "Devam",
    });
  }
  return (
    <>
      <div
        className="text-ekibimiz"
        style={{
          backgroundImage:
            "url(" +
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" +
            ")",
          border: "none",
        }}
      >
        <p className="text-big-ekibimiz">Aday Formu</p>
        <p className="text-small-ekibimiz">Anasayfa → Aday Formu</p>
      </div>
      <div className="justify-content-center">
        <form className="adayformu" onSubmit={handleSubmit}>
          <div className="name-div input-div">
            <label htmlFor="name">Ad-Soyad</label>
            <input
              className="styled-input-aday"
              id="name"
              type="name"
              name="name"
              placeholder=" Adınız ve Soyadınız"
              required
            />
          </div>
          <div className="talep-div input-div">
            <label>Öğrenci Talebi</label>
            <input
              className="styled-input-aday"
              id="talep"
              type="talep"
              name="talep"
              placeholder=" Hangi Konuda Koçluk Hizmeti İstediğinizi Belirtin"
              required
            />
          </div>
          <div className="sinif-div input-div">
            <label>Sınıfınız</label>
            <input
              className="styled-input-aday"
              id="sinif"
              type="sinif"
              name="sinif"
              placeholder=" Sınıfınız"
              required
            />
          </div>
          <div className="alan-div input-div">
            <label>Alanınız</label>
            <input
              className="styled-input-aday"
              id="alan"
              type="alan"
              name="alan"
              placeholder=" Alan Seçimi Yaptıysanız Belirtiniz"
              required
            />
          </div>
          <div className="hedef-div input-div">
            <label>Hedefiniz</label>
            <input
              className="styled-input-aday"
              id="hedef"
              type="hedef"
              name="hedef"
              placeholder=" Bölüm / Üniversite"
              required
            />
          </div>
          <div className="okul-div input-div">
            <label>Okulunuz </label>
            <input
              className="styled-input-aday"
              id="okul"
              type="okul"
              name="okul"
              placeholder=" Hangi Okulda Okuduğunuzu Belirtiniz"
              required
            />
          </div>
          <div className="dershane-div input-div">
            <label>Dershane </label>
            <input
              className="styled-input-aday"
              id="dershane"
              type="dershane"
              name="dershane"
              placeholder=" Hangi Dershanede Okuduğunuzu Belirtiniz"
              required
            />
          </div>
          <div className="email-div input-div">
            <label htmlFor="email">Email Adresi</label>
            <input
              className="styled-input-aday"
              id="email"
              type="email"
              name="email"
              placeholder=" E-Mail Adresi"
              required
            />
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <div className="phone-div input-div">
            <label htmlFor="phone">Telefon</label>
            <input
              className="styled-input-aday"
              id="phone"
              type="phone"
              name="phone"
              placeholder=" Telefon Numaranız"
              required
            />
          </div>
          <div className="sehir-div input-div">
            <label>Şehir / İlçe</label>
            <input
              className="styled-input-aday"
              id="sehir"
              type="sehir"
              name="sehir"
              placeholder=" Yaşadığınız İl ve İlçe"
              required
            />
          </div>
          <div className="text-area-div input-div">
            <label>Nasıl Yardımcı Olabiliriz</label>
            <textarea
              className="styled-input-aday"
              id="message"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            className="submit-button button-submit"
            type="submit"
            disabled={state.submitting}
          >
            GÖNDER
          </button>
        </form>
      </div>
    </>
  );
}
