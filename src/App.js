
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './img/spotify-logo.svg';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

function Naavbar(){
  return(
    <nav className="nav">
<dv className="container">
  <div className="left">
    <img className="splogo" src={logo} alt="spotfylogo"/>

  </div>
    <ul className="menu">
      <li><a href="https://github.com/MajidSawadi/week4.1">Premum</a></li>
      <li><a href="https://github.com/MajidSawadi/week4.1">Premum</a></li>
      <span>|</span>
      <li><a href="https://github.com/MajidSawadi/week4.1">Login </a></li>
      <li><a href="https://github.com/MajidSawadi/week4.1">sign up</a></li>

    </ul>
</dv>
</nav>
  );
}
function JambuTron(){
  return( 
    
    <section className="section">
    <div className="Jampo">
    <Jumbotron>
    <h1>Music for everyone</h1>
    <h4>Millions of songs. No Credit Card Needed </h4>
    <p>
      <Button variant="primary">Get Spotify free</Button>
    </p>
  </Jumbotron>
  </div>
  </section>

   
  );
}
function Footerw(){
  return(

    <footer>
    <div class="container">
      <div class="column
       footer-logo">
        <i class="fab fa-spotify"></i>
        <h1>Spotify</h1>
      </div>
      <div class="column">
        <h1>Company</h1>
        <p>About</p>
        <p>Jobs</p>
        <p>For the Record</p>
      </div>
      <div class="column">
        <h1>Communities</h1>
        <p>For Artists</p>
        <p>Developers</p>
        <p>Brands</p>
        <p>Investors</p>
        <p>Vendors</p>
      </div>
      <div class="column">
        <h1>Useful Links</h1>
        <p>Help</p>
        <p>Web Player</p>
        <p>Free Mobile App</p>
      </div>
      <div class="column footer-icons">
        <i class="fab fa-instagram"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter"></i>
      </div>
    </div>
  </footer>
 
  );
}
function App() {
  return (
   
    <div className="App">
      <JambuTron/>
    <Naavbar/>
    <Footerw/>
    </div>
    
  );
}

export default App;
