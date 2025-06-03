import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useDarkMode from './hooks/useDarkMode';

import Home from './components/Home';
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetailWrapper from './components/CourseDetailWrapper';

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <Router>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetailWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
