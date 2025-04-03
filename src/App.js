import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Navbar from "./Navbar";
import logo from "./logo.png";
import Cards from "./Cards";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState("home");

  const handleLogin = (identifier, password) => {
    const existingUser = users.find(
      (u) => (u.email === identifier || u.name === identifier) && u.password === password
    );
    if (existingUser) {
      setIsLoggedIn(true);
      setUser(existingUser);
      setShowLogin(false);
      setActiveTab("home");
      return true;
    } else {
      alert("Incorrect email/username or password.");
      return false;
    }
  };

  const handleSignup = (name, email, password) => {
    const newUser = { name, email, password };
    setUsers([...users, newUser]);
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setActiveTab("home");
  };

  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="CareNest Logo" className="logo" onClick={() => setActiveTab("home")} />
        <h1 onClick={() => setActiveTab("home")}>CareNest</h1>
        <nav>
          {isLoggedIn ? (
            <>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => { setShowLogin(true); setShowSignup(false); }}>Login</button>
              <button onClick={() => { setShowSignup(true); setShowLogin(false); }}>Sign Up</button>
            </>
          )}
        </nav>
      </header>

      {isLoggedIn && (
        <Navbar 
          onProfileClick={() => setActiveTab("profile")} 
          onContactClick={() => setActiveTab("contact")} 
          onHomeClick={() => setActiveTab("home")} 
        />
      )}

      <div className="content-wrapper">
        <main className="landing">
          {activeTab === "home" && (
            <>
              <h2>Welcome to CareNest</h2>
              <p>Your trusted platform for care and wellness.</p>
              {!isLoggedIn && (
                <section className="services">
                  <h3>Our Services</h3>
                  <ul>
                    <li>24/7 Online Consultation</li>
                    <li>Home Healthcare Assistance</li>
                    <li>Medical Appointment Scheduling</li>
                    <li>Wellness and Fitness Guidance</li>
                  </ul>
                </section>
              )}
              {isLoggedIn && <Cards />}
            </>
          )}

          {activeTab === "contact" && (
            <section className="services">
              <h3>Our Services</h3>
              <ul>
                <li>24/7 Online Consultation</li>
                <li>Home Healthcare Assistance</li>
                <li>Medical Appointment Scheduling</li>
                <li>Wellness and Fitness Guidance</li>
              </ul>
            </section>
          )}

          {activeTab === "profile" && isLoggedIn && (
            <Profile user={user} close={() => setActiveTab("home")} />
          )}
        </main>
      </div>

      {!isLoggedIn && (
        <section className="cta">
          <button className="cta-button" onClick={() => setShowSignup(true)}>Join Now</button>
        </section>
      )}

      {/* ✅ Footer always stays at the bottom */}
      <footer className="footer">
        <p>© 2025 CareNest. All Rights Reserved.</p>
      </footer>

      {/* ✅ Popups should appear over the footer */}
      {showLogin && <Login close={() => setShowLogin(false)} onLogin={handleLogin} setShowSignup={setShowSignup} />}
      {showSignup && <Signup close={() => setShowSignup(false)} onSignup={handleSignup} setShowLogin={setShowLogin} />}
    </div>
  );
}

export default App;
