import { certificates } from "../../helpers/certificatesList";

import Certificate from "../certificate/Certificate";

const CertificatesPage = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">My certificates</h2>
        <ul className="projects">
          {certificates.map((project, index) => {
            return (
              <Certificate
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

export default CertificatesPage;
