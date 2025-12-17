import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { FaPlus, FaTimes, FaLaptopCode, FaMobileAlt, FaDatabase, FaGlobe } from "react-icons/fa";

export default function Projects() {
  const defaultProjects = [
    {
      id: 1,
      title: "Portfolio Website",
      img: "https://tse4.mm.bing.net/th/id/OIP.WUOH1qf1W8urnWwH7bvSrQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "My personal portfolio built with React, Bootstrap & CSS animations.",
      codeLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://yourusername.github.io/portfolio/",
      icon: <FaLaptopCode />,
    },
    {
      id: 2,
      title: "E-commerce UI",
      img: "https://tse4.mm.bing.net/th/id/OIP.WUOH1qf1W8urnWwH7bvSrQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "Responsive e-commerce UI template using Bootstrap & JavaScript.",
      codeLink: "https://github.com/yourusername/ecommerce-ui",
      liveLink: "https://your-live-site.com",
      icon: <FaGlobe />,
    },
  ];

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : defaultProjects;
  });

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    img: "",
    desc: "",
    codeLink: "",
    liveLink: "",
    icon: "FaLaptopCode",
  });

  const iconOptions = {
    FaLaptopCode: <FaLaptopCode />,
    FaMobileAlt: <FaMobileAlt />,
    FaDatabase: <FaDatabase />,
    FaGlobe: <FaGlobe />,
  };

  const addProject = () => {
    const { title, img, desc, codeLink, liveLink, icon } = formData;
    if (!title || !img) {
      alert("Title and Image URL are required!");
      return;
    }

    const newProjects = [
      ...projects,
      { id: Date.now(), ...formData, icon: iconOptions[icon] || <FaLaptopCode /> },
    ];
    setProjects(newProjects);
    localStorage.setItem("projects", JSON.stringify(newProjects));

    setFormData({ title: "", img: "", desc: "", codeLink: "", liveLink: "", icon: "FaLaptopCode" });
    setShowModal(false);
  };

  const removeProject = (id) => {
    const newProjects = projects.filter(p => p.id !== id);
    setProjects(newProjects);
    localStorage.setItem("projects", JSON.stringify(newProjects));
  };

  return (
    <div className="container-fluid py-5" style={{ background: "#1a1f36", color: "#e6eef8" }}>
      <div className="text-center mb-5">
        <h1 className="text-primary fw-bold">PROJECTS</h1>
        <p className="text-light mx-auto" style={{ maxWidth: "700px" }}>
          Some of my recent works and projects showcasing my skills.
        </p>
      </div>

      {/* Floating Add Button */}
      <button
        className="btn btn-primary rounded-circle position-fixed shadow-lg"
        style={{ bottom: "40px", right: "40px", width: "60px", height: "60px", fontSize: "1.5rem", zIndex: 1000 }}
        onClick={() => setShowModal(true)}
        title="Add New Project"
      >
        <FaPlus />
      </button>

      {/* Projects Grid */}
      <div className="row justify-content-center g-4">
        {projects.map(project => (
          <div key={project.id} className="col-md-4">
            <div className="project-card position-relative rounded overflow-hidden shadow-sm">
              <img src={project.img} alt={project.title} className="img-fluid w-100" />
              <div className="overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                <div style={{ fontSize: "2rem" }}>{project.icon}</div>
                <h5 className="text-primary fw-bold">{project.title}</h5>
                <p className="text-light">{project.desc}</p>
                <div className="d-flex gap-2 flex-wrap mt-2">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary hoverable">View Code</a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary hoverable" style={{ color: "#fff" }}>Live Preview</a>
                  <button className="btn btn-sm btn-danger" onClick={() => removeProject(project.id)}>Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content p-4 rounded" style={{ maxWidth: "500px", margin: "100px auto", background: "rgba(19,23,56,0.95)", backdropFilter: "blur(5px)" }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="text-light">Add New Project</h5>
              <button className="btn btn-light btn-sm" onClick={() => setShowModal(false)}><FaTimes /></button>
            </div>
            <input type="text" className="form-control mb-2" placeholder="Project Title" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
            <input type="text" className="form-control mb-2" placeholder="Image URL" value={formData.img} onChange={e => setFormData({ ...formData, img: e.target.value })} />
            <input type="text" className="form-control mb-2" placeholder="Description" value={formData.desc} onChange={e => setFormData({ ...formData, desc: e.target.value })} />
            <input type="text" className="form-control mb-2" placeholder="Code Link" value={formData.codeLink} onChange={e => setFormData({ ...formData, codeLink: e.target.value })} />
            <input type="text" className="form-control mb-2" placeholder="Live Link" value={formData.liveLink} onChange={e => setFormData({ ...formData, liveLink: e.target.value })} />

            {/* Icon Selection */}
            <div className="d-flex flex-wrap gap-2 mb-3">
              {Object.keys(iconOptions).map(key => (
                <div key={key} onClick={() => setFormData({ ...formData, icon: key })}
                     className={`p-2 rounded text-light hoverable ${formData.icon===key ? "border border-primary" : ""}`}
                     style={{ cursor: "pointer", fontSize: "1.5rem" }}>
                  {iconOptions[key]}
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-between">
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={addProject}>Add</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .project-card { cursor: pointer; overflow: hidden; border-radius: 10px; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .project-card:hover { transform: scale(1.03); box-shadow: 0 15px 30px rgba(0,0,0,0.4); }
        .overlay { position: absolute; bottom: -100%; left:0; width:100%; height:100%; background: rgba(0,0,0,0.75); color:#fff; transition: bottom 0.3s ease; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding:15px; }
        .project-card:hover .overlay { bottom:0; }
        .hoverable:hover { transform: scale(1.08); transition: 0.3s; }
        .modal-backdrop { position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.7); display:flex; justify-content:center; align-items:center; z-index: 999; }
      `}</style>
    </div>
  );
}
