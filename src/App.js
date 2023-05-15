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
            <br />
            <img className="imagen--picture" src={miCara} alt=" " />
            <OfMain className="main--letra" />
            <br />
            <br />
            <br />
            <img className="logos--aplicaciones" src={logo} alt=" " />
          </div>
          <div className="col-2" />
          <div className="col-5">
            <div className="row">
              <OfMainAboutMeDes/>
            <br />
            <OfMainTitles />
            <br />
            <OfMainWorkExperience />
            <br />
            <OfMainHabilities />
            <br />
            <OfMainLenguages />
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <div class="login-wrap">
      <div class="login-html">
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Sign In</label>
        <input id="tab-2" type="radio" name="tab" class="for-pwd" /><label for="tab-2" class="tab">Forgot Password</label>
        <div class="login-form">
          <div class="sign-in-htm">
            <div class="group">
            <label for="user" class="label">Username or Email</label>
            <input id="user" type="text" class="input"/>
          </div>
          <div class="group">
            <label for="pass" class="label">Password</label>
            <input id="pass" type="password" class="input" data-type="password" />
          </div>
          <div class="group">
            <input type="submit" class="button" value="Sign In" />
          </div>
          <div class="hr"></div>
        </div>
        <div class="for-pwd-htm">
          <div class="group">
            <label for="user" class="label">Username or Email</label>
            <input id="user" type="text" class="input" />
          </div>
          <div class="group">
            <input type="submit" class="button" value="Reset Password" />
          </div>
          <div class="hr"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;






