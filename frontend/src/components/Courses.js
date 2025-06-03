import /*React,*/ { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data)); // backend válasz elmentése
  }, []);

  return (
    <div className="container">
      <div className="card-grid">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
