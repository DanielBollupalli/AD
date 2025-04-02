import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch, FaUser, FaHome, FaInfoCircle, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <ul>
          <li><FaHome /> Home</li>
          <li><FaSearch /> Search</li>
          <li><FaInfoCircle /> About</li>
          <li><FaUser /> Profile</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
