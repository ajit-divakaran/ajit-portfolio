import styles from "./Skills.modules.css";
import HTML from "../../../public/images/skills-logos/html-5.png";
import CSS from "../../../public/images/skills-logos/css.png"
import JS from "../../../public/images/skills-logos/js.png";
import SQL from "../../../public/images/skills-logos/database.png";
import CPP from "../../../public/images/skills-logos/c-.png";
import GITHUB from "../../../public/images/skills-logos/github.png";
import SASS from "../../../public/images/skills-logos/icons8-sass-500.png";
import PS from "../../../public/images/skills-logos/photoshop.png";
const Skills = () => {
  return (
    <div className="Thirdpg_content" id="skills">
      <div className="head_container">
        <div className="heading-div">
          <h1 className="heading-3">My Skills</h1>
        </div>
      </div>
      <div className="skills-body">
        <div className="skills-content">
          <div className="html">
            <img src={HTML}></img>
            <p>HTML</p>
          </div>
          <div className="css">
            <img src={CSS}></img>
            <p>CSS</p>
          </div>
          <div className="js">
            <img src={JS}></img>
            <p>Javascript</p>
          </div>
          <div className="SQL">
            <img src={SQL}></img>
            <p>SQL</p>
          </div>
          <div className="cplus">
            <img src={CPP}></img>
            <p>C++</p>
          </div>
          <div className="github">
            <img src={GITHUB}></img>
            <p>Github</p>
          </div>
          <div className="sass">
            <img
              src={SASS}
              alt=""
              className="Saas"
            />
            <p id="Saastitle">Sass</p>
          </div>
          <div className="photoshop">
            <img
              src={PS}
              alt=""
            />
            <p>Photoshop</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
