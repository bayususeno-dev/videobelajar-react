import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        <span className="logo-base">videobelajar</span>
        <span className="logo-effect">videobelajar</span>
      </Link>
      <div className="navbar-right">
        <details>
          <summary className="body-medium-medium">Kategori</summary>
          <ul className="body-medium-regular">
            <li>
              <Link
                className="body-medium-medium button-primary-contained"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                className="body-medium-medium button-primary-outlined"
                to="/register"
              >
                Register
              </Link>
            </li>
          </ul>
        </details>
        <img className="user-profile" src="./assets/profile/woman.png" alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
