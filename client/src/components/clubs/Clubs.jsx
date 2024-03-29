import React from 'react';
import './clubs.css';
import Topbar from '../topbar/Topbar'
const Clubs = () => {
  const clubs = [
    { name: 'Team Nayan', image: 'assets/club-img/NAYAN_profile.jpeg' },
    { name: 'AlgoByte', image: 'assets/club-img/AlgoByte.jpeg' },
    { name: 'Team Wappers', image: 'assets/club-img/TEAM_WAPPERS_profile.jpeg' },
    { name: 'DSC Banasthali Vidyapith', image: 'assets/club-img/DSC_profile.jpeg' },
    { name: 'Unstop Banasthali Vidyapith', image: 'assets/club-img/Unstop_profile.jpeg'},
    { name: 'LeanIn  Banasthali Vidyapith', image: 'assets/club-img/leanIn_profile.jpeg' },
    { name: 'Hackerearth hub-Banasthali Vidyapith', image: 'assets/club-img/HACKEREARTH_profile.jpeg' },
    { name: 'GeeksfoGeeks BV Chapter', image: 'assets/club-img/GeeksForGeeks_BV_profile.jpeg' },
    { name: 'Codechef-BV Chapter', image: 'assets/club-img/code_chef_profile.jpeg' },
    // Add more clubs here
  ];

  return (
    <>
    <Topbar></Topbar>
    <h1 className="club-head">    
                Our Clubs                    </h1>
      <div className="clubs-container">
      {clubs.map((club, index) => (
        <div key={index} className="club-card">
          <img className="club-image" src={club.image} alt={club.name} />
          <div className="club-name">{club.name}</div>
            
    
        </div>
      ))}
      
    </div>
    </>
  
  );
};

export default Clubs;