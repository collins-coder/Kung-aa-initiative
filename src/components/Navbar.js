import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <img
          src="/logo.png"
          alt="KUNG'AA INITIATIVE"
        />
        <h2>KUNG'AA INITIATIVE</h2>
      </div>


      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >
        <li>
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
        </li>

        <li>
          <Link
            to="/leadership"
            onClick={() => setMenuOpen(false)}
          >
            Leadership
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;