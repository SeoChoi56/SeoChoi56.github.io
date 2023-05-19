import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/Contact'
import Demo from './components/Demo'
import SkillsAndCert from './components/SkillAndCert'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="browserNavContainer">
          <div className="NavBlocks">
            <NavLink>
              Home
            </NavLink>
          </div>
          <div className="NavBlocks">
          <NavLink>
              Demo
            </NavLink>
          </div>
          <div className="NavBlocks">
          <NavLink>
              Skills and Certifications
            </NavLink>
          </div>
          <div className="NavBlocks">
          <NavLink>
              Contact
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/demo" element={<Demo />} />
          <Route exact path="/skills&cert" element={<SkillsAndCert />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit my site 
        </a>
      </header>
    </div>
  );
}

export default App;
