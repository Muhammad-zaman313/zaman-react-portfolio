import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaGraduationCap } from "react-icons/fa";

export default function EducationTimeline() {
  const educationData = [
    {
      year: "2020 - 2025",
      degree: "Bachelor of Science",
      institute: "Federal Urdu Uiversity Arts & Science Technology",
      description:
        "Major in Computer Science, focused on web development",
    },
    {
      year: "2018 - 2020",
      degree: "Higher Secondary",
      institute: "Millat Public Higher Secondery College",
      description:
        "Science stream with strong performance in Mathematics and Computer Science.",
    },
    {
      year: "2016 - 2018",
      degree: "Matriculation",
      institute: "Millat Public Higher Seconday School & College",
      description:
        "Science group with top grades in Mathematics and Computer Studies.",
    },
  ];

  return (
    <>
      <div
        className="container-fluid py-5"
        id="education-section"
        style={{
          background: "linear-gradient(to right, #0a0f24, #1a1f36)",
          color: "#e6eef8",
        }}
      >
        <div className="text-center mb-5">
          <h1 className="text-primary fw-bold">EDUCATION</h1>
          <p className="text-light mx-auto" style={{ maxWidth: "700px" }}>
            My academic journey, milestones, and learning experiences.
          </p>
        </div>

        {/* Timeline */}
        <div
          className="timeline position-relative mx-auto"
          style={{ maxWidth: "900px" }}
        >
          {/* Vertical line */}
          <div
            className="position-absolute top-0 start-50 translate-middle-x"
            style={{
              width: "4px",
              height: "100%",
              backgroundColor: "#5d63f1",
              zIndex: 1,
            }}
          ></div>

          {educationData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item row justify-content-${
                index % 2 === 0 ? "end" : "start"
              } align-items-center mb-5 position-relative`}
              style={{ zIndex: 2 }}
            >
              <div className="col-md-5 col-10">
                <div
                  className="p-4 rounded border border-primary hoverable"
                  style={{
                    background: "rgba(93,99,241,0.05)",
                    transition: "0.3s",
                  }}
                >
                  <div className="d-flex align-items-center mb-2">
                    <FaGraduationCap className="text-primary me-2" />
                    <h5 className="text-primary fw-bold mb-0">{item.degree}</h5>
                  </div>
                  <p className="text-light mb-1">{item.institute}</p>
                  <p className="text-light mb-1">{item.year}</p>
                  <p className="text-light">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline & hover animation CSS */}
      <style>
        {`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }

        .timeline-item {
          animation: fadeUp 1s ease forwards;
        }

        .hoverable:hover {
          transform: scale(1.05);
          background: rgba(93,99,241,0.15);
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          .timeline-item {
            justify-content: center !important;
          }
        }
        `}
      </style>
    </>
  );
}
