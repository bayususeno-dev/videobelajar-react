function Footer() {
    return(
        <footer>
  <div className="container-1440">
    <div className="footer-brand">
      <a className="logo" href="#">
        <span className="logo-base">videobelajar</span>
        <span className="logo-effect">videobelajar</span>
      </a>
      <h2 className="body-large-bold dark-primary-text">
        Gali Potensi Anda Melalui Melalui Pembelajaran Video di hariesok.id!
      </h2>
      <address className="body-medium-regular dark-primary-text">
        Jl. Usman Effendi No. 50 Lowokwaru, Malang
      </address>
      <p className="body-medium-regular dark-primary-text">+62-812-3456-7890</p>
    </div>
    <div className="footer-links">
      {/* Kategori */}
      <nav className="footer-nav footer-accordion">
        <h3 className="body-medium-bold dark-primary-text footer-accordion-title">
          Kategori
        </h3>
        <ul className="body-medium-medium dark-secondary-text">
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
      {/* Perusahaan */}
      <nav className="footer-nav footer-accordion">
        <h3 className="body-medium-bold dark-primary-text footer-accordion-title">
          Perusahaan
        </h3>
        <ul className="body-medium-medium dark-secondary-text">
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
      {/* Komunitas */}
      <nav className="footer-nav footer-accordion">
        <h3 className="body-medium-bold dark-primary-text footer-accordion-title">
          Komunitas
        </h3>
        <ul className="body-medium-medium dark-secondary-text">
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
    </div>
    <div className="footer-bottom">
      <p className="body-medium-medium dark-secondary-text">
        © 2026 Gerobak Sayur All rights reserved.
      </p>
      <nav className="footer-social dark-primary-text">
        <div className="footer-social-links">
          <a href="#">
            <img src="./assets/icons/linkedin.png" alt="" />
          </a>
          <a href="#">
            <img src="./assets/icons/fb.png" alt="" />
          </a>
          <a href="#">
            <img src="./assets/icons/ig.png" alt="" />
          </a>
          <a href="#">
            <img src="./assets/icons/x.png" alt="" />
          </a>
        </div>
      </nav>
    </div>
  </div>
</footer>

    )
}

export default Footer