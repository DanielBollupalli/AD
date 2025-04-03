// import React from "react";
// import "./Navbar.css";

// const Navbar = ({ onProfileClick }) => {
//   return (
//     <div className="navbar-container">
//       <h1 className="navbar-title"></h1>
//       <nav className="navbar">
//         <button className="nav-btn active"><i className="fa fa-fw fa-home"></i> Home</button>
//         <button className="nav-btn"><i className="fa fa-fw fa-search"></i> Search</button>
//         <button className="nav-btn"><i className="fa fa-fw fa-envelope"></i> Contact</button>
//         <button className="nav-btn" onClick={onProfileClick}><i className="fa fa-fw fa-user"></i> Profile</button>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import "./Navbar.css";

const Navbar = ({ onHomeClick, onProfileClick, onSearchClick, onContactClick }) => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <button className="nav-btn" onClick={onHomeClick}>
          <i className="fa fa-fw fa-home"></i> Home
        </button>
        <button className="nav-btn" onClick={onSearchClick}>
          <i className="fa fa-fw fa-search"></i> Search
        </button>
        <button className="nav-btn" onClick={onContactClick}>
          <i className="fa fa-fw fa-envelope"></i> Contact
        </button>
        <button className="nav-btn" onClick={onProfileClick}>
          <i className="fa fa-fw fa-user"></i> Profile
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
