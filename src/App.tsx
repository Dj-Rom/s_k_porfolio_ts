import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import styles from './App.module.scss';
import Navi from './components/Navi';
import Resume from './pages/Resume';

const App: React.FC = () => {
  return (
    <HashRouter>
      <nav className={styles.nav}>
        <Navi />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
