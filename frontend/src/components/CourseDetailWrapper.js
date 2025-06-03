// src/components/CourseDetailWrapper.js
import { useParams } from 'react-router-dom';
import CourseDetail from './CourseDetail';

export default function CourseDetailWrapper() {
  const { id } = useParams();
  return <CourseDetail courseId={id} />;
}
