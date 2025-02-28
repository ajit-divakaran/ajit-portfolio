// import Nav from 'react-bootstrap/Nav';
import { useState } from "react";
import styles from "./NavBar.modules.css";
const NavBar = () => {
  const [showNav,setShowNav] = useState(false)
  console.log(showNav)
  return (
    <>
      <div className="navBar" style={{ marginTrim: "17px", width: "100vw" }}>
        <a href="" className="logo-link">
          {/* <img src="/images/modern font logo ajit.jpg " className='logo' alt="AJIT." /> */}
          <h1 className="logo">Aj</h1>
          <h1 className="logo_underline">it .</h1>

          {/* <img className='logo_underline' src="public/images/underline.png"></img> */}
        </a>
        <div className="nav-menu">
          <a href="#">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">My Skills</a>
        </div>
        <div className="hamburger-icon">
        {/* style={{marginTop:"-8px",padding:"0"}} */}
          <img src="/images/menu.png" onClick={()=>setShowNav(!showNav)} width='28px' />
        </div>
      </div>

{ showNav && <div className="menu-items">
        <div className="nav-menu-hamburger">
            <a href="#">Home</a>
            <a href="#projects">Projects</a>
            <a href="#skills">My Skills</a>
          </div>
 </div>}
    </>
  );
};

{
  /* <a href="" className='logo-link'>
        <img src="/images/AJIT -logos_black.png" alt="AJIT." />
    </a> */
}
{
  /* <Nav className="justify-content-start "><a href="" className='logo-link'>
        <img src="/images/AJIT -logos_black.png" alt="AJIT." />
    </a></Nav>
        <Nav className="justify-content-end menu-side" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item> */
}
// </Nav> */}

export default NavBar;
