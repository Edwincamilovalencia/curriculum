import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import miCara from './components/imagenes/WhatsApp Image 2023-05-11 at 11.02.58 AM.jpeg'
import logos from './components/imagenes/tecnologias.png'

function PersonalInfo(props) {
  return (
    <div className='information--personal'>
      <img className='imagen--picture' src={miCara} alt=' '></img>
      <h3>{props.name}</h3>
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
      <hr className='linea--hr1'/>
      <p>{props.text}</p>
      <img className='logos--aplicaciones'
       src={logos} alt=' '
       />
       <hr className='linea--hr2'/>
    </div>
  );
}
function Titles(props){
  return(
    <div className='information--degrees'>
      <h4>{props.titles}</h4>
      <hr className='linea--hr1'/>
      <ul>
        <li><p>{props.degree1}</p></li>
        <li><p>{props.school1}</p></li>  
        <li><p>{props.degree2}</p></li>   
        <li><p>{props.school2}</p></li>   
        <li><p>{props.date}</p></li>   
      </ul>
      <hr className='linea--hr2'/>
    </div>
  );
}
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
const myInfo = {
  name: 'Edwin Camilo Valencia Bustamante',
  email: 'edcamilo2016@gmail.com',
  phone: '+57 313-5606-342',
  address: 'Manizalez-Caldas-Colombia'
};
const myinfoAboutMe = {
  aboutMe:'Perfil Personal',
  text:'Estudiante de Ingenieria en sistemas y telecomunicaciones de 5º semestre, con conicimientos en  Python, javascript, html, css, reactjs,Bases de datos, entre otros, con disponibilidad de seguir aprendiendo y trabajar'
  }
const myTitles =
  {
  titles:'Titulos',
  degree1: 'Bachiller academico',
  degree2: 'Tecnico en instalaciones electricas residenciales',
  school1: 'Instituto Tecnico Francisco Jose de Caldas',
  school2: 'SENA',
  date: '07-12-2019'
}
const myInfoHabilities={
  Habilities:'Habilidades',
  workGroup:'Trabajo en equipo',
  responsability:'Responsabilidad',
  collaboration:'Colaboracion'
}
const myInfoLanguages={
  languages:'Idiomas',
  Spanish:'Ingles : Avanzado',
  English:'Español : Avanzado'
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
      <Titles
        titles={props.titles}
        degree1={props.degree1}
        school1={props.school1}
        degree2={props.degree2}
        school2={props.school2}
        date={props.date}
      />
      <Habilities
        Habilities={props.Habilities}
        workGroup={props.workGroup}
        responsability={props.responsability}
        collaboration={props.collaboration}
      />
      <Languages
        languages={props.languages}
        Spanish={props.Spanish}
        English={props.English}
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
        titles={myTitles.titles}
        degree1={myTitles.degree1}
        school1={myTitles.school1}
        degree2={myTitles.degree2}
        school2={myTitles.school2}
        date={myTitles.date}
        Habilities={myInfoHabilities.Habilities}
        workGroup={myInfoHabilities.workGroup}
        responsability={myInfoHabilities.responsability}
        collaboration={myInfoHabilities.collaboration}
        languages={myInfoLanguages.languages}
        Spanish={myInfoLanguages.Spanish}
        English={myInfoLanguages.English}
      />
    </div>
  );
}
export default App;





