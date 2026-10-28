import { useState } from "react";
import "./App.css";
import Navbar from "./components/organisms/navbar/navbar";
import Footer from "./components/organisms/footer/footer";



function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>videobelajar</title>

      <Navbar />
      <main>
        <header className="header-main container-1200">
          <h1 className="heading-1 container-1000">
            Revolusi Pembelajaran : Mengubah Cara Belajar di Era Digital melalui
            Video Interaktif!
          </h1>
          <p className="body-medium-medium container-1000">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
          <button className="body-medium-medium button-primary-contained">
            Temukan Video Course untuk Dipelajari!
          </button>
        </header>
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
        
        {/* refactor first */}
        <section className="card-videos container-1440">
          <article className="card container-384">
            <a href="#">
              <img
                className="card-thumbnail"
                src="./assets/video-images/1.jpg"
                alt="Video 1"
              />
            </a>
            <h6 className="heading-6">Big 4 Auditor Financial Analyst</h6>
            <p className="body-medium-medium dark-secondary-text">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <div className="card-instructor">
              <img
                src="/assets/card-profile/1.png"
                alt=""
                className="card-profile"
              />
              <div className="card-instructor-info">
                <p className="body-medium-medium dark-primary-text">
                  Jenna Ortega
                </p>
                <p className="body-small-regular dark-secondary-text">
                  Senior Accountant
                  <span className="body-small-regular dark-secondary-text">
                    di
                  </span>
                  <span className="body-small-bold">Gojek</span>
                </p>
              </div>
            </div>
            <div className="card-rating">
              <div className="stars stars-35" aria-label="Rating 3.5 dari 5">
                <span className="stars-empty">★★★★★</span>
                <span className="stars-full">★★★★★</span>
              </div>
              <p className="underline body-small-regular dark-secondary-text">
                3.5 (86)
              </p>
              <div className="card-price">
                <p className="heading-2 primary-green">300K</p>
              </div>
            </div>
          </article>
          <article className="card container-384">
            <a href="#">
              <img
                className="card-thumbnail"
                src="./assets/video-images/2.jpg"
                alt="Video 1"
              />
            </a>
            <h6 className="heading-6">Big 4 Auditor Financial Analyst</h6>
            <p className="body-medium-medium dark-secondary-text">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <div className="card-instructor">
              <img
                src="./assets/card-profile/2.png"
                alt=""
                className="card-profile"
              />
              <div className="card-instructor-info">
                <p className="body-medium-medium dark-primary-text">
                  Jenna Ortega
                </p>
                <p className="body-small-regular dark-secondary-text">
                  Senior Accountant
                  <span className="body-small-regular dark-secondary-text">
                    di
                  </span>
                  <span className="body-small-bold">Gojek</span>
                </p>
              </div>
            </div>
            <div className="card-rating">
              <div className="stars stars-35" aria-label="Rating 3.5 dari 5">
                <span className="stars-empty">★★★★★</span>
                <span className="stars-full">★★★★★</span>
              </div>
              <p className="underline body-small-regular dark-secondary-text">
                3.5 (86)
              </p>
              <div className="card-price">
                <p className="heading-2 primary-green">300K</p>
              </div>
            </div>
          </article>
          <article className="card container-384">
            <a href="#">
              <img
                className="card-thumbnail"
                src="./assets/video-images/3.jpg"
                alt="Video 1"
              />
            </a>
            <h6 className="heading-6">Big 4 Auditor Financial Analyst</h6>
            <p className="body-medium-medium dark-secondary-text">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <div className="card-instructor">
              <img
                src="./assets/card-profile/3.png"
                alt=""
                className="card-profile"
              />
              <div className="card-instructor-info">
                <p className="body-medium-medium dark-primary-text">
                  Jenna Ortega
                </p>
                <p className="body-small-regular dark-secondary-text">
                  Senior Accountant
                  <span className="body-small-regular dark-secondary-text">
                    di
                  </span>
                  <span className="body-small-bold">Gojek</span>
                </p>
              </div>
            </div>
            <div className="card-rating">
              <div className="stars stars-35" aria-label="Rating 3.5 dari 5">
                <span className="stars-empty">★★★★★</span>
                <span className="stars-full">★★★★★</span>
              </div>
              <p className="underline body-small-regular dark-secondary-text">
                3.5 (86)
              </p>
              <div className="card-price">
                <p className="heading-2 primary-green">300K</p>
              </div>
            </div>
          </article>
          <article className="card container-384">
            <a href="#">
              <img
                className="card-thumbnail"
                src="./assets/video-images/4.jpg"
                alt="Video 1"
              />
            </a>
            <h6 className="heading-6">Big 4 Auditor Financial Analyst</h6>
            <p className="body-medium-medium dark-secondary-text">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <div className="card-instructor">
              <img
                src="./assets/card-profile/4.png"
                alt=""
                className="card-profile"
              />
              <div className="card-instructor-info">
                <p className="body-medium-medium dark-primary-text">
                  Jenna Ortega
                </p>
                <p className="body-small-regular dark-secondary-text">
                  Senior Accountant
                  <span className="body-small-regular dark-secondary-text">
                    di
                  </span>
                  <span className="body-small-bold">Gojek</span>
                </p>
              </div>
            </div>
            <div className="card-rating">
              <div className="stars stars-35" aria-label="Rating 3.5 dari 5">
                <span className="stars-empty">★★★★★</span>
                <span className="stars-full">★★★★★</span>
              </div>
              <p className="underline body-small-regular dark-secondary-text">
                3.5 (86)
              </p>
              <div className="card-price">
                <p className="heading-2 primary-green">300K</p>
              </div>
            </div>
          </article>
          <article className="card container-384">
            <a href="#">
              <img
                className="card-thumbnail"
                src="./assets/video-images/5.jpg"
                alt="Video 1"
              />
            </a>
            <h6 className="heading-6">Big 4 Auditor Financial Analyst</h6>
            <p className="body-medium-medium dark-secondary-text">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <div className="card-instructor">
              <img
                src="./assets/card-profile/5.png"
                alt=""
                className="card-profile"
              />
              <div className="card-instructor-info">
                <p className="body-medium-medium dark-primary-text">
                  Jenna Ortega
                </p>
                <p className="body-small-regular dark-secondary-text">
                  Senior Accountant
                  <span className="body-small-regular dark-secondary-text">
                    di
                  </span>
                  <span className="body-small-bold">Gojek</span>
                </p>
              </div>
            </div>
            <div className="card-rating">
              <div className="stars stars-35" aria-label="Rating 3.5 dari 5">
                <span className="stars-empty">★★★★★</span>
                <span className="stars-full">★★★★★</span>
              </div>
              <p className="underline body-small-regular dark-secondary-text">
                3.5 (86)
              </p>
              <div className="card-price">
                <p className="heading-2 primary-green">300K</p>
              </div>
            </div>
          </article>
          <article className="card container-384">
            <a href="#">
              <img
                className="card-thumbnail"
                src="./assets/video-images/6.jpg"
                alt="Video 1"
              />
            </a>
            <h6 className="heading-6">Big 4 Auditor Financial Analyst</h6>
            <p className="body-medium-medium dark-secondary-text">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <div className="card-instructor">
              <img
                src="./assets/card-profile/6.png"
                alt=""
                className="card-profile"
              />
              <div className="card-instructor-info">
                <p className="body-medium-medium dark-primary-text">
                  Jenna Ortega
                </p>
                <p className="body-small-regular dark-secondary-text">
                  Senior Accountant
                  <span className="body-small-regular dark-secondary-text">
                    di
                  </span>
                  <span className="body-small-bold">Gojek</span>
                </p>
              </div>
            </div>
            <div className="card-rating">
              <div className="stars stars-35" aria-label="Rating 3.5 dari 5">
                <span className="stars-empty">★★★★★</span>
                <span className="stars-full">★★★★★</span>
              </div>
              <p className="underline body-small-regular dark-secondary-text">
                3.5 (86)
              </p>
              <div className="card-price">
                <p className="heading-2 primary-green">300K</p>
              </div>
            </div>
          </article>
          <article className="card container-384">
            <a href="#">
              <img
                className="card-thumbnail"
                src="./assets/video-images/7.jpg"
                alt="Video 1"
              />
            </a>
            <h6 className="heading-6">Big 4 Auditor Financial Analyst</h6>
            <p className="body-medium-medium dark-secondary-text">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <div className="card-instructor">
              <img
                src="./assets/card-profile/7.png"
                alt=""
                className="card-profile"
              />
              <div className="card-instructor-info">
                <p className="body-medium-medium dark-primary-text">
                  Jenna Ortega
                </p>
                <p className="body-small-regular dark-secondary-text">
                  Senior Accountant
                  <span className="body-small-regular dark-secondary-text">
                    di
                  </span>
                  <span className="body-small-bold">Gojek</span>
                </p>
              </div>
            </div>
            <div className="card-rating">
              <div className="stars stars-35" aria-label="Rating 3.5 dari 5">
                <span className="stars-empty">★★★★★</span>
                <span className="stars-full">★★★★★</span>
              </div>
              <p className="underline body-small-regular dark-secondary-text">
                3.5 (86)
              </p>
              <div className="card-price">
                <p className="heading-2 primary-green">300K</p>
              </div>
            </div>
          </article>
          <article className="card container-384">
            <a href="#">
              <img
                className="card-thumbnail"
                src="./assets/video-images/8.jpg"
                alt="Video 1"
              />
            </a>
            <h6 className="heading-6">Big 4 Auditor Financial Analyst</h6>
            <p className="body-medium-medium dark-secondary-text">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <div className="card-instructor">
              <img
                src="./assets/card-profile/8.png"
                alt=""
                className="card-profile"
              />
              <div className="card-instructor-info">
                <p className="body-medium-medium dark-primary-text">
                  Jenna Ortega
                </p>
                <p className="body-small-regular dark-secondary-text">
                  Senior Accountant
                  <span className="body-small-regular dark-secondary-text">
                    di
                  </span>
                  <span className="body-small-bold">Gojek</span>
                </p>
              </div>
            </div>
            <div className="card-rating">
              <div className="stars stars-35" aria-label="Rating 3.5 dari 5">
                <span className="stars-empty">★★★★★</span>
                <span className="stars-full">★★★★★</span>
              </div>
              <p className="underline body-small-regular dark-secondary-text">
                3.5 (86)
              </p>
              <div className="card-price">
                <p className="heading-2 primary-green">300K</p>
              </div>
            </div>
          </article>
          <article className="card container-384">
            <a href="#">
              <img
                className="card-thumbnail"
                src="./assets/video-images/9.jpg"
                alt="Video 1"
              />
            </a>
            <h6 className="heading-6">Big 4 Auditor Financial Analyst</h6>
            <p className="body-medium-medium dark-secondary-text">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <div className="card-instructor">
              <img
                src="./assets/card-profile/9.png"
                alt=""
                className="card-profile"
              />
              <div className="card-instructor-info">
                <p className="body-medium-medium dark-primary-text">
                  Jenna Ortega
                </p>
                <p className="body-small-regular dark-secondary-text">
                  Senior Accountant
                  <span className="body-small-regular dark-secondary-text">
                    di
                  </span>
                  <span className="body-small-bold">Gojek</span>
                </p>
              </div>
            </div>
            <div className="card-rating">
              <div className="stars stars-35" aria-label="Rating 3.5 dari 5">
                <span className="stars-empty">★★★★★</span>
                <span className="stars-full">★★★★★</span>
              </div>
              <p className="underline body-small-regular dark-secondary-text">
                3.5 (86)
              </p>
              <div className="card-price">
                <p className="heading-2 primary-green">300K</p>
              </div>
            </div>
          </article>
        </section>
        {/* refactor first */}



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
