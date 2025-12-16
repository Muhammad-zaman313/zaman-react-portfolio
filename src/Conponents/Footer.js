import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer
        style={{
          background: "linear-gradient(to right, #0a0f24, #1a1f36)",
          color: "white",
          padding: "40px 0",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <h3 style={{ marginBottom: "20px", fontWeight: "bold" }}>
          Connect With Me
        </h3>

        {/* Social Icons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            fontSize: "1.8rem",
            marginBottom: "20px",
          }}
        >
          <a href="#face" style={{ color: "white" }} className="social-icon">
            <FaFacebook />
          </a>
          <a href="linked" style={{ color: "white" }} className="social-icon">
            <FaLinkedin />
          </a>
          <a href="#insta" style={{ color: "white" }} className="social-icon">
            <FaGithub />
          </a>
          <a
            href="#instagram"
            style={{ color: "white" }}
            className="social-icon"
          >
            <FaInstagram />
          </a>
        </div>

        <p style={{ fontSize: "1rem", opacity: "0.7" }}>
          © {new Date().getFullYear()} Muhammad Zaman — All Rights Reserved.
        </p>
      </footer>

      {/* Hover Animation Style */}
      <style>
        {`
          .social-icon:hover {
            color: #5d63f1;
            transform: scale(1.3);
            transition: 0.3s;
          }
        `}
      </style>
    </>
  );
}
