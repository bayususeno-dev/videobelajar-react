import Navbar from "../../components/organisms/navbar/navbar";

function Register() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Register - videobelajar</title>

      <Navbar />
      <main className="register-page">
        <section className="register-card">
          <header className="header-register">
            <h1 className="heading-3 dark-primary-text">Pendaftaran Akun</h1>
            <p className="body-medium-regular dark-secondary-text">
              Yuk, daftarkan akunmu sekarang juga!
            </p>
          </header>
          <form className="register-form">
            <div className="form-group">
              <label
                htmlFor="full-name"
                className="body-medium-medium dark-secondary-text"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder=""
                required=""
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="email"
                className="body-medium-medium dark-secondary-text"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder=""
                required=""
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="call-number"
                className="body-medium-medium dark-secondary-text"
              >
                No. HP
              </label>
              <div className="phone-input">
                <div className="phone-country">
                  <img
                    src="/assets/icons/ind-flag.png"
                    alt="Indonesia"
                    className="country-flag"
                  />
                  <span className="country-code body-medium-medium dark-secondary-text">
                    +62
                  </span>
                  <img
                    src="/assets/icons/dropdown.png"
                    alt=""
                    className="country-arrow"
                  />
                </div>
                <input type="tel" id="call-number" placeholder="" />
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="password"
                className="body-medium-medium dark-secondary-text"
              >
                Kata Sandi
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder=""
                required=""
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="confirm-password"
                className="body-medium-medium dark-secondary-text"
              >
                Konfirmasi Kata Sandi
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder=""
                required=""
              />
            </div>
            <a
              href="#"
              className="forgot-password body-medium-medium dark-secondary-text"
            >
              Lupa kata sandi?
            </a>
            <button
              type="submit"
              className="button-green button-primary-contained"
            >
              Daftar
            </button>
            <a href="#" className="button-softgreen button-primary-shadow">
              {" "}
              Masuk{" "}
            </a>
            <button
              type="button"
              className="button-google body-medium-bold dark-secondary-text"
            >
              <img
                src="/assets/icons/google-icons.png"
                alt=""
                className="google-icons"
              />
              Masuk dengan Google
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Register;
