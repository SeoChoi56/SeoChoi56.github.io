import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Contact from './components/Contact';
import Demo from './components/Demo';
import SkillsAndCert from './components/SkillAndCert';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div id="browserNavContainer">
            <div className="NavBlocks">
              <NavLink to="/" style={({ isActive }) => 
                ({ color: isActive ? 'greenyellow' : 'white' })}>
                  Home
              </NavLink>
            </div>
            <div className="NavBlocks">
              <NavLink to="/demo" style={({ isActive }) => 
                ({ color: isActive ? 'greenyellow' : 'white' })}>
                  Demo
              </NavLink>
            </div>
            <div className="NavBlocks">
              <NavLink to="/skills&cert" style={({ isActive }) => 
                ({ color: isActive ? 'greenyellow' : 'white' })}>
                  Skills and Certifications
              </NavLink>
            </div>
            <div className="NavBlocks">
              <NavLink to="/contact" style={({ isActive }) => 
                ({ color: isActive ? 'greenyellow' : 'white' })}>
                  Contact
              </NavLink>
            </div>
          </div>
          <Routes>
            <Route exact path="/demo" element={<Demo />} />
            <Route exact path="/skills&cert" element={<SkillsAndCert />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
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
    </BrowserRouter>
  );
}

export default App;