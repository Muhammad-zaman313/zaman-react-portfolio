import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaCircle, FaNodeJs, FaPython, FaGit, FaGithub 
} from "react-icons/fa";
import { SiMysql, SiMongodb } from "react-icons/si";
import { FaPlus } from "react-icons/fa";

export default function Skills() {
  const defaultSkills = [
    { id: 1, name: "HTML5", link: "https://www.w3schools.com/html/", icon: <FaHtml5 /> },
    { id: 2, name: "CSS3", link: "https://www.w3schools.com/css/", icon: <FaCss3Alt /> },
    { id: 3, name: "JavaScript", link: "https://www.w3schools.com/js/", icon: <FaJs /> },
    { id: 4, name: "ReactJS", link: "https://www.w3schools.com/react/", icon: <FaReact /> },
    { id: 5, name: "Bootstrap", link: "https://www.w3schools.com/bootstrap5/", icon: <FaBootstrap /> },
  ];

  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem("skills");
    return saved ? JSON.parse(saved) : defaultSkills;
  });

  const [showModal, setShowModal] = useState(false);
  const [skillInput, setSkillInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("FaCircle");

  const iconOptions = {
    FaHtml5: <FaHtml5 />,
    FaCss3Alt: <FaCss3Alt />,
    FaJs: <FaJs />,
    FaReact: <FaReact />,
    FaBootstrap: <FaBootstrap />,
    FaNodeJs: <FaNodeJs />,
    FaPython: <FaPython />,
    FaGit: <FaGit />,
    FaGithub: <FaGithub />,
    SiMysql: <SiMysql />,
    SiMongodb: <SiMongodb />,
    FaCircle: <FaCircle />,
  };

  const w3Links = {
    html5: "https://www.w3schools.com/html/",
    css3: "https://www.w3schools.com/css/",
    javascript: "https://www.w3schools.com/js/",
    reactjs: "https://www.w3schools.com/react/",
    bootstrap: "https://www.w3schools.com/bootstrap5/",
    nodejs: "https://www.w3schools.com/nodejs/",
    python: "https://www.w3schools.com/python/",
    git: "https://www.w3schools.com/git/",
    github: "https://www.w3schools.com/github/",
    mysql: "https://www.w3schools.com/sql/",
    mongodb: "https://www.w3schools.com/mongodb/",
  };

  const addSkill = () => {
    const name = skillInput.trim();
    if (!name) return;

    const exists = skills.some(s => s.name.toLowerCase() === name.toLowerCase());
    if (exists) { alert("This skill already exists."); return; }

    const link = urlInput || w3Links[name.toLowerCase()] || `https://www.w3schools.com/search/?q=${name}`;
    const icon = iconOptions[selectedIcon] || <FaCircle />;

    const newSkills = [...skills, { id: Date.now(), name, link, icon }];
    setSkills(newSkills);
    localStorage.setItem("skills", JSON.stringify(newSkills));

    setSkillInput(""); setUrlInput(""); setSelectedIcon("FaCircle"); setShowModal(false);
  };

  const openSkill = (link) => window.open(link, "_blank", "noopener,noreferrer");
  const removeSkill = (id) => {
    const newSkills = skills.filter(s => s.id !== id);
    setSkills(newSkills);
    localStorage.setItem("skills", JSON.stringify(newSkills));
  };

  return (
    <div className="container-fluid py-5" style={{ background: "#0a0f24", color: "#e6eef8" }}>
      <div className="text-center mb-4">
        <h1 className="text-primary fw-bold">MY SKILLS</h1>
        <p className="text-light mx-auto" style={{ maxWidth: "700px" }}>
          Technologies and tools I use to build modern, responsive websites.
        </p>
      </div>

      {/* Floating Add Button */}
      <button
        className="btn btn-primary rounded-circle position-fixed"
        style={{ bottom: "40px", right: "40px", width: "60px", height: "60px", fontSize: "1.5rem", zIndex: 1000 }}
        onClick={() => setShowModal(true)}
      >
        <FaPlus />
      </button>

      {/* Skills Display */}
      <div className="row justify-content-center">
        {skills.map(skill => (
          <div key={skill.id} className="col-md-2 col-6 mb-4 text-center hoverable p-3 rounded border border-primary"
               style={{ background: "rgba(93,99,241,0.05)", transition: "0.3s", fontSize: "2rem", cursor: "pointer" }}>
            <div onClick={() => openSkill(skill.link)}>{skill.icon}</div>
            <p className="text-light">{skill.name}</p>
            <button className="btn btn-sm btn-danger mt-2" onClick={() => removeSkill(skill.id)}>Remove</button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content p-4 rounded" style={{ maxWidth: "450px", margin: "100px auto", background: "#131738" }}>
            <h5 className="text-light mb-3">Add New Skill</h5>
            <input type="text" className="form-control mb-2" placeholder="Skill Name" value={skillInput} onChange={e => setSkillInput(e.target.value)} />
            <input type="text" className="form-control mb-2" placeholder="Skill URL (optional)" value={urlInput} onChange={e => setUrlInput(e.target.value)} />
            
            {/* Icon Selection */}
            <div className="d-flex flex-wrap gap-2 mb-3">
              {Object.keys(iconOptions).map(key => (
                <div key={key} onClick={() => setSelectedIcon(key)}
                     className={`p-2 rounded text-light hoverable ${selectedIcon===key ? "border border-primary" : ""}`}
                     style={{ cursor: "pointer", fontSize: "1.5rem" }}>
                  {iconOptions[key]}
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-between">
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={addSkill}>Add</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .hoverable:hover {
          transform: scale(1.05);
          background: rgba(93,99,241,0.15);
          transition: 0.3s;
        }
        .modal-backdrop {
          position: fixed;
          top:0; left:0;
          width:100%; height:100%;
          background: rgba(0,0,0,0.7);
          display:flex;
          justify-content:center;
          align-items:center;
          z-index: 999;
        }
      `}</style>
    </div>
  );
}
