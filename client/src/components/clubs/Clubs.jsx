
import React, { useState } from 'react';
import './clubs.css';
import Topbar from "../../components/topbar/Topbar";
import ClubLink from "./ClubLink"

const Clubs = () => {
  const clubs = [
    {
      name: 'Team Nayan',
      image: 'assets/club_img/NAYAN_profile.jpeg',
      industry: 'Technology, Information and Internet',
      headquater: 'Jaipur,Rajasthan',
      Founded: '2023',
      intro: (
        <div>
          <p>A university-based community that helps all to wake up to better futures and create excellence.</p>
          <br />
          <p>Herein, we put forward the fairly best and all open community of young minds …which are going to be none other but us. We are here to sort the whole of your inquisitive side, all your queries and most importantly initiating a platform which makes you not only a part but a tech world!!</p>
          <br />
          <p>Information of all competitions, webinars, projects, internships and a source to add on to your knowledge and deepen your roots into technology and today's requirements.</p>
          <br />
          <p>It's an open-source community in which each of us would persevere to become better.</p>
        </div>
      ),
      size: (
        <div>
          <p>11-50 employees</p>

        </div>
      ),
      member: 'abcdefghi',

    },
    {
      name: 'AlgoByte',
      image: 'assets/club_img/AlgoByte.jpeg',
      industry: 'Higher Education',
      size: '2-10 employees',
      headquater: 'Tonk, Rajasthan',
      Founded: '2023',
      intro: (
        <div>
          <p>Official open source club from Department of Computer Science, Apaji Institute, Banasthali Vidyapith, Rajasthan.</p>
          <br />
          <p>Bringing the saga of technophilic nerds!</p>
        </div>
      )
    },
    {
      name: 'Code_chef', image: 'assets/club_img/code_chef_profile.jpeg',
      industry: 'Education Management',
      size: '11-50 employees',
      headquater: 'Jaipur, Rajasthan',
      Founded: '2014',
      intro: (
        <div>
          <p>In today’s rapidly changing environment, programming skills are essential tools that can be utilized and incorporated into various fields and domains. Hence, it becomes essential to equip young minds with such skills.</p>
          <br />
          <p>Being the official coding club of Banasthali Vidyapith, we aim to establish a coding culture in the campus, to reach every student passionate about coding.</p>
        </div>

      )

    },
    {
      name: 'DSC BV', image: 'assets/club_img/DSC_profile.jpeg',
      industry: 'Education Administration Programs',
      size: '1,001-5,000 employee',
      headquater: 'Jaipur, Rajasthan',
      Founded: '2020',
      intro: (
        <div><p>A Google Developers program for university students, with an aim to help students build their development skills.</p>

        </div>)
    },
    {
      name: 'GeeksForGeeks', image: 'assets/club_img/GeeksForGeeks_BV_profile.jpeg',
      industry: 'Education',
      size: '2-10 employees',
      headquater: 'Jaipur, Rajasthan',
      Founded: '2022',
      intro: (
        <div>
          <p>A community that believe in driven efforts. It is a place where developers, designers, machine learning enthusiasts, technical content writers grow their knowledge in a peer-to-peer learning environment!!</p>

        </div>)
    },
    {
      name: 'Hackerearth', image: 'assets/club_img/HACKEREARTH_profile.jpeg',
      industry: 'Software Development',
      size: '2-10 employees',
      headquater: 'Jaipur, Rajasthan',
      Founded: '2023',
      intro: (
        <div>
          <p>Hackerearth Hub of Banasthali Vidyapith is a chapter of Hackerearth opened in our campus. In which we'll be conducting different technical events and coding contests. The main aim of this chapter is to</p>
          <br />
          <p>encourage students towards coding and different technologies of this tech world.</p>
        </div>)
    },
    {
      name: 'LeanIn BV', image: 'assets/club_img/leanIn_profile.jpeg', industry: 'Education Administration Programs',
      size: '2-10 employees',
      headquater: 'New Delhi, Delhi',
      Founded: '2021',
      intro: (
        <div>
          <p>Empowering Women In Technology</p>
        </div>)
    },

    {
      name: 'Team Wapper', image: 'assets/club_img/TEAM_WAPPERS_profile.jpeg',
      industry: 'Education Management',
      size: '11-50 employees',
      headquater: 'Jaipur, Rajasthan',
      Founded: '2014',
      intro: (
        <div>
          <p>In today’s rapidly changing environment, programming skills are essential tools that can be utilized and incorporated into various fields and domains. </p> <br />
          <p>Hence, it becomes essential to equip young minds with such skills.<br />
            Being the official coding club of Banasthali Vidyapith, we aim to establish a coding culture in the campus, to reach every student passionate about coding.</p>
        </div>)
    },
    {
      name: 'Unstop', image: 'assets/club_img/Unstop_profile.jpeg',
      industry: 'Education',
      size: '2-10 employees',
      headquater: 'Jaipur, Rajasthan',
      Founded: '2021',
      intro: (
        <div>
          <p>Unstop Igniters Club is a first-of-its-kind community program that fosters a culture of <br />competitiveness, learning, and growth and aims to create an environment that provides an opportunity for students to showcase their talent and skills.</p>
          <p>Chief Igniter 2021 - Rishika Dixit
          </p><br />
          <p>Chief Igniter 2021 - Rishika Dixit</p><br />
          <p>Lead Igniter 2021 - Khushboo Goyal</p><br />
          <p>Chief Igniter 2022 - Tanvi Saxena</p><br />
          <p>Lead Igniter 2022 - Srishti Sarkhel</p>
        </div>)
    },
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
              <div className="club-name">{club.name} </div>
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