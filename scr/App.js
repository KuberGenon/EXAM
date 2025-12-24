import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentDetail from './components/StudentDetail';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <Router>
      <div className="min-vh-100 bg-light">
        {/* Navigation Bar */}
        <nav className="navbar navbar-light bg-white shadow-sm mb-4">
          <div className="container">
            <Link className="navbar-brand fw-bold" to="/">
              E C Student Catalog
            </Link>
            <span className="navbar-text">Home</span>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/student/:id" element={<StudentDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;