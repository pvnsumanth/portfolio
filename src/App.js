
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import C1 from './components/C1';
import { Home} from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
function App() {
  return(
    <div>
      <HashRouter>
        <C1/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
