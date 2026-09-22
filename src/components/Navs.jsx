import Logo from "/Logo.svg";

export default function Navs() {
  return (
    <>
      <nav className="Navbar">
        <a href="#" className="nav-brand">
          <img src={Logo} alt="Logo" className="nav-logo" />
          <span className="nav-title">DAFA DHIYAUL HAQ</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Portfolio">Galery</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Footer">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
