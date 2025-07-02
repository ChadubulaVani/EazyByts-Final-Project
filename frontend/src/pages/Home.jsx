import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };
  return (
    <div className="home-container" style={{ marginTop: "80px" }}>
      {/* Hero Section */}
      <section className="hero">
        <h1>🎉 Welcome to EventXpress 🎉</h1>
        <p>Your ultimate destination to discover and book events instantly!</p>
        <Link to="/events" className="cta-btn">
          Explore Events
        </Link>
      </section>
      <section className="about">
        <h1 style={{ fontSize: "50px" }}>About EventXpress</h1>
        <p>
          Welcome to EventXpress, your one-stop destination for unforgettable
          celebrations. We specialize in creating magical moments for all kinds
          of events—whether it's a birthday party full of joy, a dreamy wedding
          filled with love, or a music night bursting with energy. <br />
          At EventXpress, we believe that every event should be stress-free,
          stylish, and full of memories. With our dedicated team and creative
          expertise, we handle everything from planning to execution, so you can
          focus on enjoying your special day.
        </p>
        <div className="features-section">
          <h4
            className="mb-3"
            style={{
              fontSize: "40px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            🤔🤔🤔What We Offer ???
          </h4>
          <ul
            className="list-group list-group-flush"
            style={{ alignItems: "center" }}
          >
            <li className="list-group-item">
              🎉 Easy event booking with just a few clicks
            </li>
            <li className="list-group-item">
              🎨 Wide variety of themes and customization options
            </li>
            <li className="list-group-item">
              ⏱️ Real-time event tracking and updates
            </li>
            <li className="list-group-item">
              🤝 Personalized vendor suggestions and packages
            </li>
            <li className="list-group-item">
              📧 Online RSVP and guest management tools
            </li>
            <li className="list-group-item">
              🔒 Secure payment and instant booking confirmation
            </li>
            <li className="list-group-item">
              📞 24/7 customer support for a hassle-free experience
            </li>
          </ul>
        </div>
      </section>

      {/* Carousel */}
      <section className="carousel-section">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://png.pngtree.com/background/20230317/original/pngtree-birthday-party-balloon-decoration-background-picture-image_2149091.jpg"
                className="d-block w-100"
                alt="Birthday Party Event"
              />
              <div
                className="carousel-caption d-none d-md-block"
                style={{ fontSize: "20px" }}
              >
                <h3>Let the Birthday Magic Begin!</h3>
                <p>
                  Bring on the beats, balloons, and birthday cheers. Let’s
                  celebrate YOU in the grandest way!
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://wallpapercave.com/wp/wp8600936.jpg"
                className="d-block w-100"
                alt="Marriage Event"
              />
              <div
                className="carousel-caption d-none d-md-block"
                style={{ fontSize: "20px" }}
              >
                <h3>Begin Your Forever in Style</h3>
                <p>
                  From vows to the final dance, make your big day magical with a
                  celebration tailored to your love story.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://static.vecteezy.com/system/resources/previews/007/619/941/non_2x/music-background-with-party-crowd-free-vector.jpg"
                className="d-block w-100"
                alt="Music Event"
              />
              <div
                className="carousel-caption d-none d-md-block"
                style={{ fontSize: "20px" }}
              >
                <h3>Feel the Beat, Live the Moment</h3>
                <p>
                  Turn up the volume and let the music move you. Join us for a
                  night of pure rhythm and electrifying energy!
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="trending">
        <marquee scrollamount="30">
          🔥 Trending Now: DJ Night | Yoga Retreat | Film Festival 🔥
        </marquee>
      </section>

      {/* Event Cards */}
      <section className="event-cards">
        <h2
          style={{
            fontSize: "60px",
            marginBottom: "30px",
            fontWeight: "700",
            fontFamily: "TimesNewRoman",
          }}
        >
          <i>
            <u>Upcoming Events</u>
          </i>
        </h2>
        <div className="card-grid">
          <div className="event-card">
            <h3>Startup Meet 2025</h3>
            <p>Bangalore | 15th July</p>
            <button>Book Now</button>
          </div>
          <div className="event-card">
            <h3>AI Workshop</h3>
            <p>Delhi | 20th July</p>
            <button>Book Now</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stat-item">
          <h2>500+</h2>
          <p>Events Hosted</p>
        </div>
        <div className="stat-item">
          <h2>10K+</h2>
          <p>Tickets Booked</p>
        </div>
        <div className="stat-item">
          <h2>100+</h2>
          <p>Cities Covered</p>
        </div>
      </section>

      {/* Organizer Logos */}
      <section className="organizers">
        <h1 style={{ fontSize: "50px", marginBottom: "60px" }}>
          Our Top Organizers
        </h1>
        <div className="logo-carousel">
          <img
            src="https://th.bing.com/th/id/OIP.vkUvUJqSIJOcn71y9r-g7AHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&cb=idpwebpc2"
            alt="Organizer 1"
          />
          <img
            src="https://i.pinimg.com/originals/3a/af/b4/3aafb4b1894bd114d3f6e3145b4c2e9e.jpg"
            alt="Organizer 2"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/047/522/220/original/dance-studio-logo-template-design-vector.jpg"
            alt="Organizer 3"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="testimonials container my-5"
        style={{ backgroundColor: "rgb(235, 106, 175)" }}
      >
        <h1
          className="text-center mb-4"
          style={{ fontStyle: "TimesNewRoman", fontSize: "50px" }}
        >
          <u>What Our Users Say</u>
        </h1>

        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="testimonial-card text-center p-4">
                <p>
                  “Seamless booking and amazing events. Highly recommend
                  EventXpress!”
                </p>
                <h4>- Riya Sharma</h4>
              </div>
            </div>

            <div className="carousel-item">
              <div className="testimonial-card text-center p-4">
                <p>
                  “EventXpress made our wedding stress-free and beautiful.
                  Everything was perfect!”
                </p>
                <h4>- Aarav Mehta</h4>
              </div>
            </div>

            <div className="carousel-item">
              <div className="testimonial-card text-center p-4">
                <p>
                  “Loved the music night. Booked in minutes and the event was a
                  blast!”
                </p>
                <h4>- Neha Kapoor</h4>
              </div>
            </div>

            <div className="carousel-item">
              <div className="testimonial-card text-center p-4">
                <p>
                  “Professional team and top-notch service. Will book again for
                  sure!”
                </p>
                <h4>- Karan Joshi</h4>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Event of the Day Timer */}
      <div className="last">
        <section className="event-timer">
          <h2>Event of the Day</h2>
          <p>
            Music Bash in Mumbai starts in: <strong>05:22:10</strong>
          </p>
        </section>

        {/* Contact Section */}
        <h2
          style={{ textAlign: "center", marginTop: "2%", marginBottom: "2%" }}
        >
          Have Questions? We're Here to Help!
        </h2>
        <section className="contact-info">
          <button
            onClick={handleContactClick}
            style={{ width: "40%", backgroundColor: "aqua", fontWeight: "500" }}
          >
            📞 Click here to Contact Us for Any Queries
          </button>
        </section>

        {/* Footer */}
        <footer>
          <p>&copy; 2025 EventXpress. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
