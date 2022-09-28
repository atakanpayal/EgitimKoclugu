import React from "react";
import "./Onlinerandevu.css";
import { useForm, ValidationError } from "@formspree/react";
import swal from "sweetalert";

export default function Onlinerandevu() {
  const [state, handleSubmit] = useForm("xnqrdokk");
  if (state.succeeded) {
    swal({
      title: "Gönderildi!",
      text: "Online Randevu Formunuz Başarıyla Gönderildi!",
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
            "https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" +
            ")",
          border: "none",
        }}
      >
        <p className="text-big-ekibimiz">Online Randevu</p>
        <p className="text-small-ekibimiz">Anasayfa → Online Randevu</p>
      </div>
      <div className="contact-header">
        <p className="info-header">Online Randevu</p>
        <p className="info-contact">✓ Online randevu formunu doldurun.</p>
        <p className="info-contact">
          ✓ Eğitmenimizin sizinle iletişime geçmesini bekleyin.
        </p>
        <p className="info-contact">✓ Ön görüşme gerçekleştirin.</p>
        <p className="info-contact">
          ✓ Sizin için tasarlanan eğitim içeriğini seçin ve başlayın.
        </p>
      </div>
      <div className="justify-content-center">
        <form className="adayformuv1" onSubmit={handleSubmit}>
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
          <div className="talebi-div input-div">
            <label for="talebi">Talebinizi Seçiniz</label>
            <select id="talebi" required>
              <option value="ogrenci koclugu">Öğrenci Koçluğu</option>
              <option value="ykskoclugu">YKS Koçluğu</option>
              <option value="lgskoclugu">LGS Koçluğu</option>
              <option value="sınavpsikolojisi">Sınav Psikolojisi</option>
              <option value="diyetisyendestegi">Diyetisyen Desteği</option>
              <option value="ozelders">Özel Ders</option>
              <option value="diger">Diğer</option>
            </select>
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
