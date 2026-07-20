function Header({ name, color }) {
  return (
    <header style={{ backgroundColor: color }}>
      <h1>{name}</h1>
      <p>Advanced Web Development Portfolio</p>
    </header>
  );
}

export default Header;