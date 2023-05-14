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
    <div>
      <div className='container--main'>
        <div class='row'>
          <div class="col-4"><img className='imagen--picture' src={miCara} alt=' '></img>
          <OfMain className='main--letra'/>
          </div>
        </div>
      </div>
      <div className='container--secundary'>
        <div class='row'>
          <div class="col-8"><img className='logos--aplicaciones' src={logo} alt=' '></img>
          <OfMainAboutMeDes/>
          <OfMainTitles/>
          <OfMainWorkExperience/>
          <OfMainHabilities/>
          <OfMainLenguages/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;






