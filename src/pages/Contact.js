function Contact() {
  return (
    <div className="page-container">

      <section className="page-header">

        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you.
        </p>

      </section>

      <section className="contact-wrapper">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            <strong>Location:</strong>
            <br />
            Kasarani, Nairobi County,
            Kenya
          </p>

          <p>
            <strong>Phone:</strong>
            <br />
            +254 715 364 734
          </p>

          <p>
            <strong>Email:</strong>
            <br />
            info@kungaainitiative.org
          </p>

        </div>

        <div className="contact-form">

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Message"
            ></textarea>

            <button
              type="submit"
              className="btn"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Contact;