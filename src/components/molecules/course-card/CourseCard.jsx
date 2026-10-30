function CourseCard({ course }) {
  return (
    <article className="card container-384">
      <a href="#">
        <img
          className="card-thumbnail"
          src={course.thumbnail}
          alt={course.title}
        />
      </a>

      <h6 className="heading-6">{course.title}</h6>

      <p className="body-medium-medium dark-secondary-text">
        {course.description}
      </p>

      <div className="card-instructor">
        <img
          src={course.instructor.profile}
          alt={course.instructor.name}
          className="card-profile"
        />

        <div className="card-instructor-info">
          <p className="body-medium-medium dark-primary-text">
            {course.instructor.name}
          </p>

          <p className="body-small-regular dark-secondary-text">
            {course.instructor.position}
            <span> di </span>
            <span className="body-small-bold">
              {course.instructor.company}
            </span>
          </p>
        </div>
      </div>

      <div className="card-rating">
        <div
          className="stars"
          style={{
            "--rating": `${(course.rating / 5) * 100}%`,
          }}
          aria-label={`Rating ${course.rating} dari 5`}
        >
          <span className="stars-empty">★★★★★</span>
          <span className="stars-full">★★★★★</span>
        </div>

        <p className="underline body-small-regular dark-secondary-text">
          {course.rating} ({course.totalReviews})
        </p>

        <div className="card-price">
          <p className="heading-2 primary-green">{course.price}</p>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
