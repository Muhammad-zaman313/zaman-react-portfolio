import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg shadow-sm py-3"
        style={{ backgroundColor: "#111026" }}
      >
        <div className="container-fluid">
          {/* BRAND */}
          <Link
            className="navbar-brand text-light fw-bold fs-4 ms-2"
            style={{ letterSpacing: "1px" }}
            to="/"
          >
            <span style={{ color: "#00eaff" }}>Zaman</span>Rehmani
          </Link>

          {/* TOGGLER */}
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAV LINKS */}
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 d-flex gap-3 ps-2">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light fw-semibold ps-2"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-secondary ps-2" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-secondary ps-2" to="/education">
                  Education
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-secondary ps-2" to="/skills">
                  Skills
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-secondary ps-2" to="/projects">
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-secondary ps-2" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            {/* BUTTON */}
            <button
              onClick={() => navigate("/contact")}
              className="btn rounded-pill px-4 py-2 ms-lg-3"
              style={{
                border: "2px solid #00eaff",
                color: "#00eaff",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#00eaff";
                e.target.style.color = "#111026";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#00eaff";
              }}
            >
              Hire Me
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
