
import React from 'react';
import './clubs.css';

const Clubs = () => {
  const clubs = [
    { name: 'A', image: 'imageA.jpg' },
    { name: 'B', image: 'imageB.jpg' },
    { name: 'C', image: 'imageC.jpg' },
    // Add more clubs here
  ];

  return (
    <div className="clubs-container">
      {clubs.map((club, index) => (
        <div key={index} className="club-card">
          <img className="club-image" src={club.image} alt={club.name} />
          <div className="club-name">{club.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Clubs;