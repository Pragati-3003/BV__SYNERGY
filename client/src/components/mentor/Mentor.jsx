import React from "react";
import "./mentor.css";
import Topbar from "../../components/topbar/Topbar";
import { Link } from "react-router-dom";

const Mentor = () => {
  return (
    <>
      <Topbar />
      <section className="main-section">
        <div className="main-container">
          <div className="heading">
            <div className="heading-in">Mentors And Alumini</div>
          </div>

          <div className="dept-main-card">
            <div className="department-cards">
              <div class="card__container">
                <article class="card__article">
                  <img
                    src="assets/mentor_img/avni.jpeg"
                    alt="image"
                    class="card__img"
                  >
                    {/* {" "} */}
                  </img>
                  <div class="card__data">
                    <span class="card__description">Squadron Leader </span>
                    <h2 class="card__title">Avani Chaturvedi</h2>
                    <Link to={"/profile/avani"} className="card__button">
                      {" "}
                      Avani Completed her Bachelors in Technology from
                      Banasthali University, Rajasthan in 2014 where she joined
                      the college's flying club which fascinated her to fly. She
                      passed the AFCAT and further was recommended by AFSB.
                    </Link>
                  </div>
                  <div className="cd-hd">
                    <h2 class="card__title-1">Avani Chaturvedi</h2>
                  </div>
                </article>

                <article class="card__article">
                  <img
                    src="assets/mentor_img/kamla.jpeg"
                    alt="image"
                    class="card__img"
                  ></img>

                  <div class="card__data">
                    <span class="card__description">Indian politician</span>
                    <h2 class="card__title">Kamla Beniwal</h2>
                    <a href="#" class="card__button">
                      Kamla Beniwal (born 12 January 1927) is an Indian
                      politician. She was a senior member of Indian National
                      Congress party. She served as a minister on different
                      posts and Deputy Chief Minister of Rajasthan in 2003.Later
                      she served as Governor of different Indian states between
                      2009 and 2014. She became the first woman minister in
                      Rajasthan in 1954 at the age of 27.
                    </a>
                  </div>

                  <div className="cd-hd">
                    <h2 class="card__title-1"> Kamla Beniwal</h2>
                  </div>
                </article>

                <article class="card__article">
                  <img
                    src="assets/mentor_img/meira.jpeg"
                    alt="image"
                    class="card__img"
                  ></img>

                  <div class="card__data">
                    <span class="card__description">
                      Former Speaker of the Lok Sabha
                    </span>
                    <h2 class="card__title">Meira Kumar</h2>
                    <a href="#" class="card__button">
                      Meira Kumar was born on 31 March 1945, in Bhojpur
                      district, Bihar.She studied at Banasthali Vidyapith for a
                      short duration. She completed her Master's degree and
                      Bachelors of Law from Indraprastha College and the Faculty
                      of Law, University of Delhi respectively. She also
                      received an honorary doctorate from Banasthali Vidyapith
                      in 2010.
                    </a>
                  </div>

                  <div className="cd-hd">
                    <h2 class="card__title-1">Meira Kumar</h2>
                  </div>
                </article>

                <article class="card__article">
                  <img
                    src="assets/mentor_img/sunita.jpeg"
                    alt="image"
                    class="card__img"
                  ></img>

                  <div class="card__data">
                    <span class="card__description">
                      Former Indian marathon runner
                    </span>
                    <h2 class="card__title">Sunita Godara </h2>
                    <a href="#" class="card__button">
                      Sunita Godara is a former Indian marathon runner from
                      Nausana. She competed in 1985 Boston Marathon & 1990-1991
                      London Marathon. She finished her College from Banasthali
                      Vidyapith.
                    </a>
                  </div>

                  <div className="cd-hd">
                    <h2 class="card__title-1">Sunita Godara</h2>
                  </div>
                </article>

                <article class="card__article">
                  <img
                    src="assets/mentor_img/avni.jpeg"
                    alt="image"
                    class="card__img"
                  ></img>
                  <div class="card__data">
                    <span class="card__description">Squadron Leader </span>
                    <h2 class="card__title">Avani Chaturvedi</h2>
                    <a href="#" class="card__button">
                      {" "}
                      Avani Completed her Bachelors in Technology from
                      Banasthali University, Rajasthan in 2014 where she joined
                      the college's flying club which fascinated her to fly. She
                      passed the AFCAT and further was recommended by AFSB.
                    </a>
                  </div>
                  <div className="cd-hd">
                    <h2 class="card__title-1">Avani Chaturvedi</h2>
                  </div>
                </article>

                <article class="card__article">
                  <img
                    src="assets/mentor_img/kamla.jpeg"
                    alt="image"
                    class="card__img"
                  ></img>

                  <div class="card__data">
                    <span class="card__description">Indian politician</span>
                    <h2 class="card__title">Kamla Beniwal</h2>
                    <a href="#" class="card__button">
                      Kamla Beniwal (born 12 January 1927) is an Indian
                      politician. She was a senior member of Indian National
                      Congress party. She served as a minister on different
                      posts and Deputy Chief Minister of Rajasthan in 2003.Later
                      she served as Governor of different Indian states between
                      2009 and 2014. She became the first woman minister in
                      Rajasthan in 1954 at the age of 27.
                    </a>
                  </div>

                  <div className="cd-hd">
                    <h2 class="card__title-1"> Kamla Beniwal</h2>
                  </div>
                </article>

                <article class="card__article">
                  <img
                    src="assets/mentor_img/meira.jpeg"
                    alt="image"
                    class="card__img"
                  ></img>

                  <div class="card__data">
                    <span class="card__description">
                      Former Speaker of the Lok Sabha
                    </span>
                    <h2 class="card__title">Meira Kumar</h2>
                    <a href="#" class="card__button">
                      Meira Kumar was born on 31 March 1945, in Bhojpur
                      district, Bihar.She studied at Banasthali Vidyapith for a
                      short duration. She completed her Master's degree and
                      Bachelors of Law from Indraprastha College and the Faculty
                      of Law, University of Delhi respectively. She also
                      received an honorary doctorate from Banasthali Vidyapith
                      in 2010.
                    </a>
                  </div>

                  <div className="cd-hd">
                    <h2 class="card__title-1">Meira Kumar</h2>
                  </div>
                </article>

                <article class="card__article">
                  <img
                    src="assets/mentor_img/sunita.jpeg"
                    alt="image"
                    class="card__img"
                  ></img>

                  <div class="card__data">
                    <span class="card__description">
                      Former Indian marathon runner
                    </span>
                    <h2 class="card__title">Sunita Godara </h2>
                    <a href="#" class="card__button">
                      Sunita Godara is a former Indian marathon runner from
                      Nausana. She competed in 1985 Boston Marathon & 1990-1991
                      London Marathon. She finished her College from Banasthali
                      Vidyapith.
                    </a>
                  </div>

                  <div className="cd-hd">
                    <h2 class="card__title-1">Sunita Godara</h2>
                  </div>
                </article>

                <article class="card__article">
                  <img
                    src="assets/mentor_img/avni.jpeg"
                    alt="image"
                    class="card__img"
                  ></img>
                  <div class="card__data">
                    <span class="card__description">Squadron Leader </span>
                    <h2 class="card__title">Avani Chaturvedi</h2>
                    <a href="#" class="card__button">
                      {" "}
                      Avani Completed her Bachelors in Technology from
                      Banasthali University, Rajasthan in 2014 where she joined
                      the college's flying club which fascinated her to fly. She
                      passed the AFCAT and further was recommended by AFSB.
                    </a>
                  </div>
                  <div className="cd-hd">
                    <h2 class="card__title-1">Avani Chaturvedi</h2>
                  </div>
                </article>

                <article class="card__article">
                  <img
                    src="assets/mentor_img/kamla.jpeg"
                    alt="image"
                    class="card__img"
                  ></img>

                  <div class="card__data">
                    <span class="card__description">Indian politician</span>
                    <h2 class="card__title">Kamla Beniwal</h2>
                    <a href="#" class="card__button">
                      Kamla Beniwal (born 12 January 1927) is an Indian
                      politician. She was a senior member of Indian National
                      Congress party. She served as a minister on different
                      posts and Deputy Chief Minister of Rajasthan in 2003.Later
                      she served as Governor of different Indian states between
                      2009 and 2014. She became the first woman minister in
                      Rajasthan in 1954 at the age of 27.
                    </a>
                  </div>

                  <div className="cd-hd">
                    <h2 class="card__title-1"> Kamla Beniwal</h2>
                  </div>
                </article>

                <article class="card__article">
                  <img
                    src="assets/mentor_img/meira.jpeg"
                    alt="image"
                    class="card__img"
                  ></img>

                  <div class="card__data">
                    <span class="card__description">
                      Former Speaker of the Lok Sabha
                    </span>
                    <h2 class="card__title">Meira Kumar</h2>
                    <a href="#" class="card__button">
                      Meira Kumar was born on 31 March 1945, in Bhojpur
                      district, Bihar.She studied at Banasthali Vidyapith for a
                      short duration. She completed her Master's degree and
                      Bachelors of Law from Indraprastha College and the Faculty
                      of Law, University of Delhi respectively. She also
                      received an honorary doctorate from Banasthali Vidyapith
                      in 2010.
                    </a>
                  </div>

                  <div className="cd-hd">
                    <h2 class="card__title-1">Meira Kumar</h2>
                  </div>
                </article>

                <article class="card__article">
                  <img
                    src="assets/mentor_img/sunita.jpeg"
                    alt="image"
                    class="card__img"
                  ></img>

                  <div class="card__data">
                    <span class="card__description">
                      Former Indian marathon runner
                    </span>
                    <h2 class="card__title">Sunita Godara </h2>
                    <a href="#" class="card__button">
                      Sunita Godara is a former Indian marathon runner from
                      Nausana. She competed in 1985 Boston Marathon & 1990-1991
                      London Marathon. She finished her College from Banasthali
                      Vidyapith.
                    </a>
                  </div>

                  <div className="cd-hd">
                    <h2 class="card__title-1">Sunita Godara</h2>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mentor;
