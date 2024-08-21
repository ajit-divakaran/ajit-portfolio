// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import NavBar from './components/Navbar_comp/Navbar'
import FirstPage from './components/First_page_comp/First_page'
import './App.css'
import SecondPage from './components/Second_page_comp/Second_page'
import Skills from './components/Third_page_comp/Skills'
import Footer from './components/Footer_comp/Footer'
// import {AnchorLink as Link} from 'react-anchor-link-smooth-scroll'


function App() {
  

  return (
    <div className= "whole" style={{display:'grid'}}>
      {/* <h1>Hello this is my website</h1> */}
      <NavBar></NavBar>
      <FirstPage></FirstPage>
      <SecondPage></SecondPage>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  )
}

export default App

      /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */