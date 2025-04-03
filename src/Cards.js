import React from "react";
import "./Cards.css"; // Import the CSS file

const retirementHomes = [
  { name: "Sunnyvale Retreat", location: "California, USA", image: "sunnyvale.jpg" },
  { name: "Golden Age Residency", location: "New York, USA", image: "goldenage.jpg" },
  { name: "Peaceful Haven", location: "Florida, USA", image: "peacefulhaven.jpg" },
  { name: "Elderly Bliss", location: "Texas, USA", image: "elderlybliss.jpg" }
];

const RetirementHomeCards = () => {
  return (
    <div className="cards-container">
      {retirementHomes.map((home, index) => (
        <div key={index} className="card">
          <img src={home.image} alt={home.name} className="card-image" />
          <div className="card-content">
            <h3>{home.name}</h3>
            <p>{home.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
