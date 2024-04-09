import React from "react";
import "./link_Dept.css";
import "./Departments";
import Chatbot from "../chatBot/Chatbot";
import Cchatbox from "../chatBot/Cchatbox";
// import { useHistory } from "react-router-dom";
const Deptlink = ({ department, onBack }) => {
  
  if (!department) {
    return <div> Error: Department data not found.</div>;
  }
  return (
    <>
      <div className="main-section">
        <div className="main-section">
        
          <section className="intro">
          <button className="back-btn" onClick={onBack}>Back</button>
            <h1 className="outer-title">{department.dept_name}</h1>
          </section>
          <section className="about"></section>

          <section className="program-offered"></section>

          <section className="faculty"></section>

          <section className="research"></section>

          <section className="facilities"></section>

          <section className="industrial-Partnership"></section>

          <section className="Events"></section>

          <section className="Alumini"></section>

          <section className="contact"></section>
         
        </div>
      </div>

    </>
  );
};

export default Deptlink;
