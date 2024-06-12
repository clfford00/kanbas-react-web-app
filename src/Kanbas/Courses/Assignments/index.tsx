import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import LineControlButtons from "./LineControlButtons"
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BsGripVertical } from "react-icons/bs";
import "./styles.css"
export default function Assignments() {
    return (
    <div id="wd-assignments">
      <AssignmentsControls/>
      <ul id="wd-modules" className="list-group rounded-0 pt-5">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2">
            <BsGripVertical className="me-2 fs-3"/>
            <IoIosArrowDropdownCircle />
            <span className="ms-2">ASSIGNMENTS</span>
            <AssignmentsControlButtons/>
          </div>
          <ul className="wd-lessons list-group rounded-0">

            <li className="wd-lesson list-group-item p-3 ps-1 border-green d-flex flex-row justify-content-end align-items-center">
              <div className="me-auto">
                <div className="d-flex flex-row justify-content-start">
                  <div className="d-flex flex-row align-items-center">
                    <BsGripVertical className="me-2 fs-3 "/>
                  </div>
                  <div>
                    <h5><b><a className="link" href="#/Kanbas/Courses/1234/Assignments/123">A1</a></b></h5>
                    <h6> <span className="text-danger">Multiple Modules</span> |  <b>Not available until</b> May 6 at 12:00  |
                    <b> Due</b> December 24 at 11:59PM  |  100 pts</h6>
                  </div>
                </div>
              </div>
              <div>
                <LineControlButtons/>
              </div>
            </li>


            <li className="wd-lesson list-group-item p-3 ps-1 border-green d-flex flex-row justify-content-end align-items-center">
              <div className="me-auto">
                <div className="d-flex flex-row justify-content-start">
                  <div className="d-flex flex-row align-items-center">
                    <BsGripVertical className="me-2 fs-3 "/>
                  </div>
                  <div>
                    <h5><b><a className="link" href="#/Kanbas/Courses/1234/Assignments/123">A2</a></b></h5>
                    <h6> <span className="text-danger">Multiple Modules</span> |  <b>Not available until</b> May 13 at 12:00  |
                    <b> Due</b>December 25 at 11:59PM |  100 pts</h6>
                  </div>
                </div>
              </div>
              <div>
                <LineControlButtons/>
              </div>
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1 border-green d-flex flex-row justify-content-end align-items-center">
              <div className="me-auto">
                <div className="d-flex flex-row justify-content-start">
                  <div className="d-flex flex-row align-items-center">
                    <BsGripVertical className="me-2 fs-3 "/>
                  </div>
                  <div>
                    <h5><b><a className="link" href="#/Kanbas/Courses/1234/Assignments/123">A3</a></b></h5>
                    <h6> <span className="text-danger">Multiple Modules</span> |  <b>Not available until</b> May 20 at 12:00  |
                    <b> Due</b> December 25 at 11:59PM |  100 pts</h6>
                  </div>
                </div>
              </div>
              <div>
                <LineControlButtons/>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
);}
