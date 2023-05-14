import React from "react";

function Habilities(props){
    return(
      <div className='information--habilities'>
        <h4>{props.Habilities}</h4>
        <hr className='linea--hr1'/>
        <ul>
          <p>{props.workGroup}</p>
          <p>{props.responsability}</p>
          <p>{props.collaboration}</p>
        </ul>
        <hr className='linea--hr2'/>
      </div>
    );
  }

const myInfoHabilities={
    Habilities:'Habilidades',
    workGroup:'Trabajo en equipo',
    responsability:'Responsabilidad',
    collaboration:'Colaboracion'
  }

function CurriculumHabilities(props){
    return(
        <div>
            <Habilities
            Habilities={props.Habilities}
            workGroup={props.workGroup}
            responsability={props.responsability}
            collaboration={props.collaboration}
            />
        </div>
    );
}
function OfMainHabilities(){
    return(
        <div>
            <CurriculumHabilities
            Habilities={myInfoHabilities.Habilities}
            workGroup={myInfoHabilities.workGroup}
            responsability={myInfoHabilities.responsability}
            collaboration={myInfoHabilities.collaboration}
            />
        </div>
    );
}

export default OfMainHabilities;