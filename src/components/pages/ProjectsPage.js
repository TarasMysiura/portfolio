import Project from "../project/Project";

import { projects } from "../../helpers/projectsList";

const ProjectsPage = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title.en}
                img={project.img}
                skills={project.skills}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default ProjectsPage;
