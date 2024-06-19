import React from 'react';
import { CiSearch, CiFilter } from 'react-icons/ci';
import * as db from "../../Database";
import { useParams } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import GradesControls from "./GradesControls";

export default function Grades() {
  const { cid } = useParams();
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === cid);
  const assignments = db.assignments.filter((assignment) => assignment.course === cid);
  const users = db.users.filter((user) =>
    enrollments.find((enrollment) => enrollment.user === user._id)
  );
  const grades = db.grades.filter((grade) =>
    assignments.find((assignment) => assignment._id === grade.assignment)
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-danger" style={{ fontSize: '20px' }}>CS1234 React JS &gt; Grades</h2>
        <div className="d-flex">
          <button className="btn btn-secondary me-2">
            <CiFilter className="me-1" /> Apply Filters
          </button>
        </div>
      </div>
      <GradesControls />
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-student-names">
            <strong>Students</strong>
          </label>
        </div>
        <div className="col">
          <label htmlFor="wd-assignment-names">
            <strong>Assignment Names</strong>
          </label>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <div className="d-flex flex-row">
            <button className="border-0">
              <CiSearch />
            </button>
            <input
              id="wd-grades-student-names"
              className="form-select"
              type="text"
              placeholder="Search Students"
            />
          </div>
        </div>
        <div className="col">
          <div className="d-flex flex-row">
            <button className="border-0">
              <CiSearch />
            </button>
            <input
              id="wd-grades-assignment-names"
              className="form-select"
              type="text"
              placeholder="Search Assignments"
            />
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment) => (
                <th className="text-center" key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.firstName} {user.lastName}</td>
                {assignments.map((assignment) => {
                  const grade = grades.find(
                    (grade) =>
                      grade.student === user._id &&
                      grade.assignment === assignment._id
                  );
                  return (
                    <td className="text-center" key={`${user._id}-${assignment._id}`}>
                      {grade ? `${grade.grade}%` : 'N/A'}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
