import { useState } from "react";
import "./CourseForm.css";

const createEmptyForm = () => ({
  title: "",
  description: "",
  thumbnail: "",
  instructorName: "",
  instructorProfile: "",
  instructorPosition: "",
  instructorCompany: "",
  rating: "",
  totalReviews: "",
  price: "",
});

const createFormFromCourse = (course) => ({
  title: course.title ?? "",
  description: course.description ?? "",
  thumbnail: course.thumbnail ?? "",
  instructorName: course.instructor?.name ?? "",
  instructorProfile: course.instructor?.profile ?? "",
  instructorPosition: course.instructor?.position ?? "",
  instructorCompany: course.instructor?.company ?? "",
  rating: String(course.rating ?? ""),
  totalReviews: String(course.totalReviews ?? ""),
  price: course.price ?? "",
});

function CourseForm({
  onSubmit,
  editingCourse,
  onCancel,
  courseCount,
  isDeleteMode,
  onToggleDeleteMode,
  onDisableDeleteMode,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const formIsOpen = isOpen || Boolean(editingCourse);

  const handleClose = () => {
    setIsOpen(false);

    if (editingCourse) {
      onCancel();
    }
  };

  return (
    <section className="course-manager" aria-labelledby="course-manager-title">
      <div className="course-manager-toolbar">
        <div className="course-manager-copy">
          <span className="course-manager-eyebrow">AREA PENGELOLAAN ADMIN</span>
          <h2 id="course-manager-title">Kelola kelas</h2>
          <p>
            {isDeleteMode
              ? `Mode hapus aktif. Pilih ikon tempat sampah pada kelas yang ingin dihapus.`
              : `${courseCount} kelas tersedia. Tambahkan kelas baru atau perbarui informasi kelas yang sudah ada.`}
          </p>
        </div>

        <div className="course-manager-actions">
          {!editingCourse ? (
            <button
              type="button"
              className={`course-manager-toggle ${isOpen ? "is-open" : ""}`}
              onClick={() => {
                onDisableDeleteMode();
                setIsOpen((current) => !current);
              }}
              aria-expanded={formIsOpen}
              aria-controls="course-form-panel"
            >
              <span className="course-manager-toggle-icon" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
              {isOpen ? "Tutup formulir" : "Tambah kelas"}
            </button>
          ) : (
            <span className="course-manager-editing-label">Mode edit</span>
          )}

          <button
            type="button"
            className={`course-manager-delete-toggle ${isDeleteMode ? "is-active" : ""}`}
            onClick={() => {
              if (!isDeleteMode) {
                setIsOpen(false);
              }
              onToggleDeleteMode();
            }}
            aria-pressed={isDeleteMode}
            aria-label={
              isDeleteMode
                ? "Selesai menghapus kelas"
                : "Aktifkan mode hapus kelas"
            }
            title={isDeleteMode ? "Selesai" : "Hapus kelas"}
          >
            <svg
              width="17"
              height="17"
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
            {isDeleteMode ? "Selesai" : "Hapus kelas"}
          </button>
        </div>
      </div>

      {formIsOpen && (
        <CourseFormFields
          key={editingCourse?.id ?? "new-course"}
          initialCourse={editingCourse}
          onSubmit={onSubmit}
          onCancel={handleClose}
        />
      )}
    </section>
  );
}

function CourseFormFields({ initialCourse, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(() =>
    initialCourse ? createFormFromCourse(initialCourse) : createEmptyForm(),
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const courseData = {
      ...(initialCourse && { id: initialCourse.id }),
      title: formData.title.trim(),
      description: formData.description.trim(),
      thumbnail: formData.thumbnail.trim(),
      instructor: {
        name: formData.instructorName.trim(),
        profile: formData.instructorProfile.trim(),
        position: formData.instructorPosition.trim(),
        company: formData.instructorCompany.trim(),
      },
      rating: Number(formData.rating),
      totalReviews: Number(formData.totalReviews),
      price: formData.price.trim(),
    };

    onSubmit(courseData);
    onCancel();
  };

  return (
    <div className="course-form-panel" id="course-form-panel">
      <div className="course-form-heading">
        <div>
          <span className="course-form-kicker">
            {initialCourse ? "PERBARUI DATA" : "KELAS BARU"}
          </span>
          <h3>{initialCourse ? "Edit kelas" : "Tambah kelas baru"}</h3>
          <p>
            Lengkapi informasi kelas di bawah ini. Kolom bertanda * wajib diisi.
          </p>
        </div>
        <button
          type="button"
          className="course-form-close"
          onClick={onCancel}
          aria-label="Tutup formulir"
        >
          ×
        </button>
      </div>

      <form className="course-form" onSubmit={handleSubmit}>
        <div className="course-form-group-title">
          <span className="course-form-step">01</span>
          <div>
            <h4>Informasi kelas</h4>
            <p>Judul, deskripsi, dan gambar kelas.</p>
          </div>
        </div>

        <div className="course-form-field course-form-field-full">
          <label htmlFor="title">Nama kelas *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Contoh: Fullstack Web Developer"
            maxLength={80}
            required
          />
        </div>

        <div className="course-form-field course-form-field-full">
          <label htmlFor="description">Deskripsi kelas *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Jelaskan materi dan manfaat yang akan dipelajari peserta."
            rows={3}
            maxLength={240}
            required
          />
        </div>

        <div className="course-form-field course-form-field-full">
          <label htmlFor="thumbnail">Path gambar kelas *</label>
          <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            placeholder="/assets/video-images/1.jpg"
            required
          />
          <small>Gunakan path dari folder public atau URL gambar.</small>
        </div>

        <div className="course-form-group-title">
          <span className="course-form-step">02</span>
          <div>
            <h4>Informasi instruktur</h4>
            <p>Profil pengajar yang membawakan kelas.</p>
          </div>
        </div>

        <div className="course-form-field">
          <label htmlFor="instructorName">Nama instruktur *</label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleChange}
            placeholder="Nama lengkap"
            required
          />
        </div>

        <div className="course-form-field">
          <label htmlFor="instructorProfile">Path foto instruktur *</label>
          <input
            type="text"
            id="instructorProfile"
            name="instructorProfile"
            value={formData.instructorProfile}
            onChange={handleChange}
            placeholder="/assets/card-profile/1.png"
            required
          />
        </div>

        <div className="course-form-field">
          <label htmlFor="instructorPosition">Jabatan *</label>
          <input
            type="text"
            id="instructorPosition"
            name="instructorPosition"
            value={formData.instructorPosition}
            onChange={handleChange}
            placeholder="Contoh: Frontend Developer"
            required
          />
        </div>

        <div className="course-form-field">
          <label htmlFor="instructorCompany">Perusahaan *</label>
          <input
            type="text"
            id="instructorCompany"
            name="instructorCompany"
            value={formData.instructorCompany}
            onChange={handleChange}
            placeholder="Contoh: Google"
            required
          />
        </div>

        <div className="course-form-group-title">
          <span className="course-form-step">03</span>
          <div>
            <h4>Detail kelas</h4>
            <p>Rating, jumlah ulasan, dan harga kelas.</p>
          </div>
        </div>

        <div className="course-form-field">
          <label htmlFor="rating">Rating (0–5) *</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.1"
            placeholder="4.5"
            required
          />
        </div>

        <div className="course-form-field">
          <label htmlFor="totalReviews">Jumlah ulasan *</label>
          <input
            type="number"
            id="totalReviews"
            name="totalReviews"
            value={formData.totalReviews}
            onChange={handleChange}
            min="0"
            step="1"
            placeholder="120"
            required
          />
        </div>

        <div className="course-form-field">
          <label htmlFor="price">Harga kelas *</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="450K"
            required
          />
        </div>

        <div className="course-form-actions course-form-field-full">
          <button
            type="button"
            className="course-form-cancel"
            onClick={onCancel}
          >
            Batal
          </button>
          <button type="submit" className="course-form-submit">
            {initialCourse ? "Simpan perubahan" : "Tambah kelas"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;
