import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';

import Home from './pages/HomePage';
import Projects from './pages/ProjectPage';
import Resume from './pages/ResumePage';

function App() {
  return (
    <>
      <nav>
        <NavLink to="/" activeClassName="active" exact>Home</NavLink>
        <NavLink to="/projects" activeClassName="active">Projects</NavLink>
        <NavLink to="/resume" activeClassName="active">Resume</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <footer>
        <p>© 2023 Website built by Weston Kostura</p>
      </footer>    </>
  );
}

export default App;