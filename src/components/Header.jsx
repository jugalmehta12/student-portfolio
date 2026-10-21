function Header({ name, color }) {
  return (
    <header className="portfolio-header" style={{ borderColor: color }}>
      <p>Advanced Web Development Frameworks</p>
      <h1>{name}'s Portfolio</h1>
    </header>
  );
}

export default Header;
