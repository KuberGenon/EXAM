import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentCard = ({ student }) => {
  const navigate = useNavigate();

  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div className="card h-100 text-center shadow-sm p-3">
        {/* Image Container */}
        <div className="mx-auto mt-3" style={{ width: '100px', height: '100px' }}>
          <img
            src={student.image}
            className="card-img-top rounded-circle"
            alt={student.fullName}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        
        {/* Card Body */}
        <div className="card-body">
          <h5 className="card-title mb-1 fw-bold">{student.fullName}</h5>
          <p className="text-muted small mb-3">{student.group}</p>
          
          <div className="d-flex justify-content-center gap-2 mb-3">
             <span className="badge bg-primary">Year {student.year}</span>
             <span className="badge bg-success">{student.gpa}</span>
          </div>

          <button 
            className="btn btn-primary w-100" 
            onClick={() => navigate(`/student/${student.id}`)}
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;