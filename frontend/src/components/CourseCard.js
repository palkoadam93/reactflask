//import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
  return (
    <div className="card">
      <h3>{course.name}</h3>
      <p>{course.desc}</p>
      <p><em>{course.author}</em></p>
      <Link to={`/course/${course.id}`}>Részletek</Link>
    </div>
  );
}

export default CourseCard;
