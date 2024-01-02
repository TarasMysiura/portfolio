import { NavLink } from "react-router-dom";
import "./Project.css";

const Project = ({ title, img, skills, index }) => {
  return (
    <li className="project">
      <NavLink to={`/project/${index}`}>
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </NavLink>
    </li>
  );
};

export default Project;
