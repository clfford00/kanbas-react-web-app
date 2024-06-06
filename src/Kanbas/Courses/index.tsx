import { Routes, Route } from "react-router-dom";
import Home from "./Home/index";
import Modules from "./Modules/index";
import Assignments from "./Assignments/index";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades/index";
import CoursesNavigation from "./Navigation/index";

export default function Courses() {
  return (
    <div id="wd-courses" className="d-flex">
      <div className="d-none d-md-block">
        <CoursesNavigation />
      </div>
      <div className="flex-fill">
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:aid" element={<AssignmentEditor />} />
          <Route path="Grades" element={<Grades />} />
        </Routes>
      </div>
    </div>
  );
}
