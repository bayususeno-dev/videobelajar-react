import FormField from "../../molecules/form-field/FormField";
import GoogleButton from "../../molecules/google-button/GoogleButton";
import { Link } from "react-router-dom";

function RegisterCard() {
  return (
    <section className="register-card">
      <header className="header-register">
        <h1 className="heading-3 dark-primary-text">Pendaftaran Akun</h1>
        <p className="body-medium-regular dark-secondary-text">
          Yuk, daftarkan akunmu sekarang juga!
        </p>
      </header>
      <form className="register-form">
        <FormField label="Nama Lengkap" type="text" name="full-name" />
        <FormField label="E-mail" type="email" name="email" />
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
        <FormField label="Kata Sandi" type="password" name="password" />
        <div className="form-group">
          <FormField
            label="Konfirmasi Kata Sandi"
            type="password"
            name="confirm-password"
          />
        </div>
        <a
          href="#"
          className="forgot-password body-medium-medium dark-secondary-text"
        >
          Lupa kata sandi?
        </a>
        <button type="submit" className="button-green button-primary-contained">
          Daftar
        </button>
        <Link to="/Login" className="button-softgreen button-primary-shadow">
          Masuk
        </Link>
        <GoogleButton />
      </form>
    </section>
  );
}

export default RegisterCard;
