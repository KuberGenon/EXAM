import React, { useState } from 'react';
import StudentCard from './StudentCard';
import { students } from '../data/students';

const StudentList = () => {
  const [visibleCount, setVisibleCount] = useState(10);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  const visibleStudents = students.slice(0, visibleCount);
  const totalStudents = students.length;

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5">Student Catalog</h1>
        <p className="text-muted lead">Browse student profiles and view detailed information.</p>
        <p className="text-secondary small">Showing {visibleStudents.length} of {totalStudents} students</p>
      </div>

      <div className="row">
        {visibleStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>

      <div className="text-center mt-5">
        {visibleCount < totalStudents ? (
          <button className="btn btn-primary px-5 py-2" onClick={handleSeeMore}>
            See more
          </button>
        ) : (
          <button className="btn btn-secondary px-5 py-2" disabled>
            No more students
          </button>
        )}
      </div>
    </div>
  );
};

export default StudentList;