import React from "react";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";

export default function AssignmentsControls() {
  const { cid } = useParams();

  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <div className="input-group" style={{ width: "330px" }}>
        <span className="input-group-text">
          <CiSearch />
        </span>
        <input
          type="text"
          className="form-control me-1"
          placeholder="Search..."
        />
      </div>
      <div>
        <button
          id="wd-add-module-btn"
          className="btn btn-lg btn-danger me-1"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </button>
        <Link to={`/Kanbas/Courses/${cid}/Assignments/New`}>
          <button
            id="wd-add-module-btn"
            className="btn btn-lg btn-light me-1"
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Assignment
          </button>
        </Link>
      </div>
    </div>
  );
}
