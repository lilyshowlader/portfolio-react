import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import ProjectDetails from './components/ProjectDetails';


function App() {
  return (
    <>
    <NavBar/>
    <div className="mobile">
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/resume' element={<Resume />} />
    <Route path='/aboutme' element={<AboutMe />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/projectDetails' element={<ProjectDetails />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
