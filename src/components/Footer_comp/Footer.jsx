import styles from "./Footer.modules.css";
import { IconData } from "../../helpers/IconData";
const Footer = () => {
  const onClick = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    // <div className="Footer_pg">
    <div className="Footer_pg-container">
      <div className="footer-message">
        <div className="footer-content">
          <h2>Dont be Shy . Say hi .</h2>
          {/* <p>Thank you for visiting my website.</p> */}
          <p style={{ marginTop: "2.5rem" }}>Feel free to connect with me.</p>
          <p>Gmail: ajit.divakaranb@gmail.com</p>
          <div className="socials">
            {IconData.map((val, index) => {
              return (
                <a key={index} href={val.href}>
                  <img src={val.img} alt={val.title} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-card">
          <div className="footer-card-content">
            <form onSubmit={onClick}>
              <input
                name="name"
                type="text"
                className="feedback-input"
                id="feedback-input"
                placeholder="Name"
              />
              <input
                name="email"
                type="text"
                className="feedback-input"
                id="feedback-input"
                placeholder="Email"
              />
              <textarea
                name="text"
                className="feedback-input"
                id="feedback-input"
                placeholder="Comment"
              ></textarea>
              <input type="submit" id="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
      <div
        className="rigths"
        style={{
          textAlign: "center",
          alignSelf: "center",
          width: "100vw",
          height: "100%",
        }}
      >
        <p> &#169; Copyrights Ajit Divakaran 2024</p>
      </div>
    </div>
    // </div>
  );
};

export default Footer;
