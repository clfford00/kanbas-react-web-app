import React from "react";
import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { BsGripVertical } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GiNotebook } from "react-icons/gi";
import { Link } from "react-router-dom";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import LineControlButtons from "./LineControlButtons";
import { deleteAssignment } from "./reducer";
import "./styles.css";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const handleDelete = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to remove this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div id="wd-assignments">
      <AssignmentsControls />

      <ul id="wd-modules" className="list-group rounded-0 pt-5">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2">
            <BsGripVertical className="me-2 fs-3" />
            <IoIosArrowDropdownCircle />
            <span className="ms-2">ASSIGNMENTS</span>
            <AssignmentsControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li
                  className="wd-lesson list-group-item p-3 ps-1 border-green d-flex flex-row justify-content-end align-items-center"
                  key={assignment._id}
                >
                  <div className="me-auto">
                    <div className="d-flex flex-row justify-content-start">
                      <div className="d-flex flex-row align-items-center">
                        <BsGripVertical className="me-2 fs-3 " />
                        <GiNotebook className="text-success me-2" />
                      </div>
                      <div>
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}/Editor`}
                        >
                          <h5 style={{ color: "black" }}>{assignment.title}</h5>
                          <h6 style={{ color: "black" }}>
                            <span className="text-danger">Multiple Modules</span> |{" "}
                            <b>Not available until</b> {assignment.available_date} at{" "}
                            {assignment.available_time} | <b>Due</b> {assignment.due_date} at{" "}
                            {assignment.due_time} | {assignment.score} pts
                          </h6>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <LineControlButtons />
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => handleDelete(assignment._id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
