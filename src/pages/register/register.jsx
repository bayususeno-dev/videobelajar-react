import Navbar from "../../components/organisms/navbar/Navbar";
import RegisterCard from "../../components/organisms/registercard/RegisterCard";

function Register() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Register - videobelajar</title>

      <Navbar />
      <main className="register-page">
        <RegisterCard />
      </main>
    </>
  );
}

export default Register;
