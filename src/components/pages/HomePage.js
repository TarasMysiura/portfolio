import Header from "../header/Header";
import { SkillIconStyles, SkillListStyles } from "./HomePage.styled";
import { SvgSelector } from './../../img/icons/SetSelector';

const HomePage = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <SkillListStyles className="name-skills-list">
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="html"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">HTML</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="CSS"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">CSS</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="SASS"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">SASS</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="JavaScript"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">JavaScript</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="TypeScript"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">TypeScript</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="ReactJS"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">ReactJS</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="Angular"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">Angular</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="Redux"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">Redux</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon title-3">
                    <SvgSelector id="StyledComponents"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">StyledComponents</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="NPM"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">NPM</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="Yarn"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">Yarn</h3>
                </li>
                <li className="name-skill-item title-3">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="BootStrap"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">BootStrap</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="MaterialUI"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">MaterialUI</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="NextJS"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">NextJS</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="TailwindCSS"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">TailwindCSS</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="Less"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">Less</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="GIT"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">GIT</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="GIT"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">GIT</h3>
                </li><li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="GIT"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">GIT</h3>
                </li><li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="GIT"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">GIT</h3>
                </li><li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="GIT"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title title-3">GIT</h3>
                </li>

              </SkillListStyles>
             
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MySQL, MongoDB, mockapi.io, </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default HomePage;
