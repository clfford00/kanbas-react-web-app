import React from "react";
import Modules from "../Modules";
import CourseStatus from "./Status";
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Home() {
  return (
    <div id="wd-home" className="d-flex">
      <div className="flex-fill me-5">
        <Modules />
      </div>
      <div className="d-none d-xl-block">
        <CourseStatus />
      </div>
    </div>
  );
}
