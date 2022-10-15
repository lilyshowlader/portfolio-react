import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// import Contact from './pages/Contact'
// import Resume from './pages/Resume'
// import Projects from './pages/Projects'
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
