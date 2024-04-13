import React, { useState } from "react";
import "./departments.css";
// import { useHistory } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import Deptlink from "./Deptlink";

const Departments = () => {
  const departs = [
    {
      dept_name: "Aapaji",
      subjects:
        "In our academic offerings, we provide a range of programs in computer science and related fields. These include Ph.D. in Computer Science, M.Tech. in both Computer Science and Information Technology, MCA, M.Sc. in Computer Science, B.A., B.A. (Hons.) with a 4-year research option, BCA, BCA (Hons.) with a 4-year research option, and B.Tech. programs in both Computer Science and Engineering, as well as Information Technology. For Mathematical Science",
      description:
        "Banasthali Vidyapith Computer Science department, backed by ICICI, boasts modern facilities including lecture theaters, seminar rooms, and advanced laboratories. The recent addition of the Artech - Dalmia I.T. center enhances its offerings with smart classrooms and advanced computing facilities. Offering undergraduate and postgraduate programs, the department is dedicated to shaping future technology leaders.",
      image: "assets/dept_img/aapaji.jpeg",

      intro: "The Faculty of Mathematics and Computing stands as a cornerstone of academic excellence within the institution, with its focus centered on the dynamic field of Computer Science. Housed within the distinguished ICICI Centre for Advanced Studies in Computer Science, the department owes its existence to the generous support of ICICI. This collaboration has facilitated the creation of a state-of-the-art infrastructure equipped to foster advanced learning and research in computer science",
      about: "The ICICI Centre for Advanced Studies in Computer Science is a hub of academic activity, equipped with fully-fledged lecture theaters, seminar rooms, faculty offices, cutting-edge laboratories, and a meticulously curated departmental library. Notably, the laboratories are outfitted with state-of-the-art IT infrastructure, including Silicon Graphics servers and workstations, catering to the diverse needs of both students and researchers. Complementing these resources are a substantial number of stand-alone PCs, facilitating seamless engagement in routine development tasks. Moreover, the institute serves as the cornerstone for campus-wide LAN and internet connectivity, ensuring unf",
      program: (
      <div><p>The department prides itself on offering a diverse array of undergraduate and postgraduate programs tailored to meet the demands of the ever-evolving technological landscape. These programs include:</p>
        <br />
        <p>Bachelor's in Computer Science</p><br />
        <p>Bachelor's in Computer Applications</p><br />
        <p>Bachelor's in Information Technology</p><br />
        <p>Master's in Computer Science</p><br />
        <p>Master's in Computer Applications</p><br />
        <p>Bachelor's in Computer Applications</p><br />
        <p>M.Tech. program,
          All programs are offered at Banasthali Vidyapith, Campus, providing students with a comprehensive educational experience infused with theoretical rigor and practical application.</p>

      </div>
    ),
    faculty:"",
    Research:(
      <div>
        <p>The department focuses on cutting-edge research in computer science, leveraging the advanced facilities and infrastructure provided by the ICICI Centre for Advanced Studies in Computer Science.</p><br/>
        <p>Research areas likely span various domains within computer science, including but not limited to artificial intelligence, machine learning, data science, cybersecurity, computer vision, and software engineering.</p><br/>
        <p> With access to Silicon Graphics servers, workstations, and a substantial repository of software, researchers have the necessary tools to conduct in-depth investigations and experiments.</p><br/>
      </div>
    ),
    Facilities:(
      <div>
        <p>The ICICI Centre for Advanced Studies in Computer Science boasts fully-fledged lecture theaters and seminar rooms, providing ample space for academic activities and discussions</p><br/>
        <p>State-of-the-art laboratories equipped with the latest hardware and software facilitate practical learning and experimentation.</p><br/>
        <p>A meticulously curated departmental library offers access to a wide range of resources, including hardcopy and electronic access to prominent journals and textbooks in the field of computer science.</p><br/>
        <p>The department ensures seamless connectivity through campus-wide LAN and internet connectivity, enhancing access to digital resources for students and researchers alike</p><br/>
      </div>
    ),
    Industrial_Partnership:(
      <div>

        <p>The department enjoys a significant partnership with ICICI, as evidenced by the establishment of the ICICI Centre for Advanced Studies in Computer Science. This collaboration underscores the commitment to advancing education and research in computer science</p><br/>
        <p> The mention of Silicon Graphics servers and workstations implies potential partnerships with industry leaders in technology, which may extend to collaborative research projects, internships, or sponsored initiatives</p><br/>
      </div>
    ),
    Events:(
      <div>
        <p>The department likely hosts various academic events, including workshops, seminars, conferences, and guest lectures, aimed at fostering intellectual discourse and knowledge exchange within the field of computer science.</p><br/>
        <p>These events may feature renowned experts from academia and industry, offering insights into the latest developments and trends in computer science.</p><br/>
        <p>Students and faculty are likely encouraged to participate actively in these events, providing opportunities for networking, learning, and professional development.</p><br/>
      </div>
    ),
    Alumini:"",
    Contact: (
      <div>
        <p>Head of Department, Department of Computer Science, AIM & ACT, Banasthali Vidyapith</p><br/>
        <p>Office : Phone +91 - 1438 - 228647/ 228648  Fax +91-1438- 228649/ 228365</p><br/>
        <p>Dean, Faculty of Mathematics and Computing</p><br/>
        <p>Office: Phone +91 - 1438 - 228647/ 228648  Fax +91-1438- 228649/ 228365</p><br/>
      </div>
    )
    },
  {
    dept_name: "School of Automation ",
    subjects:
        "The academic offerings include B.Tech. programs in Electrical and Electronics, Electronics and Instrumentation, and Mechatronics, providing students with specialized knowledge in these fields. Additionally, the department offers a PhD program focused on Automation, allowing scholars to pursue advanced research in this area. and Electronics,Electronics and Instrumentation,Mechatronics",
    description:
        " The School of Automation at Banasthali University, in collaboration with the Bajaj Group, offers innovative programs. Equipped with cutting-edge facilities and industry partnerships, students engage in hands-on learning and research in areas such as Machine Learning, Robotics, and Industrial Automation, preparing them for successful careers in the field.",
    image: "assets/dept_img/automation.jpeg",
  },
  {
    dept_name: "Wisdom",
    subjects:
        "The institution offers a diverse range of academic programs in Commerce and Management, spanning from doctoral degrees like Ph.D. in Commerce and Banking, and Ph.D. in Management, to Masters programs such as MBA and M.Com. Undergraduate options include B.Com., BBA, and B.A. (Hons.), with research-focused tracks like B.A. (Hons.) with Research available as well. offers B.Com., BBA, MBA programmes of Management Education",
    description:
        "Vision of Faculty of Management Studies (FMS-WISDOM) at Banasthali Vidyapith is to prepare women for enlightened leadership roles in all walks of life. Institutes mission is to contribute towards development of women leadership that would play active role in society-building, entrepreneurship and management of organizations and institutions in consonance with nations spiritual and cultural heritage and its own context.",
    image: "assets/dept_img/wisdom_1.webp",
  },
  {
    dept_name: "Vidhi Mandir",
    subjects:
        "The undergraduate programs at Banasthali Vidyapith include B.A.LL.B., B.B.A.LL.B., and B.Com. LL.B., all of which are five-year integrated courses approved by the Bar Council of India.At the postgraduate level, the Vidyapith offers a one-year LL.M. program aimed at developing legal experts with strong conceptual and research skills. LL.M. specializations include Business Laws and Intellectual Property Laws..A.LL.B., LL.B. (BBA) that is B.B.A.LL.B. and LL.B. (B.Com.) that is B.Com. LL.B. (five year integrated courses) programmes.",
    description:
        "The Jamnalal Bajaj Foundation very kindly consented to give a onetime philanthropic grant to partially meet the expenses of the Law School Building, named as Jamnalal Bajaj School of Legal Studies. The vision of legal education is to provide justice oriented education essential to the realization of values enshrined in the Constitution of India.",
    image: "assets/dept_img/vidhi.jpeg",
  },
  {
    dept_name: "Department of Pharmacy",
    subjects:
        " The academic offerings in pharmacy at Banasthali Vidyapith include a Ph.D. program, along with Master of Pharmacy  degrees in Pharmaceutical Chemistry, Pharmaceutics, and Pharmacology. Additionally, the institute offers a Bachelor of Pharmacy (B.Pharm.) degree..D. (Pharmacy) of Pharmacy (M.Pharm. - Pharmaceutical Chemistry),Master of Pharmacy (M.Pharm. - Pharmaceutics),Master of Pharmacy (M.Pharm. - Pharmacology) ,Bachelor of Pharmacy",
    description:
        "Department has undying passion for research and most of the faculty members are engaged in research activities which includes synthesis, identification and optimization of lead compounds, development of biological assay methods and formulation development of drugs for better pharmacokinetics and dynamics. Drug Discovery Research Lab of the Department is an over busy facility equipped with ultra modern software like Discovery Studio, TSAR, SYSTAT, Chemdraw Ultra and modern equipments for pharmacological evaluation.",
    image: "assets/dept_img/pharmacy.jpeg",
  },
  {
    dept_name: " Architecture & Planning",
    subjects: "B. Arch (Bachelor of Architecture)",
    description:
        "The School of Architecture & Planning at Banasthali Vidyapith offers a 5-year degree program approved by the Council of Architecture, New Delhi. With modern infrastructure and a focus on sustainability, students develop innovative design solutions. The program emphasizes studio-based learning, leadership development, and research activities to prepare students for contemporary architectural practices.",
    image: "assets/dept_img/architecture.jpg",
  },
  ];
const [selectedDepartment, setSelectedDepartment] = useState(null);

const handleMoreInfoClick = (dept) => {
  setSelectedDepartment(dept);
};
const handleBack = () => {
  setSelectedDepartment(null);
};
return (
  <>
    <Topbar />
    {selectedDepartment ? (
      <Deptlink department={selectedDepartment} onBack={handleBack} />
    ) : (
      <div className="heading-in">Departments</div>
    )}
    {!selectedDepartment && (
      <div className="dept-container">
        {departs.map((dept, index) => (
          <div key={index} className="main-card">
            <div className="card-outer-title">
              <h1 className="outer-title">{dept.dept_name}</h1>
            </div>
            <div className="card">
              <img
                className="card-img"
                src={dept.image}
                alt={dept.dept_name}
              />
              <div className="card-body">
                <h1 className="card-title">{dept.dept_name}</h1>
                <div className="card-information">
                  <p className="card-info">{dept.subjects}</p>
                </div>
                <button
                  className="card-btn"
                  onClick={() => handleMoreInfoClick(dept)}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </>
);
};

export default Departments;
