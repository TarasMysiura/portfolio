import BtnGitHub from "../btnGitHub/BtnGitHub";

import { useParams } from "react-router-dom";
import { projects } from "../../helpers/projectsList";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title.en}</h1>

          <img
            src={project.imgBig}
            alt={project.title.en}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>
          {project.gitHubLink && (
            <BtnGitHub link="https://tarasmysiura.github.io/mimino-team-23/" />
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
