import Navbar from "../../components/organisms/navbar/Navbar";
import LoginCard from "../../components/organisms/logincard/LoginCard"

function Login() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login - videobelajar</title>

      <Navbar />
      <main className="login-page">
        <LoginCard />
      </main>
    </>
  );
}

export default Login;
