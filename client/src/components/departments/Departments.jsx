import React from 'react'
import './departments.css'
import { Link } from 'react-router-dom';
import Topbar from "../../components/topbar/Topbar";
import Dept_link from './Deptlink';
const Departments = () => {

   const departs = [
      {
        dept_name: 'Aapaji',
        subjects: 'In our academic offerings, we provide a range of programs in computer science and related fields. These include Ph.D. in Computer Science, M.Tech. in both Computer Science and Information Technology, MCA, M.Sc. in Computer Science, B.A., B.A. (Hons.) with a 4-year research option, BCA, BCA (Hons.) with a 4-year research option, and B.Tech. programs in both Computer Science and Engineering, as well as Information Technology. For Mathematical Science',
        description: 'Banasthali Vidyapith Computer Science department, backed by ICICI, boasts modern facilities including lecture theaters, seminar rooms, and advanced laboratories. The recent addition of the Artech - Dalmia I.T. center enhances its offerings with smart classrooms and advanced computing facilities. Offering undergraduate and postgraduate programs, the department is dedicated to shaping future technology leaders.',
        image:"assets/dept_img/aapaji.jpeg"
      },
      {
          dept_name: 'School of Automation ',
          subjects: 'The academic offerings include B.Tech. programs in Electrical and Electronics, Electronics and Instrumentation, and Mechatronics, providing students with specialized knowledge in these fields. Additionally, the department offers a PhD program focused on Automation, allowing scholars to pursue advanced research in this area. and Electronics,Electronics and Instrumentation,Mechatronics',
          description: ' The School of Automation at Banasthali University, in collaboration with the Bajaj Group, offers innovative programs. Equipped with cutting-edge facilities and industry partnerships, students engage in hands-on learning and research in areas such as Machine Learning, Robotics, and Industrial Automation, preparing them for successful careers in the field.',
          image:"assets/dept_img/automation.jpeg"
        },
        {
          dept_name: 'Wisdom',
          subjects: 'The institution offers a diverse range of academic programs in Commerce and Management, spanning from doctoral degrees like Ph.D. in Commerce and Banking, and Ph.D. in Management, to Masters programs such as MBA and M.Com. Undergraduate options include B.Com., BBA, and B.A. (Hons.), with research-focused tracks like B.A. (Hons.) with Research available as well. offers B.Com., BBA, MBA programmes of Management Education',
          description: 'Vision of Faculty of Management Studies (FMS-WISDOM) at Banasthali Vidyapith is to prepare women for enlightened leadership roles in all walks of life. Institutes mission is to contribute towards development of women leadership that would play active role in society-building, entrepreneurship and management of organizations and institutions in consonance with nations spiritual and cultural heritage and its own context.',
          image:"assets/dept_img/wisdom_1.webp"
        },
        {
          dept_name: 'Vidhi Mandir',
          subjects: 'The undergraduate programs at Banasthali Vidyapith include B.A.LL.B., B.B.A.LL.B., and B.Com. LL.B., all of which are five-year integrated courses approved by the Bar Council of India.At the postgraduate level, the Vidyapith offers a one-year LL.M. program aimed at developing legal experts with strong conceptual and research skills. LL.M. specializations include Business Laws and Intellectual Property Laws..A.LL.B., LL.B. (BBA) that is B.B.A.LL.B. and LL.B. (B.Com.) that is B.Com. LL.B. (five year integrated courses) programmes.',
          description: 'The Jamnalal Bajaj Foundation very kindly consented to give a onetime philanthropic grant to partially meet the expenses of the Law School Building, named as Jamnalal Bajaj School of Legal Studies. The vision of legal education is to provide justice oriented education essential to the realization of values enshrined in the Constitution of India.',
          image:"assets/dept_img/vidhi.jpeg"
        },
        {
          dept_name: 'Department of Pharmacy',
          subjects: ' The academic offerings in pharmacy at Banasthali Vidyapith include a Ph.D. program, along with Master of Pharmacy  degrees in Pharmaceutical Chemistry, Pharmaceutics, and Pharmacology. Additionally, the institute offers a Bachelor of Pharmacy (B.Pharm.) degree..D. (Pharmacy) of Pharmacy (M.Pharm. - Pharmaceutical Chemistry),Master of Pharmacy (M.Pharm. - Pharmaceutics),Master of Pharmacy (M.Pharm. - Pharmacology) ,Bachelor of Pharmacy',
          description: 'Department has undying passion for research and most of the faculty members are engaged in research activities which includes synthesis, identification and optimization of lead compounds, development of biological assay methods and formulation development of drugs for better pharmacokinetics and dynamics. Drug Discovery Research Lab of the Department is an over busy facility equipped with ultra modern software like Discovery Studio, TSAR, SYSTAT, Chemdraw Ultra and modern equipments for pharmacological evaluation.',
          image:"assets/dept_img/pharmacy.jpeg"
        },
        {
          dept_name: ' Architecture & Planning',
          subjects: 'B. Arch (Bachelor of Architecture)',
          description: 'The School of Architecture & Planning at Banasthali Vidyapith offers a 5-year degree program approved by the Council of Architecture, New Delhi. With modern infrastructure and a focus on sustainability, students develop innovative design solutions. The program emphasizes studio-based learning, leadership development, and research activities to prepare students for contemporary architectural practices.',
          image:"assets/dept_img/architecture.jpg"
        }  
     
    ];

  return (
    <> 
    <Topbar />
    <div className="heading-in">Departments</div>
    <div className="dept-container">
      {departs.map((departs,index)=>(
        <div  key={index} className="main-card">
             <div className="card-outer-title">
            <h1 className="outer-title">{departs.dept_name}</h1>
              </div> 
           <div className="card">              
            <img className="card-img" src={departs.image} alt={departs.dept_name} />
         
            
            <div className="card-body">
               <h1 className="card-title">{departs.dept_name}</h1>
               {/* <p className="card-sub-title">{departs.subjects}</p> */}
               <div className="card-information">
             <p className="card-info">{departs.subjects}</p>
               </div>               
              <button className="card-btn"><Link to ="/link_Depts">More Info</Link> </button>        
            </div> 
          </div>

        </div>
           
          
           

      ))}
    </div>
 
    </>
   
   
    
  )
}

export default Departments