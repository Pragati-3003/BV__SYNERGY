import React from 'react'
import './link_Dept.css'
import './Departments'
import Topbar from "../../components/topbar/Topbar";


const Deptlink = (props) => {
  // Check if props.location.state is defined
  if (!props.location.state) {
    return <div> Error: Department data not found.</div>;
  }

  const department = props.location.state.department;
  return (

    <>
      <Topbar />
      <div className="main-section">

       
          <div className="main-section">
            <section className="intro">
            <h1 className="outer-title">{department.dept_name}</h1>


            </section>

            <section className="about">

            </section>

            <section className="program-offered">

            </section>

            <section className="faculty">


            </section>

            <section className="research">

            </section>

            <section className="facilities">

            </section>

            <section className="industrial-Partnership">


            </section>

            <section className="Events">

            </section>

            <section className="Alumini">

            </section>

            <section className="contact">


            </section>

          </div>


    


      </div>

    </>

  )
}

export default Deptlink