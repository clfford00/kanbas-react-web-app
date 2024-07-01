import React, { useState } from "react";
import { useParams } from "react-router";
import * as db from "../../Database";
import { BsGripVertical } from "react-icons/bs";
import ModuleControls from "./ModuleControls"; // Ensure this import is correct
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  const { cid } = useParams();
  const [modules, setModules] = useState<any[]>(db.modules);
  const [moduleName, setModuleName] = useState("");

  const addModule = () => {
    const newModule = {
      _id: new Date().getTime().toString(),
      name: moduleName,
      course: cid,
      lessons: []
    };
    setModules([...modules, newModule]);
    setModuleName(""); // Reset the input field
  };

  return (
    <div className="wd-modules">
      <div className="pb-5">
        <ModuleControls setModuleName={setModuleName} moduleName={moduleName} addModule={addModule} />
      </div>
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2">
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
                <ModuleControlButtons />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1 border-green">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
