import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./components/pages/HomePage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ContactsPage from "./components/pages/ContactsPage";
import ProjectPage from "./components/pages/ProjectPage";
import ScrollToTop from "./components/utils/scrollToTop";
import ResumePage from "./components/pages/ResumePage";
import CertificatesPage from "./components/pages/CertificatesPage";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
