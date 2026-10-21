import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <p className="greeting">Hello, I'm</p>
        <h1>Jugal Mehta</h1>
        <h2>Software Development & Cybersecurity</h2>
        <p>
          Computer Science & Engineering undergraduate at CHARUSAT with
          experience in full-stack development, secure REST APIs, and
          cybersecurity-oriented applications.
        </p>
        <div className="hero-buttons">
          <Link to="/projects">
            <button className="btn-primary">View Projects</button>
          </Link>
          <Link to="/contact">
            <button className="btn-secondary">Contact Me</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
