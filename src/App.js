import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Navbar from "./Navbar";
import logo from "./logo.png";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [showContact, setShowContact] = useState(false);

  const handleLogin = (identifier, password) => {
    const existingUser = users.find(
      (u) => (u.email === identifier || u.name === identifier) && u.password === password
    );
    if (existingUser) {
      setIsLoggedIn(true);
      setUser(existingUser);
      setShowLogin(false);
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
    setShowProfile(false);
    setShowContact(false);
  };

  return (
    <div className="App">
      <header className="header">
        <img 
          src={logo} 
          alt="CareNest Logo" 
          className="logo" 
          onClick={() => setShowContact(false)} 
        />
        <h1 onClick={() => setShowContact(false)}>CareNest</h1>
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
          onProfileClick={() => setShowProfile(true)} 
          onContactClick={() => setShowContact(true)} 
          onHomeClick={() => setShowContact(false)} 
        />
      )}

      <main className="landing">
        {!showContact ? (
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
          </>
        ) : (
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
      </main>
      
      {!isLoggedIn && (
        <section className="cta">
          <button className="cta-button" onClick={() => setShowSignup(true)}>Join Now</button>
        </section>
      )}

      <footer className="footer">
        <p>© 2025 CareNest. All Rights Reserved.</p>
      </footer>

      {showLogin && <Login close={() => setShowLogin(false)} onLogin={handleLogin} setShowSignup={setShowSignup} />}
      {showSignup && <Signup close={() => setShowSignup(false)} onSignup={handleSignup} setShowLogin={setShowLogin} />}
      {showProfile && isLoggedIn && <Profile user={user} close={() => setShowProfile(false)} />}
    </div>
  );
}

export default App;
