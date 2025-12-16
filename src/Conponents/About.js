import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";

export default function About() {
  return (
    <>
      <div
        className="container-fluid py-5"
        id="about-section"
        style={{
          background: "linear-gradient(135deg, #0a0f24, #1a1f36, #0a0f24)",
        }}
      >
        <div className="row justify-content-center align-items-center">
          {/* LEFT SECTION */}
          <div
            className="col-md-6 text-center my-4 p-4 border border-primary rounded-start border-end-0 animate-section"
            style={{ animation: "fadeUp 1s ease" }}
          >
            <h1 className="text-primary mb-4 fw-bold">ABOUT ME</h1>

            <p className="text-light text-start px-3">
              Hello! I’m{" "}
              <span className="text-primary fw-bold hoverable">
                Muhammad Zaman
              </span>{" "}
              from Karachi. I am a passionate{" "}
              <span className="text-primary fw-bold">Frontend Developer</span>{" "}
              who loves creating clean, responsive and user-friendly websites
              using HTML, CSS, JavaScript, and Bootstrap.
              <br />
              <br />I am currently learning <strong>ReactJS</strong> to build
              modern and fast web applications. I enjoy solving problems,
              learning new technologies, and building real-world projects.
              <br />
              <br />
              My goal is to secure an internship, get real experience, and
              eventually become a <strong>Full-Stack Developer</strong>.
              <br />
              <br />I believe consistency and daily improvement lead to real
              success — and I work every day to improve myself.
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div
            className="col-md-5 text-center my-4 p-3 border border-primary rounded-end animate-section"
            style={{ animation: "fadeRight 1s ease" }}
          >
            <figure className="figure mt-3">
              <img
                style={{
                  maxWidth: "100%",
                  height: "400px",
                  objectFit: "cover",
                }}
                src="/myProfilePic.jpg"
                alt="Profile"
                className="figure-img img-fluid rounded hoverable"
              />
              <figcaption className="figure-caption text-light text-center mt-2">
                Muhammad Zaman
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
