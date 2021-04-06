import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} </p> 
        <p className="date">{education.graduated}</p></div>
      })
      var skills = this.props.data.skills.map(function(skills){
        return <div className="row">{skills.name}<h3></h3></div>
    

      })
    }

    return (
      <section id="resume">
      <div className="row education">
         <div className=" columns header-col">
            <h1><span>Education</span></h1>
         </div>
         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">
				<div className="">
				   <ul className="skills">
             {skills}
             
    
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
