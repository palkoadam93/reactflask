import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/course/${id}`)
      .then(res => res.json())
      .then(data => setCourse(data));
  }, [id]);

  if (!course) return <p>Töltés...</p>;
  if (course.error) return <p>{course.error}</p>;

  return (
    <div>
      <h2>{course.name}</h2>
      <p>{course.desc}</p>
      <p><strong>Szerző:</strong> {course.author}</p>
    </div>
  );
}

export default CourseDetail;
