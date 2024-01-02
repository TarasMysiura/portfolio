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
                  <h3 className="name-skill-title">HTML</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="CSS"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">CSS</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="SASS"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">SASS</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="JavaScript"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">JavaScript</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="TypeScript"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">TypeScript</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="ReactJS"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">ReactJS</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="Angular"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">Angular</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="Redux"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">Redux</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="StyledComponents"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">StyledComponents</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="NPM"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">NPM</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="Yarn"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">Yarn</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="BootStrap"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">BootStrap</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="MaterialUI"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">MaterialUI</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="NextJS"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">NextJS</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="TailwindCSS"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">TailwindCSS</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="Less"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">Less</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="GIT"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">GIT</h3>
                </li>
                <li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="GIT"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">GIT</h3>
                </li><li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="GIT"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">GIT</h3>
                </li><li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="GIT"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">GIT</h3>
                </li><li className="name-skill-item">
                  <SkillIconStyles  className="name-skill-icon">
                    <SvgSelector id="GIT"/>
                  </SkillIconStyles>
                  <h3 className="name-skill-title">GIT</h3>
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
