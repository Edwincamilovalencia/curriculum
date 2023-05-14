import React from "react";


function AboutMeDes(props) {
    return (
      <div className='information--aboutMe'>  
        <h4>{props.aboutMe}</h4>
        <hr className='linea--hr1'/>
        <p>{props.text}</p>
         <hr className='linea--hr2'/>
      </div>
    );
  }
const myinfoAboutMe = {
    aboutMe:'Perfil Personal',
    text:'Estudiante de Ingenieria en sistemas y telecomunicaciones de 5º semestre, con conicimientos en  Python, javascript, html, css, reactjs,Bases de datos, entre otros, con disponibilidad de seguir aprendiendo y trabajar'
    }

function CurriculumAboutMeDes(props) {
    return(
        <div>
            <AboutMeDes
            aboutMe={props.aboutMe}
            text={props.text}
            />
        </div>
    );
}

function OfMainAboutMeDes(){
    return(
        <div>
            <CurriculumAboutMeDes
            aboutMe={myinfoAboutMe.aboutMe}
            text={myinfoAboutMe.text}
            />
        </div>
    );
}

export default OfMainAboutMeDes;