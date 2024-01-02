import "./BtnGitHub.css";

import btnGitHub_img from "../../img/icons/gitHub-black.svg"

const BtnGitHub = ({link}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={btnGitHub_img} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
