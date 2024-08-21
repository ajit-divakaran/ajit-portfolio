import styles from "./Skills.modules.css";

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
            <img src="../../../public/images/skills-logos/html-5.png"></img>
            <p>HTML</p>
          </div>
          <div className="css">
            <img src="../../../public/images/skills-logos/css.png"></img>
            <p>CSS</p>
          </div>
          <div className="js">
            <img src="../../../public/images/skills-logos/js.png"></img>
            <p>Javascript</p>
          </div>
          <div className="SQL">
            <img src="../../../public/images/skills-logos/database.png"></img>
            <p>SQL</p>
          </div>
          <div className="cplus">
            <img src="../../../public/images/skills-logos/c-.png"></img>
            <p>C++</p>
          </div>
          <div className="github">
            <img src="../../../public/images/skills-logos/github.png"></img>
            <p>Github</p>
          </div>
          <div className="sass">
            <img
              src="../../../public/images/skills-logos/icons8-sass-500.png"
              alt=""
              className="Saas"
            />
            <p id="Saastitle">Sass</p>
          </div>
          <div className="photoshop">
            <img
              src="../../../public/images/skills-logos/photoshop.png"
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
