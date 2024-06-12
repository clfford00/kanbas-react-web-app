import React from 'react';
import { FaFileImport, FaFileExport } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const gradesData = [
  { name: "Alexander Anadiotis", A1: "1%", A2: "10%", A3: "30%", A4: "13%" },
  { name: "Max MacAvoy", A1: "100%", A2: "100%", A3: "100%", A4: "100%" },
  { name: "Samreen Ansari", A1: "100%", A2: "100%", A3: "100%", A4: "100%" },
  { name: "Han Bao", A1: "100%", A2: "100%", A3: "100%", A4: "100%" },
  { name: "Mahi Sai Srinivas Bobbili", A1: "100%", A2: "100%", A3: "100%", A4: "100%" },
  { name: "Siran Cao", A1: "100%", A2: "100%", A3: "100%", A4: "100%" }
];

export default function Grades() {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-danger" style={{ fontSize: '20px' }}>CS1234 React JS &gt; Grades</h2>
        <div className="d-flex">
          <button className="btn btn-secondary me-2">
            <FaFileImport className="me-1" /> Import
          </button>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              <FaFileExport className="me-1" /> Export
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Export as CSV</a></li>
              <li><a className="dropdown-item" href="#">Export as PDF</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>A1 SETUP</th>
              <th>A2 HTML</th>
              <th>A3 CSS</th>
              <th>A4 BOOTSTRAP</th>
            </tr>
          </thead>
          <tbody>
            {gradesData.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.A1}</td>
                <td>{student.A2}</td>
                <td>
                  <input type="text" className="form-control" defaultValue={student.A3} />
                </td>
                <td>{student.A4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
