import GradesControls from "./GradesControls";
import { CiSearch, CiFilter } from "react-icons/ci";
import * as db from "../../Database";
import { useParams } from "react-router";
// import "./styles.css";

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
    <div id="wd-grades">
      <div className="container pt-2">
        <div className="row">
          <div className="col-12">
            <GradesControls />
          </div>
        </div>
        <div className="row">
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
        <div className="row">
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
        <div className="row pt-3">
          <div className="col-2">
            <button className="form-control btn btn-secondary">
              <CiFilter /> Apply Filters
            </button>
          </div>
        </div>
        <div id="wd-grades-table" className="pt-3">
          <table className="table table-striped border">
            <thead className="table-secondary">
              <tr className="bg-primary">
                <th>Student Name</th>
                {assignments.map((assignment) => (
                  <th className="text-center" key={assignment._id}>{assignment.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className="table-row" key={user._id}>
                  <td>
                    <span className="text-danger">
                      {user.firstName} {user.lastName}
                    </span>
                  </td>
                  {grades
                    .filter((grade) => grade.student === user._id)
                    .map((grade) => (
                      <td className="text-center" key={grade._id}>
                        {grade.grade}%
                      </td>
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
