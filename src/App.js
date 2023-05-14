import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import miCara from './components/imagenes/WhatsApp Image 2023-05-11 at 11.02.55 AM.jpeg';
import OfMain from "./components/body";
import OfMainAboutMeDes from "./components/bodyAboutMeDes";
import logo from './components/imagenes/tecnologias.png';
import OfMainTitles from './components/bodyMyTitles';
import OfMainWorkExperience from './components/bodyWorkExperience';
import OfMainHabilities from './components/bodyHabilities';
import OfMainLenguages from './components/bodyLenguages';



function App() {
  return (
    <div className='fondo--main'>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <img className="imagen--picture" src={miCara} alt=" " />
            <OfMain className="main--letra" />
          </div>
          <div className="col-2"/>
          <div className="col-5">
            <div className="row">
              <OfMainAboutMeDes />
              <img
                  className="logos--aplicaciones"
                  src={logo}
                  alt=" "
                />
              </div>
              <br/>
                <OfMainTitles />
                <br/>
                <OfMainWorkExperience />
                <br/>
                <OfMainHabilities />
                <br/>
                <OfMainLenguages />
              </div>
            </div>
          </div>
      </div>
  );
}
export default App;






