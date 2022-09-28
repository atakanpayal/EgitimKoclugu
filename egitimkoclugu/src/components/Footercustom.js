import { Link } from "react-router-dom";
import "./Footercustom.css";
function Footercustom() {
  return (
    <footer class="footer-section">
      <div class="container">
        <div class="footer-cta pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-map-marker-alt"></i>
                <div class="cta-text">
                  <h4>Adresimiz</h4>
                  <span>Adana/Ceyhan ...</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-phone"></i>
                <div class="cta-text">
                  <h4>Bizi Arayın</h4>
                  <span>9876543210</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="far fa-envelope-open"></i>
                <div class="cta-text">
                  <h4>Bize Mail atın</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="index.html">
                    <img src="" class="img-fluid" alt="logo" />
                  </a>
                </div>
                <div class="footer-text"></div>
                <div class="footer-social-icon">
                  <span>Bizi Takip Edin</span>
                  <a href="#">
                    <i class="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter twitter-bg"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-google-plus-g google-bg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Kullanışlı Bağlantılar</h3>
                </div>
                <ul>
                  <li>
                    <Link to="/" href="#">
                      Anasayfa
                    </Link>
                  </li>

                  <li>
                    <Link to="/hakkimizda" href="#">
                      Hakkımızda
                    </Link>
                  </li>
                  <li>
                    <Link to="/ekibimiz" href="#">
                      Ekibimiz
                    </Link>
                  </li>
                  <li>
                    <Link to="/egitimkoclugu" href="#">
                      Egitim Koçluğu
                    </Link>
                  </li>
                  <li>
                    <Link to="/hizmetlerimiz" href="#">
                      Paketlerimiz
                    </Link>
                  </li>
                  <li>
                    <Link to="/onlinerandevu" href="#">
                      Online Randevu
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Abone Ol</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>
                    Bizlere abone olup yaptığımız bütün etkinliklerden e-mail
                    yoluyla haberdar olun.
                  </p>
                </div>
                <div class="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i class="fab fa-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="copyright-text">
                <p>Copyright &copy; 2018, All Right Reserved</p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div class="footer-menu">
                <ul>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footercustom;
