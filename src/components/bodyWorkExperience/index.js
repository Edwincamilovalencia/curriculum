import React from "react";

function WorkExperience(props){
    return(
      <div className='information--workExperince'>
        <h4>{props.workExperience}</h4>
        <hr className='linea--hr1'/>
        <p>{props.text1}</p>
        <hr className='linea--hr2'/>
      </div>
    );
  }  

const myInfoWorkExperience={
    workExperience:'Experiencia Laboral',
    text1:'Actualmente no hay experiencia laboral'
  }

function CurriculumWorkExperience(props){
    return(
        <div>
        <WorkExperience
        workExperience={props.workExperience}
        text1={props.text1}
        />
        </div>
    );
}

function OfMainWorkExperience(){
    return(
        <div>
            <CurriculumWorkExperience
            workExperience={myInfoWorkExperience.workExperience}
            text1={myInfoWorkExperience.text1}
            />
        </div>
    );
}

export default OfMainWorkExperience;