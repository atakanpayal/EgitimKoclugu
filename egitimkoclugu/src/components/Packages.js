import "./Packages.css";
import { Link } from "react-router-dom";

function Packages() {
  return (
    <>
      <div className="package-grid">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <Link to="/hizmetlerimiz">
                <div class="card card-1">
                  <h3>Ara Sınıf/YKS/LGS Koçluğu</h3>
                  <p>
                    A curated set of ES5/ES6/TypeScript wrappers for plugins to
                    easily add any native functionality to your Ionic apps.
                  </p>
                </div>
              </Link>
            </div>
            <div class="col-md-4">
              <Link to="/hizmetlerimiz">
                <div class="card card-2">
                  <h3>Tercih Danışmanlık Hizmeti</h3>
                  <p>
                    Tabs, buttons, inputs, lists, cards, and more! A
                    comprehensive library of mobile UI components, ready to go.
                  </p>
                </div>
              </Link>
            </div>
            <div class="col-md-4">
              <Link to="/hizmetlerimiz">
                <div class="card card-3">
                  <h3>Hızlandırılmış Koçluk Hizmeti</h3>
                  <p>
                    Learn how to easily customize and modify your app’s design
                    to fit your brand across all mobile platform styles.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Packages;
