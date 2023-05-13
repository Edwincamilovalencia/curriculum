import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function PersonalInfo(props) {
  return (
    <div className='information--personal'>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>{props.address}</p>
    </div>
  );
}

function AboutMeDes(props) {
  return (
    <div className='information--aboutMe'>  
      <h4>{props.aboutMe}</h4>
      <p>{props.text}</p>
    </div>
  );
}

const myInfo = {
  name: 'Edwin Camilo Valencia Bustamante',
  email: 'edcamilo2016@gamil.com',
  phone: '+57 313-5606-342',
  address: 'Manizalez-Caldas-Colombia'
};

const myinfoAboutMe = {
  aboutMe:'Perfil Personal',
  text:'Estudiante de Ingenieria en sistemas y telecomunicaciones de 5º semestre, con conicimientos en  Python, javascript, html, css, reactjs,Bases de datos, entre otros, con disponibilidad de seguir aprendiendo y trabajar'
  }



function Curriculum(props) {
  return(
    <div>
      <PersonalInfo
        name={props.name}
        email={props.email}
        phone={props.phone}
        address={props.address}
      />
      <AboutMeDes
        aboutMe={props.aboutMe}
        text={props.text}
      />

    </div>
  );
}

function App() {
  return (
    <div>
      <Curriculum
        name={myInfo.name}
        email={myInfo.email}
        phone={myInfo.phone}
        address={myInfo.address}
        aboutMe={myinfoAboutMe.aboutMe}
        text={myinfoAboutMe.text}
      />
    </div>
  );
}

export default App;





