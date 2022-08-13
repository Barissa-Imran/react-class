import reactLogo from "../images/logo192.png";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <img className="nav--icon" src={reactLogo} alt="React logo" />
        <h3 className="nav--logo_text">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
      </nav>
    </header>
  );
}
