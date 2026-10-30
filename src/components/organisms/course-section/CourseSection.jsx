function CourseSection() {
    return (
           <section>
          <div className="section-header">
            <h3 className="heading-3">Koleksi Video Pembelajaran Unggulan</h3>
            <p className="section-header-p body-medium-medium">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
          </div>
          <nav className="section-category">
            <ul className="">
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
        </section>
    )
}

export default CourseSection