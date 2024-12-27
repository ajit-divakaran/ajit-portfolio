import styles from "./Skills.modules.css";
import HTML from "../../../public/images/skills-logos/html-5.png";
import CSS from "../../../public/images/skills-logos/css.png"
import JS from "../../../public/images/skills-logos/js.png";
import SQL from "../../../public/images/skills-logos/database.png";
import CPP from "../../../public/images/skills-logos/c-.png";
import GITHUB from "../../../public/images/skills-logos/github.png";
import SASS from "../../../public/images/skills-logos/icons8-sass-500.png";
import PS from "../../../public/images/skills-logos/photoshop.png";
import REACT from "../../../public/images/skills-logos/icons8-react-js.svg"
import NODE from "../../../public/images/skills-logos/icons8-node-js.svg"
import EXPRESS from "../../../public/images/skills-logos/icons8-express-js.svg"
import MONGODB from "../../../public/images/skills-logos/icons8-mongodb.svg"
import TAILWIND from "../../../public/images/skills-logos/icons8-tailwindcss.svg"
import BOOTSTRAP from "../../../public/images/skills-logos/icons8-bootstrap.svg"
import ANGULAR from "../../../public/images/skills-logos/icons8-angular.svg"
import REDUX from "../../../public/images/skills-logos/icons8-redux.svg"
import FIGMA from "../../../public/images/skills-logos/icons8-figma.svg"

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
          <div className="react">
            <img
              src={REACT}
              alt=""
              width={"65px"}
            />
            <p>React</p>
          </div>
          <div className="node">
            <img
              src={NODE}
              alt=""
              width={"65px"}
            />
            <p>Node</p>
          </div>
          <div className="express">
            <img
              src={EXPRESS}
              alt=""
              width={"65px"}
            />
            <p>Express</p>
          </div>

          <div className="mongo">
            <img
              src={MONGODB}
              alt=""
              width={"65px"}
            />
            <p>MongoDB</p>
          </div>


          <div className="tailwind">
            <img
              src={TAILWIND}
              alt=""
              width={"65px"}
            />
            <p>Tailwind CSS</p>
          </div>

          <div className="redux">
            <img
              src={REDUX}
              alt=""
              width={"65px"}
            />
            <p>Redux-Toolkit</p>
          </div>

          <div className="bootstrap">
            <img
              src={BOOTSTRAP}
              alt=""
              width={"65px"}
            />
            <p>Bootstrap</p>
          </div>

          <div className="angular">
            <img
              src={ANGULAR}
              alt=""
              width={"65px"}
            />
            <p>Angular</p>
          </div>

          <div className="figma">
            <img
              src={FIGMA}
              alt=""
              width={"65px"}
            />
            <p>Figma</p>
          </div>
        
        
        
        </div>
      </div>
    </div>
  );
};

export default Skills;
