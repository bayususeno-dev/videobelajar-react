function Newsletter() {
    return (
        <section className="container-1200 newsletter">
          <label htmlFor="email" />
          <p className="newsletter-p-1 body-medium-medium light-secondary-text">
            NEWSLETTER
          </p>
          <h3 className="heading-3">Mau Belajar Lebih Banyak?</h3>
          <p className="newsletter-p-2 body-medium-regular">
            Daftarkan dirimu untuk mendapatkan informasi dan penawaran spesial
            dari program-program terbaik hariesok.id
          </p>
          <form>
            <div className="newsletter-input">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Masukkan email"
                required=""
              />
              <button
                className="subscribe button-secondary-contained"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </section>
    )
}

export default Newsletter