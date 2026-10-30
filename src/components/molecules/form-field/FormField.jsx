function FormField({ label, type, name, placeholder = "" }) {
  return (
    <div className="form-group">
      <label
        className="body-medium-regular dark-secondary-text"
        htmlFor={name}
      >
        {label}
      </label>

      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default FormField;