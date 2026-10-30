import "./App.css";
import Navbar from "./components/organisms/navbar/Navbar";
import Footer from "./components/organisms/footer/Footer";
import CourseCard from "./components/molecules/course-card/CourseCard";
import courses from "./data/course";
import Hero from "./components/organisms/hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

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

        <section className="card-videos container-1440">
          {courses.slice(0, 9).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </section>

        <section className="container-1200 newsletter">
          <label htmlFor="email" />
          <p className="newsletter-p-1 body-medium-medium light-secondary-text">
            NEWSLETTER
          </p>
          <h3 className="heading-3">Mau Belajar Lebih Banyak?</h3>
          <p className="newsletter-p-2 body-medium-regular">
            Daftarkan dirimu untuk mendapatkan informasi dan penawaran spesial
            dari program-program terbaik hariesok.id
          </p>
          <form>
            <div className="newsletter-input">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Masukkan email"
                required=""
              />
              <button
                className="subscribe button-secondary-contained"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
