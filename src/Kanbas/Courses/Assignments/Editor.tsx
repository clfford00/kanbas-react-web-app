import React from 'react';

export default function AssignmentEditor() {
  return (
    <div id="assignment-editor" className="container mt-5">
      <div className="mb-4">
        <label htmlFor="assignment-name" className="form-label text-secondary">
          <strong>Assignment Name</strong>
        </label>
        <input id="assignment-name" className="form-control" defaultValue="A1" />
      </div>

      <div className="mb-4">
        <label htmlFor="assignment-description" className="form-label">
          <h6 className="mt-2">The assignment is <span className="text-danger">available online.</span></h6>
          <p>Submit a link to the landing page of your Web application hosted on Netlify.</p>
        </label>
        <textarea id="assignment-description" className="form-control" rows={3} />
      </div>

      <div className="mb-4">
        <label htmlFor="points" className="form-label">
          <h6>Points</h6>
        </label>
        <input id="points" className="form-control" type="number" defaultValue={100} />
      </div>

      <div className="mb-4">
        <label htmlFor="assignment-group" className="form-label">
          <h6>Assignment Group</h6>
        </label>
        <select id="assignment-group" className="form-select">
          <option value="assignments">Assignments</option>
          <option value="projects">Projects</option>
          <option value="exams">Exams</option>
          <option value="quizzes">Quizzes</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="display-grade-as" className="form-label">
          <h6>Display Grade as</h6>
        </label>
        <select id="display-grade-as" className="form-select">
          <option value="percentage">Percentage</option>
          <option value="raw-number">Raw Number</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="submission-type" className="form-label">
          <h6>Submission Type</h6>
        </label>
        <select id="submission-type" className="form-select">
          <option value="online">Online</option>
          <option value="in-person">In Person</option>
          <option value="carrier-pigeon">Carrier Pigeon</option>
        </select>
        <div className="mt-3">
          <strong>Online Entry Options</strong>
          <div className="form-check">
            <input type="checkbox" id="text-entry" className="form-check-input" />
            <label htmlFor="text-entry" className="form-check-label">Text Entry</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="website-url" className="form-check-input" />
            <label htmlFor="website-url" className="form-check-label">Website URL</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="file-upload" className="form-check-input" />
            <label htmlFor="file-upload" className="form-check-label">File Uploads</label>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="assign-to" className="form-label">
          <h6>Assign to</h6>
        </label>
        <input id="assign-to" type="text" className="form-control" placeholder="Everyone" />
      </div>

      <div className="row mb-4">
        <div className="col">
          <label htmlFor="due-date" className="form-label"><strong>Due Date</strong></label>
          <input id="due-date" type="date" className="form-control" />
        </div>
        <div className="col">
          <label htmlFor="available-from" className="form-label"><strong>Available from</strong></label>
          <input id="available-from" type="date" className="form-control" />
        </div>
        <div className="col">
          <label htmlFor="available-until" className="form-label"><strong>Until</strong></label>
          <input id="available-until" type="date" className="form-control" />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button id="save-assignment" className="btn btn-primary me-2">Save</button>
        <button id="cancel-assignment" className="btn btn-secondary">Cancel</button>
      </div>
    </div>
  );
}
