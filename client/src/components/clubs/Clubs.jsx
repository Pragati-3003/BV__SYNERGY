
import React, { useState } from 'react';
import './clubs.css';
import Topbar from "../../components/topbar/Topbar";
import ClubLink from "./ClubLink"

const Clubs = () => {
  const clubs = [
    { name: 'AlgoByte', image: 'assets/club_img/AlgoByte.jpeg' },
    { name: 'Code_chef', image: 'assets/club_img/code_chef_profile.jpeg' },
    { name: 'DSC BV', image: 'assets/club_img/DSC_profile.jpeg' },
    { name: 'GeeksForGeeks', image: 'assets/club_img/GeeksForGeeks_BV_profile.jpeg' },
    { name: 'Hackerearth', image: 'assets/club_img/HACKEREARTH_profile.jpeg' },
    { name: 'LeanIn BV', image: 'assets/club_img/leanIn_profile.jpeg' },
    { name: 'Team Nayan', image: 'assets/club_img/NAYAN_profile.jpeg' },
    { name: 'Team Wapper', image: 'assets/club_img/TEAM_WAPPERS_profile.jpeg' },
    { name: 'Unstop', image: 'assets/club_img/Unstop_profile.jpeg' },
    // Add more clubs here
  ];

  const [selectedClub, setSelectedClub] = useState(null);

  const handleMoreInfoClick = (club) => {
    setSelectedClub(club);
  };
  const handleBack = () => {
    setSelectedClub(null);
  };

  return (

    <>
      <Topbar />
      {selectedClub ? (
        <ClubLink clubsInfo={selectedClub} onBack={handleBack} />
      ) : (
        <div className="heading-in">Clubs</div>
      )}
      {!selectedClub && (
        <div className="clubs-container">
          {clubs.map((club, index) => (
              <div key={index} className="club-card">
                <div className="club-image">
                  <img className="club-img" src={club.image} alt={club.name} />
                </div>
                <div className="club-name">
                  {club.name}
                  </div>
                <button
                  className="club-btn"
                  onClick={() => handleMoreInfoClick(club)}
                >
                  More Info
                </button>

              </div>


          ))}
        </div>
          )}

        
    </>
    // <div className="clubs-container">
    //   {clubs.map((club, index) => (



    //       <div key={index} className="club-card">
    //         <img className="club-image" src={club.image} alt={club.name} />
    //         <div className="club-name">{club.name}</div>
    //         <button
    //           className="club-btn"
    //           onClick={() => handleMoreInfoClick(club)}
    //         >
    //           More Info
    //         </button>

    //       </div>


    //   ))}
    // </div>
  );
};

export default Clubs;