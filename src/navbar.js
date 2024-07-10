// import logo from './logo.svg';
import { useState } from "react";
import "./navbar.css";
import Timer from "./timer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo">ReactWebSite</div>
        <div className={`links ${isOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="toggle" onClick={toggleMenu}>
          
        </button>
      </nav>
      <Timer/>
      </>
  );
}

export default App;
