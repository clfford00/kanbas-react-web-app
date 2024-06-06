import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentEditor() {
  return (
    <div className="container mt-4">
      <h2 className="text-danger mb-4">CS1234 React JS &gt; Assignments &gt; A1</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="assignmentName" className="col-sm-2 col-form-label">Assignment Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="assignmentName" defaultValue="A1" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="assignmentDescription" className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <textarea className="form-control" id="assignmentDescription" rows={6}>
              The assignment is available online


            </textarea>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="points" className="col-sm-2 col-form-label">Points</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="points" defaultValue="100" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="assignmentGroup" className="col-sm-2 col-form-label">Assignment Group</label>
          <div className="col-sm-10">
            <select className="form-control" id="assignmentGroup">
              <option>ASSIGNMENTS</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="displayGradeAs" className="col-sm-2 col-form-label">Display Grade as</label>
          <div className="col-sm-10">
            <select className="form-control" id="displayGradeAs">
              <option>Percentage</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="submissionType" className="col-sm-2 col-form-label">Submission Type</label>
          <div className="col-sm-10">
            <select className="form-control" id="submissionType">
              <option>Online</option>
            </select>
            <div className="mt-2">
              <label className="form-check-label me-3">
                <input className="form-check-input" type="checkbox" defaultChecked /> Text Entry
              </label>
              <label className="form-check-label me-3">
                <input className="form-check-input" type="checkbox" /> Website URL
              </label>
              <label className="form-check-label me-3">
                <input className="form-check-input" type="checkbox" /> Media Recordings
              </label>
              <label className="form-check-label me-3">
                <input className="form-check-input" type="checkbox" /> Student Annotation
              </label>
              <label className="form-check-label me-3">
                <input className="form-check-input" type="checkbox" /> File Uploads
              </label>
            </div>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="assignTo" className="col-sm-2 col-form-label">Assign to</label>
          <div className="col-sm-10">
            <select className="form-control" id="assignTo">
              <option>Everyone</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="dueDate" className="col-sm-2 col-form-label">Due</label>
          <div className="col-sm-10">
            <input type="datetime-local" className="form-control" id="dueDate" defaultValue="2024-05-13T23:59" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="availableFrom" className="col-sm-2 col-form-label">Available from</label>
          <div className="col-sm-10">
            <input type="datetime-local" className="form-control" id="availableFrom" defaultValue="2024-05-06T00:00" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="until" className="col-sm-2 col-form-label">Until</label>
          <div className="col-sm-10">
            <input type="datetime-local" className="form-control" id="until" defaultValue="2024-05-20T00:00" />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-secondary me-2">Cancel</button>
          <button type="submit" className="btn btn-danger">Save</button>
        </div>
      </form>
    </div>
  );
}
