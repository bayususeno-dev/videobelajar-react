import Navbar from "../../components/organisms/navbar/navbar";

function Login() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login - videobelajar</title>

      <Navbar />
      <main className="login-page">
        <section className="login-card">
          <header className="header-login">
            <h1 className="heading-3 dark-primary-text">Masuk ke Akun</h1>
            <p className="body-medium-regular dark-secondary-text">
              Yuk, lanjutin belajarmu di videobelajar
            </p>
          </header>
          <form className="login-form">
            <div>
              <label
                className="body-medium-regular dark-secondary-text"
                htmlFor="email"
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
            <div>
              <label
                className="body-medium-regular dark-secondary-text"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
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
              Masuk
            </button>
            <a
              href="/pages/authentication/register.html"
              className="button-softgreen button-primary-shadow"
            >
              Daftar
            </a>
            <div className="login-divider">
              <span className="body-medium-regular dark-secondary-text">
                atau
              </span>
            </div>
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

export default Login;
