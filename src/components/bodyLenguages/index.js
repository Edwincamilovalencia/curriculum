import React from "react";

function Languages(props){
    return(
      <div className='information--languages'>
        <h4>{props.languages}</h4>
        <hr className='linea--hr1'/>
        <p>{props.Spanish}</p>
        <p>{props.English}</p>
        <hr className='linea--hr2'/>
      </div>
    );
  }

const myInfoLanguages={
    languages:'Idiomas',
    Spanish:'Ingles : Avanzado',
    English:'Español : Avanzado'
  }

function CurriculumLenguages(props){
    return(
      <div>
        <Languages
          languages={props.languages}
          Spanish={props.Spanish}
          English={props.English}
        />
      </div>
    );
  }
  
function OfMainLenguages(){
    return(
        <div>
            <CurriculumLenguages
            languages={myInfoLanguages.languages}
            Spanish={myInfoLanguages.Spanish}
            English={myInfoLanguages.English}
            />
        </div>
    );
}

export default OfMainLenguages;
  