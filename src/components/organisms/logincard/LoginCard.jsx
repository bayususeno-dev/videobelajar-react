import FormField from "../../molecules/form-field/FormField";
import { Link } from "react-router-dom";
import GoogleButton from "../../molecules/google-button/GoogleButton";

function LoginCard() {
  return (
    <section className="login-card">
      <header className="header-login">
        <h1 className="heading-3 dark-primary-text">Masuk ke Akun</h1>
        <p className="body-medium-regular dark-secondary-text">
          Yuk, lanjutin belajarmu di videobelajar
        </p>
      </header>
      <form className="login-form">
        <FormField label="E-mail" type="email" name="email" />
        <FormField label="Password" type="password" name="password" />

        <a
          href="#"
          className="forgot-password body-medium-medium dark-secondary-text"
        >
          Lupa kata sandi?
        </a>
        <button type="submit" className="button-green button-primary-contained">
          Masuk
        </button>
        <Link to="/register" className="button-softgreen button-primary-shadow">
          Daftar
        </Link>
        <div className="login-divider">
          <span className="body-medium-regular dark-secondary-text">atau</span>
        </div>

        <GoogleButton />
      </form>
    </section>
  );
}

export default LoginCard;
