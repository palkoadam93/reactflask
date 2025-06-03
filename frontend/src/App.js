import /*React,*/ { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// importok a COMPONENTS mappából!
import Home from './components/Home';
import Header from './components/Header';
//import CourseCard from './components/CourseCard';
import CourseDetail from './components/CourseDetail';
import Courses from './components/Courses';

import { useParams } from 'react-router-dom';



// CourseDetail route paraméter kezelés
function CourseDetailWrapper() {
  const { id } = useParams();
  return <CourseDetail courseId={id} />;
}

// App komponens sötét mód kapcsolóval
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

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
