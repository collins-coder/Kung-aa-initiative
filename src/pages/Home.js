import { Link } from "react-router-dom";

function Home() {
  return (
    <>

      <section className="hero">

        <div className="hero-overlay">

          <div className="hero-content">

            <h1>
              Turning Disability Into Possibility
            </h1>

            <p>
              Building an inclusive society where
              vulnerable and differently abled
              individuals can thrive, achieve
              their goals and contribute
              meaningfully to society.
            </p>

            <div className="hero-buttons">

              <Link
                to="/about"
                className="btn"
              >
                Learn More
              </Link>

              <Link
                to="/contact"
                className="btn btn-outline"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>

      <section className="section">

        <div className="section-title">

          <h2>Who We Are</h2>

          <p>
            KUNG'AA Initiative is a community-based
            organization dedicated to promoting
            inclusion, dignity, empowerment and
            equal opportunities for persons living
            with disabilities and vulnerable members
            of society.
          </p>

        </div>

      </section>

      <section className="mission-vision">

        <div className="card mission-card">

          <h2>Our Vision</h2>

          <p>
            To create an inclusive society where
            vulnerable and differently abled
            individuals can thrive and achieve
            their full potential.
          </p>

        </div>

        <div className="card mission-card">

          <h2>Our Mission</h2>

          <p>
            To empower vulnerable persons and
            differently abled individuals through
            advocacy, education, health and
            nutrition support, mentorship,
            community development and social
            empowerment programs.
          </p>

        </div>

      </section>

      <section className="statistics">

        <div className="stat-card">

          <h2>9+</h2>

          <p>
            Programs and Services
          </p>

        </div>

        <div className="stat-card">

          <h2>100%</h2>

          <p>
            Community Focused
          </p>

        </div>

        <div className="stat-card">

          <h2>24/7</h2>

          <p>
            Commitment To Service
          </p>

        </div>

      </section>

      <section className="section">

        <div className="section-title">

          <h2>Our Core Values</h2>

        </div>

        <div className="values-grid">

          <div className="card value-card">
            Integrity
          </div>

          <div className="card value-card">
            Accountability
          </div>

          <div className="card value-card">
            Inclusivity
          </div>

          <div className="card value-card">
            Respect
          </div>

          <div className="card value-card">
            Compassion
          </div>

          <div className="card value-card">
            Teamwork
          </div>

          <div className="card value-card">
            Transparency
          </div>

          <div className="card value-card">
            Equality
          </div>

          <div className="card value-card">
            Empowerment
          </div>

        </div>

      </section>

      <section className="cta-section">

        <div className="cta-box">

          <h2>
            Join Us In Making A Difference
          </h2>

          <p>
            Together we can build a more
            inclusive and empowered society.
          </p>

          <Link
            to="/contact"
            className="btn"
          >
            Get Involved
          </Link>

        </div>

      </section>

    </>
  );
}

export default Home;