import "./App.css";
import Navbar from "./components/organisms/navbar/Navbar";
import Footer from "./components/organisms/footer/Footer";
import CourseCard from "./components/molecules/course-card/CourseCard";
import courses from "./data/course";
import Hero from "./components/organisms/hero/Hero";
import CourseSection from "./components/organisms/course-section/CourseSection";
import Newsletter from "./components/organisms/newsletter/Newsletter"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

     <CourseSection/>

        <section className="card-videos container-1440">
          {courses.slice(0, 9).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </section>

        <Newsletter/>

      </main>
      
      <Footer />
    </>
  );
}

export default App;
