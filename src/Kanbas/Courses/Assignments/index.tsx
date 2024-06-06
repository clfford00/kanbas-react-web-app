import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const assignments = [
  { id: 'A1', title: 'A1: Assignment 1', dueDate: 'Due: 2023-06-01, Points: 10' },
  { id: 'A2', title: 'A2: Assignment 2', dueDate: 'Due: 2023-06-08, Points: 20' },
  // can add more assignments 
];

export default function Assignments() {
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ width: '300px' }}>
          <span className="input-group-text"><FaSearch /></span>
          <input type="text" className="form-control" placeholder="Search for Assignments" />
        </div>
        <div>
          <button className="btn btn-primary me-2">
            <FaPlus className="me-1" /> Group
          </button>
          <button className="btn btn-success">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>
      <ul className="list-group">
        {assignments.map(assignment => (
          <li key={assignment.id} className="list-group-item border-start border-success">
            <Link to={`/Kanbas/Courses/Assignments/${assignment.id}`} className="text-decoration-none">
              <h5 className="text-danger">{assignment.title}</h5>
              <p>{assignment.dueDate}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
