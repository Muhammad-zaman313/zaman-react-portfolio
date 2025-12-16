// import CursorEffect from "./Conponents/CursorEffect";
// import Navbar from "./Conponents/Navbar";
// import About from "./Conponents/About";
// import Footer from "./Conponents/Footer";
// import Education from "./Conponents/Eduaction";
// import Home from "./Conponents/Home";
// import Skills from "./Conponents/Skills";
// import Projects from "./Conponents/Projects";
// import Contact from "./Conponents/Contact";
// import ScrollToTop from "./Conponents/ScrollToTop";

// function App() {
//   return (
//     <div className="App">
//       <CursorEffect />
//       <Navbar />
//       <Home />
//       <About />
//       <Education />
//       <Skills />
//       <Projects />
//       <Contact />
//       <ScrollToTop />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import CursorEffect from "./Conponents/CursorEffect";
import Navbar from "./Conponents/Navbar";
import About from "./Conponents/About";
import Footer from "./Conponents/Footer";
import Education from "./Conponents/Eduaction";
import Home from "./Conponents/Home";
import Skills from "./Conponents/Skills";
import Projects from "./Conponents/Projects";
import Contact from "./Conponents/Contact";
import ScrollToTop from "./Conponents/ScrollToTop";
import Resume from "./Conponents/Resume";
function App() {
  return (
    <Router>
      <Navbar />
      <CursorEffect />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <ScrollToTop /> {/* Optional: Scroll-To-Top */}
      <Footer />
    </Router>
  );
}

export default App;
