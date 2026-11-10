import { useState } from "react";
import initialCourses from "./data/course";

import "./App.css";
import Navbar from "./components/organisms/navbar/Navbar";
import Footer from "./components/organisms/footer/Footer";
import CourseCard from "./components/molecules/course-card/CourseCard";
import Hero from "./components/organisms/hero/Hero";
import CourseSection from "./components/organisms/course-section/CourseSection";
import Newsletter from "./components/organisms/newsletter/Newsletter";
import CourseForm from "./components/molecules/course-form/CourseForm";

function App() {
  const [courses, setCourses] = useState(initialCourses);
  const [editingCourse, setEditingCourse] = useState(null);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const handleStartEdit = (course) => {
    setIsDeleteMode(false);
    setEditingCourse(course);
  };

  const handleToggleDeleteMode = () => {
    setEditingCourse(null);
    setIsDeleteMode((currentMode) => !currentMode);
  };

  const handleAddCourse = (newCourse) => {
    setCourses((currentCourses) => [
      ...currentCourses,
      {
        ...newCourse,
        id: Math.max(0, ...currentCourses.map((course) => course.id)) + 1,
      },
    ]);
  };

  const handleUpdateCourse = (updatedCourse) => {
    setCourses((currentCourses) =>
      currentCourses.map((course) =>
        course.id === updatedCourse.id ? updatedCourse : course,
      ),
    );
  };

  const handleDeleteCourse = (courseId) => {
    setCourses((currentCourses) =>
      currentCourses.filter((course) => course.id !== courseId),
    );

    setEditingCourse((currentEditingCourse) =>
      currentEditingCourse?.id === courseId ? null : currentEditingCourse,
    );
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <CourseSection />

        <section className="card-videos container-1440">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEdit={handleStartEdit}
              onDelete={handleDeleteCourse}
              isDeleteMode={isDeleteMode}
            />
          ))}
        </section>

        <CourseForm
          courseCount={courses.length}
          onSubmit={editingCourse ? handleUpdateCourse : handleAddCourse}
          editingCourse={editingCourse}
          onCancel={() => setEditingCourse(null)}
          isDeleteMode={isDeleteMode}
          onToggleDeleteMode={handleToggleDeleteMode}
          onDisableDeleteMode={() => setIsDeleteMode(false)}
        />

        <Newsletter />
      </main>

      <Footer />
    </>
  );
}

export default App;
