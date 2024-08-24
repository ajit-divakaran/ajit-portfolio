import styles from "./First_page.modules.css";
import Profile from "../../../public/images/New Project.png"
const FirstPage = () => {
  return (
    <>
      <div className="first-page-content" id="home">
        <div className="first-page-text">
          <h5 style={{ fontFamily: "Poppins" }}>Hello I'm,</h5>
          <h1 style={{ marginTop: "-5px" }}>Ajit Divakaran</h1>
          <h4 style={{ marginTop: "10px" }}>Frontend web designer</h4>
          <p style={{ marginTop: "3px" }}>
            I am an Electronics engineer graduate with a passion for web
            development. I love designing websites and am constantly fascinated
            by the intricacies of new technologies and the mechanics behind
            entire websites. A Coding enthusiast dedicated to creating engaging
            online experiences.
          </p>
        </div>

        <div
          className="profile-image"
          style={{ position: "relative", overflow: "hidden" }}
        >
          {/* WebkitClipPath:'url(#shape)' */}
          <img className="blob" src={Profile} />

          {/* <div className="blob-container"></div> */}
        </div>

        {/* <hr style={{background:'white', height:'2px'}}/> */}
      </div>
    </>
  );
};

export default FirstPage;
