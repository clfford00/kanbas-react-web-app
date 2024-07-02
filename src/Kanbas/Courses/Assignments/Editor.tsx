import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function Editor() {
  const { aid, cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState({
    _id: "",
    title: "",
    description: "",
    points: "",
    due_date: "",
    available_from: "",
    available_until: "",
    course: cid,
  });

  useEffect(() => {
    if (aid) {
      const foundAssignment = assignments.find((assn: any) => assn._id === aid);
      if (foundAssignment) setAssignment(foundAssignment);
    }
  }, [aid, assignments]);

  const handleSave = () => {
    if (aid) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <div className="mb-3">
        <label htmlFor="input1" className="form-label">Assignment Name</label>
        <input
          type="text"
          className="form-control"
          id="input1"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <div
          className="form-control"
          id="wd-description"
          style={{ minHeight: '150px', overflowY: 'auto', whiteSpace: 'pre-wrap' }}
        >
          <textarea
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="points" className="col-sm-4 col-form-label text-end">Points</label>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            id="point"
            value={assignment.points}
            onChange={(e) => setAssignment({ ...assignment, points: e.target.value })}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="due_date" className="col-sm-4 col-form-label text-end">Due Date</label>
        <div className="col-sm-8">
          <input
            type="datetime-local"
            className="form-control"
            id="due_date"
            value={assignment.due_date}
            onChange={(e) => setAssignment({ ...assignment, due_date: e.target.value })}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="available_from" className="col-sm-4 col-form-label text-end">Available From</label>
        <div className="col-sm-8">
          <input
            type="datetime-local"
            className="form-control"
            id="available_from"
            value={assignment.available_from}
            onChange={(e) => setAssignment({ ...assignment, available_from: e.target.value })}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="available_until" className="col-sm-4 col-form-label text-end">Available Until</label>
        <div className="col-sm-8">
          <input
            type="datetime-local"
            className="form-control"
            id="available_until"
            value={assignment.available_until}
            onChange={(e) => setAssignment({ ...assignment, available_until: e.target.value })}
          />
        </div>
      </div>
      <hr />
      <button id="wd-save-btn" className="btn btn-danger me-1 float-end" onClick={handleSave}>Save</button>
      <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
        <button id="wd-cancel-btn" className="btn btn-secondary me-1 float-end">Cancel</button>
      </Link>
    </div>
  );
}
