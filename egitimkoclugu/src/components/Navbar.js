import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

function NavbarDarkExample() {
  return (
    <>
      <div className="top-wrapper">
        <Link to="/">
          <div className="logo">
            <i class="fa-solid fa-book-open"></i>
            <p className="logo-text">Eğitim Koçluğu</p>
          </div>
        </Link>
        <div className="bizi-arayin top-div">
          <p className="top-text">
            <i class="fa-solid fa-mobile-button ikon"></i>Bizi Arayin
          </p>
          <p className="top-text">0 552 723 88 53</p>
        </div>
        <div className="calisma-saatleri top-div">
          <p className="top-text">
            <i class="fa-solid fa-clock ikon"></i>Çalışma Saatleri
          </p>
          <p className="top-text">Pzt-Pzr 08:00 - 20:00</p>
        </div>
        <div className="email top-div">
          <p className="top-text">
            <i class="fa-solid fa-at ikon"></i>E-mail
          </p>
          <p className="top-text">info@eğitimkocu.com.tr</p>
        </div>
      </div>
      <Navbar
        className="color-nav"
        collapseOnSelect
        expand="lg"
        variant="light"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <Nav.Link href="#" className="navi-link">
                <Link to="/" className="navi-link">
                  Anasayfa
                </Link>
              </Nav.Link>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Kurumsal"
                className="navi-link"
              >
                <Dropdown.Menu className="super-colors ">
                  <Link to="/hakkimizda">
                    <NavDropdown.Item href="#action/3.1">
                      Hakkkımızda
                    </NavDropdown.Item>
                  </Link>
                  <Link to="/ekibimiz">
                    <NavDropdown.Item href="#action/3.1">
                      Ekibimiz
                    </NavDropdown.Item>
                  </Link>
                  <Link to="/adayform">
                    <NavDropdown.Item href="#action/3.3" className="navi-link">
                      Eğitim Koçu Aday Formu
                    </NavDropdown.Item>
                  </Link>
                </Dropdown.Menu>
              </NavDropdown>

              <Nav.Link>
                <Link to="/egitimkoclugu" className="navi-link">
                  Eğitim Koçluğu
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/hizmetlerimiz" className="navi-link">
                  Paketlerimiz
                </Link>
              </Nav.Link>

              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Bilgi Dünyası"
                menuVariant="dark"
                className="navi-link"
              >
                <Dropdown.Menu className="super-colors">
                  <NavDropdown.Item
                    href="https://www.osym.gov.tr/"
                    className="navi-link"
                  >
                    ÖSYM
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://www.meb.gov.tr/"
                    className="navi-link"
                  >
                    MEB
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://yokatlas.yok.gov.tr/"
                    className="navi-link"
                  >
                    YÖK ATLAS
                  </NavDropdown.Item>
                </Dropdown.Menu>
              </NavDropdown>
              <Nav.Link href="#" className="navi-link">
                <Link to="/onlinerandevu" className="navi-link">
                  Online Randevu
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarDarkExample;
