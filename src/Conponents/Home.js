import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
        style={{
          height: "100vh",
          background: "linear-gradient(to right, #0a0f24, #1a1f36)",
          color: "#e6eef8",
          textAlign: "center",
        }}
      >
        <h1 className="text-primary fw-bold mb-3 animate-section">
          Hello, I'm Muhammad Zaman
        </h1>
        <p className="text-light mb-4 animate-section">
          A passionate Frontend Developer creating modern, responsive websites
          using HTML, CSS, JavaScript, Bootstrap & ReactJS.
        </p>
        <a
          href="#projects-section"
          className="btn btn-primary px-4 py-2 hoverable"
        >
          <Link className="nav-link" to="/resume">
            Resume
          </Link>
        </a>
      </div>

      <style>
        {`
          .animate-section {
            animation: fadeUp 1s ease forwards;
          }
          .hoverable:hover {
            transform: scale(1.05);
            background-color: #5d63f1;
            transition: 0.3s;
          }
        `}
      </style>
    </>
  );
}
