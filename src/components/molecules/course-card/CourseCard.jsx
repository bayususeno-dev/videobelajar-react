import { useState } from "react";
import "./CourseCard.css";

function CourseCard({ course, onEdit, onDelete, isDeleteMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleEdit = () => {
    onEdit(course);
    setIsMenuOpen(false);
  };

  const handleDelete = () => {
    const shouldDelete = window.confirm(
      `Hapus kelas "${course.title}" dari daftar?`,
    );

    if (shouldDelete) {
      onDelete(course.id);
    }
  };

  return (
    <article
      className={`card container-384 ${isDeleteMode ? "is-delete-mode" : ""}`}
    >
      {isDeleteMode ? (
        <button
          type="button"
          className="card-delete-trigger"
          onClick={handleDelete}
          aria-label={`Hapus kelas ${course.title}`}
          title={`Hapus ${course.title}`}
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 6h18" />
            <path d="M8 6V4h8v2" />
            <path d="m19 6-1 14H6L5 6" />
            <path d="M10 11v5M14 11v5" />
          </svg>
        </button>
      ) : (
        <div className="card-menu">
          <button
            type="button"
            className="card-menu-trigger"
            aria-label={`Buka menu kelas ${course.title}`}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </button>

          {isMenuOpen && (
            <div className="card-menu-dropdown">
              <button
                type="button"
                className="card-menu-item"
                onClick={handleEdit}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z" />
                </svg>
                Edit kelas
              </button>
            </div>
          )}
        </div>
      )}

      <div className="card-image-wrap">
        <img
          className="card-thumbnail"
          src={course.thumbnail}
          alt={`Thumbnail ${course.title}`}
          loading="lazy"
        />
      </div>

      <h6 className="heading-6">{course.title}</h6>

      <p className="card-description body-medium-medium dark-secondary-text">
        {course.description}
      </p>

      <div className="card-instructor">
        <img
          src={course.instructor.profile}
          alt={course.instructor.name}
          className="card-profile"
          loading="lazy"
        />

        <div className="card-instructor-info">
          <p className="body-medium-medium dark-primary-text">
            {course.instructor.name}
          </p>
          <p className="body-small-regular dark-secondary-text">
            {course.instructor.position}
            <span> di </span>
            <span className="body-small-bold">{course.instructor.company}</span>
          </p>
        </div>
      </div>

      <div className="card-rating">
        <div
          className="stars"
          style={{ "--rating": `${(course.rating / 5) * 100}%` }}
          aria-label={`Rating ${course.rating} dari 5`}
        >
          <span className="stars-empty" aria-hidden="true">
            ★★★★★
          </span>
          <span className="stars-full" aria-hidden="true">
            ★★★★★
          </span>
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
