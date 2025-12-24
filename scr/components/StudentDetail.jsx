import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { students } from '../data/students';

const StudentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find student by ID (parsed to integer)
  const student = students.find((s) => s.id === parseInt(id));

  if (!student) {
    return <div className="text-center mt-5"><h2>Student not found</h2></div>;
  }

  return (
    <div className="container py-5 d-flex flex-column align-items-center">
      <div className="card shadow-lg p-4" style={{ maxWidth: '600px', width: '100%' }}>
        <div className="text-center">
          <img 
            src={student.image} 
            alt={student.fullName} 
            className="rounded-circle mb-3 border border-4 border-light shadow"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <h2 className="mb-1">{student.fullName}</h2>
          <p className="text-muted fs-5">{student.group}</p>
        </div>
        
        <hr className="my-4" />
        
        <div className="row">
          <div className="col-6 mb-3">
            <h6 className="fw-bold text-uppercase text-secondary" style={{fontSize: '0.8rem'}}>Student ID</h6>
            <p className="fs-5">{student.id}</p>
          </div>
          <div className="col-6 mb-3">
            <h6 className="fw-bold text-uppercase text-secondary" style={{fontSize: '0.8rem'}}>Year of Study</h6>
            <p className="fs-5">{student.year}</p>
          </div>
          <div className="col-6 mb-3">
             <h6 className="fw-bold text-uppercase text-secondary" style={{fontSize: '0.8rem'}}>GPA</h6>
             <span className="badge bg-success fs-6">{student.gpa}</span>
          </div>
          <div className="col-6 mb-3">
             <h6 className="fw-bold text-uppercase text-secondary" style={{fontSize: '0.8rem'}}>Status</h6>
             <span className="text-success fw-bold">Active Student</span>
          </div>
        </div>

        <div className="mt-4">
          <button className="btn btn-outline-primary w-100" onClick={() => navigate('/')}>
            ← Back to Catalog
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;