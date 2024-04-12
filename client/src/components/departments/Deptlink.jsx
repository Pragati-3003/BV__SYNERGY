import React from "react";
import "./link_Dept.css";
import "./Departments";

// import { useHistory } from "react-router-dom";
const Deptlink = ({ department, onBack }) => {

  if (!department) {
    return <div> Error: Department data not found.</div>;
  }
  return (
    <>
      <div className="partition">
        <div className="partition1">
          <section className="nav-bar">
            <div className="dept-link-container">
              <div className="d-item "><a href="#about">About</a></div>
              <div className="d-item  "><a href="#program-offered">Program Offered</a></div>
              <div className="d-item  "><a href="#faculty">Faculty</a></div>
              <div className="d-item  "><a href="#research">Research</a></div>
              <div className="d-item  "><a href="#facilities">Facilities</a></div>
              <div className="d-item  "><a href="#industrial-Partnersip">Industrial-Partnership</a></div>
              <div className="d-item  "><a href="#Events">Events</a></div>
              <div className="d-item  "><a href="#Alumini">Alumini</a></div>
              <div className="d-item  "><a href="#contact">Contact</a></div>
            </div>
          </section>

        </div>

        <div className="partition2">

          <section className="intro">
            <button className="back-btn" onClick={onBack}>Back</button>
            {/* <div className="intro-link-part">
              <div className="intro-part1">
                <h1 className="outer-link-title">{department.dept_name}</h1>
              </div>

              <div className="intro-part2">
                <div className="card-link-information">
                  <p className="card-link-info">{department.subjects}</p>
                </div>
              </div>
            </div> */}

          </section>

          <section className="about" id="about">

            <div className="about1">
              <img src="assets/dept_img/aapaji.jpeg" alt="aapaji" />
            </div>

            <div className="about2">
              <h3 className="about-title">About</h3>
              <div className="about-content">{department.about}</div>            </div>
          </section>


          <section className="program-offered" id="program-offered">
            <h1>Program-Offered</h1>
            <div className="program-offered-content">
              {department.program}
            </div></section>

          <section className="faculty" id="faculty"></section>

          <section className="research" id="research">

            <div className="research-1">
              <h1>Research</h1>
              <div className="research-content">{department.Research}</div>
            </div>
            <div className="research-2">
              <img src={department.image} alt="department-name" />

            </div>


          </section>
          <section className="facilities" id="facilities">
            <h1>Facilities</h1>
            <div className="facilities-content">{department.Facilities}</div>
          </section>


          <section className="Events" id="Events">
            <div className="research-1">
              <h1>Events</h1>
              <div className="research-content">{department.Events}</div>
            </div>
            <div className="research-2">
              <img src={department.image} alt="department-name" />

            </div>

          </section>


          <section className="industrial-Partnership" id="industrial-Partnersip">
            <h1>Industrial-Partnership</h1>
            <div className="facilities-content">{department.Industrial_Partnership}</div>
          </section>

          <section className="Alumini" id="Alumini">
            <div className="mem-title">
              <h1>Alumini</h1>
            </div>
            <div className="member-img">
              <div className="image-section">
                <img src={department.image} alt="MemberImage" className="mem-img" />
                <div className="image-title">abcdefghi</div>
              </div>
              <div className="image-section">
                <img src={department.image} alt="MemberImage" className="mem-img" />
                <div className="image-title">abcdefghi</div>
              </div>
              <div className="image-section">
                <img src={department.image} alt="MemberImage" className="mem-img" />
                <div className="image-title">abcdefghi</div>
              </div>
              <div className="image-section">
                <img src={department.image} alt="MemberImage" className="mem-img" />
                <div className="image-title">abcdefghi</div>
              </div>
              <div className="image-section">
                <img src={department.image} alt="MemberImage" className="mem-img" />
                <div className="image-title">abcdefghi</div>
              </div>
              <div className="image-section">
                <img src={department.image} alt="MemberImage" className="mem-img" />
                <div className="image-title">abcdefghi</div>
              </div>
              

            </div>
          </section>

          <section className="contact" id="contact">
            <div className="contact-content">
              <h1>Contact</h1>
              
                {department.Contact}
             
            </div>
          </section>


        </div>
      </div>





    </>
  );
};

export default Deptlink;
