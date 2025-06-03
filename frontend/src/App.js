import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CourseCard from './components/CourseCard';
import CourseDetail from './components/CourseDetail';
import Courses from './components/Courses';
import { useParams } from 'react-router-dom';

// Kezdőlap komponens
function Home() {
  return (
    <div className="container">
      <h1>Üdv az oktatási platformon!</h1>
      <p>Válassz egy kurzust vagy böngéssz a menüben.</p>
    </div>
  );
}

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

  return (
    <Router>
      <nav>
        <Link to="/">Főoldal</Link>
        <Link to="/courses">Kurzusok</Link>
        <button 
          onClick={() => setDarkMode(prev => !prev)} 
          style={{
            marginLeft: 'auto',
            backgroundColor: 'transparent',
            border: '1px solid white',
            color: 'white',
            padding: '0.3rem 0.8rem',
            cursor: 'pointer',
            borderRadius: '4px'
          }}
        >
          {darkMode ? 'Világos mód' : 'Sötét mód'}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetailWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
