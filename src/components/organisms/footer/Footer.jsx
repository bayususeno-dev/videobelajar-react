import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    // Accordion only works on mobile
    if (!window.matchMedia("(max-width: 768px)").matches) return;

    setOpenSection((current) => (current === section ? null : section));
  };

  return (
    <footer>
      <div className="container-1440">
        <div className="footer-brand">
          <a className="logo" href="#">
            <span className="logo-base">videobelajar</span>
            <span className="logo-effect">videobelajar</span>
          </a>

          <h2 className="body-large-bold dark-primary-text">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </h2>

          <address className="body-medium-regular dark-primary-text">
            Jl. Usman Effendi No. 50 Lowokwaru, Malang
          </address>

          <p className="body-medium-regular dark-primary-text">
            +62-812-3456-7890
          </p>
        </div>

        <div className="footer-links">
          {/* KATEGORI */}
          <nav
            className={`footer-nav footer-accordion ${
              openSection === "kategori" ? "active" : ""
            }`}
          >
            <button
              type="button"
              className="body-medium-bold dark-primary-text footer-accordion-title"
              aria-expanded={openSection === "kategori"}
              aria-controls="footer-kategori"
              onClick={() => toggleSection("kategori")}
            >
              Kategori
            </button>

            <ul
              id="footer-kategori"
              className="body-medium-medium dark-secondary-text footer-accordion-list"
            >
              <li>
                <a href="#">Semua Kelas</a>
              </li>
              <li>
                <a href="#">Pemasaran</a>
              </li>
              <li>
                <a href="#">Desain</a>
              </li>
              <li>
                <a href="#">Pengembangan Diri</a>
              </li>
              <li>
                <a href="#">Bisnis</a>
              </li>
            </ul>
          </nav>

          {/* PERUSAHAAN */}
          <nav
            className={`footer-nav footer-accordion ${
              openSection === "perusahaan" ? "active" : ""
            }`}
          >
            <button
              type="button"
              className="body-medium-bold dark-primary-text footer-accordion-title"
              aria-expanded={openSection === "perusahaan"}
              aria-controls="footer-perusahaan"
              onClick={() => toggleSection("perusahaan")}
            >
              Perusahaan
            </button>

            <ul
              id="footer-perusahaan"
              className="body-medium-medium dark-secondary-text footer-accordion-list"
            >
              <li>
                <a href="#">Tentang Kami</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Kebijakan Privasi</a>
              </li>
              <li>
                <a href="#">Ketentuan Layanan</a>
              </li>
              <li>
                <a href="#">Bantuan</a>
              </li>
            </ul>
          </nav>

          {/* KOMUNITAS */}
          <nav
            className={`footer-nav footer-accordion ${
              openSection === "komunitas" ? "active" : ""
            }`}
          >
            <button
              type="button"
              className="body-medium-bold dark-primary-text footer-accordion-title"
              aria-expanded={openSection === "komunitas"}
              aria-controls="footer-komunitas"
              onClick={() => toggleSection("komunitas")}
            >
              Komunitas
            </button>

            <ul
              id="footer-komunitas"
              className="body-medium-medium dark-secondary-text footer-accordion-list"
            >
              <li>
                <a href="#">Gabung Komunitas</a>
              </li>
              <li>
                <a href="#">Event</a>
              </li>
              <li>
                <a href="#">Diskusi</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="body-medium-medium dark-secondary-text">
            © 2026 Gerobak Sayur All rights reserved.
          </p>

          <nav className="footer-social dark-primary-text">
            <div className="footer-social-links">
              <a href="#">
                <img src="./assets/icons/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="#">
                <img src="./assets/icons/fb.png" alt="Facebook" />
              </a>
              <a href="#">
                <img src="./assets/icons/ig.png" alt="Instagram" />
              </a>
              <a href="#">
                <img src="./assets/icons/x.png" alt="X" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
